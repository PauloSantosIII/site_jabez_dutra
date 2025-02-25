import { useEffect } from 'react'
import image from '../../assets/logo.svg'
import { ButtonContact } from '../components/buttons'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Main = () => {
  useEffect(() => {
    let i = 0
    const tag = document.getElementById('text')
    const html = document.getElementById('text').innerHTML
    
    tag.setAttribute('data', html)
    const txt = tag.getAttribute('data')
    const speed = 150

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
    <section className='bg-gradient-to-b from-primary from-55% to-slate-200 py-6 overflow-hidden'>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row'>
        
        <div className=''>
          <div className='h-[190px] lg:h-[210px]'>
            <h1 className='text-7xl leading-snug lg:text-left text-white font-exo-extraBold font-bold text-wrap mt-20' id='text'>
              Olá! Sou <br/> Jabez Dutra
            </h1>
          </div>

          <p className='text-3xl lg:text-4xl text-white lg:text-right mt-7 lg:-mt-5 lg:-mr-12 font-exo animate-sliding'>
            Projetista & Executor
          </p>

          <ButtonContact
            label='@jabez_dutra'
            href='https://www.instagram.com/jabez_dutra/'
            icon={<FaInstagram />}
            className='text-white mt-16 lg:mt-44 bg-gradient-to-r from-[#7B3AAA] via-[#F2050B] to-[#EEC600] hover:from-[#F2050B] hover:via-[#EEC600] hover:to-[#7B3AAA]'
            iconClassName='white'
          />

          <ButtonContact
            label='orçamento'
            href='https://wa.link/7xj7v5'
            icon={<FaWhatsapp />}
            alt='Logo WhatsApp'
            className='text-white mt-10 bg-gradient-to-r from-[#6FAF37] via-[#4D8319] to-[#6FAF37] hover:from-[#4D8319] hover:via-[#6FAF37] hover:to-[#4D8319]'
          />
        </div>

        <div className='' data-aos='zoom-in-up' data-aos-duration='1000'>
          <img
            src={image}
            alt='soldador'
            className='w-1/2 mx-auto mt-20 lg:mt-20'
          />

          <p className='text-3xl lg:text-4xl text-white font-notable'>
            CONDUTRA
          </p>

          <p className='text-base lg:text-xl text-yellow-500 uppercase'>
            soluções em serviços <br></br> execução de projeto
          </p>
        </div>
      </div>
      {/* 

       */}
    </section>
  )
}

export default Main