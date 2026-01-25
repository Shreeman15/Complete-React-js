import React from 'react'
import Man from './Man'
import Women from './Women'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div className='flex justify-center gap-16 pt-4'>
     <Link className='font-semibold text-xl' to = '/Product/Man'>Man</Link>
     <Link className='font-semibold text-xl'  to = '/Product/Women'>Women</Link>
    </div>
  )
}

export default Product