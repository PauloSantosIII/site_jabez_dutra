import { useState } from 'react'
import { Modal } from '../components/modal'
import SliderPromo from '../components/slider'


const Works = () => {
  const [openModal, setOpenModal] = useState(false)

  

  return(
    <section className='bg-gradient-to-b from-slate-200 from-1% to-slate-800 font-exo overflow-hidden py-16 relative'>
      <SliderPromo changeModal={() => setOpenModal()}  />


      {openModal ? <Modal /> : null}
    </section>
  )
}

export default Works