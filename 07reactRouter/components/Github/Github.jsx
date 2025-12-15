import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=> {
        
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Followers: {data?.followers}
        <img src="{data?.avtar_url}" alt="Git Picture"  width={300}/>       
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/Shubham0304")
    return response.json();
        }
