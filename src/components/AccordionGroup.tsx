import type { ReactNode } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionGroup({ items }: { items: AccordionItem[] }) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((item) => (
        <details
          key={item.id}
          open={item.defaultOpen}
          className="group rounded-[16px] border border-[#D9E1E5] bg-white"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-[#163A59] select-none [&::-webkit-details-marker]:hidden">
            <span>{item.title}</span>
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className="h-5 w-5 shrink-0 text-[#0B7F86] transition-transform duration-200 group-open:rotate-180"
            >
              <path
                fill="currentColor"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
              />
            </svg>
          </summary>
          <div className="border-t border-[#D9E1E5] px-6 py-4">{item.children}</div>
        </details>
      ))}
    </div>
  );
}
