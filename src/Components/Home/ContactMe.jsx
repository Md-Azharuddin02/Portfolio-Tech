import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Store/ThemeContext ";

function ContactMe() {
  const { theme, isdark } = useContext(ThemeContext);
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    body: '',
  });

  const handleFormInput = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className={`${theme.themeColor} contact relative`}>
      {/* Alert */}
      <div
        className={`
          fixed left-1/2 -translate-x-1/2 top-24
          transition-all duration-300 ease-in-out
          ${showAlert ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
          z-[60]
        `}
      >
        <div className={`
          flex items-center gap-3 px-6 py-4 rounded-lg
          ${isdark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
          border ${isdark ? 'border-gray-700' : 'border-gray-200'}
          shadow-lg
          min-w-[300px]
        `}>
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10">
            <svg 
              className="w-6 h-6 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium">Message sent successfully!</p>
            <p className={`text-sm ${isdark ? 'text-gray-400' : 'text-gray-600'}`}>
              Thank you for contacting me.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-10 sm:mb-12 lg:mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Contact <span className="text-amber-500">Me</span>
        </h2>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className={`rounded-xl
          ${isdark ? 'bg-white/5 border-white/5' : 'bg-[rgba(180,180,180,0.05)] border-[rgba(180,180,180,1)]'}
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          border
          ${isdark ? "text-white" : "text-black"}
          max-w-3xl mx-auto text-center 
          mb-2 md:mb-3 
          p-4 md:p-10 lg:px-15 lg:py-2 lg:pt-10`}
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
            className={`w-full sm:w-1/2 p-4 text-base md:text-lg rounded-lg
              ${isdark ? 'bg-transparent text-white' : 'bg-white text-gray-900'}
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
              placeholder:text-gray-400`}
          />
          <input
            onChange={(e)=>handleFormInput(e)}
            type="email"
            id="email"
            name="email"
            value={data.email}
            placeholder="Email Address"
            required
            className={`w-full sm:w-1/2 p-4 text-base md:text-lg rounded-lg
              ${isdark ? 'bg-transparent text-white' : 'bg-white text-gray-900'}
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
              placeholder:text-gray-400`}
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
            className={`w-full sm:w-1/2 p-4 text-base md:text-lg rounded-lg
              ${isdark ? 'bg-transparent text-white' : 'bg-white text-gray-900'}
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
              placeholder:text-gray-400`}
          />
          <input
            onChange={(e)=>handleFormInput(e)}
            type="text"
            id="subject"
            name="subject"
            value={data.subject}
            placeholder="Email Subject"
            required
            className={`w-full sm:w-1/2 p-4 text-base md:text-lg rounded-lg
              ${isdark ? 'bg-transparent text-white' : 'bg-white text-gray-900'}
              border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
              placeholder:text-gray-400`}
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
          className={`w-full p-4 text-base md:text-lg rounded-lg resize-none
            ${isdark ? 'bg-transparent text-white' : 'bg-white text-gray-900'}
            border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
            placeholder:text-gray-400`}
        ></textarea>

        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 
            sm:m-4 mt-6 mb-2
            text-white px-8 py-3
            rounded-lg text-base md:text-lg font-medium 
            transition-all duration-300 
            hover:scale-105 
            hover:shadow-lg
            active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default ContactMe;
