


import { useState,useEffect } from "react"
import { Menu,X } from "lucide-react"

const navLinks = [
  {name: "Home", path: "#home"},
  {name: "About", path: "#about"},
  {name: "Skills", path: "#skills"},
  {name: "Projects", path: "#projects"},
  {name: "Certificates", path: "#certificates"},
  {name: "Contact", path: "#contact"},
]

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  const [activeSection,setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        if(window.scrollY >= section.offsetTop - 100) {
          setActiveSection(section.id)
        }
      })
    }

    
  addEventListener("scroll" , handleScroll)
  return () => removeEventListener("scroll", handleScroll)
  },[])

  const getLinkClass = (path) => {
    const sectionId = path.replace("#","")
    const isActive = activeSection === sectionId;

    return `block px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 no-underline ${
      isActive ? "text-neon font-bold" : "text-muted hover:text-neon"
    }`
  }

  

  return (
    <nav className="fixed top-0 w-full z-[999] bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px6 lg:px-8 flex justify-between items-center">
        {/* logo */}
        <a href="#home" className="font-mono text-[1.1rem] text-neon no-underline tracking-[0.05em]">&lt; Youssef / &gt;</a>

        {/* links */}
        <ul className="hidden sm:flex items-center gap-2 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className={getLinkClass(link.path)}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* btn  */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-muted hover:text-neon focus:outline-none bg-transparent border-none cursor-pointer transition-all duration-200">{isOpen ? <X size={26} /> : <Menu size={26}/>}</button>
        </div>
      </div>


        <ul
        className={`sm:hidden bg-[rgba(10,10,15,0.95)] border-b border-border px-4 space-y-1 list-none m-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0 pt-2 pb-4"
            : "max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none"
        }`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path} className={getLinkClass(link.path)}>{link.name}</a>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar
