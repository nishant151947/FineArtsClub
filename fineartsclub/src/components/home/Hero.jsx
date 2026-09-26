import temple_wall from "../../assets/temple.png";
import ourArtist from "../../assets/ourArtist.png";
import img01 from "../../assets/img01.png";
import img02 from "../../assets/img02.png";


export default function Hero({ setPage }) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* for background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* glowing blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--primary)] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-amber-400 opacity-[0.07] blur-3xl pointer-events-none" />

      {/* two column grid  */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* left column--> text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            FineArts Club NIT-H
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] text-[var(--foreground)] mb-6">
            Where Art
            <br />
            <em className="not-italic text-[var(--primary)]">Finds Its</em>
            <br />
            Voice
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-lg mb-10">
            FineArts is the creative community at the heart of our college. We
            bring together painters, illustrators, sculptors, and digital
            artists to create, exhibit, and inspire.
          </p>
          {/* gallery button  */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setPage("gallery")}
              className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded-full font-medium text-sm hover:bg-[var(--muted)] transition-colors"
            >
              View Gallery →
            </button>
          </div>
        </div>

        {/* right column --> Image grid */}
        <div className="relative hidden md:block">
          {/* thse images will be hidden in small screens */}
          <div className="grid grid-cols-2 gap-4">
            {/* two columns of images  */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--muted)]">
                <img
                  src={img01}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-[var(--muted)]">
                <img
                  src={ourArtist}
                  alt="Painting process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              {/* The second column has pt-8 (padding-top) to offset it slightly
                  lower than the first — creating that staggered, masonry-style
                  look rather than a perfectly even grid. */}
              <div className="rounded-2xl overflow-hidden aspect-square bg-[var(--muted)]">
                <img
                  src={temple_wall}
                  alt="Art class"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--muted)]">
                <img
                  src={img02}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-5 py-4 shadow-lg">
            <div className="font-serif text-3xl font-bold text-[var(--primary)]">
              14+
            </div>
            <div className="text-[var(--muted-foreground)] text-sm">
              years running
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
