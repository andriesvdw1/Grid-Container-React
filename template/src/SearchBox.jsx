import React from 'react'
import searchImgUrl from './assets/searchGlass.png'
function SearchBox() {
  return (
    <>
    <input type="search"/>
    <img className='searchIcon' src={searchImgUrl} alt="search glass icon" />
    </>
  )
}

export default SearchBox