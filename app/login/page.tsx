import Image from 'next/image'
import * as dataJson from '../../data.json'
import { redirect } from 'next/navigation'
import { GitHubIcon, TwitterIcon, Default } from '../components/elements/socialIcons'

export const dynamic = 'force-dynamic',
  runtime = 'edge'

function LinkCard({ href, title, image }: { href: string; title: string; image?: string }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl'
    >
      <div className='flex text-center w-full'>
        <div className='w-10 h-10'>
          {image && (
            <div className='m-auto'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_9914_10)'>
                  <path
                    d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z'
                    fill='currentColor'
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
        <h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  )
}

interface Data {
  name: string
}

interface Link {
  href: string
  title: string
}

export default async function Profile() {
  const data: Data | undefined = dataJson

  if (!dataJson) {
    redirect('https://linktr.ee/')
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded shadow-md">
      
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">User</label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full text-400 py-2 px-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          Log-in
        </button>
      </form>
    </div>
  </div>
  )
}
