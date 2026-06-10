import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeViewProps {
  code: string;
}

export default function CodeView({
  code,
}: CodeViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="h-full rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>

          <span className="text-xs text-slate-500 ml-2">
            VisionComponent.tsx
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          disabled={!code}
          className="
            flex items-center gap-1.5
            px-2 py-1
            rounded-md
            text-xs
            text-slate-400
            hover:text-white
            hover:bg-slate-800
            transition
            disabled:opacity-40
            disabled:cursor-not-allowed
          "
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 h-full overflow-auto">
        <pre className="text-sm text-slate-300 whitespace-pre-wrap">
          {code || "// Generated code will appear here"}
        </pre>
      </div>
    </div>
  );
}