export const ButtonContact = ({ src, alt, href, label, className }) => {
  return(
    <a href={href}  target='_blank' rel='noreferrer'>
      <button className={`flex w-[300px] text-xl px-4 py-3 justify-center gap-3 font-exo-bold items-center border-4 border-black rounded-full ${className}`}>
        <img src={src} alt={alt} className='w-6 h-6' />
        {label}
      </button>
    </a>
  )
}