import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Home from './pages/home'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const App = () => {
  return (
    <div className='flex box-border m-0 p-0 flex-col text-center min-h-full overflow-y-auto font-Exo2'>
      <Home />
    </div>
  )
}

export default App
