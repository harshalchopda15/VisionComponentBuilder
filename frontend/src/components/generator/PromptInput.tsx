interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PromptInput({
  value,
  onChange,
}: PromptInputProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Describe the UI component you want to build..."
      className="
        w-full
        h-full
        resize-none
        rounded-lg
        border
        border-slate-800
        bg-slate-900/50
        p-4
        text-sm
        text-slate-200
        placeholder:text-slate-600
        focus:outline-none
        focus:ring-2
        focus:ring-emerald-500/30
      "
    />
  );
}