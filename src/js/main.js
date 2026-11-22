import { CMS_CONTENT } from './content.js';
import {
  filterGalleryItems,
  GALLERY_PAGE_SIZE,
  getHtmlLangAttribute,
  getNextLightboxIndex,
  getPrevLightboxIndex,
  getRemainingWorksCount,
  paginateGalleryItems,
  pickText,
  resolveLanguage,
  validateContactForm,
} from './portfolio.js';

const STORAGE_KEY = 'ketmade_lang';
const CATEGORIES = ['all', 'sculptural', 'tableware', 'organic'];
const TOPICS = ['workshop-adult', 'workshop-kids', 'general', 'commission'];

const state = {
  lang: readInitialLanguage(),
  activeCategory: 'all',
  viewMode: 'grid',
  visibleLimit: GALLERY_PAGE_SIZE,
  activeStageIdx: 0,
  hoveredIndexId: null,
  lightboxPieceId: null,
  selectedTopic: 'workshop-adult',
  formErrors: {},
  formSubmitted: false,
};

function readInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  if (queryLang) return resolveLanguage(queryLang, 'en');
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return resolveLanguage(saved, 'en');
  } catch {
    // Ignore storage access errors
  }
  return 'en';
}

function setLanguage(nextLang) {
  state.lang = resolveLanguage(nextLang, 'en');
  document.documentElement.lang = getHtmlLangAttribute(state.lang);
  try {
    window.localStorage.setItem(STORAGE_KEY, state.lang);
  } catch {
    // Ignore storage access errors
  }
  renderAll();
}

function getFilteredWorks() {
  return filterGalleryItems(CMS_CONTENT.galleryItems, state.activeCategory);
}

function scrollToContact(topic, prefill = '') {
  state.selectedTopic = topic;
  const topicSelect = document.getElementById('contact-topic');
  if (topicSelect) topicSelect.value = topic;

  if (prefill) {
    state.formSubmitted = false;
    const msgInput = document.getElementById('contact-message');
    if (msgInput) msgInput.value = prefill;
    renderContactState();
  }

  const target = document.getElementById('contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   Rendering Sections
   ========================================================================== */

function renderStaticTranslations() {
  const { lang } = state;
  document.documentElement.lang = getHtmlLangAttribute(lang);

  // Sync language switcher active buttons
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const code = btn.getAttribute('data-lang-btn');
    btn.setAttribute('aria-pressed', String(code === lang));
  });

  // Nav translations
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n');
    if (!path) return;
    const [group, key] = path.split('.');
    const localized = CMS_CONTENT.ui[group]?.[key];
    if (localized) {
      el.textContent = pickText(localized, lang);
    }
  });

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle) {
    const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute(
      'aria-label',
      pickText(
        isOpen ? CMS_CONTENT.ui.nav.closeMenu : CMS_CONTENT.ui.nav.openMenu,
        lang
      )
    );
  }

  // Hero
  const { hero } = CMS_CONTENT;
  document.getElementById('hero-eyebrow').textContent = pickText(hero.eyebrow, lang);
  document.getElementById('hero-location').textContent = pickText(hero.studioLocation, lang);
  document.getElementById('hero-discipline').textContent = pickText(hero.disciplineNote, lang);
  document.getElementById('hero-subcaption').textContent = pickText(hero.subcaption, lang);
  document.getElementById('hero-slogan').textContent = pickText(hero.slogan, lang);
  document.getElementById('hero-cta-label').textContent = pickText(hero.ctaLabel, lang);
  document.getElementById('hero-primary-img').alt = pickText(hero.primaryImage.alt, lang);
  document.getElementById('hero-secondary-img').alt = pickText(hero.secondaryImage.alt, lang);

  // Marquee
  const marqueeTrack = document.getElementById('hero-marquee-track');
  marqueeTrack.innerHTML = [0, 1]
    .map(
      () => `
      <div class="marquee-group">
        ${hero.marqueeItems
          .map(
            (item) => `
          <span class="marquee-word">${pickText(item, lang)}</span>
          <span class="marquee-diamond">◆</span>
        `
          )
          .join('')}
      </div>
    `
    )
    .join('');

  // Footer
  const { footer } = CMS_CONTENT.ui;
  const { contact } = CMS_CONTENT;
  document.getElementById('footer-tagline').textContent = pickText(footer.tagline, lang);
  document.getElementById('footer-nav-heading').textContent = pickText(footer.navigationHeading, lang);
  document.getElementById('footer-studio-heading').textContent = pickText(footer.studioHeading, lang);
  document.getElementById('footer-lang-heading').textContent = pickText(footer.languageHeading, lang);
  document.getElementById('footer-copyright').textContent = pickText(footer.copyright, lang);
  document.getElementById('footer-address').textContent = contact.studioAddress;

  const footerSocials = document.getElementById('footer-socials');
  footerSocials.innerHTML = contact.socials
    .map(
      (s) =>
        `<a href="${s.href}" target="_blank" rel="noreferrer">${s.name}</a>`
    )
    .join('');
}

