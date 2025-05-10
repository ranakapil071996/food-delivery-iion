
function FoodCard({ image, name, discount, styling, type }) {
  return (
    <div className={`flex-1 items-center p-4 pb-0 rounded-2xl flex flex-col overflow-hidden  ${styling} lg:flex-row-reverse lg:items-start lg:justify-between`}>
      <div className="flex justify-between items-start lg:flex-col lg:pr-5 lg:pb-4 w-full lg:h-full">
        <div>
          <h5 className="text-grey-text text-xl leading-7 mb-2 font-semibold">{name}</h5>
          <h2 className="font-extrabold text-[40px] leading-14">{discount}</h2>
        </div>
        <h5 className="text-grey font-normal text-sm leading-5">{type}</h5>
      </div>
      <img className={'max-w-2xs'} src={image} alt="img" />
    </div>
  )
}

export default FoodCard