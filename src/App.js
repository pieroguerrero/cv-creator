//import logo from "./logo.svg";
import React, { useState } from "react";
import { Credits } from "./components/Credits";
import { Resume } from "./components/Resume";
import { ResumeViwer } from "./components/ResumeViwer";
import { TabHeader } from "./components/TabHeader";

function App() {
  const [viewEditor, setViewEditor] = useState(true);
  const [resumeState, setResume] = useState({
    strFirstName: null,
    strLastName: null,
    strEmail: null,
    strPhone: null,
    strAbout: "",
    experienceList: [],
    educationList: [],
  });
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

  const savePersonalInfoValue = (strPropertyName, strValue) => {
    console.log("App." + strPropertyName + ":", strValue);
    setResume((prevState) => ({ ...prevState, strPropertyName: strValue }));
  };

  return (
    <div className="App">
      <header></header>

      <main>
        <TabHeader onTabChange={onTabChange} />
        <div>
          <div id="tab-1" style={{ display: viewEditor ? "block" : "none" }}>
            <Resume
              onFirstNameChange={savePersonalInfoValue.bind(
                null,
                "strFirstName"
              )}
              onLastNameChange={savePersonalInfoValue.bind(null, "strLastName")}
              onPhoneChange={savePersonalInfoValue.bind(null, "strPhone")}
              onAboutChange={savePersonalInfoValue.bind(null, "strAbout")}
              onEmailChange={savePersonalInfoValue.bind(null, "strEmail")}
              onSaveEducation={null}
              onSaveExperience={null}
            />
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
