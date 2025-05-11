/**
 * Input component with a label.
 *
 * @param {Object} props
 * @param {string} props.label - Label for the input field.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} [props.rest] - All other standard input props.
 */
function Input({ label, rightIcon, rightIconClick, error, ...rest }) {
  
  return (
    <>
      <div className="relative">
        <label className="text-grey-dark font-semibold text-xs mb-1" htmlFor={label}>{label}</label>
        <div className="relative flex items-center">
          <input
            className="w-full p-3 border-grey-light border rounded-lg outline-0 placeholder:text-grey text-sm leading-5 font-normal"
            id={label}
            type="text"
            {...rest}
          />
          {rightIcon && <img onClick={rightIconClick} src={rightIcon} className={`absolute right-3 ${Boolean(rightIconClick) && ' cursor-pointer'}`} />}
        </div>
        {error && <p className="text-red-500 text-xs absolute bottom-[-16px]">{error}</p>}
      </div>
    </>
  );
}

export default Input;
