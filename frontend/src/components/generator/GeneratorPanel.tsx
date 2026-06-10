import { LayoutDashboard } from "lucide-react";

import PromptInput from "./PromptInput";
import GenerateButton from "./GenerateButton";

interface GeneratorPanelProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export default function GeneratorPanel({
  prompt,
  setPrompt,
  onGenerate,
  isLoading,
}: GeneratorPanelProps) {
  return (
    <section className="flex-1 border-r border-slate-800 p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <LayoutDashboard className="w-4 h-4 text-slate-400" />

        <h2 className="text-sm font-semibold text-slate-200">
          Component Generator
        </h2>
      </div>

      <p className="text-xs text-slate-500 mb-4">
        Describe the UI component you want to build.
      </p>

      <div className="flex-1 min-h-0 mb-4">
        <PromptInput
          value={prompt}
          onChange={setPrompt}
        />
      </div>

      <GenerateButton
        disabled={!prompt.trim() || isLoading}
        onClick={onGenerate}
        isLoading={isLoading}
      />
    </section>
  );
}