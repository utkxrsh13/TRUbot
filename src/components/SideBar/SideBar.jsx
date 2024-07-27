import React, { useContext, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { IoMdHelp } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { Context } from '../../context/context';
import NewChat from './NewChat';
import "./newChat.css"



function SideBar() {

  const [extend , setExtend] = useState(false)
  const {onsent, prevPromt, setrecentPrompt,newchat} = useContext(Context)

  const loadPrompt =async (prompt)=>{
    setrecentPrompt(prompt)
    await onsent(prompt)
  }

  return (
    <div className='sidebar px-4 py-6 min-h-[100vh] inline-flex flex-col justify-between bg-[#ffdffa] opacity-90 dark:bg-[#131314] dark:text-white'>
      <div className="top">
        <IoMdMenu onClick={()=>setExtend(prev => !prev)} className='menu text-2xl block cursor-pointer'/>
        {extend?<div onClick={()=>newchat()} className="newchat inline-flex items-center gap-2 px-[5px] mt-12 py-[10px] rounded-[50px] text-white ">
        <NewChat/>
         </div>:null}
        
        
        {extend? <div className="recent flex flex-col ">
          <p className='mt-[30px] mb-[20px] '>Recent</p>
          {prevPromt.map((item, index)=>{
            return (
              <div onClick={()=>loadPrompt(item)} className="recentEntry flex items-start gap-2 pr-9 p-2 rounded-[50px] text-black font-extrabold cursor-pointer hover:bg-[#ffcfd2] dark:text-white dark:hover:bg-[#86348b]">
            <TiMessages className='text-2xl'/>
            <p>{item.slice(0,18)}...</p>
          </div>
            )
          })}
          
        </div>:null}
        
      </div>
      {extend? <div className="bottom flex flex-col">
        <div className="bottomItem flex items-start gap-2 pr-9 p-2 rounded-[50px] text-black cursor-pointer hover:bg-[#ffffff] dark:text-white dark:hover:bg-[#2d2d30]">
        <IoMdHelp className='text-xl'/>
          <p>Help</p>
        </div>
        <div className="bottomItem flex items-start gap-2 pr-9 p-2 rounded-[50px] text-black cursor-pointer hover:bg-[#ffffff] dark:text-white dark:hover:bg-[#2d2d30]">
        <FaHistory className='text-xl'/>
          <p>Activity</p>
        </div>
        <div className="bottomItem flex items-start gap-2 pr-9 p-2 rounded-[50px] text-black  cursor-pointer hover:bg-[#f8f8f8] dark:text-white dark:hover:bg-[#2d2d30]">
        <MdSettingsSuggest className='text-xl'/>
          <p>Settings</p>
        </div> 
      </div>:null}
      
    </div>
  )
}

export default SideBar