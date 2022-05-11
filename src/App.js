//import logo from "./logo.svg";
import React, { useState } from "react";
import { MD_PersonalInfo } from "./back/MD_PersonalInfo";
import { Credits } from "./components/Credits";
import { Resume } from "./components/Resume";
import { ResumeViwer } from "./components/ResumeViwer";
import { TabHeader } from "./components/TabHeader";
import uniqid from "uniqid";
import { MD_Resume } from "./back/MD_Resume";

function App() {
  const [viewEditor, setViewEditor] = useState(true);

  const [resumeState, setResume] = useState(
    MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(uniqid(), null, null, null, null, ""),
      [],
      []
    )
  );

  // const [resumeState, setResume] = useState({
  //   objPersonalInfo: MD_PersonalInfo.shapePersonalInfo(
  //     uniqid(),
  //     null,
  //     null,
  //     null,
  //     null,
  //     ""
  //   ),
  //   experienceList: [],
  //   educationList: [],
  // });
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

  const generateCV = (objResume) => {
    console.log("App.getEmail:", objResume.getPersonalInfo().getEmail());
    setResume(objResume);
    //setResume({ ...resumeState, [strPropertyName]: strValue });
  };

  return (
    <div className="App">
      <header></header>

      <main>
        <TabHeader onTabChange={onTabChange} />
        <div>
          <div id="tab-1" style={{ display: viewEditor ? "block" : "none" }}>
            <Resume
              arrExperienceValues={resumeState.getExperienceList()}
              arrEducationValues={resumeState.getEducationList()}
              objPersonalInfoValues={resumeState.getPersonalInfo()}
              onGenerateCV={generateCV}
            />
          </div>
          <div id="tab-2" style={{ display: viewEditor ? "none" : "block" }}>
            <ResumeViwer objResume={resumeState} />
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
