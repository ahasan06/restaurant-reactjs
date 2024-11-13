import React, { useState } from "react";
import Button from "../components/ui/Button";
import { BsCaretUp, BsCaretDown } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GiConfirmed } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BsPersonCircle, BsPeople } from "react-icons/bs";
import { MdEmail, MdMessage } from "react-icons/md";



import paper_splash from '../images/splash.png'

function BookTable() {
    const initalState = {
        name: "",
        email: "",
        date: "",
        totalPeople: 0,
        message: "",
    }
    const [formData, setFormData] = useState(initalState);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [errors, setErrors] = useState({});
    const [popUpConfirm, setPopUpConfirm] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else if (name === "totalPeople") {
            setFormData((prevData) => ({
                ...prevData,
                totalPeople: value ? Math.max(parseInt(value), 1) : 1,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === "number" ? parseInt(value) : value,
            }));
        }
    };

    const handleDateChange = (selectedDate) => {
        setFormData((prevData) => ({
            ...prevData,
            date: selectedDate,
        }));
        setShowDatePicker(false);
    };

    const handlePeopleChange = (type) => {
        setFormData((prevData) => ({
            ...prevData,
            totalPeople: type === "increase" ? prevData.totalPeople + 1 : Math.max(prevData.totalPeople - 1, 1),
        }));
    };
    const validData =()=>{
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Name cannot be empty.";
        }
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }
        if (!formData.date) {
            newErrors.date = "Date cannot be empty.";
        }
        if (!formData.totalPeople || formData.totalPeople < 1) {
            newErrors.totalPeople = "Total people must be at least 1."
        }
        if (!formData.message || formData.message.split(' ').length > 50) {
             newErrors.message = "Cant be empty || Message cannot exceed 50 words."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validData()) {
        console.log(formData);
        setPopUpConfirm(true)
        }
        
       
    };
    const handleClosePopup = () => {
        setPopUpConfirm(false);
        setFormData(initalState)
    };


    return (
        <div className=" max-w-[1373px] min-h-[722px] lg:min-h-[788px] mx-auto px-6 flex flex-col gap-10 justify-center">
            <div className="book_heading_content flex justify-between items-center ">
                <div className="book_title flex flex-col gap-[10px] max-w-md">
                    <h3 className="relative text-red-600 text-[14px] md:text-lg font-bold before:content-[''] before:inline-block before:bg-red-600 before:w-[8px] before:h-[8px] before:mr-2  before:align-middle">
                        Book Now
                    </h3>
                    <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mt-2 ">
                        Book Your Table
                    </h2>
                    <p className=" text-[#F7F8F9] text-[16px]">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                        molestie vel, ornare non id blandit netus.
                    </p>
                </div>
            </div>

            <div className="book_form">
                <form onSubmit={handleSubmit} className="max-w-[635px]  text-white flex flex-col gap-6">
                    <div className="grid gap-6 md:gap-6 md:grid-cols-2">
                        {/* <!-- Row 1: Name and Email --> */}
                      
                      <div className="relative">
                          {errors.name && <p className="text-red-500 text-[12px] absolute -top-5">{errors.name}</p>}
                      <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            className="input-field"
                        />
                      </div>
                        
                      <div className="relative">
                      {errors.email && <p className="text-red-500 text-[12px] absolute -top-5">{errors.email}</p>}
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="input-field"
                        />
                        </div>
                       

                        {/* <!-- Row 2: Reservation Date and Total People --> */}
                        <div className="relative">
                         {errors.date && <p className="text-red-500 text-[12px] absolute -top-5">{errors.date}</p>}
                            <input
                                type="text"
                                placeholder="Reservation Date"
                                value={formData.date ? formData.date.toLocaleDateString() : ""}
                                onClick={() => setShowDatePicker(!showDatePicker)}
                                name="date"
                                readOnly
                                className="input-field w-full pr-10 cursor-pointer"

                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                                onClick={() => setShowDatePicker(!showDatePicker)}
                            >
                                <SlCalender />
                            </button>

                            {showDatePicker && (
                                <div className="absolute z-50 top-full">

                                    <DatePicker
                                        selected={formData.date}
                                        onChange={handleDateChange}
                                        inline

                                    />
                                </div>
                            )}

                        </div>


                        <div className="relative">
                        {errors.totalPeople && <p className="text-red-500 text-[12px] absolute -top-5">{errors.totalPeople}</p>}
                            <input
                                name="totalPeople"
                                type="text"
                                placeholder="Total People"
                                value={`${formData.totalPeople ? formData.totalPeople : ""}`}
                                onChange={handleChange}
                                className="input-field "
                            />

                            <div className="input_btn flex flex-col  absolute top-1/2 right-4 -translate-y-1/2">
                                <button type="button" onClick={() => handlePeopleChange("increase")}>
                                    <BsCaretUp />
                                </button>
                                <button className="button" onClick={() => handlePeopleChange("descrease")}>
                                    <BsCaretDown />
                                </button>
                            </div>
                        </div>

                        {/* <!-- Row 3: Message Field (spans 2 columns) --> */}
                        <div className="relative  md:col-span-2">
                        {errors.message && <p className="text-red-500 text-[12px] absolute -top-5">{errors.message}</p>}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="input-field md:col-span-2 h-24 resize-none"
                        ></textarea>
                        </div>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <Button
                        type="submit"
                        label="Book now"
                        className=" bg-yellow-500 hover:bg-yellow-600 text-black"
                    />
                </form>
            </div>


            {
                popUpConfirm && (
                    <div className=" fixed z-50 left-0 top-0 bg-gray-800 bg-opacity-70 w-full h-full">
                        <div className="book_table_bg  shadow-lg w-full md:w-[600px] h-fit rounded-t-3xl md:rounded absolute bottom-0 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2">
                            <button type="button" onClick={handleClosePopup} className="text-4xl text-white hover:text-gray-400 absolute -top-8 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                <MdOutlineCancel />
                            </button>

                            <div className="popUpContainer flex flex-col gap-8 p-6 rounded-lg shadow-lg ">
                                <div className="orderConfirm relative flex flex-col items-center gap-2">
                                    <img
                                        src={paper_splash}
                                        className="absolute -top-16 md:-top-32 -z-10 left-1/2 -translate-x-1/2 opacity-40"
                                    />
                                    <GiConfirmed className="text-6xl text-green-500" />
                                    <span className="text-green-400 font-semibold text-lg">Congratulations!</span>
                                    <p className="text-2xl text-center text-white font-bold capitalize">Your Table Has Been Booked</p>
                                </div>

                                <div className="order_details border-t  border-gray-200 py-6 rounded-lg order-background flex flex-col gap-2 px-6 overflow-y-auto">
                                    <h3 className="relative text-gray-600 text-[14px] md:text-lg font-bold before:content-[''] before:inline-block before:bg-gray-600 before:w-[8px] before:h-[8px] before:mr-2  before:align-middle">
                                        Booking Details
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center">
                                            <BsPersonCircle className="text-3xl text-green-500 mr-4" />
                                            <div>
                                                <h4 className="font-semibold text-sm">Name</h4>
                                                <p className="text-sm text-gray-600">{formData?.name || "N/A"}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <MdEmail className="text-3xl text-green-500 mr-4" />
                                            <div>
                                                <h4 className="font-semibold text-sm">Email</h4>
                                                <p className="text-sm text-gray-600 ">{formData?.email || "N/A"}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <SlCalender className="text-3xl text-green-500 mr-4" />
                                            <div>
                                                <h4 className="font-semibold text-sm">Booking Date</h4>
                                                <p className="text-sm text-gray-600">
                                                    {formData.date ? formData.date.toLocaleDateString() : "N/A"}
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <BsPeople className="text-3xl text-green-500 mr-4" />
                                            <div>
                                                <h4 className="font-semibold text-sm">Total People</h4>
                                                <p className="text-sm text-gray-600">{formData?.totalPeople || "N/A"}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center ">
                                            <MdMessage className="text-3xl text-green-500 mr-4" />
                                            <div>
                                                <h4 className="font-semibold text-sm">Message</h4>
                                                <p className="text-sm text-gray-600 max-w-md">{formData?.message || "N/A"}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                           
                            </div>



                        </div>
                    </div>
                )
            }


        </div>
    );
}

export default BookTable;
