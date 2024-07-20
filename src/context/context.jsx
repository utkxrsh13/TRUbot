import { createContext, useState } from "react";
import run from "../config/gemini"
import React, { useEffect } from "react"


export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState('')
  const [recentPrompt, setrecentPrompt] = useState("")
  const [prevPromt, setPrevPromt] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading , setLoading] = useState(false)
  const [result, setresult] = useState("")


  const [theme, setTheme] = useState("light")
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
},[theme]);

const handlethemeswitch= ()=>{
  setTheme(theme === "dark"?"light": "dark")
};



  const deletePara = (index, nextWord)=>{
    setTimeout(() => {
      setresult(prev=>prev+nextWord);
    }, 75*index);
  }

  const newchat = ()=>{
    setLoading(false)
    setShowResult(false)
    setinput("")
  }

  const onsent = async(prompt)=>{
    setresult("")
    setLoading(true)
    setShowResult(true)
    let response;
    if(prompt!==undefined){
      response = await run(prompt);
      setrecentPrompt(prompt)
      
    }else{
      setPrevPromt(prev=>[...prev,input])
      setrecentPrompt(input)
      response = await run(input);
    }
    let responsearray = response.split("**");
    let newResponse ="";
    for (let index = 0; index < responsearray.length; index++) {
      if(index ===0|| index%2!=1){
        newResponse += responsearray[index];
      }else{
        newResponse += "<b>" + responsearray[index] + "</b>";
      }
      
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newresponseArray = newResponse2.split(" ");
      for (let index = 0; index < newresponseArray.length; index++) {
        const nextWord = newresponseArray[index];
        deletePara(index,nextWord+" ");
        
      }
    
    setLoading(false)
    setinput("")
  }



  const contextValue = {
      prevPromt,
      recentPrompt,
      showResult,
      loading,
      result,
      input,
      setPrevPromt,
      onsent,
      setrecentPrompt,
      setinput,
      newchat, 
      theme,
      setTheme,
      handlethemeswitch
  }
  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider