import image from '../../assets/ImagePage.png'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { ButtonContact } from './buttonContact'

const Page = () => {
  return(
    <div className='w-screen h-screen bg-primary flex'>
      <div className='w-1/2 max-w-1/2 h-100 pl-10'>
        <h1 className='text-7xl leading-snug text-left text-black font-exo-extraBold font-bold text-wrap mt-20'>
          Olá, eu sou <br/>
          Jabez Dutra
        </h1>

        <p className='text-2xl text-black text-right -mt-8 font-exo'>
          Projetista & Executor
        </p>

        <ButtonContact
          label='@jabez_dutra'
          href='https://www.instagram.com/jabez_dutra/'
          src={instagram}
          alt='Logo Instagram'
          className='mt-28 bg-gradient-to-r from-[#7B3AAA] via-[#F2050B] to-[#EEC600]'
        />

        <ButtonContact
          label='orçamento'
          href='https://wa.link/7xj7v5'
          src={whatsapp}
          alt='Logo WhatsApp'
          className='mt-10 bg-gradient-to-r from-[#6FAF37] via-[#4D8319] to-[#6FAF37]'
        />
      </div>
      <div className='w-1/2 h-100'>
        <img
          src={image}
          alt='soldador'
          className='w-1/2 mx-auto mt-20'
        />
      </div>
    </div>
  )
}

export default Page