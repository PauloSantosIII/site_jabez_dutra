import logo from '../../assets/logo.png'
import SubHeader from './sub-header'

const Header = () => {
  return(
    <>
      <header class='bg-[#FFA64D] h-full w-full flex justify-between'>
        <img
          src={logo}
          alt='Logo'
          class='bg-white rounded-3xl w-60 h-60 absolute ml-8 mt-4'
        />

        <h1 class='text-[#333] text-6xl ml-80 my-4 font-Exo2-ExtraBold'>
          JABEZ DUTRA
        </h1>
      </header>

      <SubHeader />
    </>
    
  )
}

export default Header