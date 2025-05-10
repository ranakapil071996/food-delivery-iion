import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../../../utils/constants';
import CategoryCard from '../../cards/CategoryCard';
import { toggleCategory } from '../../../redux/slices/cartSlice';

function Categories() {
  const selectedCategories = useSelector(state => state.cart.selectedCategories)
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-3 gap-[15px] lg:auto-cols-fr lg:grid-flow-col">
      {Object.values(categories).map(category => <CategoryCard
        onSelect={() => dispatch(toggleCategory(category.id))}
        active={selectedCategories[category.id]}
        key={category.id}
        {...category} />)}
    </div>
  )
}

export default Categories