//import logo from "./logo.svg";
import React, { useState } from "react";
import { MD_PersonalInfo } from "./back/MD_PersonalInfo";
import { Credits } from "./components/Credits";
import { Resume } from "./components/Resume";
import uniqid from "uniqid";
import { MD_Resume } from "./back/MD_Resume";
import { PopUpViwer } from "./components/resume/file-creation/PopUpViwer";
import { MD_Experience } from "./back/MD_Experience";
import { MD_Education } from "./back/MD_Education";

function App() {
  const [showPopUpViewer, setShowPopUpViewer] = useState(false);

  const [resumeState, setResume] = useState(
    // MD_Resume.shapeResume(
    //   MD_PersonalInfo.shapePersonalInfo(uniqid(), "", "", "", "", ""),
    //   [],
    //   []
    // )
    MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(
        uniqid(),
        "Piero",
        "Guerrero",
        "piero.guerrero@outlook.com",
        "+51 961 3941",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Dolor sit amet consectetur adipiscing elit ut. Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim.",
        "A.",
        "github.com/pieroguerrero",
        "pieroguerrero.com",
        "linkedin.com/in/pieroguerrero",
        "Senior Software Engineer",
        "Lima, Peru"
      ),
      [
        MD_Experience.shapeExperience(
          uniqid(),
          "Software Engineer Manager",
          "Cia Minera Poderosa SA",
          new Date(),
          null,
          true,
          "Lima, Peru",
          "",
          "+Id neque aliquam vestibulum morbi blandit cursus risus at ultrices +Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. +Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "poderosa.com.pe",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ),
        MD_Experience.shapeExperience(
          uniqid(),
          "Scrum Master",
          "Verizon",
          new Date(),
          new Date(),
          false,
          "Lima, Peru",
          "",
          "+Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim. +Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          "verizon.com",
          "Ultrices neque ornare aenean euismod."
        ),
      ],
      [
        MD_Education.shapeEducation(
          uniqid(),
          "Master",
          "ESAN University",
          new Date(),
          new Date(),
          false,
          "Lima, Peru",
          "",
          "",
          "Project Management",
          "esan.edu.pe"
        ),
        MD_Education.shapeEducation(
          uniqid(),
          "Bachellor",
          "PUCP",
          new Date(),
          new Date(),
          false,
          "Lima, Peru",
          "",
          "",
          "Computer Science",
          "pucp.edu.pe"
        ),
      ]
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
