import { useState } from "react";

export function useGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return {
    prompt,
    setPrompt,
    generatedCode,
    setGeneratedCode,
    isLoading,
    setIsLoading,
  };
}