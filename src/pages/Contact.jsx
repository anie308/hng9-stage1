import React from "react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <div className="w-full flex items-center justify-center p-[64px_96px]">
        <div className="w-[720px] h-[560px] border flex flex-col">
          <div>
            <p className="text-[36px]  font-[600] font-inter  text-start">
              Contact Me
            </p>
            <p className="font-[400] text-[20px] leading-[30px] font-inter">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div className="mt-[20px]">
            <form action="">
              <div className="flex flex-col">
                <div>
                <label htmlFor="">First name</label>
                </div>
                <div><input type="text" /></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
