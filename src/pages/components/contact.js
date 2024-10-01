import whatsapp from '../../assets/Whatsapp.png'

const Contact = () => {
  return(
    <div className='w-28 h-28 absolute bottom-10 right-6 flex flex-col cursor-pointer'>
      <a href='https://wa.link/7xj7v5' target='_blank' rel='noreferrer'>
        <img
          src={whatsapp}
          alt='WhatsApp Logo'
          className=''
        />

        <p className='text-base text-[#FFA64D] font-bold subpixel-antialiased font-Exo2'>
          FALE COMIGO
        </p>
      </a>
    </div>
    
  )
}

export default Contact