import React, { useState } from "react";
import Footer from "../components/Footer";

function Contact() {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
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
    }else{
      alert('Sent!')
    }

    

    
  }
  return (
    <div className="md:p-[50px]">
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
                      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value) } className={`${firstNameError? 'border-[#F83F23]': 'border-[#D0D5DD] '} border border-[#D0D5DD] w-full h-[44px] rounded-[8px] p-[10px_14px] placeholder:font-inter placeholder:text-[16px] outline-none`} placeholder="Enter your first name" />
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
                      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`${lastNameError ? 'border-[#F83F23]' : 'border-[#D0D5DD]' } border  w-full h-[44px] rounded-[8px] p-[10px_14px]  placeholder:font-inter placeholder:text-[16px] outline-none`} placeholder="Enter your last name" />
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
                      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={`${emailError ? 'border-[#F83F23]' : 'border-[#D0D5DD]'} border  w-full h-[44px] rounded-[8px] p-[10px_14px]  placeholder:font-inter placeholder:text-[16px] outline-none`} placeholder="yourname@email.com"/>
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
                      <textarea type="text" value={message} onChange={(e)=> setMessage(e.target.value)} className={`${messageError ? 'border-[#F83F23] ' : 'border-[#D0D5DD]'} border  w-full  rounded-[8px] p-[10px_14px]  placeholder:font-inter placeholder:text-[16px] outline-none h-[132px]`} placeholder="Send me a message and I'll reply you as soon as possible..."/>
                      <div>
                        {
                          messageError && (
                            <p className="text-[#F83F23] font-[500] text-[14px] leading-[20px] font-inter">Please enter a message</p>
                            
                          )
                        }
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-[20px]">
                      <div>
                        <input type="checkbox" name="" id="" className="h-[20px] w-[20px] rounded-[6px] border border-[#D0D5DD]" />
                      </div>
                      
                          <label htmlFor="" className="font-inter leading-[24px] text-[#475467]">You agree to providing your data to Aniebiet Obo who may contact you.</label>
                      
                    </div>
                    <div className="mt-[30px]">
                      <button className="bg-[#1570EF] text-white w-full  rounded-[8px] h-[48px] p-[12px_20px] font-inter font-[600] text-[16px] leading-[24px] "  type="submit">Send Message</button>
                    </div>
                  </div>
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
