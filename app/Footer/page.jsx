import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Categories Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold mb-4">CATEGORIES</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    First Link
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Second Link
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Third Link
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Fourth Link
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex items-center mt-12">
          <div className="mr-4">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
             
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold">Footer</h3>
            <p className="text-gray-600">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
