import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ButtonFooter } from '../components/buttons'

const Footer = () => {
  return(
  <div className="bg-slate-800 font-exo">
    <div className='container mx-auto'>
      <div className='flex'>
        <div className='w-5/12 mx-auto pb-5 text-left'>
          <h3 className='text-white text-6xl'>
            Jabez Dutra
          </h3>
          <h6 className='flex justify-between items-center mt-5 text-white w-full text-xl bg-gradient-to-r from-slate-800 from-35% to-white'>
            Projetista & Executor
          
          
            <div className='flex'>
              <ButtonFooter
                href='https://www.instagram.com/jabez_dutra/'
                icon={<FaInstagram />}
                className='text-slate-800'
              />

              <ButtonFooter
                href='https://wa.link/7xj7v5'
                icon={<FaWhatsapp />}
                className='text-slate-800'
              />
            </div>
          </h6>

          <h6 className='flex justify-between items-center mt-5 text-white w-full text-xl'>
            Curitiba & Região Metropolitana <br/>
            (41) 9 9677-8613
          </h6>
        </div>

        <div className='w-5/12 mx-auto pb-5 my-auto'>
          <p className='flex justify-between items-center mt-5 text-center text-white w-full text-lg'>
            "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens."  <br/>
            Colossenses 3:23-24
          </p>
        </div>
      </div>
    </div>

    <div className='w-screen mx-auto text-base py-1 bg-slate-200 text-slate-800'>
      <a href='https://wa.link/ijzmjk' target='_blank' rel='noreferrer'>
        <p>Site desenvolvido por paulosantosiii ®</p>
      </a>
    </div>
  </div>
  )
}

export default Footer