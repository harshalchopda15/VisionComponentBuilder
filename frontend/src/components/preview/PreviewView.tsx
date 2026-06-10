import { Eye } from "lucide-react";

export default function PreviewView() {
  return (
    <div className="h-full rounded-lg border border-slate-800 bg-slate-900/30 flex items-center justify-center">
      <div className="text-center">
        <Eye className="w-8 h-8 mx-auto text-slate-600 mb-3" />

        <p className="text-slate-400">
          Component Preview
        </p>

        <p className="text-xs text-slate-600 mt-2">
          Generated components will render here
        </p>
      </div>
    </div>
  );
}