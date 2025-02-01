import Mypic from "../assets/mypic.jpg";

const About = () => {
  
  const config = {
    line1:
      "Hi! I’m Naveenkumar, an aspiring software developer from Erode, Tamil Nadu. I recently completed my Bachelor of Engineering in Electronics and Communication Engineering from the Government College of Engineering, Erode (Anna University) with an academic record of 78%.",
    line2:
      "With a solid foundation in programming and a keen interest in software development, I am skilled in Python and full-stack development tools such as React.js, Node.js, and MySQL.",
    line3:
      "I’ve worked on projects like The Future Work: Data Analysis of Glassdoor Jobs in collaboration with IBM and have completed a 30-day internship in Artificial Intelligence at Pantech E-Learning.",
    line4:
      "I am driven by curiosity and the desire to learn new technologies to stay ahead in the fast-paced tech world.",
    line5:
      "When I’m not coding, I enjoy exploring emerging technologies, engaging in data analysis, and refining my skills in front-end and back-end development.",
  };

  return (
    <section
      className="flex flex-col md:flex-row px-5 bg-primary justify-center md:justify-around pt-52 pb-32"
      id="about"
    >
      {/* Image Section */}
      <div className="flex flex-col items-center w-full md:w-1/4">
        <img
          src={Mypic}
          alt="Naveenkumar"
          className="rounded-xl opacity-85 w-[60%] md:w-[100%] mb-5 border-4 border-gray-300 hover:border-gray-500 hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        {/* Progress Bars */}
        <div className="w-[70%] ">
          {[
            { skill: "HTML", width: "75%" },
            { skill: "CSS", width: "70%" },
            { skill: "JAVASCRIPT", width: "85%" },
            { skill: "REACT", width: "65%" },
          ].map(({ skill, width }) => (
            <div
              className="flex flex-col items-center justify-center pt-2"
              key={skill}
            >
              <div className="w-[60%] bg-gray-950 rounded-full h-2 overflow-hidden md:w-full">
                <div className="h-full bg-gray-400" style={{ width }}></div>
              </div>
              <p className="mt-3 text-gray-400 hover:text-gray-50 hover:cursor-pointer text-[12px] font-medium">
                {skill} - {width}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="flex flex-col justify-center text-gray-200 text-center md:text-left">
          <h1 className="text-3xl gradient-text hover-effect mb-3 font-bold fade-in fade-in-show">
            About Me
          </h1>
          <div className="fade-in fade-in-show text-left">
            <p className="pb-5">{config.line1}</p>
            <p className="pb-5">{config.line2}</p>
            <p className="pb-5">{config.line3}</p>
            <p className="pb-5">{config.line4}</p>
            <p className="pb-5">{config.line5}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
