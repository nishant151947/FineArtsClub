import Heads from "./Team/Heads";
import CoConveners from "./Team/CoConveners";
import Coordinators from "./Team/Coordinators";
import Executives from "./Team/Executives";

export default function Team() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          The People
        </div>
        <h1 className="font-serif text-5xl font-bold text-[var(--foreground)] mb-4">
          Meet the Team
        </h1>
        <p className="text-[var(--muted-foreground)] max-w-xl mx-auto leading-relaxed">
          FineArts is run by a passionate group of student artists. Each member
          brings a distinct creative vision and keeps the club thriving
          year-round.
        </p>
      </div>

      <div className="space-y-16">
        <Heads />
        <CoConveners />
        <Coordinators />
        <Executives />
      </div>
    </div>
  );
}
