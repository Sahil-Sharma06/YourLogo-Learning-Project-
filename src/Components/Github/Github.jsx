import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData] = useState([])

    useEffect(() =>{
        fetch('https://api.github.com/users/Sahil-Sharma06')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })
    })

  return (
    <div className='flex flex-col justify-center text-center m-4 bg-gray-800 text-white p-4 text-3xl'>
      Github Followers: {data.followers}

   <div className='flex justify-center m-4'>
      <img className='' src={data.avatar_url} alt="GitHub Profile Photo" width={300} />
      <div>
{/* 
      <h2 className='text-white text-3xl m-4'>Name : {data.name}</h2> 
      <h2 className='text-white text-3xl m-4'>Username : {data.login}</h2> 
      <h2 className='text-white text-3xl m-4'>Bio : {data.bio}</h2>
      <h2 className='text-white text-3xl m-4'>Email: {data.blog}</h2> */}
      </div>
    </div>
   </div>
  )
}

export default Github
