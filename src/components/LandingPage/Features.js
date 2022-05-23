import React from "react";

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {"ATS-proof"}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {"Don't let your resume to be rejected by a robot!"}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {
              "Our Resume builder provides a reliable solution to help you skip the line and have your resume in human hands."
            }
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 17.1 15.5 16.6 20.1 12 15.5 7.4 16 6.9 21.1 12ZM8 17.1 2.9 12 8 6.9 8.5 7.4 3.9 12 8.5 16.6Z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {"Optimized internal structure"}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {
                  "Our Resumen generator creates a PDF which internal structure is optimized to be scanned by ATS engines."
                }
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    x-description="Heroicon name: outline/annotation"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {"Guided Resume creation"}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {
                  "While Building your Resume, we provide you with suitable recommendations at every section, so the final result is a well written document."
                }
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3.6Q13.55 3.6 14.625 4.675Q15.7 5.75 15.7 7.3V9.3H17.2Q17.825 9.3 18.262 9.737Q18.7 10.175 18.7 10.8V19.2Q18.7 19.825 18.262 20.262Q17.825 20.7 17.2 20.7H6.8Q6.175 20.7 5.738 20.262Q5.3 19.825 5.3 19.2V10.8Q5.3 10.175 5.738 9.737Q6.175 9.3 6.8 9.3H8.3V7.3Q8.3 5.75 9.375 4.675Q10.45 3.6 12 3.6ZM12 4.3Q10.75 4.3 9.875 5.175Q9 6.05 9 7.3V9.3H15V7.3Q15 6.05 14.125 5.175Q13.25 4.3 12 4.3ZM6.8 20H17.2Q17.55 20 17.775 19.775Q18 19.55 18 19.2V10.8Q18 10.45 17.775 10.225Q17.55 10 17.2 10H6.8Q6.45 10 6.225 10.225Q6 10.45 6 10.8V19.2Q6 19.55 6.225 19.775Q6.45 20 6.8 20ZM12 13.65Q11.425 13.65 11.038 14.037Q10.65 14.425 10.65 15Q10.65 15.575 11.038 15.963Q11.425 16.35 12 16.35Q12.575 16.35 12.963 15.963Q13.35 15.575 13.35 15Q13.35 14.425 12.963 14.037Q12.575 13.65 12 13.65ZM6 10Q6 10 6 10.225Q6 10.45 6 10.8V19.2Q6 19.55 6 19.775Q6 20 6 20Q6 20 6 19.775Q6 19.55 6 19.2V10.8Q6 10.45 6 10.225Q6 10 6 10Z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {"Secured information"}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {
                  "We do not store any of you information in our servers. If you decide to save your information for later completion, it will be stored in your local machine only."
                }
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    fill="none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14.9Q13.425 14.9 14.413 13.912Q15.4 12.925 15.4 11.5Q15.4 10.075 14.413 9.087Q13.425 8.1 12 8.1Q10.575 8.1 9.588 9.087Q8.6 10.075 8.6 11.5Q8.6 12.925 9.588 13.912Q10.575 14.9 12 14.9ZM12 14.2Q10.875 14.2 10.088 13.412Q9.3 12.625 9.3 11.5Q9.3 10.375 10.088 9.587Q10.875 8.8 12 8.8Q13.125 8.8 13.913 9.587Q14.7 10.375 14.7 11.5Q14.7 12.625 13.913 13.412Q13.125 14.2 12 14.2ZM12 17.7Q8.875 17.7 6.3 16.012Q3.725 14.325 2.4 11.5Q3.725 8.675 6.3 6.987Q8.875 5.3 12 5.3Q15.125 5.3 17.7 6.987Q20.275 8.675 21.6 11.5Q20.275 14.325 17.7 16.012Q15.125 17.7 12 17.7ZM12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5ZM12 17Q14.825 17 17.188 15.512Q19.55 14.025 20.8 11.5Q19.55 8.975 17.188 7.487Q14.825 6 12 6Q9.175 6 6.812 7.487Q4.45 8.975 3.2 11.5Q4.45 14.025 6.812 15.512Q9.175 17 12 17Z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {"Eye appealing templates"}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {
                  "We provide beautiful templates that are structured to highlight your experience."
                }
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export { Features };