function renderAboutSection() {
  const { lang } = state;
  const { about } = CMS_CONTENT;

  document.getElementById('about-portrait-img').alt = pickText(about.portrait.alt, lang);
  document.getElementById('about-section-title').textContent = pickText(about.sectionTitle, lang);
  document.getElementById('about-heading').textContent = pickText(about.leadStatement, lang);
  document.getElementById('about-philosophy-title').textContent = pickText(about.philosophyTitle, lang);
  document.getElementById('about-philosophy-text').textContent = pickText(about.philosophyText, lang);

  const bioEl = document.getElementById('about-paragraphs');
  bioEl.innerHTML = about.biography
    .map((p) => `<p>${pickText(p, lang)}</p>`)
    .join('');

  const tabsEl = document.getElementById('craft-tabs');
  tabsEl.innerHTML = about.craftDetails
    .map((stage, idx) => {
      const selected = idx === state.activeStageIdx;
      return `
        <button
          type="button"
          class="craft-tab"
          role="tab"
          aria-selected="${selected}"
          data-stage-idx="${idx}"
        >
          <span class="craft-tab-step">${stage.stepNumber}</span>
          <span class="craft-tab-label">${pickText(stage.label, lang)}</span>
        </button>
      `;
    })
    .join('');

  const activeStage = about.craftDetails[state.activeStageIdx] || about.craftDetails[0];
  const panelEl = document.getElementById('craft-panel');
  panelEl.innerHTML = `
    <h4>${pickText(activeStage.title, lang)}</h4>
    <p>${pickText(activeStage.value, lang)}</p>
  `;
}

