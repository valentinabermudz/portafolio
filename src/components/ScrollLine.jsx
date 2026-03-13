import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollLine() {
  const { scrollYProgress } = useScroll()

  // Para suavizar la animación
  const pathLength = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <svg
      className="fixed top-0 right-1 -translate-x-1/2 z-0 w-[80px] sm:w-[100px] h-[2000px]"
      preserveAspectRatio="none"
      viewBox="0 0 100 2000"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M50 0 C 50 200, 80 400, 50 600 C 20 800, 50 1000, 50 1200 C 80 1400, 50 1600, 50 2000"
        stroke="#977f93" // color
        strokeWidth="8" // línea más gruesa
        strokeLinecap="round" // extremos redondeados
        strokeLinejoin="round"  // uniones redondeadas
        strokeDasharray="1" 
        strokeDashoffset={pathLength} // animación de “dibujo”
      />
    </svg>
  )
}