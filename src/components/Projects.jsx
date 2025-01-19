import websiteimg1 from "../assets/websiteimg.png";
import websiteimg2 from "../assets/websiteimg2.png";
import websiteimg3 from "../assets/websiteimg3.png";
import websiteimg4 from "../assets/websiteimg4.png";
import websiteimg5 from "../assets/websiteimg5.png";
import websiteimg6 from "../assets/websiteimg6.png";

const Projects = () => {
  const config = {
    projects: [
      {
        image: websiteimg1,
        desc: "A Ecommerce food delivery website. built with MERN stack.",
        link: "https://github.com/naveen-2368/shopping-cart",
      },
      {
        image: websiteimg2,
        desc: " A responsive weather app built with React that fetches real-time weather data using APIs",
        link: "https://github.com/naveen-2368/weather-App",
      },
      {
        image: websiteimg3,
        desc: "A user-friendly login page for a shopping cart built with React,  featuring secure authentication and responsive design.",
        link: "https://github.com/naveen-2368/login-page",
      },
      {
        image: websiteimg4,
        desc: "A sleek digital clock built with React, displaying real-time updates with a dynamic and responsive design.",
        link: "https://github.com/naveen-2368/Digital-clock",
      },
      {
        image: websiteimg5,
        desc: " A dynamic monthly calendar built with React that fetches event data via API, allowing users to view and manage their schedules.",
        link: "https://github.com/naveen-2368/calender",
      },
      {
        image: websiteimg6,
        desc: "A currency converter built with React that fetches real-time exchange rates via API, enabling seamless currency conversion.",
        link: "https://github.com/naveen-2368/currency-convertor",
      },
    ],
  };

  return (
    <section
      id="project"
      className="flex flex-col py-20 px-5 justify-center bg-secondary text-gray-100 pt-32 pb-16"
    >
      <div className="w-full">
        <div className="flex flex-col px-10">
          <h1 className="text-3xl gradient-text mb-3 font-bold fade-in fade-in-show">
            Projects
          </h1>
          <p className="px-10 fade-in fade-in-show">
            These are some of my best projects. I have built these with React .
            check them out.
          </p>
        </div>
      </div>

      <div className="w-full px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <div
              className="relative group transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
              key={index}
            >
              <img
                className="h-[180px] md:h-[220px] w-[100%] md:w-full rounded-lg group-hover:opacity-90 transition-opacity duration-500 fade-in fade-in-show"
                src={project.image}
                alt={`Project ${index + 1}`}
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-center text-white px-4">{project.desc}</p>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  className="bg-header btn text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-80"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
