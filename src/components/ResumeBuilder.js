import React, { useState } from "react";
import uniqid from "uniqid";
import { MD_Education } from "../back/MD_Education";
import { MD_Experience } from "../back/MD_Experience";
import { MD_PersonalInfo } from "../back/MD_PersonalInfo";
import { MD_Resume } from "../back/MD_Resume";
import { Credits } from "./Credits";
import { Resume } from "./Resume";
import { PopUpViwer } from "./resume/file-creation/PopUpViwer";

const ResumeBuilder = () => {
  const [showPopUpViewer, setShowPopUpViewer] = useState(false);

  const [resumeState, setResume] = useState(
    MD_Resume.shapeResume(
      MD_PersonalInfo.shapePersonalInfo(
        uniqid(),
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      [],
      []
    )
  );

  const generateCV = (objResume) => {
    setResume(objResume);
    setShowPopUpViewer(true);
  };

  const closePopUp = () => {
    setShowPopUpViewer(false);
  };

  return (
    <div className=" h-full">
      <header>
        <div className="flex flex-col gap-4 justify-center py-6 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-indigo-600 sm:text-4.5xl md:text-4.5xl">
            Resume Builder
          </h1>
          <p className=" text-gray-600">
            {
              "You need to know that employers scan your resume for six seconds in average to decide if you’re a match for the position, so every section is important to be well written. You can save the progress at any time, it will be saved locally in your machine to secure your information. At the end you will be able to export your information in a beautiful PDF document."
            }
          </p>
        </div>
      </header>
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
              return (
                <PopUpViwer objResume={resumeState} onClose={closePopUp} />
              );
            }
          })()}
        </div>
      </main>
      <footer className="bg-gray-50">
        <Credits />
      </footer>
    </div>
  );
};

export { ResumeBuilder };
