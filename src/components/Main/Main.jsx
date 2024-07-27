import React, { useContext, useState } from "react";
import user from "../Main/user_icon.jpg";
import { GrMapLocation } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa6";
import { BiSolidMessageDots } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import '../Main/main.css'
import { AiOutlineSend } from "react-icons/ai";
import { Context } from "../../context/context";
import Loader from '../Loader/Loader'
import { IoMdArrowDropright } from "react-icons/io";
import Theme from '../Theme/Theme'



function Main() {
  function handleSubmit(e){
    if(e.key === "Enter"){
      onsent();
    }
  }

  const {onsent, recentPrompt, showResult,loading,result,setinput,input, loadPrompt} = useContext(Context)
  const selected = [
    {
      select: "Suggest beautiful places to see on an upcoming road trip.",
      key:1,
      icon:<GrMapLocation className="w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3 text-black text-[25px]"/>
    },
    {
      select:"Briefly summarize this concept: urban planning",
      key:2,
      icon:  <FaLightbulb  className="w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3 text-black text-[25px]"/>
    },
    {
      select:"BrainStorm team bonding activities for our work retreat",
      key:3,
      icon: <BiSolidMessageDots className="w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3 text-black text-[25px]"/>
    },
    {
      select:"What is React js",
      key:4,
      icon: <FaCode className="w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3 text-black text-[25px]"/>
    }
  ]


  return (
    <div className="main bg-[#efcce4] dark:bg-[#131314] flex-1 min-h-[100vh] pb-[15vh] relative text-white">
      <div className="nav flex items-center justify-between text-xl p-2 text-[#585858]">
        <p className="font-semibold text-black dark:text-white text-2xl">TRUbot</p>
        <div className="bg-[#efcce4] dark:bg-[#131314]">
      <Theme/>
    </div>
      </div>
      <div className="main-cont ">
        {!showResult?<>
          <div className="greet my-[10px] mx-0 ml-3 text-[56px] text-white font-[500] p-3 leading-[50px]">
          <p>
            <span className="">Hello,</span>
          </p>
          <p className="text-black dark:text-[#4c4e51]">How Can I help you sir...</p>
        </div>
        <div className="card grid mb-3 text-black">
       
          
            {selected.map((item, index)=>(
              <div onClick={()=>setinput(item.select)}  className="h-[200px] p-[15px] bg-[#8eecf5] rounded-xl relative cursor-pointer hover:bg-[#99cee0] dark:bg-[#1E1F20] dark:hover:bg-[#323335]">
              <p className="text-[17px] dark:text-white">{item.select}</p>
              {item.icon}
              
              </div>
            ))}

        </div>
        </>
          : <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll text-black">
              <div className="my-[40px] mx-0 flex items-center gap-5 text-white">
                <img src={user} className="w-[60px] rounded-[50%]" alt="User_icon" />
                <p className="text-black dark:text-white flex font-semibold"><IoMdArrowDropright className="mt-1"/>{recentPrompt}</p>
              </div>
              <div className="flex items-center gap-5">
                
                {loading?
                  <Loader/>
                  :<p className="text-lg dark:text-white leading-7" dangerouslySetInnerHTML= {{__html:result}}></p>
                }
                
              </div>
          </div> }

        
        <div className="main-bottom absolute bottom-0 w-[100%] py-0 px-5 m-auto ">
          <div className="search flex items-center justify-between gap-1 bg-white dark:bg-black py-2 px-5 rounded-[50px]">
            <input onChange={(e)=>setinput(e.target.value)} onKeyDown={handleSubmit} value={input} type="text" className="text-[18px] text-black bg-transparent border-none p-2 min-w-20 outline-none md:min-w-96 dark:text-white" size={80} placeholder="Enter a prompt here" />
            <div className="flex gap-3 text-xl items-center">
              {input?<AiOutlineSend onClick={()=>onsent()} className="text-black dark:text-white cursor-pointer"/>:null}
            </div>
          </div>
            <p className="text-[13px] my-4 mx-auto text-center font-semibold text-black dark:text-amber-500" >
              Gemini may display inaccurate info, including about people, so double-check its responses.
            </p>
            
        </div>
        
      </div>
      
    </div>
  );
}

export default Main;
