'use client'

import { Navlink } from "@/lib/constant"
import Link from "next/link"
import Dmtoggle from "./Dmt"

function Navbar() {
  return (
    <>
      <header className="w-full dark:bg-primary py-5 anim">
        <div className="flex justify-center items-center">
          <nav className="flex justify-center gap-10 dark:text-white uppercase font-Quisand font-semibold">
            {Navlink.map((data) => (
              <div key={data.name}>
                <Link href={data.link} className="hoverText">{data.name}</Link>
              </div>
            ))}
          </nav>  
          <Dmtoggle />  
        </div>
      </header>
    </>
  )
}

export default Navbar