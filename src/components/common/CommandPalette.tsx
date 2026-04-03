import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import { NAV_ITEMS } from "@/lib/data";

export function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen } = useAppStore();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback(
    (href: string) => {
      navigate(href);
      setCommandPaletteOpen(false);
      setQuery("");
    },
    [navigate, setCommandPaletteOpen]
  );

  useEffect(() => {
    if (!commandPaletteOpen) setQuery("");
  }, [commandPaletteOpen]);

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setCommandPaletteOpen(false)}
          />
          <motion.div
            className="relative w-full max-w-lg mx-4 glass-strong rounded-xl shadow-2xl overflow-hidden glow-border"
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages..."
                className="flex-1 py-4 text-sm bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setCommandPaletteOpen(false);
                  if (e.key === "Enter" && filtered.length > 0) handleSelect(filtered[0].href);
                }}
              />
              <kbd className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5">
                ESC
              </kbd>
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-6">No results found.</p>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleSelect(item.href)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
