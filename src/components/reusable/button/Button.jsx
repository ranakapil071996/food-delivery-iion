
function Button({ children, ...rest }) {
  return (
    <button className='h-11 flex justify-center items-center cursor-pointer hover:bg-primary-hover active:scale-[0.95] transition-all w-full outline-0 border-0 bg-primary rounded-lg p-3 text-sm leading-4 font-bold text-white' {...rest}>{children}</button>
  )
}

export default Button