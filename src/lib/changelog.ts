export type ChangelogEntry = {
  date: string;
  version: string;
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-10-26",
    version: "0.0.16",
    items: [
      "Content Imports no longer depends on exact workbook file names. Split or renamed workbooks get the right role",
      "A valid AP_ITEMS sheet marks physiology questions. Otherwise \"Sibling\" in the file name marks sibling questions, and any other workbook is clinical core",
      "The import result shows the role used and any warning. Sibling and physiology questions stay out of Practice, and nothing is published or approved",
    ],
  },
  {
    date: "2026-10-16",
    version: "0.0.15",
    items: [
      "Practice leaves out sibling and physiology versions. A published question with no role stays eligible, and the Calibration 35 stay reserved",
      "Content Imports has a Links tab. Approve or Ban records the admin, that exact revision, and the time",
      "Imported workbook approvals stay null. Review still shows the original question",
    ],
  },
  {
    date: "2026-10-15",
    version: "0.0.14",
    items: [
      "Physiology workbook: 450 questions stage unpublished with role AP reinforcement",
      "450 mechanisms, 450 support links, and 5 variant groups are stored; support approval stays null",
      "A physiology source-system name resolves through its topic binding. The five clinical workbooks keep their previous import path",
    ],
  },
  {
    date: "2026-10-14",
    version: "0.0.13",
    items: [
      "Clinical workbooks stage question content and store maps, directed links, topics, teaching, and evidence",
      "2,004 successor clinical versions stay staged as clinical core; 500 siblings stay staged and reserved from Practice",
      "Published earlier versions stay published. Approvals stay null. A content failure does not remove a sound map",
    ],
  },
  {
    date: "2026-10-13",
    version: "0.0.12",
    items: [
      "Relationship collections and indexes for registries, maps, directed links, teaching, evidence, exposure, and roles",
      "No question rows are rewritten, and nothing is published or approved",
    ],
  },
  {
    date: "2026-10-13",
    version: "0.0.11",
    items: [
      "Admin Content Imports: delete selected staged versions that have no attempts and are not on the Calibration set",
      "A published or attempted version stays in the bank; one rejected id deletes nothing",
    ],
  },
  {
    date: "2026-09-28",
    version: "0.0.10",
    items: [
      "Admin can save a Product Owner Calibration set of exactly 35 imported question versions",
      "Ordinary Practice eligibility excludes that Calibration set; the app does not guess the 35 from IDs",
      "Upload as Calibration or Set selected as Calibration; a count other than 35 is rejected",
    ],
  },
  {
    date: "2026-09-28",
    version: "0.0.9",
    items: [
      "Admin Content Imports: pause selected published versions so they leave the eligible set",
      "A paused version stays published and is not eligible until it is active again",
      "Pause is fail-closed and audited; one rejected id pauses nothing",
    ],
  },
  {
    date: "2026-09-28",
    version: "0.0.8",
    items: [
      "Admin Content Imports shows an eligibility summary: imported, published, MVP-eligible, unavailable or invalid, and unsupported interaction type",
      "The launch gate of at least 2,000 eligible questions is a report only and is not hard-coded into selection",
      "Only published, active, valid, complete MCQ or SATA versions are MVP-eligible; a later session must use that same server list",
    ],
  },
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
