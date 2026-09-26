export default function TeamCard({ member }) {
  return (
    <div className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-[var(--muted)] overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif font-semibold text-[var(--foreground)] text-base leading-tight">
          {member.name}
        </h3>
        <p className="text-[var(--primary)] text-xs font-medium mt-0.5">
          {member.role}
        </p>
        {/* <p className="text-[var(--muted-foreground)] text-xs mt-1">
          {member.dept}
        </p> */}
      </div>
    </div>
  );
}