function renderGallerySection() {
  const { lang, activeCategory, viewMode, visibleLimit } = state;
  const gStrings = CMS_CONTENT.ui.gallery;
  const filtered = getFilteredWorks();
  const paginated = paginateGalleryItems(filtered, visibleLimit);
  const remaining = getRemainingWorksCount(filtered.length, paginated.length);

  document.getElementById('gallery-showing-label').textContent = pickText(gStrings.showingLabel, lang);
  const shownNum = viewMode === 'index' ? filtered.length : paginated.length;
  document.getElementById('gallery-showing-count').textContent = `${String(shownNum).padStart(2, '0')} / ${String(filtered.length).padStart(2, '0')}`;

  document.getElementById('gallery-heading').textContent = pickText(gStrings.sectionTitle, lang);
  document.getElementById('gallery-intro').textContent = pickText(gStrings.intro, lang);
  document.getElementById('view-grid-label').textContent = pickText(gStrings.viewGrid, lang);
  document.getElementById('view-index-label').textContent = pickText(gStrings.viewIndex, lang);

  const gridBtn = document.getElementById('view-grid-btn');
  const indexBtn = document.getElementById('view-index-btn');
  gridBtn.setAttribute('aria-pressed', String(viewMode === 'grid'));
  indexBtn.setAttribute('aria-pressed', String(viewMode === 'index'));

  // Filter tabs
  const filterBar = document.getElementById('gallery-filter-bar');
  filterBar.innerHTML = CATEGORIES.map((cat) => {
    const count = filterGalleryItems(CMS_CONTENT.galleryItems, cat).length;
    const isSelected = activeCategory === cat;
    return `
      <button
        type="button"
        class="filter-tab"
        role="tab"
        aria-selected="${isSelected}"
        data-category="${cat}"
      >
        <span>${pickText(gStrings.filters[cat], lang)}</span>
        <span class="filter-count tabular-nums">${count}</span>
      </button>
    `;
  }).join('');

  const gridContainer = document.getElementById('gallery-grid-container');
  const paginationEl = document.getElementById('gallery-pagination');
  const indexContainer = document.getElementById('gallery-index-container');

  if (viewMode === 'grid') {
    gridContainer.hidden = false;
    indexContainer.hidden = true;

    gridContainer.classList.remove('gallery-grid--single', 'gallery-grid--double');
    if (paginated.length === 1) gridContainer.classList.add('gallery-grid--single');
    if (paginated.length === 2) gridContainer.classList.add('gallery-grid--double');

    if (paginated.length === 0) {
      gridContainer.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 48px 0;">${pickText(gStrings.emptyMessage, lang)}</p>`;
    } else {
      gridContainer.innerHTML = paginated
        .map((piece, idx) => {
          const aspectClass =
            piece.gridVariant === 'tall'
              ? 'aspect-4-5'
              : piece.gridVariant === 'square'
              ? 'aspect-1-1'
              : 'aspect-4-3';
          const title = pickText(piece.title, lang);
          return `
            <article class="gallery-card" style="animation-delay: ${Math.min(idx * 50, 250)}ms">
              <button
                type="button"
                class="gallery-card-btn"
                data-open-piece="${piece.id}"
                aria-label="${title} — ${pickText(gStrings.viewPiece, lang)}"
              >
                <div class="gallery-card-media ${aspectClass}">
                  <img
                    src="${piece.imageSrc}"
                    alt="${pickText(piece.imageAlt, lang)}"
                    loading="lazy"
                    decoding="async"
                    referrerpolicy="no-referrer"
                  />
                  <span class="gallery-card-num tabular-nums" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div class="gallery-card-footer">
                  <div>
                    <div class="gallery-card-meta">
                      <span class="gallery-card-cat">${pickText(gStrings.filters[piece.category], lang)}</span>
                      <span aria-hidden="true">·</span>
                      <span class="tabular-nums">${piece.year}</span>
                      <span aria-hidden="true">·</span>
                      <span class="tabular-nums">${piece.dimensionsCm}</span>
                    </div>
                    <h3 class="gallery-card-title">${title}</h3>
                  </div>
                  <span class="gallery-card-arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </span>
                </div>
              </button>
            </article>
          `;
        })
        .join('');
    }

    if (filtered.length > GALLERY_PAGE_SIZE) {
      paginationEl.hidden = false;
      if (remaining > 0) {
        paginationEl.innerHTML = `
          <button type="button" id="gallery-load-more-btn" class="btn-outline tabular-nums">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>${pickText(gStrings.showMore, lang)} (${remaining})</span>
          </button>
        `;
      } else {
        paginationEl.innerHTML = `
          <button type="button" id="gallery-show-less-btn" class="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>${pickText(gStrings.showLess, lang)}</span>
          </button>
        `;
      }
    } else {
      paginationEl.hidden = true;
    }
  } else {
    gridContainer.hidden = true;
    paginationEl.hidden = true;
    indexContainer.hidden = false;

    const previewPiece =
      filtered.find((p) => p.id === state.hoveredIndexId) || filtered[0] || null;

    indexContainer.innerHTML = `
      <div class="gallery-index-list-col">
        <div class="index-header-row">
          <div class="col-work">${pickText(gStrings.indexColumns.work, lang)}</div>
          <div class="col-cat">${pickText(gStrings.indexColumns.category, lang)}</div>
          <div class="col-dim">${pickText(gStrings.indexColumns.dimensions, lang)}</div>
          <div class="col-year">${pickText(gStrings.indexColumns.year, lang)}</div>
        </div>
        <div>
          ${filtered
            .map(
              (piece, idx) => `
              <button
                type="button"
                class="index-row"
                data-open-piece="${piece.id}"
                data-hover-piece="${piece.id}"
              >
                <div class="index-row-title-wrap">
                  <span class="index-row-num tabular-nums">${String(idx + 1).padStart(2, '0')}</span>
                  <span class="index-row-title">${pickText(piece.title, lang)}</span>
                </div>
                <div class="index-row-cat">${pickText(gStrings.filters[piece.category], lang)}</div>
                <div class="index-row-dim tabular-nums">${piece.dimensionsCm}</div>
                <div class="index-row-year tabular-nums">
                  <span>${piece.year}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </button>
            `
            )
            .join('')}
        </div>
      </div>

      <div class="index-preview-col" id="index-preview-col">
        ${previewPiece ? renderIndexPreviewHTML(previewPiece) : ''}
      </div>
    `;
  }
}

