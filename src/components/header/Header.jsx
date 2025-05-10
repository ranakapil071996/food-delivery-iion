import { useDispatch } from 'react-redux'
import CartBadge from '../home/CartBadge'
import Logo from '../logo/Logo'
import Avatar from './Avatar'
import Menu from './Menu'
import SearchBar from './SearchBar'
import { removeAuth } from '../../redux/slices/userSlice'

function Header() {
  const dispatch = useDispatch()

  return (
    <div className="flex-col flex items-center">
      <nav className='p-4 border-grey-light-new border-b w-full flex justify-center'>
        <div className='lg:max-w-[1110px] w-full flex justify-between items-center'>
          <div className='flex items-center gap-12'>
            <Logo />
            <SearchBar />
          </div>
          <section className='flex items-center'>
            <div className='items-center gap-7 text-grey-text hidden lg:flex'>
              <div className='leading-5 text-sm font-bold tracking-[0.1px]'>Restaurants</div>
              <div className='leading-5 text-sm font-bold tracking-[0.1px]'>Deals</div>
            </div>
            <div className='h-8 w-[1px] bg-grey-light-new hidden mx-5 lg:block'></div>
            <div className='leading-5 text-sm font-bold tracking-[0.1px] mr-6 hidden lg:block text-grey-text'>My orders</div>
            <div className='flex items-center gap-3.5'>
              <CartBadge />
              <Avatar />
              <div className='h-8 w-[1px] bg-grey-light-new lg:hidden'></div>
              <div onClick={() => dispatch(removeAuth())}>
                <Menu />
              </div>
            </div>
          </section>
        </div>
      </nav>
    </div>
  )
}

export default Header