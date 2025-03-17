import Slider from "react-slick"
import estrutura from '../../assets/works/estruturas-metalicas/IMG-20250206-WA0040.jpg'
import fachada from '../../assets/works/fachadas/IMG-20250206-WA0044.jpg'
import grade from '../../assets/works/grades-seguranca/IMG-20250206-WA0041.jpg'
import toldo from '../../assets/works/toldos/IMG-20250206-WA0068.jpg'
import construcao from '../../assets/works/construcao/IMG-20250206-WA0102.jpg'
import galpao from '../../assets/works/galpoes/IMG-20250206-WA0045.jpg'
import placa from '../../assets/works/placas/IMG-20250206-WA0105.jpg'
import portao from '../../assets/works/portoes/IMG-20250206-WA0024.jpg'

import estrutura1 from '../../assets/works/estruturas-metalicas/IMG-20250206-WA0038.jpg'
import estrutura2 from '../../assets/works/estruturas-metalicas/IMG-20250206-WA0039.jpg'
import estrutura3 from '../../assets/works/estruturas-metalicas/IMG-20250206-WA0079.jpg'
import estrutura4 from '../../assets/works/estruturas-metalicas/IMG-20250206-WA0081.jpg'
import fachada1 from '../../assets/works/fachadas/IMG-20250206-WA0052.jpg'
import fachada2 from '../../assets/works/fachadas/IMG-20250206-WA0056.jpg'
import fachada3 from '../../assets/works/fachadas/IMG-20250206-WA0059.jpg'
import fachada4 from '../../assets/works/fachadas/IMG-20250206-WA0065.jpg'
import grade1 from '../../assets/works/grades-seguranca/IMG-20250206-WA0042.jpg'
import toldo1 from '../../assets/works/toldos/IMG-20250206-WA0068.jpg'
import toldo2 from '../../assets/works/toldos/IMG-20250206-WA0069.jpg'
import toldo3 from '../../assets/works/toldos/IMG-20250206-WA0063.jpg'
import toldo4 from '../../assets/works/toldos/IMG-20250206-WA0066.jpg'
import construcao1 from '../../assets/works/construcao/IMG-20250206-WA0097.jpg'
import construcao2 from '../../assets/works/construcao/IMG-20250206-WA0117.jpg'
import construcao3 from '../../assets/works/construcao/IMG-20250206-WA0093.jpg'
import construcao4 from '../../assets/works/construcao/IMG-20250206-WA0082.jpg'
import galpao1 from '../../assets/works/galpoes/IMG-20250206-WA0047.jpg'
import galpao2 from '../../assets/works/galpoes/IMG-20250206-WA0051.jpg'
import galpao3 from '../../assets/works/galpoes/IMG-20250206-WA0054.jpg'
import galpao4 from '../../assets/works/galpoes/IMG-20250206-WA0049.jpg'
import placa1 from '../../assets/works/placas/IMG-20250206-WA0103.jpg'
import placa2 from '../../assets/works/placas/IMG-20250206-WA0104.jpg'
import placa3 from '../../assets/works/placas/IMG-20250206-WA0103.jpg'
import placa4 from '../../assets/works/placas/IMG-20250206-WA0104.jpg'
import portao1 from '../../assets/works/portoes/IMG-20250206-WA0028.jpg'
import portao2 from '../../assets/works/portoes/IMG-20250206-WA0027.jpg'
import portao3 from '../../assets/works/portoes/IMG-20250206-WA0029.jpg'
import portao4 from '../../assets/works/portoes/IMG-20250206-WA0030.jpg'


const SliderPromo = ({ openModal, setOpenModal }) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  }

  const works = [
    {
      workId: 1,
      imagePrincipal: estrutura,
      color: 'text-yellow-100',
      position: 'bottom-6',
      title: 'ESTRUTURAS METÁLICAS',
      images: [estrutura1, estrutura2, estrutura3, estrutura4]
    },
    {
      workId: 2,
      imagePrincipal: fachada,
      color: 'text-yellow-300',
      position: 'top-1',
      title: 'FACHADAS',
      images: [fachada1, fachada2, fachada3, fachada4]
    },
    {
      workId: 3,
      imagePrincipal: grade,
      color: 'text-black',
      position: 'top-2',
      title: 'GRADES DE SEGURANÇA',
      images: [grade1]
    },
    {
      workId: 4,
      imagePrincipal: toldo,
      color: 'text-yellow-600',
      position: 'top-4',
      title: 'TOLDOS',
      images: [toldo1, toldo2, toldo3, toldo4]
    },    
    {
      workId: 5,
      imagePrincipal: construcao,
      color: 'text-yellow-600',
      position: 'top-4',
      title: 'CONSTRUÇÕES',
      images: [construcao1, construcao2, construcao3, construcao4]
    },    
    {
      workId: 6,
      imagePrincipal: galpao,
      color: 'text-yellow-600',
      position: 'top-4',
      title: 'GALPÕES',
      images: [galpao1, galpao2, galpao3, galpao4]
    },
    {
      workId: 7,
      imagePrincipal: placa,
      color: 'text-yellow-600',
      position: 'top-4',
      title: 'PLACAS',
      images: [placa1, placa2, placa3, placa4]
    },
    {
      workId: 8,
      imagePrincipal: portao,
      color: 'text-yellow-600',
      position: 'top-4',
      title: 'PORTÕES',
      images: [portao1, portao2, portao3, portao4]
    },
  ]
  
  return(
  <div className="container mx-auto">
    <Slider {...settings}>
      {works.map((work, index) => {
        return(
          <div key={index} className='min-w-0 px-3 relative'>
            <img
              src={work.imagePrincipal}
              alt={work.title}
              className='object-cover w-full h-[700px] rounded-xl'
              fill
            />
            <h3 className={`absolute text-xl lg:text-7xl font-bold ${work.color} ${work.position} shadow-2xl m-5`}>
              {work.title}
            </h3>

            <div className='absolute right-3 top-0 w-60 h-full py-3 grid grid-rows-4 gap-4 bg-black/50'>
              {work.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt='images of works'
                  fill
                  className='w-48 max-h-40 mx-auto mb-3 rounded-lg border-l-4 border-b-4 hover:scale-150'
                />
              ))}
            </div>
          </div>
        )
      })}
    </Slider>
  </div>
  )
}

export default SliderPromo