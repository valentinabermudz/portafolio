import { motion } from "framer-motion"

export default function Home() {
  return (
    <section 
      id="home"
      className="min-h-screen overflow-hidden flex flex-col justify-center px-12 pb-10 pt-20">

      {/* Contenido superior */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne text-brownLight leading-[0.92]"
          style={{ fontSize: "clamp(52px, 9.5vw, 90px)" }}
        >
          Valentina
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne text-brownLight leading-[0.92]"
          style={{ fontSize: "clamp(52px, 9.5vw, 90px)" }}
        >
          Bermudez
        </motion.div>
      </div>

      {/* Contenido inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 flex justify-between items-end pt-10"
      >
        <div className="flex flex-col gap-1.5">
          {[
            "Estudiante de Ingeniería en Sistemas",
            "Analista Desarrolladora de Sistemas",
          ].map((r) => (
            <span
              key={r}
              className="font-montserrat text-softBeige"
              style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
            >
              {r}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  )
}