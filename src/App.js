//import logo from "./logo.svg";
import React, { useState } from "react";
import { MD_PersonalInfo } from "./back/MD_PersonalInfo";
import { Credits } from "./components/Credits";
import { Resume } from "./components/Resume";
import { ResumeViwer } from "./components/ResumeViwer";
import uniqid from "uniqid";
import { MD_Resume } from "./back/MD_Resume";

function App() {
  const [viewEditor, setViewEditor] = useState(true);

  const [resumeState, setResume] = useState(
    MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(uniqid(), "", "", "", "", ""),
      [],
      [],
      true
    )
  );

  const generateCV = (objResume) => {
    setResume(objResume);
  };

  return (
    <div className="App relative">
      <header></header>

      <main>
        {/* <TabHeader onTabChange={onTabChange} /> */}
        <div>
          {(() => {
            if (resumeState.isEdit()) {
              return (
                <Resume
                  arrExperienceValues={resumeState.getExperienceList()}
                  arrEducationValues={resumeState.getEducationList()}
                  objPersonalInfoValues={resumeState.getPersonalInfo()}
                  onGenerateCV={generateCV}
                />
              );
            } else {
              return <ResumeViwer objResume={resumeState} />;
            }
          })()}
        </div>
      </main>

      <footer>
        <Credits />
      </footer>
    </div>
  );
}

export default App;
