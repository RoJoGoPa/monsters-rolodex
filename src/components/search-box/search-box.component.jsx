import React from 'react'
import './search-box.styles.css'

export const SearchBox = props => {
  const { handleOnChange, placeholder, search } = props
  return (
    <input
      type="text"
      className="search"
      placeholder={placeholder}
      value={search}
      onChange={handleOnChange}
    />
  )
}
