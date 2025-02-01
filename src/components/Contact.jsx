import { useState } from "react";
const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log({ name, email, subject, message });
    // Optionally, reset the form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row px-5 bg-secondary justify-around pt-24 pb-16"
    >
      {/* Contact Details */}
      <div className="flex flex-col items-center text-white md:w-1/2 md:pr-10 pt-16">
        <h1 className="text-3xl gradient-text mb-3 font-bold">Contact</h1>
        <p className="pb-5 pt-8">
          If you want more details, please contact me.
        </p>
        <div className="bg-gray-200 text-gray-800 mb-16 p-5 rounded-md">
          <p className="py-2">
            <span className="font-bold">Email:</span>{" "}
            naveenkumarm02123@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span> +(91) 90251-12368
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center w-full md:w-1/2">
        <div className="flex flex-col w-full max-w-md bg-gray-200 p-5 text-gray-900 rounded-sm">
          <label className="mb-2">Name:</label>
          <input
            onChange={handleNameChange}
            type="text"
            className="px-2 py-1 mb-4 border border-gray-300 rounded outline-none"
          />

          <label className="mb-2">Email:</label>
          <input
            onChange={handleEmailChange}
            type="email"
            className="px-2 py-1 mb-4 border border-gray-300 rounded outline-none"
          />

          <label className="mb-2">Subject:</label>
          <input
            onChange={handleSubjectChange}
            type="text"
            className="px-2 py-1 mb-4 border border-gray-300 rounded outline-none"
          />

          <label className="mb-2">Message:</label>
          <textarea
            onChange={handleMessageChange}
            className="px-2 py-1 mb-4 border border-gray-300 rounded outline-none"
          ></textarea>

          <button
            onSubmit={handleSubmit}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
