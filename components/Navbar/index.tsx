import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { GiSharpedTeethSkull } from 'react-icons/gi'


const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-8 py-4
    border-b border-gray-200'>
      <Link href='/'>
        <div className='flex items-center'>
          <GiSharpedTeethSkull className='text-xl' />

          <span className="text-sm font-bold ml-2 uppercase tracking-tighter">
            razer
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Navbar