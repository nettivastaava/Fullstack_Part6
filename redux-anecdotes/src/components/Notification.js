import React from 'react'
import { useSelector } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'

const Notification = () => {
  const notification= useSelector(state => state.notification)
  console.log(notification)

  if (notification === '' || notification === undefined) {
    return null
  }
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification