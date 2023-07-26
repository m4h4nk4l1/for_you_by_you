import Link from 'next/link'
import {auth} from '@clerk/nextjs'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px]">
        <h1 className="text-5xl">The best journal tracker app</h1>
        <p className="text-2xl text-white/60 mb-4 ">this is the best app for tracking your mood based on your daily journals and weekly journals about your day in life and AI will take care of tracking.</p>
        <div>
          <Link href={href}>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
