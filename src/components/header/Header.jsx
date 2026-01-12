import React from 'react'

export const Header = ({userData}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold bg-blue-200 p-4 text-center text-white">Hello {userData.firstName} {userData.lastName}</h1>
    </div>
  )
}
