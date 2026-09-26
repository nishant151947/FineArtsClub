import About from "./home/About"
import Hero from "./home/Hero"
import Footer from "./home/Footer"

export default function Home({setPage}){
  return(
    <div>
       <Hero/>
       <About/>
       <Footer/>
    </div>
  )
}


// import logo from "../assets/logo.png";
// import wall from "../assets/wall.png";
// import temple_wall from "../assets/temple.png";
// import ourArtist from "../assets/ourArtist.png";

// import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

// const socialLinks = [
//   {
//     icon: FaInstagram,
//     url: "https://www.instagram.com/fineartsnith/",
//     label: "Instagram",
//   },

//   {
//     icon: FaFacebook,
//     url: "https://www.facebook.com/FineArtsClubNitHamirpur/",
//     label: "Facebook",
//   },
//   {
//     icon: FaLinkedin,
//     url: "https://www.linkedin.com/company/fineartsnith/",
//     label: "LinkedIn",
//   },
// ];

// export default function Home({setPage}){
//   return (
//     <div>
// {/* ******************************************************************************       */}
//       {/* Hero section */}
//       <section className="relative overflow-hidden min-h-[90vh] flex items-center">
//         {/* for background texture */}
//         <div
//           className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//         {/* glowing blobs */}
//         <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[var(--primary)] opacity-10 blur-3xl pointer-events-none" />
//         <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-amber-400 opacity-[0.07] blur-3xl pointer-events-none" />

//         {/* two column grid  */}
//         <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
//           {/* left column--> text */}
//           <div>
//             <div className="inline-flex items-center gap-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-8">
//               <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
//               FineArts Club NIT-H
//             </div>
//             <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] text-[var(--foreground)] mb-6">
//               Where Art
//               <br />
//               <em className="not-italic text-[var(--primary)]">Finds Its</em>
//               <br />
//               Voice
//             </h1>
//             <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-lg mb-10">
//               FineArts is the creative community at the heart of our college. We
//               bring together painters, illustrators, sculptors, and digital
//               artists to create, exhibit, and inspire.
//             </p>
//             {/* gallery button  */}
//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={() => setPage("gallery")}
//                 className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded-full font-medium text-sm hover:bg-[var(--muted)] transition-colors"
//               >
//                 View Gallery →
//               </button>
//             </div>
//           </div>

//           {/* right column --> Image grid */}
//           <div className="relative hidden md:block">
//             {/* thse images will be hidden in small screens */}
//             <div className="grid grid-cols-2 gap-4">
//               {/* two columns of images  */}
//               <div className="space-y-4">
//                 <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--muted)]">
//                   <img
//                     src="https://images.unsplash.com/photo-1617386069438-6b3a5f76f0bc?w=400&h=500&fit=crop&auto=format"
//                     alt="Art in gallery"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden aspect-square bg-[var(--muted)]">
//                   <img
//                     src={ourArtist}
//                     alt="Painting process"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="pt-8 space-y-4">
//                 {/* The second column has pt-8 (padding-top) to offset it slightly
//           lower than the first — creating that staggered, masonry-style
//           look rather than a perfectly even grid. */}
//                 <div className="rounded-2xl overflow-hidden aspect-square bg-[var(--muted)]">
//                   <img
//                     src={temple_wall}
//                     alt="Art class"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[var(--muted)]">
//                   <img
//                     src="https://images.unsplash.com/photo-1549925245-6a03760d291f?w=400&h=500&fit=crop&auto=format"
//                     alt="Abstract painting"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-4 -left-4 bg-[var(--card)] border border-[var(--border)] rounded-2xl px-5 py-4 shadow-lg">
//               <div className="font-serif text-3xl font-bold text-[var(--primary)]">
//                 14+
//               </div>
//               <div className="text-[var(--muted-foreground)] text-sm">
//                 years running
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ******************************************************************************       */}
//       {/* About section  */}
//       <section className="mx-auto max-w-7xl px-6 py-24">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[var(--muted)]">
//             <img
//               src={wall}
//               alt="Gallery opening"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             <div className="absolute bottom-6 left-6 right-6">
//               <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-3">
//                 <p className="text-white text-sm font-medium">
//                   "Art is to console those who are broken by life."
//                 </p>
//                 <p className="text-white/60 text-xs mt-1">
//                   — Vincent Van Gogh
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="font-serif text-4xl font-bold text-[var(--foreground)] mb-6">
//               A Space to
//               <br />
//               <em className="not-italic text-[var(--primary)]">
//                 Create Freely
//               </em>
//             </h2>
//             <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
//               <p>
//                 FineArts Club is a group of students who believed that creative
//                 expression deserves a dedicated home on campus. Today, we are
//                 one of the most active student-led organizations at the college.
//               </p>
//               <p>
//                 Our club runs weekly workshops, monthly critique sessions, and a
//                 full annual exhibition calendar. We
//               </p>
//               <p>
//                 Whether you are a seasoned artist or picking up a brush for the
//                 first time, FineArts is your community. We believe art is for
//                 everyone, and every creative impulse deserves space to grow.
//               </p>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-3">
//               {["Painting", "Sculpture", "Digital Art", "Illustration"].map(
//                 (tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1.5 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full text-xs font-medium"
//                   >
//                     {tag}
//                   </span>
//                 ),
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ************************************************************************ */}
//       {/* Footer section  */}
//       <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
//         <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
//           <img
//             src={logo}
//             alt="FineArts Club logo"
//             className="w-8 h-8 rounded-full object-cover"
//           />

//           {/* <p className="text-[var(--muted-foreground)] text-sm text-center">
//             FineArts  · NIT-Hamirpur
//           </p> */}

//           <div className="flex items-center gap-3">
//             {socialLinks.map(({ icon: Icon, url, label }) => (
//               <a
//                 key={label}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
//               >
//                 <Icon size={16} />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="mx-auto max-w-7xl px-6 pb-6 text-center">
//           <p className="text-[var(--muted-foreground)] text-xs">
//             © 2026 FineArts Club. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }