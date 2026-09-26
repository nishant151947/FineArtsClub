import wall from "../../assets/wall.png";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[var(--muted)]">
          <img
            src={wall}
            alt="Gallery opening"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3">
              <p className="text-white text-sm font-medium">
                "Art is to console those who are broken by life."
              </p>
              <p className="text-white/60 text-xs mt-1">— Vincent Van Gogh</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-bold text-[var(--foreground)] mb-6">
            A Space to
            <br />
            <em className="not-italic text-[var(--primary)]">Create Freely</em>
          </h2>
          <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
            <p>
              FineArts Club is a group of students who believed that creative
              expression deserves a dedicated home on campus. Today, we are one
              of the most active student-led organizations at the college.
            </p>
            <p>
              Our club runs weekly workshops, monthly critique sessions, and a
              full annual exhibition calendar. We
            </p>
            <p>
              Whether you are a seasoned artist or picking up a brush for the
              first time, FineArts is your community. We believe art is for
              everyone, and every creative impulse deserves space to grow.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Painting", "Sculpture", "Digital Art", "Illustration"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
