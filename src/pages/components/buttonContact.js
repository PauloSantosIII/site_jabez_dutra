export const ButtonContact = ({ src, alt, href, label, className }) => {
  return(
    <a href={href}  target='_blank' rel='noreferrer'>
      <button className={
        `flex w-[90%] lg:w-[300px] text-xl mx-auto lg:mx-0 px-4 py-3 justify-center gap-3
         font-exo-bold hover:font-exo-extraBold items-center
         border-4 border-black hover:border-black/70 rounded-full ${className}
        `
      }>
        <img src={src} alt={alt} className='w-6 h-6' />
        {label}
      </button>
    </a>
  )
}