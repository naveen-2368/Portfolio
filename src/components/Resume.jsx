import resume from "../assets/resume.jpg";

const Resume = () => {
  const downloadResume = () => {
    // Create a temporary <a> element
    const link = document.createElement("a");
    link.href = "/Nk.resume.PDF"; // File path relative to the public folder
    link.download = "NK.resume.PDF"; // Specify the downloaded filename
    link.click(); // Programmatically trigger the download
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row px-5 bg-primary justify-around pt-44 pb-32"
    >
      <div className="md:w-1/2 flex justify-center">
        <img
          src={resume}
          alt="Resume"
          className="rounded-xl w-[60%] mb-5 md:w-[600px] md:h-[450px] fade-in fade-in-show"
        />
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-start text-gray-200">
          <h1 className="text-3xl gradient-text mb-3 font-bold fade-in fade-in-show">
            Resume
          </h1>
          <p className="pb-5 fade-in fade-in-show">
            You can view and download my Resume :
            <button
              className="btn fade-in fade-in-show ml-2 text-blue-500 "
              onClick={downloadResume}
            >
              Download
            </button>
          </p>
          <div className="pt-5 flex gap-5 p-5">
            <div>
              <h1 className="text-xl text-[#e69e5f] pb-5 font-bold fade-in fade-in-show">
                Skills:
              </h1>
              <p className="p-2 font-bold fade-in fade-in-show">
                Programming Languages
              </p>
              <ul className="pl-7 fade-in fade-in-show text-gray-400">
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
              <p className="pt-5 font-bold fade-in fade-in-show">
                Front-End Tools
              </p>
              <ul className="pl-7 fade-in fade-in-show text-gray-400">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="pt-10">
              <p className="pt-5 font-bold fade-in fade-in-show">
                Backend Tools
              </p>
              <ul className="pl-7 fade-in fade-in-show text-gray-400">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
              <p className="pt-5 font-bold fade-in fade-in-show">Database</p>
              <ul className="pl-7 fade-in fade-in-show text-gray-400">
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
