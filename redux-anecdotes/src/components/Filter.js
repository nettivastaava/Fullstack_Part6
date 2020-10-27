import React from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(changeFilter(event.target.value))
        // input-kentän arvo muuttujassa event.target.value
      }
      const style = {
        marginBottom: 10
      }

    return (
        <div>
          <div style={style}>
            filter <input onChange={handleChange} />
          </div>
        </div>
    )
}

export default Filter