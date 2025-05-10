import ShoppingBagIcon from "../vectors/ShoppingBag"
import ClockIcon from '../../assets/icons/clock.svg'
import { categories } from "../../utils/constants";

function RestaurantCard({ image, name, deliveryTime, avgCost, categoryServes, id, isFeatured }) {

  const renderCategoryTags = () => {
    const categoryTags = [];
    categoryServes.map(catId => {
      const category = categories[catId];
      if (category) {
        categoryTags.push(<div key={catId + name + id} className="bg-grey-light-new text-grey-dark flex items-center gap-2 rounded-full py-1.5 px-2.5">
          <img className="w-3 h-3" src={category.image} alt={category.name} />
          <p className="text-xs font-semibold leading-4">{category.name}</p>
        </div>)
      }
    });
    return categoryTags;
  }

  return (
    <div className="w-full rounded-2xl border-grey-light-new border overflow-hidden relative">
      {isFeatured && (<div className="font-bold text-[11px] leading-4 bg-primary px-4 py-2 rounded-bl-xl top-0 right-0 absolute text-white">FEATURED</div>)}
      <img className="w-full h-[160px] object-cover" src={image} alt={name} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h5 className="text-[18px] leading-6 font-bold text-grey-text">{name}</h5>
          <div>
            <ShoppingBagIcon className="text-grey-light" />
            {/* <div className="rounded-md w-4 h-16 flex justify-center items-center">4</div> */}
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <img src={ClockIcon} alt="clock" />
          <p className="font-semibold text-xs leading-4 text-grey">{deliveryTime}</p>
          <div className="w-[3px] h-[3px] rounded-full bg-primary mx-0.5"></div>
          <p className="font-semibold text-xs leading-4 text-grey">{avgCost}</p>
        </div>
        <div className="mt-3.5 flex items-center gap-2">{renderCategoryTags()}</div>
      </div>
    </div>
  )
}

export default RestaurantCard