export default function GalleryCard({ item, onClick }) {
  return (
    <div
      className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[var(--muted)] cursor-pointer mb-5"
      onClick={onClick}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-serif font-semibold text-white text-base leading-tight">
          {item.title}
        </p>
        <p className="text-white/70 text-xs mt-0.5">by {item.artist}</p>
      </div>
    </div>
  );
}
