import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCar } from '../store'

const CarList = () => {

  const {data, name} = useSelector(({ form, cars: { data, searchTerm }}) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return {
      data: filteredCars,
      name: form.name 
    }
  })

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(removeCar(id))
  }

  const renderedCars = data.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>{car.name} - ${car.cost}</p>
        <button
          className='button is-danger'
          onClick={() => handleDelete(car.id)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList 