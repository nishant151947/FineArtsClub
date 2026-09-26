import { heads } from "../../Data/teamData";
import TeamCard from "./TeamCard";

export default function Heads() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-serif text-xl font-semibold text-[var(--foreground)]">
          Heads
        </h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {heads.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
