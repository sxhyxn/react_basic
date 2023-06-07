import React from 'react'

function Body(props) {
    console.log(props)
  return (
    <div>{props.name}는 {props.location}에 삽니다.</div>
  )
}

export default Body