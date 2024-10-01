import Instagram from '../../assets/Instagram.png'

const Footer = () => {
  return(
    <footer>
      <h6>FOOTER</h6>
      <a href='https://www.instagram.com/jabez_dutra/' target='_blank' rel='noreferrer'>
        <img src={Instagram} alt='Logo instagram' width={32} height={32} />
      </a>
    </footer>
  )
}

export default Footer