
import { events } from "../Data/eventData";
import EventCard from "./Events/EventCard";

export default function Events() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          Calendar
        </div>
        <h1 className="font-serif text-5xl font-bold text-[var(--foreground)] mb-4">
          Events
        </h1>
        <p className="text-[var(--muted-foreground)] max-w-xl mx-auto leading-relaxed">
          From annual exhibitions to intimate workshops, here is what FineArts
          has been up to and what is coming next.
        </p>
      </div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
