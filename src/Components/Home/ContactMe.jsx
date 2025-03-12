import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Store/ThemeContext ";

function ContactMe() {
  const { theme, isdark } = useContext(ThemeContext);
  const [data, setData]= useState({
    name:'',
    email:'',
    subject:'',
    phone:'',
    body:'',
  })
  const handleFormInput=(e)=>{
    setData(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      body: '',
    });
  };
  return (
    <section
      className={`${theme.themeColor} contact id="contact sm:pt-5`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Contact Me
      </h2>

      <form
      onSubmit={handleFormSubmit}
        className={` rounded-lg shadow-lg border ${
          theme.shadow
        } ${
          isdark ? "text-white" : "text-black"
        } max-w-3xl mx-auto text-center mb-2 md:mb-3 p-4 md:pb-1 lg:px-15 lg:py-2 lg:pt-10 md:p-10`}
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
          onChange={(e)=>handleFormInput(e)}
            type="text"
            id="name"
            name="name"
            value={data.name}
            placeholder="Full Name"
            required
            className="w-full sm:w-1/2 p-4 text-base md:text-lg bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
          onChange={(e)=>handleFormInput(e)}
            type="email"
            id="email"
            name="email"
            value={data.email}
            placeholder="Email Address"
            required
            className="w-full sm:w-1/2 p-4 text-base md:text-lg bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
          onChange={(e)=>handleFormInput(e)}
            type="number"
            id="mobile"
            name="phone"
            value={data.phone}
            placeholder="Mobile Number"
            required
            className="w-full sm:w-1/2 p-4 text-base md:text-lg bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
          onChange={(e)=>handleFormInput(e)}
            type="text"
            id="subject"
            name="subject"
            value={data.subject}
            placeholder="Email Subject"
            required
            className="w-full sm:w-1/2 p-4 text-base md:text-lg bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <textarea
        onChange={(e)=>handleFormInput(e)}
          id="text"
          name="body"
          value={data.body}
          placeholder="Your Message"
          required
          rows="6"
          className="w-full p-3 text-base md:text-lg bg-gray-100 rounded-lg resize-none  focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-500 sm:m-4 mt-3 md:mb-3 text-white px-6 py-3 rounded-lg text-base md:text-lg font-medium hover:bg-indigo-700 transition-colors duration-300 "
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
