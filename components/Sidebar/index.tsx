import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CgMenuLeft } from 'react-icons/cg'
import { IoCloseOutline } from 'react-icons/io5'
import { RiHome5Fill } from 'react-icons/ri'
import GoogleLogin from 'react-google-login'

import Discover from '@components/Discover'
import SuggestedAccounts from '@components/SuggestedAccounts'
import Footer from '@components/Footer'


const Sidebar = () => {
  const [open, setOpen] = useState(true)

  // Get user.
  const user = false

  // Normal link style.
  const normalLink = `flex items-center gap-3
  hover:bg-gray-100 p-3 justify-center xl:justify-start
  cursor-pointer rounded-md text-gray-500 hover:text-gray-900
  transition duration-200`

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-8 mt-3 cursor-pointer text-xl"
        onClick={() => setOpen(prev => !prev)}
      >
        {open ? <IoCloseOutline /> : <CgMenuLeft />}
      </div>

      {open && (
        <div className="xl:w-400 w-20 flex flex-col
        justify-start mb-10 border-r border-gray-100
        xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-100 xl:pb-4">
            <Link href='/'>
              <div className={normalLink}>
                <p className="text-xl">
                  <RiHome5Fill />
                </p>

                <span className="capitalize text-sm font-medium hidden xl:block">
                  for you
                </span>
              </div>
            </Link>
          </div>

          {!user && (
            <div className='px-2 py-4 hidden xl:block'>
              <p className='text-gray-400 text-xs font-medium'>
                Log in to like and comment on videos.
              </p>

              <div className="pr-4">
                <GoogleLogin
                  clientId=''
                  render={(renderProps) => (
                    <button
                      className='bg-white text-xs text-gray-900
                      px-4 py-1.5 border border-gray-900 rounded-full
                      font-medium mt-4 hover:text-white hover:bg-gray-900
                      cursor-pointer transition duration-200'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy='single_host_origin'
                />
              </div>
            </div>
          )}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Sidebar