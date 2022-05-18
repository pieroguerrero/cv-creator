//import logo from "./logo.svg";
import React, { useState } from "react";
import { MD_PersonalInfo } from "./back/MD_PersonalInfo";
import { Credits } from "./components/Credits";
import { Resume } from "./components/Resume";
import uniqid from "uniqid";
import { MD_Resume } from "./back/MD_Resume";
import { PopUpViwer } from "./components/resume/file-creation/PopUpViwer";

function App() {
  const [showPopUpViewer, setShowPopUpViewer] = useState(false);

  const [resumeState, setResume] = useState(
    MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(uniqid(), "", "", "", "", ""),
      [],
      []
    )
  );

  const generateCV = (objResume) => {
    setResume(objResume);
    setShowPopUpViewer(true);
  };

  return (
    <div className="App relative">
      <header></header>

      <main>
        {/* <TabHeader onTabChange={onTabChange} /> */}
        <div>
          <Resume
            arrExperienceValues={resumeState.getExperienceList()}
            arrEducationValues={resumeState.getEducationList()}
            objPersonalInfoValues={resumeState.getPersonalInfo()}
            onGenerateCV={generateCV}
          />
          {(() => {
            if (showPopUpViewer) {
              return <PopUpViwer objResume={resumeState} />;
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
