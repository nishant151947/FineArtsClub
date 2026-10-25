import { useState } from "react";
import { galleryImages } from "../Data/galleryData";
import GalleryCard from "./Gallery/GalleryCard";
import Lightbox from "./Gallery/Lightbox";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          Our Work
        </div>
        <h1 className="font-serif text-5xl font-bold text-[var(--foreground)] mb-4">
          Gallery
        </h1>
        <p className="text-[var(--muted-foreground)] max-w-xl mx-auto leading-relaxed">
          A selection of works created by FineArts Club members across
          exhibitions, workshops, and independent projects.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
        {galleryImages.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
