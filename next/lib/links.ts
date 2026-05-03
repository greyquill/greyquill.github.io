/** External booking link. Booking-flavored CTAs ("Book a discovery call",
 *  "Book a demo", "Book a walkthrough", "Book a call") route here. Other
 *  conversational CTAs ("Talk to us", "Discuss this engagement", "Contact
 *  us") route to /contact. */
export const CALENDLY_URL = 'https://calendly.com/greyquill/30min';

/** Web3Forms access key for the /contact form. Public-safe: it identifies
 *  the destination email (amarnath@greyquill.io) at web3forms.com, not a
 *  secret credential. Inlined here so the static build does not depend on
 *  build-time env vars. */
export const WEB3FORMS_KEY = '07d59bb6-28ca-4df9-8317-4b2c4747e35b';
