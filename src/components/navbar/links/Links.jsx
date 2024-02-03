"use client";
import Link from "next/link";
import NavLink from "./navLink/navLink";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false)

  const session = false
  const isAdmin = true


  return (
    <div >

      <div className="hidden lg:flex items-center	gap-3 	">
        {links.map((link => (
          <NavLink item={link} key={link.title} />

        )))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )
        }
      </div>
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden right-0" onClick={()=>setOpen((prev)=> !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>

  
      {
        open && (
        <div className="absolute right-0	flex flex-col lg:hidden	gap-2	z-[1] shadow bg-base-100 rounded-box px-6 py-2 w-52">
          {
            links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
        </div>
 ) }
     
    </div>
  )
};
export default Links
