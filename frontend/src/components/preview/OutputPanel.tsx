import { useState } from "react";

import TabSwitcher from "./TabSwitcher";
import CodeView from "./CodeView";
import PreviewView from "./PreviewView";

interface OutputPanelProps {
  generatedCode: string;
  isLoading: boolean;
}

export default function OutputPanel({
  generatedCode,
  isLoading,
}: OutputPanelProps) {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");

  return (
    <section className="flex-1 p-5 flex flex-col min-h-0">
      <div className="mb-4">
        <TabSwitcher
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <div className="flex-1 min-h-0">
        {activeTab === "code" ? (
          <CodeView
            code={
              isLoading
                ? "// Generating component..."
                : generatedCode
            }
          />
        ) : (
          <PreviewView />
        )}
      </div>
    </section>
  );
}