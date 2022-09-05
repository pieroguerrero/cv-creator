
# CV Creator
> Create a professional CV that comply with the Application Tracking Systems ([ATS](https://www.techtarget.com/searchhrsoftware/definition/applicant-tracking-system-ATS)) requirements. 
> Live demo [_here_](https://pieroguerrero.github.io/cv-creator/).

## Table of Contents
* [General Info](#general-information)
* [Technologies and Techniques used](#technologies-and-techniques-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)


## General Information
- The objective of this Web app is to facilitate the creation of ATS-proof and appealing CVs. So the user doesn't have to worry about the [Application Tracking Systems (ATS)](https://www.techtarget.com/searchhrsoftware/definition/applicant-tracking-system-ATS) requirements nor to obtain a good looking CV.
- In this Web app, Users are able to fill out their information regarding Education and Work Experience and the tool will provide with predefined CV templates that comply with the common ATS' requirements so the users can select the one they like more. At the same time, the tool provides with advise by every section and field the User have to fill out.

## Technologies and Techniques used
### Planning and Design:
- The main purpose of this web is to provide CV's that beat Application Tracking Systems (ATS). This is done by following several guidelines, specially [this arcticle](https://www.topresume.com/career-advice/officehours-does-your-resume-beat-the-bots) from topresume.com.
- Since there is only one resource in the project, it was developmet partially with [Scrum](https://www.scrum.org/resources/what-is-scrum). The duration was 1.5 months splited in 2-week sprints.
- The planning was done with the [User Story Mapping](https://www.visual-paradigm.com/guide/agile-software-development/what-is-user-story-mapping/) technique.
- The Color palette for the entire Web app and the Landing page's UI design were implemented by following [this TawildUI template](https://tailwindui.com/components/marketing/sections/heroes) built from scratch:

<p align="center"><BR> <img src="https://user-images.githubusercontent.com/26049605/188484354-840ec2aa-8c22-41be-b15e-602496f66139.png" width="600px" height="auto" alt="TailwindUI template" title="Click to enlarge"> </p>


### Front-end:
- ReactJS.
- Internal application state managed with the [React Context API](https://reactjs.org/docs/context.html).
- CSS design with [Tailwind CSS](https://tailwindcss.com/). 
- PDF generation was made using [react-pdf](https://react-pdf.org/).
- The web app is 100% responsive.

### Back-end:
- This web app has no backend for now. 
- Due to the type of information is handled, all the information is stored in the [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### Testing:
- Unit testing was done.
- Test coverage is 20% and is increasing using Jest and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) is being used.
- While testing, the project was run using the Chrome's Development Tools "Fast 3G" and "No Caching" options. So the app is ready for slow internet connections.

## Features

- View Landing Page ✔
- Enter general personal information ✔
- Enter education information ✔
- Enter work experience information ✔
- Receive advice during the information input process ✔
- Select CV format ✔
- Export CV to PDF format ✔
- Save information locally ✔
- Enter certifications 🔜
- Create a custom section 🔜
- Select more PDF formats 🔜
- Save information on the cloud 🔜
- Sign-up 🔜


## Screenshots
Click an image to enlarge.

| Landing Page | Landing Page responsive | CV Form |
| ------------ | -------------- | ------------- |
| <img src="https://user-images.githubusercontent.com/26049605/188495857-bd82e7c6-0628-4317-a8d0-a69ed2fd2636.png" width="370px" height="auto" alt="Landing Page" title="Click to enlarge">   | <img src="https://user-images.githubusercontent.com/26049605/188495936-881787db-c1d9-4fe0-a0b0-79576bdd65b5.png" width="200px" height="auto" alt="Landing Page" title="Click to enlarge">     | <img src="https://user-images.githubusercontent.com/26049605/188495786-17ba09ef-6b7d-4bea-850a-b1dd16ef3ff2.png" width="370px" height="auto" alt="CV Form" title="Click to enlarge">    |

## Setup
Clone this project by doing:
```
$ git clone https://github.com/pieroguerrero/cv-creator.git
```
Then go to the folder you cloned the code and execure:
```
$ npm install
```
**WARNING:** If you are going to use other libraries to achieve other purposes be carefull and remove the caret (^) prefix that the dependency versions have.

## Project Status
Project is: _in progress_

## Room for Improvement
There are always room for improvement, in this project so far the thinkgs that can be improved are:
- Enabla back-end APIs so the user can store information in the Cloud.
- More Unit testing coverage.
- Increase the efficiency of the updates by using a Form handler for react.
- Use Redux instead of the React Context API.
