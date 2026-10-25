export default function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[var(--card)] rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnails use w_600; swap to a larger Cloudinary width for the popup */}
        <img
          src={item.img.replace("w_600", "w_1200")}
          alt={item.title}
          className="w-full max-h-[70vh] object-contain bg-black/5"
        />
        <div className="p-6">
          <h2 className="font-serif text-2xl font-bold text-[var(--foreground)]">
            {item.title}
          </h2>
          <p className="text-[var(--muted-foreground)] text-sm mt-1">
            by {item.artist}
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
