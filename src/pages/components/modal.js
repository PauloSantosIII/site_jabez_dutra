import { CgClose } from 'react-icons/cg'
import placa1 from '../../assets/works/placas/IMG-20250206-WA0103.jpg'
import placa2 from '../../assets/works/placas/IMG-20250206-WA0104.jpg'
import placa3 from '../../assets/works/placas/IMG-20250206-WA0105.jpg'
import portao1 from '../../assets/works/portoes/IMG-20250206-WA0024.jpg'
import portao2 from '../../assets/works/portoes/IMG-20250206-WA0025.jpg'
import portao3 from '../../assets/works/portoes/IMG-20250206-WA0026.jpg'
import portao4 from '../../assets/works/portoes/IMG-20250206-WA0027.jpg'
import portao5 from '../../assets/works/portoes/IMG-20250206-WA0028.jpg'
import portao6 from '../../assets/works/portoes/IMG-20250206-WA0029.jpg'
import portao7 from '../../assets/works/portoes/IMG-20250206-WA0030.jpg'

export const Modal = (workId) => {

  const works = [
    {
      workId: 1,
      images: [],
      title: 'ESTRUTURAS METÁLICAS',
      description: ''
    },
    {
      workId: 2,
      images: [],
      title: 'FACHADAS',
      description: ''
    },
    {
      workId: 3,
      images: [],
      title: 'GRADES DE SEGURANÇA',
      description: ''
    },
    {
      workId: 4,
      images: [],
      title: 'TOLDOS',
      description: ''
    },    
    {
      workId: 5,
      images: [],
      title: 'CONSTRUÇÕES',
      description: ''
    },    
    {
      workId: 6,
      images: [],
      title: 'GALPÕES',
      description: ''
    },
    {
      workId: 7,
      images: [placa1, placa2, placa3],
      title: 'PLACAS',
      description: 'Sempre prezando pela qualidade do material e acabamento, para que o destaque fique sempre visível.'
    },
    {
      workId: 8,
      images: [portao1, portao2, portao3, portao4, portao5, portao6, portao7],
      title: 'PORTÕES',
      description: ''
    },
  ]

  return(
    <div className='w-screen h-screen bg-black/40 absolute left-0 top-0 flex z-10'>
      <modal className='mx-auto w-11/12 h-5/6 bg-white rounded-lg my-auto relative py-9 px-4'>
        <button
          className='border border-black rounded-full w-8 h-8 flex items-center justify-center absolute top-3 right-3 hover:bg-slate-400/40'
          onClick={ () => alert('CLICOU')}
        >
          <CgClose />
        </button>

        {works.map((item, index) => {
          if (workId === item.workId) {
            return(
              <div key={index} className='grid grid-flow-col grid-rows-3 h-full'>
                <div className='flex flex-col gap-7 row-span-1'>
                  <h1 className='text-left text-4xl'>{item.title}</h1>
                  <p className='text-xl text-center'>{item.description}</p>
                </div>

                <div className='flex-[0_0_100%] px-5 row-span-2'>
                  <p className='mb-5'>ALGUMAS IMAGENS</p>

                  <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 h-full lg:h-96 items-center overflow-auto snap-y no-scrollbar'>
                    {item.images.map((item, index) => {
                      return(
                        <div key={index} className='mx-auto min-w-0 px-3'>
                          <img
                            src={item}
                            alt='Imagem de trabalho'
                            className='object-fill lg:max-h-48 lg:min-h-48 lg:max-w-56 rounded-lg hover:scale-110 duration-300'
                            fill
                            quality={100}
                            priority
                          />  
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          } else {
            return null
          } 
        })}
      </modal>
    </div>
  )
}