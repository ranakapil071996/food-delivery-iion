import Header from "../components/header/Header"
import Categories from "../components/home/categories/Categories"
import Deals from "../components/home/deals/Deals"
import Restaurants from "../components/home/restaurants/Restaurants"

function HomePage() {
  return (
    <>
      <Header />
      <div className="flex-col flex items-center">
        <div className="py-6 px-[15px] lg:max-w-[1110px] w-full">
          <Deals />
          <div className="mt-8 pb-10">
            <Categories />
          </div>
          <Restaurants />
        </div>
      </div>
    </>
  )
}

export default HomePage