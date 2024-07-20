import React, { useContext } from 'react'
import context, { Context } from '../../context/context'

function Theme() {
  const {handlethemeswitch} = useContext(Context)
  return (

    <div className='p-5'>
      <label htmlFor="check" className='flex bg-gray-100 cursor-pointer relative w-10 h-5 rounded-full'>
        <input onClick={handlethemeswitch} type="checkbox" id='check' className='sr-only peer'/>
        <span className='w-2/5 h-3/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-5 transition-all duration-500'></span>  
      </label> 
    </div>
  )
}

export default Theme