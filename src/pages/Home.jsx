import React from 'react'
import profile from '../assets/profile.JPG'
import github from '../assets/github.png'
import share from '../assets/share.png'
import dot from '../assets/dot.png'
import slack from '../assets/slack.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    const links = [
        {
          id: 1,
          title: "Twitter Link",
          link: "https://twitter.com/jurstadev",
          text_id: 'twitter'
        },
        {
          id: 2,
          title: "Zuri Team",
          link: "https://training.zuri.team/",
          text_id: 'btn__zuri'
    
        },
        {
          id: 3,
          title: "Zuri Books",
          link: "https://books.zuri.team",
          text_id: 'books'
    
        },
        {
          id: 4,
          title: "Python Books",
          link: "https://books.zuri.team/python-for-beginners?ref_id=AniebietbasiObo",
          text_id: 'book__python'
    
        },
        {
          id: 5,
          title: "Background Check for Coders",
          link: "https://background.zuri.team",
          text_id: 'pitch'
        },
        {
          id: 6,
          title: "Design Books",
          link: "https://books.zuri.team/design-rules",
          text_id: 'book__design'
        },
      ]
      return (
        <div className="App py-[30px] md:p-[50px]  w-full flex flex-col items-center justify-center h-full bg-[#F4F5F7]">
         {/* - A profile picture with an id ‘**profile__img**’
    - Your twitter username with an id ‘**twitter**’
    - Your slack username with an id ‘**slack**’ - **but this should be hidden (available in code, but cannot be seen)** */}
          <div className="flex flex-col items-center">
            <div className=" h-[88px] w-[88px] rounded-full">
              <img src={profile} alt="" id="profile_img" className='h-full w-full rounded-full object-cover'/>
            </div>
            <div className="mt-[15px]">
              <p className="font-[700] font-inter text-[20px] leading-[30px] text-center" id='twitter'>Aniebiet Obo</p>
              <p className='hidden' id='slack'>Aniebietabasi Obo</p>
            </div>
          </div>
      <div className='0 absolute top-[40px] md:top-[40px] right-[15px] md:right-[350px]' >
        <img src={share} alt="" className='cursor-pointer hidden md:block' />
        <img src={dot} alt="" className='cursor-pointer block md:hidden' />
      </div>
          <div className="flex flex-col space-y-5 w-full md:w-[70%] mt-[40px] px-[20px]">
              {
                links.map(({title, link, id, text_id})=> (
                  <div key={id} className='rounded-[8px] p-[24px_32px] bg-[#EAECF0] flex items-center justify-center w-full'>
                    <a href={link} rel='noreferrer' target='_blank' className="w-full h-full text-[14px] md:text-[18px] leading-[28px] text-center font-inter font-[500] text-[#101828]" id={text_id}>{title}</a>
                  </div>
                ))
              }
          </div>
          <div className='w-full md:w-[70%] mt-[40px] px-[20px]'>
            <Link id='contact' to='/contact' className='rounded-[8px] p-[24px_32px] bg-[#EAECF0] flex items-center justify-center w-full'>Contact Me</Link>
          </div>
          {/* social media */}
          <div className="w-full flex my-[30px] space-x-5 items-center justify-center">
            <div>
             <a href="http://github.com/anie308" target="_blank" rel="noopener noreferrer"> <img src={github} alt="" className='cursor-pointer' /></a>
            </div>
            <div>
                <a href="http://" target="_blank" rel="noopener noreferrer"><img src={slack} alt=""  className='cursor-pointer'/></a>
            </div>
          </div>
    
          {/* footer */}
         <Footer/>
        </div>
      )
}

export default Home