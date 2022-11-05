import React, { useState } from "react";
import Footer from "../components/Footer";
import { toast } from "react-toastify";


function Contact() {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [TnC, setTnC] = useState(false)
  const [messageError, setMessageError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [TnCError, setTnCError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!firstName.trim()){
      setFirstNameError(true)
      setTimeout(()=> {
        setFirstNameError(false)
      }, 5000)
    }else if(!lastName.trim()){
      setLastNameError(true)
      setTimeout(()=> {
        setLastNameError(false)
      }, 5000)
    } else if(!email.trim()){
      setEmailError(true)
      setTimeout(()=> {
        setEmailError(false)
      }, 5000)
    } else  if(!message.trim()){
      setMessageError(true)
      setTimeout(()=> {
        setMessageError(false)
      }, 5000)
    }
    else if(TnC !== true){
      setTnCError(true)
      setTimeout(()=> {
        setTnCError(false)
      }, 5000)
    }
    else{
     toast.success('Message has been submitted successfully')
    
    }

    

    
  }
  return (
   <>
    {/* {
      submitSuccess && (
        <div className="absolute    h-full w-full  flex justify-center items-center z-30 max-h-screen">
      <div className="bg-green-50 shadow h-[150px] w-[300px] rounded-[10px] p-[10px] flex flex-col items-center">
        <p className="text-green-600 text-[30px] font-[800] font-inter mt-[10px]">Success</p>
        <p className="text-green-700 font-inter font-[600] text-center mt-[10px]">Your message has been sent to Aniebiet Obo!</p>
      </div>
       </div>
      )
    } */}

<div className="md:p-[50px] relative">
  <div className="w-full flex items-center justify-center p-[64px_15px] md:p-[64px_96px]">
    <div className="w-[720px] h-full md:h-[560px]  flex flex-col">
      <div>
        <p className="text-[36px]  font-[600] font-inter  text-start">
          Contact Me
        </p>
        <p className="font-[400] text-[18px] md:text-[20px] leading-[30px] font-inter">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>
      <div className="mt-[20px]">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className='grid md:grid-cols-2 gap-5'>
              <div >
                {" "}
                <div>
                  <label htmlFor="" className="font-[500] font-inter text-[14px] leading-[20px]">First name</label>
                  
                </div>
                <div>
                  <input type="text" id="first_name" value={firstName} onChange={(e)=>setFirstName(e.target.value) } className={`${firstNameError? 'border-[#F83F23]': 'border-[#D0D5DD] '} border border-[#D0D5DD] w-full h-[44px] rounded-[8px] p-[10px_14px] placeholder:font-inter placeholder:text-[16px] outline-none`} placeholder="Enter your first name" />
                </div>
                <div>
                    {
                      firstNameError && (
                        <p className="text-[#F83F23] font-[500] text-[14px] leading-[20px] font-inter">Please enter your First Name</p>
                        
                      )
                    }
                  </div>
              </div>
              <div>
                {" "}
                <div>
                  <label htmlFor=""className="font-[500] font-inter text-[14px] leading-[20px]  ">Last name</label>
                </div>
                <div>
                  <input type="text" id="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`${lastNameError ? 'border-[#F83F23]' : 'border-[#D0D5DD]' } border  w-full h-[44px] rounded-[8px] p-[10px_14px]  placeholder:font-inter placeholder:text-[16px] outline-none`} placeholder="Enter your last name" />
                </div>
                <div>
                    {
                      lastNameError && (
                        <p className="text-[#F83F23] font-[500] text-[14px] leading-[20px] font-inter">Please enter your Last Name</p>
                        
                      )
                    }
                  </div>
              </div>
            </div>
            <div className="mt-[20px]">
                {" "}
                <div>
                  <label htmlFor=""className="font-[500] font-inter text-[14px] leading-[20px]">Email</label>
                </div>
                <div>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${emailError ? 'border-[#F83F23]' : 'border-[#D0D5DD]'} border  w-full h-[44px] rounded-[8px] p-[10px_14px]  placeholder:font-inter placeholder:text-[16px] outline-none`} placeholder="yourname@email.com"/>
                </div>
                <div>
                    {
                      emailError && (
                        <p className="text-[#F83F23] font-[500] text-[14px] leading-[20px] font-inter">Please enter your Email</p>
                        
                      )
                    }
                  </div>
              </div>
            <div className="mt-[20px]">
                {" "}
                <div>
                  <label htmlFor=""className="font-[500] font-inter text-[14px] leading-[20px]">Message</label>
                </div>
                <div>
                  <textarea type="text" id="message" value={message} onChange={(e)=> setMessage(e.target.value)} className={`${messageError ? 'border-[#F83F23] ' : 'border-[#D0D5DD]'} border  w-full  rounded-[8px] p-[10px_14px]  placeholder:font-inter placeholder:text-[16px] outline-none h-[132px]`} placeholder="Send me a message and I'll reply you as soon as possible..."/>
                  <div>
                    {
                      messageError && (
                        <p className="text-[#F83F23] font-[500] text-[14px] leading-[20px] font-inter">Please enter a message</p>
                        
                      )
                    }
                  </div>
                </div>
                <div className="mt-[20px]">
                <div className="flex items-center space-x-4 ">
                  <div>
                    <input type="checkbox"  name="" id="agree" onChange={(e) => setTnC(e.target.checked)} className="h-[20px] w-[20px] rounded-[6px] border border-[#D0D5DD]" />
                  </div>
                  
                      <label htmlFor="" className="font-inter leading-[24px] text-[#475467]">You agree to providing your data to Aniebiet Obo who may contact you.</label>
                  
                </div>
                <div>
                    {
                      TnCError && (
                        <p className="text-[#F83F23] font-[500] text-[14px] leading-[20px] font-inter">Please Accept terms and Conditions</p>
                        
                      )
                    }
                  </div>
                </div>
                <div className="mt-[30px]">
                  <button id="btn__submit" className="bg-[#1570EF] text-white w-full  rounded-[8px] h-[48px] p-[12px_20px] font-inter font-[600] text-[16px] leading-[24px] "  type="submit">Send Message</button>
                </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</div>
   </>
  );
}

export default Contact;
