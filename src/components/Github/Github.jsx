import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
      const data = useLoaderData()
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/dilawarbaig')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center mx-5 px-20 bg-gray-600 text-white p-4 text-3xl flex flex-wrap justify-between items-center'>
      <div className=''>
      <h1 className='mb-10'>Github followers: {data.followers}</h1>
    <h1>UserName: {data.login}</h1>
      </div>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
  const response = await fetch('https://api.github.com/users/dilawarbaig')
  return response.json()
}