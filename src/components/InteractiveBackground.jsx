import { useState, useEffect } from "react"

export default function InteractiveBackground() {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      setPos({ x, y })
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* fondo base */}
      <div className="absolute inset-0 bg-beige"></div>

      {/* blob que sigue el mouse */}
      <div
        className="absolute w-[100px] h-[100px] rounded-full blur-[120px] opacity-100 bg-brownDark animate-blob"
        style={{
          left: `${pos.x - 20}%`,
          top: `${pos.y - 20}%`
        }}
      />

      {/* blobs flotantes */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 bg-brownLight animate-blob2 left-[20%] top-[60%]" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-50 bg-brownLight animate-blob3 left-[70%] top-[30%]" />
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-70 bg-brownLight animate-blob3" />
    </div>
  )
}