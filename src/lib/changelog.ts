export type ChangelogEntry = {
  date: string;
  version: string;
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
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
