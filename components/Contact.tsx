'use client'
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    number: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {};

function Contact({}: Props) {
    const { register,
         handleSubmit,} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:aryanjangirofficial@gmail?subject=${formData.subject}&body=hello my number is ${formData.number}. ${formData.email}. ${formData.message}`
    }  ;

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[12px] text-gray-500 text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col space-y-1">
        <h4 className="text-3xl mt-9 mb-2 font-semibold text-center">
        Ready to discuss your next project? {" "}
          <span className="decoration-[#F7AB0A]/50 underline ">Lets Talk</span>
        </h4>

        <div className="space-y-10 justify-center" >
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-40 animate-pulse" />
            <p className="ml-[-10px] text-2xl">+91 6350099719</p>
          </div>

          <div className="flex items-center  space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-40 animate-pulse" />
            <p className="text-2xl">aryanjangirofficial@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-40 animate-pulse" />
            <p className="text-2xl">Jaipur, Rajasthan</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2" >
                <input {...register('number')} placeholder="number" className="contactInput" type="text" />
                <input {...register('email')} placeholder="E-mail" className="contactInput" type="email" />
            </div>

            <input {...register('subject')} onSubmit={handleSubmit(onSubmit)} placeholder="subject" className="contactInput" type="text" />

            <textarea {...register('message')} placeholder="Message" className="contactInput" />
            <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg" >Submit</button>
        </form> 
      </div>
    </div>
  );
}

export default Contact;