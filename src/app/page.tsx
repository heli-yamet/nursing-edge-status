import { CHANGELOG, SERVICE_STATUS_MESSAGE } from "@/lib/changelog";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[760px] px-5 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium tracking-wide text-[#0B7F86]">
        Nursing Edge
      </p>
      <h1 className="mt-2 text-[28px] leading-tight font-semibold text-[#163A59] sm:text-[32px]">
        Service status
      </h1>

      <section
        className="mt-8 rounded-[16px] border border-[#D9E1E5] bg-white p-6"
        aria-labelledby="current-status-heading"
      >
        <h2
          id="current-status-heading"
          className="text-lg font-semibold text-[#163A59]"
        >
          Current status
        </h2>
        <p className="mt-3 text-base leading-7 text-[#24313A]" role="status">
          {SERVICE_STATUS_MESSAGE}
        </p>
      </section>

      <section className="mt-10" aria-labelledby="changelog-heading">
        <h2
          id="changelog-heading"
          className="text-lg font-semibold text-[#163A59]"
        >
          Changelog
        </h2>
        <ol className="mt-4 space-y-6">
          {CHANGELOG.map((entry) => (
            <li
              key={entry.version}
              className="rounded-[16px] border border-[#D9E1E5] bg-white p-6"
            >
              <h3 className="text-base font-semibold text-[#163A59]">
                {entry.date} · {entry.version}
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-7 text-[#24313A]">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
