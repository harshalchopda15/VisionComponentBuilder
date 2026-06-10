import { Loader2 } from "lucide-react";

interface GenerateButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export default function GenerateButton({
  disabled = false,
  isLoading = false,
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        h-11
        rounded-lg
        mt-4
        font-medium
        text-sm
        bg-gradient-to-r
        from-emerald-500
        to-cyan-500
        text-slate-950
        hover:from-emerald-400
        hover:to-cyan-400
        disabled:opacity-40
      "
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Generating...
        </div>
      ) : (
        "Generate Code"
      )}
    </button>
  );
}