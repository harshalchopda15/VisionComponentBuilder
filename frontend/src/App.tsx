import { useState } from "react";

import Header from "./components/layout/Header";
import GeneratorPanel from "./components/generator/GeneratorPanel";
import OutputPanel from "./components/preview/OutputPanel";

function App() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5018/api/Components/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data = await response.json();

      setGeneratedCode(data.code);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col lg:flex-row min-h-0">
        <GeneratorPanel
          prompt={prompt}
          setPrompt={setPrompt}
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        <OutputPanel
          generatedCode={generatedCode}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;