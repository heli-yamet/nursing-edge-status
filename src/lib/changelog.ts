export type ChangelogEntry = {
  date: string;
  version: string;
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-09-25",
    version: "0.0.7",
    items: [
      "Admin Manual access: grant Nursing Edge access to an email that has not paid; no invitation is sent",
      "A new learner receives a verification code only when that email is already paid or manually granted",
      "After verification: Terms and Privacy, one-time orientation, then Home. Practice, Review, and Progress do not open questions",
      "Admin Content Imports: publish selected staged versions; learners still do not see questions",
    ],
  },
  {
    date: "2026-09-24",
    version: "0.0.6",
    items: [
      "Learner register and sign-in with first name, email, password, and an 8-digit email code",
      "A verified email that matches an unclaimed purchase links that subscription to the account",
      "The account page shows whether access is active",
    ],
  },
  {
    date: "2026-09-23",
    version: "0.0.5",
    items: [
      "A signed Shopify payment creates one unclaimed entitlement",
      "The buyer email is stored only as a hint. No learner account is created, and no card data is stored",
    ],
  },
  {
    date: "2026-09-22",
    version: "0.0.4",
    items: [
      "Checkout stays on Shopify. The app holds empty slots for the store and webhook secret and does not invent product or plan IDs",
      "No question publish",
    ],
  },
  {
    date: "2026-09-21",
    version: "0.0.3",
    items: [
      "Admin Content Imports: upload a C2 workbook; each row is validated and staged, not published",
      "Import page lists already-imported question versions for any signed-in admin after refresh or a later sign-in",
      "Prior batches are collapsed by default and expand to show batch pass/fail counts",
      "Learner content, import batches, and import lines stored in MongoDB; production reuses one database connection",
    ],
  },
  {
    date: "2026-09-18",
    version: "0.0.2",
    items: [
      "Admin register and sign-in with email, password, and 8-digit email code",
      "Super Admin is created from the backend Super Admin email; other admins stay pending until approval",
      "Admin accounts and codes stored in MongoDB (admin_users, admin_users_codes)",
    ],
  },
  {
    date: "2026-09-17",
    version: "0.0.1",
    items: [
      "Status site homepage with current service status and changelog",
      "Learner and admin apps are separate sites",
    ],
  },
];

export const SERVICE_STATUS_MESSAGE =
  "The Nursing Edge service is in progress";
