// import React, { useState } from 'react';

// const ServiceForm = () => {
//   const [service, setService] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [details, setDetails] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Service:', service);
//     console.log('Name:', name);
//     console.log('Phone:', phone);
//     console.log('Email:', email);
//     console.log('Details:', details);

//     // Reset form fields
//     setService('');
//     setName('');
//     setPhone('');
//     setEmail('');
//     setDetails('');
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Order a Service</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service</label>
//           <select
//             id="service"
//             value={service}
//             onChange={(e) => setService(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           >
//             <option value="">Choose a service</option>
//             <option value="Plumbing">Plumbing Services</option>
//             <option value="Barber">Barber Services</option>
//             <option value="Carpenter">Carpenter Services</option>
//             <option value="Electrician">Electrician Services</option>
//             <option value="Housekeeper">Housekeeper Services</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="details" className="block text-sm font-medium text-gray-700">Additional Details</label>
//           <textarea
//             id="details"
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//             rows="4"
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full p-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ServiceForm;
import React, { useEffect, useState } from "react";
import axios from "axios";
// import qouteImage from "../assets/images/QouteFormImage.webp"

const ServiceForm = () =>{
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        companyName: "",
        service: "",
        helpMessage: "",
    });


    const [submitMessage, setSubmitMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.firstName || !formData.lastName) {
            setError("Please fill in all required fields.");
            return;
        }
        setIsLoading(true);
        setError(true);

        try {
            const response = await axios.post("/api/newOrder/service-form", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                setSubmitMessage("Your request has been submitted successfully.");
                setFormData({
                    email: "",
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    companyName: "",
                    service: "",
                    helpMessage: "",
                });
            } else {
                setSubmitMessage("There was an issue submitting your request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("There was an issue submitting your request. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (submitMessage || error) {
            const timer = setTimeout(() => {
                setSubmitMessage("");
                setError("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [submitMessage, error])

    useEffect(() => {
        document.title = "Contact Us | Tongue Twist";
        const metaDescription = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute('content', "Get in touch with Tongue Twist for expert localization and translation services. We're here to assist with all your language needs. Contact us today!");
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Learn more about Tongue Twist, our mission, and the expert services we offer.';
            document.head.appendChild(meta);
        }
    }, []); 

    return (
        <form onSubmit={handleSubmit} className="service-form">
            <div className="flex justify-around  flex-col sm:flex-row  ">
                <div className="flex flex-col sm:w-[45%] p-10 ">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-secondary text-4xl font-bold">Get In Touch</h1>
                        <h1 className="text-1xl font-semibold text-primary">Let's Chat, Reach Out to Us</h1>
                        <p>Have question or feedback? We"re here to help. Send us a message and we"ll get back to you as soon as possible.</p>

                        <div className="mt-2 flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#f14f4e" fill="none">
                                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h1 className="text-xs sm:text-sm">Learn more about Tongue Twist</h1>
                            </div>
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#f14f4e" fill="none">
                                    <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h1 className="text-xs sm:text-sm">Get the right solution with Tongue Twist.</h1>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[1px]" />
                    <div className="">
                        {/* <img src={qouteImage} loading="eager" width={"500px"} height={"386px"} alt="Space Ship Image" /> */}
                    </div>
                </div>
                <div className="sm:w-[45%] flex flex-col gap-7 p-10">

                    <div className="flex flex-col">

                        <div className="">
                            <label htmlFor="email" className="text-sm sm:text-base font-semibold">Email*</label>
                        </div>
                        <div className="w-full flex items-end">

                            <div className="w-full border-[1px]">

                                <input
                                    type="email"
                                    className="w-full outline-none p-2"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className=" w-[45%] ">
                            <div>
                                <label htmlFor="firstName" className="text-sm sm:text-base font-semibold">First Name*</label>
                            </div>

                            <div className="flex items-end">
                                <div className="w-full border-[1px]">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Your First Name"
                                        className="  w-full outline-none p-2"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[45%]">
                            <div>
                                <label htmlFor="lastName" className="text-sm sm:text-base font-semibold">Last Name*</label>
                            </div>

                            <div className="flex items-end">

                                <div className="w-full border-[1px]">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Your Last Name"
                                        className="p-2 w-full outline-none"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber" className="text-sm sm:text-base font-semibold">Phone Number</label>

                        <div className="w-full flex items-end">

                            <div className="w-full border-[1px]">
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Your Phone Number"
                                    className="w-full outline-none p-2"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-col">
                            <div>
                                <label htmlFor="companyName" className="text-sm sm:text-base font-semibold">Company Name</label>
                            </div>

                            <div className="w-full flex items-end">
                                <div className="w-full border-[1px]">
                                    <input
                                        type="text"
                                        id="companyName"
                                        placeholder="Your Company Name"
                                        name="companyName"
                                        className=" w-full outline-none p-2"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-col">

                            <label htmlFor="service" className="text-sm sm:text-base font-semibold">What Service Are You Interested In? *</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="outline-none border-[1px] w-full p-2"
                                required
                            >
                                <option value="" className="text-xs">Select a service</option>
                                <option value="Document Localization">Document Localization</option>
                                <option value="Audiovisual Localization">Audiovisual Localization</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col">

                            <label htmlFor="helpMessage" className="text-sm sm:text-base font-semibold">How Can We Help You?</label>
                            <textarea
                                id="helpMessage"
                                name="helpMessage"
                                rows="4"
                                className="outline-none border-[1px] w-full"
                                value={formData.helpMessage}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="flex justify-center">
                        <div className="w-[70%] text-[1.2rem] p-3 font-bold flex h-[51px] justify-center items-center border  rounded-md hover:bg-white hover:border hover:text-black text-white bg-[#f14f4a] transition transform duration-300 hover:scale-105">
                            {isLoading ? "Submitting..." : "Submit"}
                        </div>
                    </button>
                    <div className="text-center">
                        {submitMessage && <p className="text-green-500">{submitMessage}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                    </div>

                </div> 

            </div>

        </form>
    )
}

export default ServiceForm;