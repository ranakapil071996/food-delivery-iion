import MenuIcon from '../../assets/icons/menu.svg'

function Menu() {
  return (
    <div className='w-11 h-11 flex justify-center items-center bg-grey-light-new rounded-2xl cursor-pointer'>
      <img src={MenuIcon} alt="menu" />
    </div>
  )
}

export default Menu