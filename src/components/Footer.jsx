import React from 'react'
import zuri from '../assets/zuri.png'
import I4G from '../assets/I4G.png'

function Footer() {
  return (
    <div className='mt-[30px] flex flex-col md:flex-row items-center justify-between w-full p-[10px_20px] lg:p-[30px_200px] space-y-3 md:space-y-0 border-t border-['>
    <div className='flex-1 flex items-center justify-start w-full'>
      <img src={zuri} alt="" className='h-[19px] md:h-[24px]'/>
    </div>
    <div className='flex-2 flex items-center w-full justify-start md:justify-center font-inter text-[14px] md:text-[16px] font-[400] leading-[20px] md:leading-[24px] text-center'>HNG Internship 9 Frontend Task</div>
    <div className='flex-1 w-full flex items-center justify-start md:justify-end'><img src={I4G} alt="" className='h-[24px] md:h-[32px]' /></div>
</div>
  )
}

export default Footer