import React from "react"

export default function UserDisplay ({params}) {
  return (
    <div>
      <h1>User Display</h1>
      <p>{params.id}</p>
      {console.log(params)}
    </div>
  )
}
