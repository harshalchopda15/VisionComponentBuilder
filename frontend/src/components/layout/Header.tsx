import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="h-12 border-b border-slate-800 bg-slate-950 flex items-center px-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-slate-950" />
        </div>

        <span className="text-sm font-semibold">
          Vision-to-Component
        </span>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2 text-xs text-slate-500">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Ready
      </div>
    </header>
  );
}