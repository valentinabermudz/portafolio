import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section id="projects" 
    className="min-h-screen overflow-hidden flex flex-col justify-center px-12 pb-10 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold">Proyectos</h2>
      </motion.div>
    </section>
  )
}