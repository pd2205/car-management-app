import React from 'react'
import { changeSearchTerm } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const CarSearch = () => {

  const { searchTerm } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value))
  }

  return (
    <div>
      <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
          <label htmlFor="" className="label">Search</label>
          <input
            className='input'
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
    </div>
  )
}

export default CarSearch