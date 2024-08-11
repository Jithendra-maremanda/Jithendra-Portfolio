// import React from "react";
// import Swal from 'sweetalert2'


// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "e434c734-637a-4aaf-b522-12c6a70e2cc7");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       Swal.fire({
//         title: "Succuss",
//         text: "Your Message Sent Successfully!😊",
//         icon: "success"
//       });
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-b to-black from-gray-800 p-4 text-white"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className=" flex justify-center items-center">
//           <form
//             className=" flex flex-col w-full md:w-1/2"
//             onSubmit={onSubmit}
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//               required
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's Connect
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Contact;

import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "e434c734-637a-4aaf-b522-12c6a70e2cc7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Your Message Sent Successfully! 😊",
        icon: "success",
      });

      // Clear the form
      event.target.reset();
      setResult(""); // Optionally reset the result state
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b to-black from-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
