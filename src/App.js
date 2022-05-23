import logo from "./logo.svg";
import React, { useState } from "react";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { ResumeBuilder } from "./components/ResumeBuilder";

function App() {
  const [showBuilder, setShowBuilder] = useState(false);

  const onStartNow = () => {
    setShowBuilder(true);
  };
  return (
    <div className="App relative h-full">
      {(() => {
        if (!showBuilder) {
          return <LandingPage onStartNow={onStartNow} />;
        } else {
          return <ResumeBuilder />;
        }
      })()}
    </div>
  );
}

export default App;
