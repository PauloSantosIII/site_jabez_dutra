import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { ButtonFooter } from '../components/buttons'

const Footer = () => {
  return(
  <div className="slider-container flex flex-col bg-slate-800 w-screen h-full font-exo">
    <div className='flex'>
      <div className='w-4/12 mx-auto pt-28 pb-5 text-left'>
        <h3 className='text-white text-6xl'>
          Jabez Dutra
        </h3>
        <h6 className='flex justify-between items-center mt-5 text-white w-full text-xl bg-gradient-to-r from-slate-800 from-35% to-white'>
          Projetista & Executor
        
        
          <div className='flex'>
            <ButtonFooter
              label='@jabez_dutra'
              href='https://www.instagram.com/jabez_dutra/'
              src={instagram}
              alt='Logo Instagram'
              className='text-white'
            />

            <ButtonFooter
              label='orçamento'
              href='https://wa.link/7xj7v5'
              src={whatsapp}
              alt='Logo WhatsApp'
              className='text-white'
            />
          </div>
        </h6>

        <h6 className='flex justify-between items-center mt-5 text-white w-full text-xl'>
          Quitandinha & Região <br/>
          (41) 9 9677-8613
        </h6>
      </div>

      <div className='w-4/12 mx-auto pt-28 pb-5 text-left'>
      
      </div>
    </div>

    <div className='w-screen mx-auto py-1 bg-slate-200 text-slate-800'>
      <p>Site desenvolvido por paulosantosiii ®</p>
    </div>
  </div>
  )
}

export default Footer