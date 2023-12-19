import Image from 'next/image'
import HeadSection from './components/HeadSection'
import { Container } from 'postcss'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
    <Navbar />
    <div className='container  mt-24 mx-auto px-12 py-4'>
    <HeadSection />
    <AboutMe />
    <Projects />
    </div>
    </main>
  )
}
