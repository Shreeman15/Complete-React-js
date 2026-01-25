import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className="px-6 py-4">

      {/* Tabs */}
      <div className="flex justify-center gap-16">
        <Link
          className="font-semibold text-xl hover:text-gray-300"
          to="/Product/Man"
        >
          Man
        </Link>

        <Link
          className="font-semibold text-xl hover:text-gray-300"
          to="/Product/Women"
        >
          Women
        </Link>
      </div>

      {/* Content BELOW tabs */}
      <div className="mt-8">
        <Outlet />
      </div>

    </div>
  )
}

export default Product
