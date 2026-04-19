import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-7">
      <div className="max-w-content mx-auto px-6 flex items-center justify-center">
        <span className="text-text-muted text-[13px] text-center">
          © {new Date().getFullYear()} Konda Venkata Sai Harikrishna
        </span>
      </div>
    </footer>
  )
}