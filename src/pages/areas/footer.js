import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { ButtonContact } from '../components/buttonContact'

const Footer = () => {
  return(
  <div className="slider-container bg-slate-800 w-screen h-[400px] mx-auto">
    <ButtonContact
      label='@jabez_dutra'
      href='https://www.instagram.com/jabez_dutra/'
      src={instagram}
      alt='Logo Instagram'
      className='mt-32 lg:mt-44 bg-gradient-to-r from-[#7B3AAA] via-[#F2050B] to-[#EEC600] hover:from-[#F2050B] hover:via-[#EEC600] hover:to-[#7B3AAA]'
    />

    <ButtonContact
      label='orçamento'
      href='https://wa.link/7xj7v5'
      src={whatsapp}
      alt='Logo WhatsApp'
      className='mt-10 bg-gradient-to-r from-[#6FAF37] via-[#4D8319] to-[#6FAF37] hover:from-[#4D8319] hover:via-[#6FAF37] hover:to-[#4D8319]'
    />
  </div>
  )
}

export default Footer