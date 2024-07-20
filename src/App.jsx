import Main from "./components/Main/Main"
import SideBar from "./components/SideBar/SideBar"
import React, { useEffect, useState } from "react"
import Theme from './components/Theme/Theme'



function App() {
  return (
    <>
     <SideBar/>
     <Main/>
     <div className="bg-[#efcce4] dark:bg-[#5e0055]">
      <Theme/>
    </div>
    </>
  )
}

export default App
