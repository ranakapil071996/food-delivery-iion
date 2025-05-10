
function CategoryCard({ image, name, active, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`flex flex-col gap-3 py-3.5
      justify-center 
      items-center text-grey-dark text-[13px] leading-4.5 font-bold
      rounded-2xl
     border-grey-light-new border cursor-pointer
      hover:bg-primary-light
      hover:border-primary-hover
      max-w-[160px]
      ${active && ' border-primary bg-primary-light text-primary'}
      `}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default CategoryCard