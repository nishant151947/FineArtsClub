import { useState } from "react";
import logo from "../assets/logo.png";
export default function Navbar({page,setPage,dark,setDark}){
  //Local state for the mobile menu
  const [menuOpen,setMenuOpen] = useState(false);  //initially the menu  is closed

  //make array of nav-items
  const navItems=[
  { label: 'Home', id: 'home' },
  { label: 'Team', id: 'team' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Events', id: 'events' },
  ]
//   {label:'' , id: ''} label ->ui display , id ->passed to setPage()

//return --> the actual UI 
return (
  // <nav>
  //     <div>
  //         <button>
  //             <span></span>
  //         </button>
  //     </div>
  // </nav>
  <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md transition-colors duration-300">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      {/* //logo button-->>whenever click on logo, we will reach home page */}
      <button onClick={() => setPage("home")}>
        <img
          src={logo}
          alt="FineArts Club logo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="font-serif text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
          FineArts NITH
        </span>
      </button>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center gap-1">
        {/*  loop over nav-items and return <button> at each items  */}
        {navItems.map((items) => (
          <button
            key={items.id}
            onClick={() => setPage(items.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              page === items.id
                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            }`}
          >
            {items.label}
          </button>
        ))}
      </div>

      {/* dark mode on and off */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Mobile hamburger button */}
        {/* onclicking the menu it will dropdown or closed --> means toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
          aria-label="Menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </div>
    {/* mobile hamburger menu */}
    {menuOpen && (
      <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-4 flex flex-col gap-2">
        {navItems.map((items) => (
          <button
            key={items.id}
            onClick={() => {
              setPage(items.id);
              setMenuOpen(false);
            }}
            className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              page === items.id
                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
            }`}
          >
            {items.label}
          </button>
        ))}
      </div>
    )}
  </nav>
);
}