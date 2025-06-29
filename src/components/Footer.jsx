import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="relative bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Abdul Hakim Said. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Built with ❤️ using React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
