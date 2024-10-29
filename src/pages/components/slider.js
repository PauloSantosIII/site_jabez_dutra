import Slider from "react-slick"
import estrutura from '../../assets/works/Estrutura Metálica.jpeg'
import fachada from '../../assets/works/Fachada Madeira.avif'
import grade from '../../assets/works/Grade Janela.jpeg'
import toldo from '../../assets/works/Toldo.jpeg'

const SliderPromo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  const works = [
    {
      image: estrutura,
      color: 'yellow-300',
      position: 'top-4',
      title: 'ESTRUTURAS METÁLICAS'
    },
    {
      image: fachada,
      color: 'yellow-700',
      position: 'bottom-1',
      title: 'FACHADAS'
    },
    {
      image: grade,
      color: 'black',
      position: 'top-2',
      title: 'GRADES DE JANELA'
    },
    {
      image: toldo ,
      color: 'blue-400',
      position: 'bottom-2',
      title: 'TOLDOS'
    }
  ]

  return(
  <div className="slider-container mt-4 w-10/12 lg:w-11/12 mx-auto">
    <Slider {...settings}>
      {works.map((work, index) => {
        return(
          <div key={index}>
            <img src={work.image} alt={work.title} className='w-full h-[500px]' />
            <h3 className={`absolute text-xl lg:text-7xl font-bold text-${work.color} ${work.position} shadow-lg`}>
              {work.title}
            </h3>
          </div>
        )
      })}
    </Slider>
  </div>
  )
}

export default SliderPromo