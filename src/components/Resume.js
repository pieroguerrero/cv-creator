import { PersonalInfo } from "./resume/PersonalInfo";
import { About } from "./resume/About";
import { Experience } from "./resume/Experience";
import { Education } from "./resume/Education";

const Resume = () => {
  //TODO: to create the ResumeObject and send it to the App so it can be printed
  //TODO: include de ABOUT in the Personal infor, change it to MainInfo
  /**
   *
   * @param {{strFirstName: string,
   * strLastName: string,
   * strEmail: string,
   * strPhone:string}} objPersonalInfo
   */
  const obtainNewPersonalInfo = (objPersonalInfo) => {
    console.log("Resume.strLastName", objPersonalInfo.strLastName);
    console.log("Resume.strFirstName", objPersonalInfo.strFirstName);
  };

  return (
    <div className="flex flex-col gap-4">
      <PersonalInfo onFieldValueChange={obtainNewPersonalInfo} />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export { Resume };
