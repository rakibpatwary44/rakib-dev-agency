"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BiMoon, BiSun } from "react-icons/bi"

export default function ThemeToggler() {
    const [mounted , setMounted] = useState(false)

    const {theme , setTheme , systemTheme} = useTheme()
    useEffect(()=>{
  const mountCheck = ()=>{
    setMounted(true)
  }
  mountCheck()
    },[])
    if(!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <button onClick={()=>setTheme(currentTheme === "dark" ? "light" : "dark")} className="p-2 transition w-10 h-10 cursor-pointer bg-white rounded-full  flex flex-col items-center justify-center">
  {currentTheme === "dark" ? (
    <BiSun className="text-black w-6 h-6 cursor-pointer"/>
  ):(<BiMoon className="text-black w-6 h-6 cursor-pointer"/>)}
    </button>
  )
}
