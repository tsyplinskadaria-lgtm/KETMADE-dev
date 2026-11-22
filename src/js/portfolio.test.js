import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGalleryItems,
  getHtmlLangAttribute,
  getNextLightboxIndex,
  getPrevLightboxIndex,
  getRemainingWorksCount,
  paginateGalleryItems,
  pickText,
  resolveLanguage,
  validateContactForm,
} from './portfolio.js';

const SAMPLE_PIECES = Array.from({ length: 9 }, (_, idx) => ({
  id: `piece-${idx + 1}`,
  category: idx % 3 === 0 ? 'sculptural' : idx % 3 === 1 ? 'tableware' : 'organic',
  title: { ua: `Твір ${idx + 1}`, nl: `Werk ${idx + 1}`, en: `Work ${idx + 1}` },
}));

test('resolveLanguage handles UA/UK, NL, EN and invalid values', () => {
  assert.equal(resolveLanguage('ua'), 'ua');
  assert.equal(resolveLanguage('UK'), 'ua');
  assert.equal(resolveLanguage('nl'), 'nl');
  assert.equal(resolveLanguage('en'), 'en');
  assert.equal(resolveLanguage('de', 'en'), 'en');
  assert.equal(resolveLanguage(null, 'nl'), 'nl');
});

test('getHtmlLangAttribute maps ua to BCP-47 uk', () => {
  assert.equal(getHtmlLangAttribute('ua'), 'uk');
  assert.equal(getHtmlLangAttribute('nl'), 'nl');
  assert.equal(getHtmlLangAttribute('en'), 'en');
});

test('pickText returns localized string with EN fallback', () => {
  const sample = { ua: 'Кераміка', nl: 'Keramiek', en: 'Ceramics' };
  assert.equal(pickText(sample, 'ua'), 'Кераміка');
  assert.equal(pickText(sample, 'nl'), 'Keramiek');
  assert.equal(pickText(sample, 'en'), 'Ceramics');
});

test('filterGalleryItems and paginateGalleryItems work together for large archives', () => {
  assert.equal(filterGalleryItems(SAMPLE_PIECES, 'all').length, 9);
  assert.equal(filterGalleryItems(SAMPLE_PIECES, 'tableware').length, 3);

  const page1 = paginateGalleryItems(SAMPLE_PIECES, 6);
  assert.equal(page1.length, 6);
  assert.equal(getRemainingWorksCount(9, page1.length), 3);

  const expanded = paginateGalleryItems(SAMPLE_PIECES, 12);
  assert.equal(expanded.length, 9);
  assert.equal(getRemainingWorksCount(9, expanded.length), 0);
});

test('lightbox index wrapping works cleanly', () => {
  assert.equal(getNextLightboxIndex(0, 9), 1);
  assert.equal(getNextLightboxIndex(8, 9), 0);
  assert.equal(getPrevLightboxIndex(0, 9), 8);
  assert.equal(getNextLightboxIndex(0, 0), -1);
});

test('validateContactForm enforces required fields and email format', () => {
  const empty = validateContactForm({ name: ' ', email: '', message: '' });
  assert.equal(empty.valid, false);
  assert.equal(empty.errors.name, 'nameRequired');
  assert.equal(empty.errors.email, 'emailRequired');
  assert.equal(empty.errors.message, 'messageRequired');

  const invalid = validateContactForm({
    name: 'Katrin',
    email: 'bad-email',
    message: 'Short',
  });
  assert.equal(invalid.valid, false);
  assert.equal(invalid.errors.email, 'emailInvalid');
  assert.equal(invalid.errors.message, 'messageTooShort');

  const valid = validateContactForm({
    name: 'Olena',
    email: 'olena@ketmade.com',
    message: 'I would like to book the Saturday clay workshop for two people.',
  });
  assert.equal(valid.valid, true);
});
