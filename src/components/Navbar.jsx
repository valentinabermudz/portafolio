import { useState } from "react"
import { MdOutlineMailOutline, MdMenu, MdClose } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Navbar() {
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleCopyMail = () => {
    navigator.clipboard.writeText("valenbermudez15@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  const linkClass =
    "px-8 py-2 text-lg rounded-full transition hover:-translate-y-1 text-brown hover:bg-beige"

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center px-10 py-6 z-50">

      {/* ICONOS IZQUIERDA (ocultos en móvil) */}
      <div className="flex gap-5 relative md:flex hidden">

        <button
          onClick={handleCopyMail}
          title={copied ? "¡Copiado!" : "Copiar email"}
          className="bg-beigeSoft p-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-md relative"
        >
          <MdOutlineMailOutline className="text-brown text-xl" />

          {copied && (
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-brown whitespace-nowrap bg-beigeSoft px-2 py-1 rounded-full">
              ¡Copiado!
            </span>
          )}
        </button>

        <a
          href="https://github.com/valentinabermudz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-beigeSoft p-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-md"
        >
          <FaGithub className="text-brown text-xl" />
        </a>

        <a
          href="https://linkedin.com/in/valentina-bermudez-099975318"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-beigeSoft p-4 rounded-full transition transform hover:-translate-y-1 hover:shadow-md"
        >
          <FaLinkedin className="text-brown text-xl" />
        </a>

      </div>

      {/* MENU (desktop) */}
      <div className="flex gap-4 bg-beigeSoft px-4 py-3 rounded-full md:flex hidden">
        <a href="#home" className={linkClass}>Inicio</a>
        <a href="#about-me" className={linkClass}>Sobre mí</a>
        <a href="#projects" className={linkClass}>Proyectos</a>
      </div>

      {/* ICONO HAMBURGUESA (solo móvil) */}
      {!menuOpen && (
      <button 
        className="absolute top-2 mt-6 left-8 md:hidden text-brown text-2xl bg-beigeSoft p-3 rounded-full"
        onClick={toggleMenu}
      >
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>
      )}

      {/* MENU MÓVIL */}
      <div
      className={`absolute top-2 mt-6 left-8 bg-beigeSoft px-2 py-1 rounded-full flex gap-1 md:hidden ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
      >
        <a href="#home" className="text-brown text-base sm:text-lg px-3 py-2 rounded-full" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#about-me" className="text-brown text-base sm:text-lg px-3 py-2 rounded-full" onClick={() => setMenuOpen(false)}>Sobre mí</a>
        <a href="#projects" className="text-brown text-base sm:text-lg px-3 py-2 rounded-full" onClick={() => setMenuOpen(false)}>Proyectos</a>
      </div>

      <div className="fixed bottom-4 right-4 flex gap-4 md:hidden z-50">
        {/* Email */}
        <button
          onClick={handleCopyMail}
          title={copied ? "¡Copiado!" : "Copiar email"}
          className="bg-beigeSoft p-3 rounded-full  transition transform hover:shadow-md"
        >
          <MdOutlineMailOutline className="text-brown text-xl" />
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-brown whitespace-nowrap bg-beigeSoft px-2 py-1 rounded-full">
              ¡Copiado!
            </span>
          )}
        </button>

        {/* GitHub */}
        <a
          href="https://github.com/valentinabermudz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-beigeSoft p-3 rounded-full"
        >
          <FaGithub className="text-brown text-xl" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/valentina-bermudez-099975318"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-beigeSoft p-3 rounded-full"
        >
          <FaLinkedin className="text-brown text-xl" />
        </a>
      </div>

    </nav>
  )
}
