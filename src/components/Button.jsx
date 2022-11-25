import React from "react"

const Button = ({ color, bgColor, text, size, borderRadius, onClick }) => {
  return (
    <button
      type="button"
      className={`text-${size || "md"} p-3 hover:drop-shadow-xl`}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
    >
      {text}
    </button>
  )
}

export default Button
