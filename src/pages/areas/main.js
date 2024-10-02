import { useEffect } from 'react'
import image from '../../assets/ImagePage.png'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { ButtonContact } from '../components/buttonContact'

const Main = () => {
  useEffect(() => {
    let i = 0
    const tag = document.getElementById('text')
    const html = document.getElementById('text').innerHTML
    tag.setAttribute('data', html)
    const txt = tag.getAttribute('data')
    const speed = 120;

    const typeWriter = () => {
      if (i <= txt.length) {
        document.getElementById('text').innerHTML = txt.slice(0, (i+1))
        i++
        setTimeout(typeWriter, speed)
      }
    }
    typeWriter()
  }, [])
  
  return(
    <main className='w-screen h-screen bg-primary flex flex-col lg:flex-row'>
      <div className='lg:w-1/2 lg:max-w-1/2 lg:h-100 px-5 lg:pl-10'>
        <div className='h-[190px] lg:h-[210px]'>
          <h1 className='text-7xl leading-snug lg:text-left text-black font-exo-extraBold font-bold text-wrap mt-20' id='text'>
            Olá, eu sou <br/> Jabez Dutra
          </h1>

        </div>
        

        <p className='text-3xl text-black lg:text-right mt-7 lg:-mt-7 font-exo animate-sliding'>
          Projetista & Executor
        </p>

        <ButtonContact
          label='@jabez_dutra'
          href='https://www.instagram.com/jabez_dutra/'
          src={instagram}
          alt='Logo Instagram'
          className='mt-36 lg:mt-28 bg-gradient-to-r from-[#7B3AAA] via-[#F2050B] to-[#EEC600] hover:from-[#F2050B] hover:via-[#EEC600] hover:to-[#7B3AAA]'
        />

        <ButtonContact
          label='orçamento'
          href='https://wa.link/7xj7v5'
          src={whatsapp}
          alt='Logo WhatsApp'
          className='mt-10 bg-gradient-to-r from-[#6FAF37] via-[#4D8319] to-[#6FAF37] hover:from-[#4D8319] hover:via-[#6FAF37] hover:to-[#4D8319]'
        />
      </div>
      <div className='lg:w-1/2 lg:h-100'>
        <img
          src={image}
          alt='soldador'
          className='w-1/2 mx-auto mt-5 lg:mt-20'
        />
      </div>
    </main>
  )
}

export default Main