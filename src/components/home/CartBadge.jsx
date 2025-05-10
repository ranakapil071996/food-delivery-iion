import CartIcon from '../../assets/icons/shopping-bag.svg'

function CartBadge() {
  return (
    <div className="w-12 h-12 flex justify-center items-center relative bg-primary-light rounded-2xl cursor-pointer">
      <img src={CartIcon} alt="cart" />
      <div className='w-5 h-5 rounded-lg bg-primary text-[10px] leading-3.5 text-white font-bold absolute right-[-2px] top-[-2px] flex justify-center items-center'>
        4
      </div>
    </div>
  )
}

export default CartBadge