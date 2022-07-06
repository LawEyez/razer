import Link from 'next/link'
import React, { useMemo } from 'react'

import { topics as _topics } from '@utils/data'
import { useRouter } from 'next/router'


const Discover = () => {
  // Get topics.
  const topics = useMemo(() => _topics, [])

  // Topic styles.
  const activeTopicStyles = `flex items-center space-x-1 border border-gray-900
  rounded-full px-2 py-1 text-white bg-gray-900
  transition duration-200 cursor-pointer`

  const normalTopicStyles = `flex items-center space-x-1 border border-gray-300
  rounded-full px-2 py-1 hover:text-white hover:bg-gray-900 hover:border-gray-900
  transition duration-200 cursor-pointer`

  const router = useRouter()
  const { topic: currentTopic } = router.query

  return (
    <div className='xl:border-b xl:border-gray-200 pb-6'>
      <p className='capitalize text-gray-500 font-semibold m-3
      mt-4 hidden xl:block'>
        popular topics
      </p>

      <div className="flex gap-3 flex-wrap">
        {topics.map((topic) => (
          <Link href={`/?topic=${topic.name}`} key={topic.name}>
            <div className={currentTopic === topic.name ? activeTopicStyles : normalTopicStyles}>
              <span className='text-lg'>
                {topic.icon}
              </span>

              <span className="text-xs capitalize font-medium hidden xl:inline">
                {topic.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover