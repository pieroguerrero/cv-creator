//import logo from "./logo.svg";
import React, { useState } from "react";
import { Credits } from "./components/Credits";
import { Resume } from "./components/Resume";
import { ResumeViwer } from "./components/ResumeViwer";
import { TabHeader } from "./components/TabHeader";

function App() {
  const [viewEditor, setViewEditor] = useState(true);
  /**
   *
   * @param {string} strTabId
   */
  const onTabChange = function (strTabId) {
    console.log("strTabId: ", strTabId);
    if (strTabId === "1") {
      setViewEditor(true);
    } else {
      setViewEditor(false);
    }
  };

  return (
    <div className="App">
      <header></header>

      <main>
        <TabHeader onTabChange={onTabChange} />
        <div>
          <div id="tab-1" style={{ display: viewEditor ? "block" : "none" }}>
            <Resume />
          </div>
          <div id="tab-2" style={{ display: viewEditor ? "none" : "block" }}>
            <ResumeViwer />
          </div>
        </div>
      </main>

      <footer>
        <Credits />
      </footer>
    </div>
  );
}

export default App;
