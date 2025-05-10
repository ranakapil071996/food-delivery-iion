import FoodCard from "../../cards/FoodCard"
import MufinPng from '../../../assets/images/food/mufin.png'
import BurgerPng from '../../../assets/images/food/burger.png'

function Deals() {
  const deals = [
    {
      name: 'All deserts',
      discount: '20% OFF',
      type: 'Deserty',
      image: MufinPng,
      styling: 'bg-primary-light text-primary'
    },
    {
      name: 'Big Burgers',
      discount: '50% OFF',
      type: 'Fooddies',
      image: BurgerPng,
      styling: 'bg-secondary-light text-secondary'
    },
  ]
  return (
    <div className="flex flex-col gap-7.5 lg:flex-row w-full">
      {
        deals.map(deal => <FoodCard key={deal.name} {...deal} />)
      }
    </div>
  )
}

export default Deals