import { useState } from "react";


 const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
    const [navLink, setNavLink]=useState(navLinks);
    const [navToggle, setNavToggle]=useState(false);

    const handleNavBar=()=>{
        setNavToggle(!navToggle);
    }
  return (

    <nav className=" relative">
            <button className=" absolute top-0 right-0  p-12 text-red-500 text-2xl font-bold md:hidden bg-green-200" onClick={handleNavBar}>{navToggle ? '=': 'X'}</button>
        <div className="hidden md:block">
            <div className="flex justify-center items-end gap-32 bg-green-400 p-12 text-black">
            {navLink?.map((item,index)=>{
            return(
                <div key={index}>
                <a href={`${item.path}`}>{item.name}</a>
                </div>
            )
        })}
       </div>
        </div>


        {/* small devis */}
        <div className="md:hidden">
            <div className={`${navToggle ? 'hidden': 'block'} flex flex-col justify-center items-center gap-12 bg-green-400 p-12 text-black`}>
            {navLink?.map((item,index)=>{
            return(
                <div key={index}>
                <a href={`${item.path}`}>{item.name}</a>
                </div>
            )
        })}
       </div>
        </div>
    </nav>
  )
}

export default NavBar