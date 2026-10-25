import { tagColors } from "../../data/tagColors";

export default function EventCard({ event, index }) {
  // Alternate image side: even cards image-left, odd cards image-right (desktop only)
  const imageOnRight = index % 2 === 1;

  return (
    <article className="group bg-[var(--card)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-all duration-300 grid md:grid-cols-5">
      <div
        className={`md:col-span-2 relative overflow-hidden bg-[var(--muted)] ${
          imageOnRight ? "md:order-last" : ""
        }`}
      >
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
      </div>

      <div className="md:col-span-3 p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              tagColors[event.tag] || ""
            }`}
          >
            {event.tag}
          </span>
        </div>

        <h2 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-3 leading-tight">
          {event.title}
        </h2>

        <p className="text-[var(--muted-foreground)] leading-relaxed text-sm mb-6">
          {event.description}
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-[var(--muted-foreground)]">
          <div className="flex items-center gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
