import { useMemo } from "react"
import { restaurants } from "../../../utils/constants"
import RestaurantCard from "../../cards/RestaurantCard"
import intersection from 'lodash/intersection'
import { useSelector } from "react-redux";

function Restaurants() {
  const selectedCategories = useSelector(state => state.cart.selectedCategories);
  const filteredRest = useMemo(filterRestaurants, [selectedCategories]);

  function filterRestaurants() {
    const categoryIds = [];
    Object.entries(selectedCategories).map((val) => {
      if (val[1]) {
        categoryIds.push(Number(val[0]));
      };
    });
    
    if (categoryIds.length) {
      return [...restaurants].filter(restaurant => intersection(restaurant.categoryServes, categoryIds).length > 0)
    } else {
      return restaurants
    }
  }

  return (
    <>
      <h2 className="text-xl leading-7 font-semibold text-grey-text">Nearby restaurants</h2>
      <div className="mt-4 flex flex-col gap-7.5 lg:grid lg:grid-cols-3">
        {
          filteredRest.map(restaurant => <RestaurantCard key={restaurant.id} {...restaurant} />)
        }

      </div>
    </>
  )
}

export default Restaurants