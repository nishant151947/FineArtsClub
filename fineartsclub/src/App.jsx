import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";


export default function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <Navbar page={page} setPage={setPage} dark={dark} setDark={setDark} />
        {page === "home" && <Home setPage={setPage} />}
        {page === "team" && <Team />}

        {/* Temporary placeholder content just so you can see the navbar in context.
            This will be replaced once home.jsx, team.jsx, gallery.jsx, and events.jsx exist. */}
        <div className="flex items-center justify-center py-32 text-[var(--muted-foreground)] text-sm">
          Current page:{" "}
          <span className="ml-2 font-medium text-[var(--foreground)]">
            {page}
          </span>
        </div>
      </div>
    </div>
  );
}
