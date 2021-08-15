import React from 'react'
import { useFetch } from 'technical-test'

const Exemple = () => {
  const [data, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/users")

  if (isLoading)
    return (<div>Loading</div>)

  if (error)
    return (<div>Error : {error}</div>)

  return (
    <select>
      {data?.map((user) => <option value={user.id}>{user.name}</option>)}
    </select>
  )
}

const Users = (props) => {
  return (
    <select>
      {props?.users?.map((user) => <option value={user.id}>{user.name}</option>)}
    </select>
  )
}

export default Exemple