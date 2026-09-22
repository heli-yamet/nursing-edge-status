export type ChangelogEntry = {
  date: string;
  version: string;
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
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
    date: "2026-09-11",
    version: "0.0.2",
    items: [
      "Admin register and sign-in with email, password, and 8-digit email code",
      "Super Admin is created from the backend Super Admin email; other admins stay pending until approval",
      "Admin accounts and codes stored in MongoDB (admin_users, admin_users_codes)",
    ],
  },
  {
    date: "2026-09-10",
    version: "0.0.1",
    items: [
      "Status site homepage with current service status and changelog",
      "Learner and admin apps are separate sites",
    ],
  },
];

export const SERVICE_STATUS_MESSAGE =
  "The Nursing Edge service is in progress";
