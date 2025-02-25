import image from '../../assets/Jabez.png'

const About = () => {
  return(
    <section className='bg-slate-200 text-secondary font-exo flex overflow-hidden' data-aos='fade-right' data-aos-duration='900' data-aos-delay='500'>
      <div className='container p-12 mx-auto flex'>
        <div className='hidden lg:block relative w-1/3 h-full rounded-3xl overflow-hidden'>
          <img
            src={image}
            alt='Jabez Dutra'
            fill
            quality={100}
            priority
            className='object-cover hover:scale-110 duration-300'
          />
        </div>
        

        <div className='relative lg:w-2/3 text-lg lg:text-3xl lg:pl-4 text-center lg:text-left flex flex-col gap-8 lg:gap-0 justify-between'>
          <p className=''  data-aos='fade-left' data-aos-delay='700'>
            Olá! Sou <b>Jabez Dutra</b>, <br></br>
            autônomo e ativo na área de execução e prestação de serviços desde 1990.
          </p>
          
          <span className='border-b-2 border-secondary mx-16'></span>
          
          <p className=''  data-aos='fade-left' data-aos-delay='900'>
            Prezando sempre pela excelência desde o projeto, atendendo com pontualidade e qualidade, com o melhor preço no custo benefício.
          </p>

          <span className='border-b-2 border-secondary mx-16'></span>
          
          <p className=''  data-aos='fade-left' data-aos-delay='1100'>
            Referência em nosso trabalho, busco sempre a conciliação de data, horário e orçamento de acordo com cada cliente, sempre buscando melhores fornecedores.
          </p>

          <span className='border-b-2 border-secondary mx-16'></span>
          
          <p className=''  data-aos='fade-left' data-aos-delay='1300'>
            Atendimento em Curitiba, região metropolitana ou onde houver necessidade.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About