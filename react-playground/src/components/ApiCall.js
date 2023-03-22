import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function ApiCall() {

  const [randomName, setRandomName] = useState('')
  const [randomImage, setRandomImage] = useState('')

 const fetchRandomUser = () => {
    axios.get('https://randomuser.me/api')
    .then(res => {
        console.log(res.data.results[0].name.first);
        setRandomName(res.data.results[0].name.first)
        console.log(res.data.results[0].picture.large)
        setRandomImage(res.data.results[0].picture.large)
    })
    .catch(err => {
        console.log(err)
    })
 }


  return (
    <div>
        <h1>API Call Playground</h1>
        <button className='btn' onClick={fetchRandomUser}>Fetch Random User</button>
        <h2>{randomName}</h2>
        <img className="headShot" src={randomImage} />
    </div>
  )
}

export default ApiCall

// https://randomuser.me/api
// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });