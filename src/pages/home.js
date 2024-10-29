// import { useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react'

import Main from './areas/main'
import About from './areas/about'
import Works from './areas/works'
import Footer from './areas/footer'

const Home = () => {
  // const main = useRef()
  // const scrollTween = useRef()
  // const { contextSafe } = useGSAP(
  //   () => {
  //     const panels = gsap.utils.toArray('.panel')

  //     panels.forEach((panel, i) => {
  //       ScrollTrigger.create({
  //         trigger: panel,
  //         start: 'top bottom',
  //         end: '+=200%',
  //         onToggle: (self) => self.isActive && !scrollTween.current && goToSection(i),
  //         id: 'panel-' + i,
  //         markers: true
  //       })
  //     })
  //     ScrollTrigger.create({
  //       start: 0,
  //       end: 'max',
  //       snap: 1 / (panels.length - 1)
  //     })
  //   },
  //   { scope: main }
  // )

  // const goToSection = contextSafe((i) => {
  //   scrollTween.current = gsap.to(window , {
  //     scrollTo: { y: i * window.innerWidth, autoKill: false },
  //     duration: 1,
  //     id: 'scrollTween',
  //     onComplete: () => (scrollTween.current = null),
  //     overwrite: true
  //   })
  // })


  return(
    <main className='w-screen h-full'>
      <Main />
      <About />
      <Works />
      <Footer />
    </main>
  )
}

export default Home