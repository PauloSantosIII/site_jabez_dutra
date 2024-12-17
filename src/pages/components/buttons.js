export const ButtonContact = ({ src, alt, href, label, className }) => {
  return(
    <a href={href}  target='_blank' rel='noreferrer'>
      <button className={
        `flex w-[90%] lg:w-[500px] text-xl mx-auto lg:mx-0 px-4 py-3 justify-center gap-3
         font-exo-bold hover:font-exo-extraBold items-center
         border-2 border-white hover:border-white/70 rounded-full ${className}
        `
      }>
        <img src={src} alt={alt} className='w-6 h-6 text-white' />
        {label}
      </button>
    </a>
  )
}

export const ButtonFooter = ({ src, alt, href, label, className }) => {
  return(
    <a href={href}  target='_blank' rel='noreferrer'>
      <button className={
        `flex w-[90%] lg:w-[50px] text-xl mx-auto lg:mx-0 px-4 py-3 justify-center gap-3
         font-exo-bold hover:font-exo-extraBold items-center ${className}`
      }>
        <img src={src} alt={alt} className='w-6 h-6' />
      </button>
    </a>
  )
}