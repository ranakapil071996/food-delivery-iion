import SearchIcon from '../../assets/icons/search.svg'

function SearchBar() {
  return (
    <div className='overflow-hidden h-10 w-56 bg-grey-light-new pr-3 rounded-xl lg:flex items-center hidden'>
      <input placeholder='Search' className='outline-0 border-0 bg-transparent pl-3 flex-1 h-full text-grey' type="text" />
      <img src={SearchIcon} alt="search" />
    </div>
  )
}

export default SearchBar