function renderIndexPreviewHTML(piece) {
  const { lang } = state;
  const gStrings = CMS_CONTENT.ui.gallery;
  return `
    <div class="index-preview-card">
      <div class="media-frame media-frame--light aspect-4-5">
        <img src="${piece.imageSrc}" alt="${pickText(piece.imageAlt, lang)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
      </div>
      <div>
        <p class="index-preview-cat">${pickText(gStrings.filters[piece.category], lang)}</p>
        <p class="index-preview-title">${pickText(piece.title, lang)}</p>
        <p class="index-preview-clay">${pickText(piece.clayAndGlaze, lang)}</p>
      </div>
    </div>
  `;
}

function renderWorkshopsSection() {
  const { lang } = state;
  const { workshops } = CMS_CONTENT;

  document.getElementById('workshops-heading').textContent = pickText(workshops.sectionTitle, lang);
  document.getElementById('workshops-intro').textContent = pickText(workshops.intro, lang);
  document.getElementById('workshops-process-img').alt = pickText(workshops.processImage.alt, lang);

  const cardsEl = document.getElementById('workshops-cards');
  cardsEl.innerHTML = workshops.formats
    .map((format) => {
      const isKids = format.id === 'kids';
      return `
        <article
          class="workshop-card ${isKids ? 'workshop-card--kids' : 'workshop-card--adult'}"
          data-testid="workshop-card-${format.id}"
        >
          <div class="workshop-card-top">
            <div>
              <p class="workshop-kicker">${pickText(format.kicker, lang)}</p>
              <h3 class="workshop-title">${pickText(format.title, lang)}</h3>
            </div>
            <p class="workshop-summary">${pickText(format.summary, lang)}</p>
            <ul class="workshop-list">
              ${format.highlights
                .map(
                  (item) => `
                  <li>
                    <span class="workshop-dash" aria-hidden="true">—</span>
                    <span>${pickText(item, lang)}</span>
                  </li>
                `
                )
                .join('')}
            </ul>
          </div>

          <div class="workshop-card-bottom">
            <div class="workshop-meta tabular-nums">
              <p class="workshop-meta-strong">${pickText(format.groupSize, lang)}</p>
              <p>${pickText(format.scheduleNote, lang)}</p>
            </div>
            <button
              type="button"
              class="${isKids ? 'workshop-btn-kids' : 'workshop-btn-adult'}"
              data-book-topic="${format.inquiryTopic}"
            >
              <span>${pickText(format.ctaLabel, lang)}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderContactSection() {
  const { lang } = state;
  const { contact } = CMS_CONTENT;
  const formStrings = CMS_CONTENT.ui.contactForm;

  document.getElementById('contact-heading').textContent = pickText(contact.sectionTitle, lang);
  document.getElementById('contact-intro').textContent = pickText(contact.intro, lang);
  document.getElementById('contact-city').textContent = pickText(contact.studioCity, lang);
  document.getElementById('contact-address').textContent = contact.studioAddress;
  document.getElementById('contact-hours').textContent = pickText(contact.studioHours, lang);

  document.getElementById('contact-socials').innerHTML = contact.socials
    .map(
      (s) => `
      <a href="${s.href}" target="_blank" rel="noreferrer" class="contact-social-link">
        <span>${s.name}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    `
    )
    .join('');

  document.getElementById('label-name').textContent = pickText(formStrings.nameLabel, lang);
  document.getElementById('contact-name').placeholder = pickText(formStrings.namePlaceholder, lang);
  document.getElementById('label-email').textContent = pickText(formStrings.emailLabel, lang);
  document.getElementById('contact-email').placeholder = pickText(formStrings.emailPlaceholder, lang);
  document.getElementById('label-topic').textContent = pickText(formStrings.topicLabel, lang);
  document.getElementById('label-message').textContent = pickText(formStrings.messageLabel, lang);
  document.getElementById('contact-message').placeholder = pickText(formStrings.messagePlaceholder, lang);
  document.getElementById('contact-submit-btn').textContent = pickText(formStrings.submitButton, lang);

  document.getElementById('success-title').textContent = pickText(formStrings.successTitle, lang);
  document.getElementById('success-body').textContent = pickText(formStrings.successBody, lang);
  document.getElementById('contact-reset-btn').textContent = pickText(formStrings.sendAnother, lang);

  const topicSelect = document.getElementById('contact-topic');
  topicSelect.innerHTML = TOPICS.map(
    (key) => `<option value="${key}">${pickText(formStrings.topics[key], lang)}</option>`
  ).join('');
  topicSelect.value = state.selectedTopic;

  renderContactState();
}

function renderContactState() {
  const { lang, formErrors, formSubmitted } = state;
  const formStrings = CMS_CONTENT.ui.contactForm;

  const formEl = document.getElementById('contact-form');
  const successEl = document.getElementById('contact-success');

  formEl.hidden = formSubmitted;
  successEl.hidden = !formSubmitted;

  ['name', 'email', 'message'].forEach((field) => {
    const input = document.getElementById(`contact-${field}`);
    const errorEl = document.getElementById(`contact-${field}-error`);
    const errorCode = formErrors[field];
    if (errorCode) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', `contact-${field}-error`);
      errorEl.textContent = pickText(formStrings.errors[errorCode], lang);
      errorEl.hidden = false;
    } else {
      input.setAttribute('aria-invalid', 'false');
      input.removeAttribute('aria-describedby');
      errorEl.hidden = true;
    }
  });
}

function renderLightbox() {
  const modal = document.getElementById('lightbox');
  const filtered = getFilteredWorks();
  const idx = filtered.findIndex((p) => p.id === state.lightboxPieceId);

  if (idx < 0) {
    modal.hidden = true;
    document.body.style.overflow = '';
    return;
  }

  const piece = filtered[idx];
  const { lang } = state;
  const gStrings = CMS_CONTENT.ui.gallery;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';

  document.getElementById('lightbox-counter').textContent = `${String(idx + 1).padStart(2, '0')} / ${String(filtered.length).padStart(2, '0')}`;
  document.getElementById('lightbox-close-btn').setAttribute('aria-label', pickText(gStrings.closeLightbox, lang));
  document.getElementById('lightbox-prev-btn').setAttribute('aria-label', pickText(gStrings.previousPiece, lang));
  document.getElementById('lightbox-next-btn').setAttribute('aria-label', pickText(gStrings.nextPiece, lang));

  const imgEl = document.getElementById('lightbox-img');
  imgEl.src = piece.imageSrc;
  imgEl.alt = pickText(piece.imageAlt, lang);

  document.getElementById('lightbox-category').textContent = pickText(gStrings.filters[piece.category], lang);
  document.getElementById('lightbox-piece-title').textContent = pickText(piece.title, lang);
  document.getElementById('lightbox-description').textContent = pickText(piece.description, lang);

  document.getElementById('lightbox-material-label').textContent = pickText(gStrings.materialLabel, lang);
  document.getElementById('lightbox-material-value').textContent = pickText(piece.clayAndGlaze, lang);
  document.getElementById('lightbox-dimensions-label').textContent = pickText(gStrings.dimensionsLabel, lang);
  document.getElementById('lightbox-dimensions-value').textContent = piece.dimensionsCm;
  document.getElementById('lightbox-year-label').textContent = pickText(gStrings.yearLabel, lang);
  document.getElementById('lightbox-year-value').textContent = piece.year;

  document.getElementById('lightbox-inquire-btn').textContent = pickText(gStrings.inquirePiece, lang);
  document.getElementById('lightbox-nav-arrows').hidden = filtered.length <= 1;
}

function renderAll() {
  renderStaticTranslations();
  renderAboutSection();
  renderGallerySection();
  renderWorkshopsSection();
  renderContactSection();
  renderLightbox();
}

/* ==========================================================================
   Scroll Reveal & Hero Parallax
   ========================================================================== */

function setupScrollReveal() {
  const revealNodes = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    revealNodes.forEach((n) => n.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  revealNodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      node.classList.add('is-visible');
    } else {
      observer.observe(node);
    }
  });
}

function setupHeroParallax() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  const hero = document.getElementById('top');
  const primary = document.getElementById('hero-parallax-primary');
  const secondary = document.getElementById('hero-parallax-secondary');
  const seal = document.getElementById('hero-seal');
  if (!hero || !primary || !secondary || !seal) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const rect = hero.getBoundingClientRect();
    const total = Math.max(hero.offsetHeight, 1);
    const progress = Math.min(Math.max(-rect.top / total, 0), 1);

    primary.style.transform = `translate3d(0, ${progress * 34}px, 0)`;
    secondary.style.transform = `translate3d(0, ${progress * -44}px, 0)`;
    seal.style.transform = `rotate(${progress * 90}deg)`;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
}

/* ==========================================================================
   Event Wiring
   ========================================================================== */

function setupEvents() {
  // Language switchers
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang-btn]');
    if (langBtn) {
      setLanguage(langBtn.getAttribute('data-lang-btn'));
      return;
    }

    // Craft Explorer tabs
    const stageTab = e.target.closest('[data-stage-idx]');
    if (stageTab) {
      state.activeStageIdx = Number(stageTab.getAttribute('data-stage-idx')) || 0;
      renderAboutSection();
      return;
    }

    // Gallery category tabs
    const catTab = e.target.closest('[data-category]');
    if (catTab) {
      state.activeCategory = catTab.getAttribute('data-category') || 'all';
      state.visibleLimit = GALLERY_PAGE_SIZE;
      state.lightboxPieceId = null;
      renderGallerySection();
      return;
    }

    // Open Lightbox from Exhibition card or Index row
    const openTrigger = e.target.closest('[data-open-piece]');
    if (openTrigger) {
      state.lightboxPieceId = openTrigger.getAttribute('data-open-piece');
      renderLightbox();
      return;
    }

    // Load more / Show fewer
    if (e.target.closest('#gallery-load-more-btn')) {
      state.visibleLimit += GALLERY_PAGE_SIZE;
      renderGallerySection();
      return;
    }
    if (e.target.closest('#gallery-show-less-btn')) {
      state.visibleLimit = GALLERY_PAGE_SIZE;
      renderGallerySection();
      return;
    }

    // Workshop booking buttons
    const workshopBtn = e.target.closest('[data-book-topic]');
    if (workshopBtn) {
      const topic = workshopBtn.getAttribute('data-book-topic') || 'workshop-adult';
      scrollToContact(topic);
      return;
    }
  });

  // Hover/focus live preview inside Index view
  const indexContainer = document.getElementById('gallery-index-container');
  indexContainer.addEventListener('mouseover', (e) => {
    const row = e.target.closest('[data-hover-piece]');
    if (!row) return;
    const pieceId = row.getAttribute('data-hover-piece');
    if (pieceId && pieceId !== state.hoveredIndexId) {
      state.hoveredIndexId = pieceId;
      const previewPiece = getFilteredWorks().find((p) => p.id === pieceId);
      const previewCol = document.getElementById('index-preview-col');
      if (previewPiece && previewCol) {
        previewCol.innerHTML = renderIndexPreviewHTML(previewPiece);
      }
    }
  });

  // View mode switcher
  document.getElementById('view-grid-btn').addEventListener('click', () => {
    state.viewMode = 'grid';
    renderGallerySection();
  });

  document.getElementById('view-index-btn').addEventListener('click', () => {
    state.viewMode = 'index';
    renderGallerySection();
  });

  // Hero & Header buttons
  document.getElementById('hero-explore-btn').addEventListener('click', () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('header-book-btn').addEventListener('click', () => {
    scrollToContact('workshop-adult');
  });

  // Mobile drawer toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-navigation-drawer');
  const iconOpen = document.getElementById('mobile-icon-open');
  const iconClose = document.getElementById('mobile-icon-close');

  const setMobileDrawer = (open) => {
    mobileDrawer.hidden = !open;
    mobileToggle.setAttribute('aria-expanded', String(open));
    iconOpen.hidden = open;
    iconClose.hidden = !open;
    mobileToggle.setAttribute(
      'aria-label',
      pickText(
        open ? CMS_CONTENT.ui.nav.closeMenu : CMS_CONTENT.ui.nav.openMenu,
        state.lang
      )
    );
  };

  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
    setMobileDrawer(!isOpen);
  });

  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      setMobileDrawer(false);
      if (href) {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.getElementById('mobile-book-btn').addEventListener('click', () => {
    setMobileDrawer(false);
    scrollToContact('workshop-adult');
  });

  // Lightbox controls
  const lightboxEl = document.getElementById('lightbox');
  lightboxEl.addEventListener('click', (e) => {
    if (e.target === lightboxEl) {
      state.lightboxPieceId = null;
      renderLightbox();
    }
  });

  document.getElementById('lightbox-close-btn').addEventListener('click', () => {
    state.lightboxPieceId = null;
    renderLightbox();
  });

  document.getElementById('lightbox-prev-btn').addEventListener('click', () => {
    const filtered = getFilteredWorks();
    const idx = filtered.findIndex((p) => p.id === state.lightboxPieceId);
    if (idx < 0) return;
    const prevIdx = getPrevLightboxIndex(idx, filtered.length);
    if (prevIdx >= 0) {
      state.lightboxPieceId = filtered[prevIdx].id;
      renderLightbox();
    }
  });

  document.getElementById('lightbox-next-btn').addEventListener('click', () => {
    const filtered = getFilteredWorks();
    const idx = filtered.findIndex((p) => p.id === state.lightboxPieceId);
    if (idx < 0) return;
    const nextIdx = getNextLightboxIndex(idx, filtered.length);
    if (nextIdx >= 0) {
      state.lightboxPieceId = filtered[nextIdx].id;
      renderLightbox();
    }
  });

  document.getElementById('lightbox-inquire-btn').addEventListener('click', () => {
    const filtered = getFilteredWorks();
    const piece = filtered.find((p) => p.id === state.lightboxPieceId);
    if (!piece) return;
    const title = pickText(piece.title, state.lang);
    state.lightboxPieceId = null;
    renderLightbox();

    const prefill =
      state.lang === 'ua'
        ? `Вітаю! Цікавить робота «${title}». Підкажіть, будь ласка, щодо наявності та деталей.`
        : state.lang === 'nl'
        ? `Hallo Katrin, ik ben geïnteresseerd in het werk "${title}". Is dit stuk nog beschikbaar?`
        : `Hello Katrin, I would love to inquire about availability and details for "${title}".`;

    scrollToContact('general', prefill);
  });

  // Global keyboard shortcuts (Escape & Lightbox arrows)
  window.addEventListener('keydown', (e) => {
    if (!mobileDrawer.hidden && e.key === 'Escape') {
      setMobileDrawer(false);
    }

    if (!state.lightboxPieceId) return;
    const filtered = getFilteredWorks();
    const idx = filtered.findIndex((p) => p.id === state.lightboxPieceId);
    if (idx < 0) return;

    if (e.key === 'Escape') {
      state.lightboxPieceId = null;
      renderLightbox();
    } else if (e.key === 'ArrowRight') {
      const nextIdx = getNextLightboxIndex(idx, filtered.length);
      state.lightboxPieceId = filtered[nextIdx].id;
      renderLightbox();
    } else if (e.key === 'ArrowLeft') {
      const prevIdx = getPrevLightboxIndex(idx, filtered.length);
      state.lightboxPieceId = filtered[prevIdx].id;
      renderLightbox();
    }
  });

  // Contact form
  const formEl = document.getElementById('contact-form');
  const topicEl = document.getElementById('contact-topic');

  topicEl.addEventListener('change', (e) => {
    state.selectedTopic = e.target.value;
  });

  ['name', 'email', 'message'].forEach((field) => {
    document.getElementById(`contact-${field}`).addEventListener('input', () => {
      if (state.formErrors[field]) {
        delete state.formErrors[field];
        renderContactState();
      }
    });
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const validation = validateContactForm({
      name,
      email,
      topic: state.selectedTopic,
      message,
    });

    if (!validation.valid) {
      state.formErrors = validation.errors;
      renderContactState();
      return;
    }

    state.formErrors = {};
    state.formSubmitted = true;
    renderContactState();
  });

  document.getElementById('contact-reset-btn').addEventListener('click', () => {
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
    state.formErrors = {};
    state.formSubmitted = false;
    renderContactState();
  });
}

// Initialize Application
renderAll();
setupEvents();
setupScrollReveal();
setupHeroParallax();
