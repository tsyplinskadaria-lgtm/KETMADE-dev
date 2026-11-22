export const SUPPORTED_LANGUAGES = ['ua', 'nl', 'en'];
export const GALLERY_PAGE_SIZE = 6;

export function resolveLanguage(candidate, fallback = 'en') {
  if (!candidate || typeof candidate !== 'string') return fallback;
  const normalized = candidate.trim().toLowerCase();
  if (normalized === 'ua' || normalized === 'uk') return 'ua';
  if (normalized === 'nl') return 'nl';
  if (normalized === 'en') return 'en';
  return fallback;
}

export function getHtmlLangAttribute(lang) {
  return lang === 'ua' ? 'uk' : lang;
}

export function pickText(localized, lang) {
  if (!localized) return '';
  return localized[lang] ?? localized.en ?? '';
}

export function filterGalleryItems(items, category) {
  if (category === 'all') {
    return [...items];
  }
  return items.filter((item) => item.category === category);
}

export function paginateGalleryItems(items, visibleLimit) {
  if (visibleLimit <= 0) return [];
  return items.slice(0, visibleLimit);
}

export function getRemainingWorksCount(totalItems, visibleCount) {
  return Math.max(0, totalItems - visibleCount);
}

export function getNextLightboxIndex(currentIndex, total) {
  if (total <= 0) return -1;
  return (currentIndex + 1) % total;
}

export function getPrevLightboxIndex(currentIndex, total) {
  if (total <= 0) return -1;
  return (currentIndex - 1 + total) % total;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(input) {
  const errors = {};
  const trimmedName = (input.name || '').trim();
  const trimmedEmail = (input.email || '').trim();
  const trimmedMessage = (input.message || '').trim();

  if (!trimmedName) {
    errors.name = 'nameRequired';
  }

  if (!trimmedEmail) {
    errors.email = 'emailRequired';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'emailInvalid';
  }

  if (!trimmedMessage) {
    errors.message = 'messageRequired';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'messageTooShort';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
