import { Code2, Eye } from "lucide-react";

interface TabSwitcherProps {
  activeTab: "code" | "preview";
  onChange: (tab: "code" | "preview") => void;
}

export default function TabSwitcher({
  activeTab,
  onChange,
}: TabSwitcherProps) {
  return (
    <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 w-fit">
      <button
        onClick={() => onChange("code")}
        className={`px-3 py-1.5 rounded-md flex items-center gap-2 text-sm transition ${
          activeTab === "code"
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <Code2 className="w-4 h-4" />
        Code
      </button>

      <button
        onClick={() => onChange("preview")}
        className={`px-3 py-1.5 rounded-md flex items-center gap-2 text-sm transition ${
          activeTab === "preview"
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <Eye className="w-4 h-4" />
        Preview
      </button>
    </div>
  );
}