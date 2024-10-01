import Slider from "react-slick"

const SliderPromo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return(
  <div className="slider-container mt-4 w-11/12 mx-auto">
    <Slider {...settings}>
      <div className='bg-[url(https://picsum.photos/id/230/2000/500)] h-[500px]'>
        <h3 className='absolute text-7xl top-7'>
          SOLDAS
        </h3>
      </div>
      <div className='bg-[url(https://picsum.photos/id/231/2000/500)] h-[500px]'>
        <h3>2</h3>
      </div>
      {/* <div className='bg-[url(https://picsum.photos/id/232/2000/500)] h-[500px]'>
        <h3>3</h3>
      </div>
      <div className='bg-[url(https://picsum.photos/id/233/2000/500)] h-[500px]'>
        <h3>4</h3>
      </div>
      <div className='bg-[url(https://picsum.photos/id/234/2000/500)] h-[500px]'>
        <h3>5</h3>
      </div>
      <div className='bg-[url(https://picsum.photos/id/235/2000/500)] h-[500px]'>
        <h3>6</h3>
      </div> */}
    </Slider>
  </div>
  )
}

export default SliderPromo