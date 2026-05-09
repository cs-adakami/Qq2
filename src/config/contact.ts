const DISPLAY_PHONE = '0822122456';
const WA_NUMBER = '6288973187761';
const WA_MESSAGE = 'Hallo admin, saya butuh bantuan?';

export const CONTACT = {
  displayPhone: DISPLAY_PHONE,
  waNumber: WA_NUMBER,
  waMessage: WA_MESSAGE,
  waLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
  telLink: `tel:${WA_NUMBER}`,
  email: 'info@adakami.id',
};
