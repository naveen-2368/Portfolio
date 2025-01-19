// import aboutimg from "./assets/about.pn

const Contact = () => {
  return (
    <contact
      id="contact"
      className="flex flex-col md:flex-row  px-5 bg-secondary justify-around pt-16 pb-16 "
    >
      <div>
        {/* <div className="flex flex-col w-[70%] md:w-[80%] bg-gray-200 p-5 text-gray-900 rounded-sm justify-center" >
          <label>Name :</label> <input type="text" />
          <label>Email :</label> <input type="text" />
          <label>Subject :</label> <input type="text" />
          <label>Message</label>
          <textarea className=""></textarea>
        </div> */}

        <div className=" flex flex-col items-center text-white">
          <h1 className="text-3xl gradient-text mb-3 w-[110px] font-bold fade-in fade-in-show">
            Contact
          </h1>
          <p className="pb-5 fade-in fade-in-show">
            If You want to more in details please contact me .
          </p>
          <p className="py-2 fade-in fade-in-show">
            <span className="font-bold">Email :</span>{" "}
            naveenkumarm02123@gmail.com
          </p>
          <p className="py-2 fade-in fade-in-show">
            <span className="font-bold">phone :</span> +(91)90251-12368
          </p>
        </div>
      </div>
    </contact>
  );
};

export default Contact;
