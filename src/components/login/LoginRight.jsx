import Carousel1 from '../../assets/images/carousel-1.png'

const LoginRight = () => {
  return (
    <div className="bg-primary-hover h-full flex flex-col items-center">
      <img className='w-9/12' src={Carousel1} alt="carasoul" />
      <div className='flex flex-col items-center'>
        <h3 className='font-bold leading-10.5 text-white tracking-[0.1px] text-[32px]'>Leave reviews for all meals</h3>
        <p className='text-sm leading-5 text-center w-8/12 text-white mt-4'>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>

        <div className='flex justify-center gap-2 mt-10'>
          <div className='w-2 h-2 bg-white rounded-full opacity-30'></div>
          <div className='w-2 h-2 bg-white rounded-full opacity-100'></div>
          <div className='w-2 h-2 bg-white rounded-full opacity-30'></div>
          <div className='w-2 h-2 bg-white rounded-full opacity-30'></div>

        </div>
      </div>
    </div>
  )
}

export default LoginRight