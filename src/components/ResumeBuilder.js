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

    // MD_Resume.shapeResume(
    //   MD_PersonalInfo.shapePersonalInfo(
    //     uniqid(),
    //     "Piero",
    //     "Guerrero",
    //     "piero.guerrero@outlook.com",
    //     "+51 961 3941",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Dolor sit amet consectetur adipiscing elit ut. Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim.",
    //     "A.",
    //     "github.com/pieroguerrero",
    //     "pieroguerrero.com",
    //     "linkedin.com/in/pieroguerrero",
    //     "Senior Software Engineer",
    //     "Lima, Peru"
    //   ),
    //   [
    //     MD_Experience.shapeExperience(
    //       uniqid(),
    //       "Software Engineer Manager",
    //       "Cia Minera Poderosa SA",
    //       new Date(),
    //       new Date(),
    //       false,
    //       "Lima, Peru",
    //       "",
    //       "+Id neque aliquam vestibulum morbi blandit cursus risus at ultrices +Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. Facilisi etiam dignissim diam quis enim. +Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //       "",
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    //     ),
    //     MD_Experience.shapeExperience(
    //       uniqid(),
    //       "Scrum Master",
    //       "Verizon",
    //       new Date(),
    //       null,
    //       true,
    //       "Lima, Peru",
    //       "",
    //       "Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim. Ultrices neque ornare aenean euismod.",
    //       "verizon.com",
    //       "Ultrices neque ornare aenean euismod."
    //     ),
    //   ],
    //   [
    //     MD_Education.shapeEducation(
    //       uniqid(),
    //       "Master",
    //       "ESAN University",
    //       new Date(),
    //       new Date(),
    //       false,
    //       "Lima, Peru",
    //       "",
    //       "",
    //       "Project Management",
    //       "esan.edu.pe"
    //     ),
    //     MD_Education.shapeEducation(
    //       uniqid(),
    //       "Bachelor",
    //       "PUCP",
    //       new Date(),
    //       new Date(),
    //       false,
    //       "Lima, Peru",
    //       "",
    //       "+Ultrices neque ornare aenean euismod. Facilisi etiam dignissim diam quis enim. Ultrices neque ornare aenean euismod.",
    //       "Computer Science",
    //       "pucp.edu.pe"
    //     ),
    //   ]
    // )
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
              "You need to know that employers scan your resume for six seconds in average to decide if you’re a match for the position, so every section is important to be well written. You can save the progress at any time, it will be save locally in your machine to secure your information."
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
