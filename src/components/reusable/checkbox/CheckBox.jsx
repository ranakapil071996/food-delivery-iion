import React from 'react'

function CheckBox(props) {
  return (
    <input type='checkbox' className="w-5 h-5 border-2 border-grey-light rounded-sm checked:bg-grey-dark checked:border-transparent" {...props} />
  )
}

export default CheckBox