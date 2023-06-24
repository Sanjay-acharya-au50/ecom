import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Xyz = () => {
  const navigate = useNavigate()

    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const handleSub = async (e) => {
    //         e.pereventDefault
    //         try {
    //                 axios.fetch("http://localhost:5000/api/auth/register" , {

    //                 method : "POST",
    //                 Headers : {
    //                     "Content-Type" : "application/json"
    //                 },
    //                 Body : {
    //                     username, email, password
    //                 }

    //                 })
    //         } catch (error) {
    //             console.log(error);
    //         }
    // }


    const handleRegister = async (e) => {
        e.preventDefault(); // prevent the default form submission behavior
        const data = { username, email ,password }; // create an object with the username and password
    
        try {
          // Send a POST request to the following URL:
          const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST", // Use the POST method to send data to the server
            body: JSON.stringify(data), // send the data as a JSON string in the request body
            headers: { "Content-Type": "application/json" }, // set the content type of header to application/json
          });
    
          // parse the response body as JSON
          const responseData = await response.json();
          console.log(responseData); // log the response data to the console
    
        
          if(responseData._id){
            navigate('/login') 
            }
            else{
              console.log("err");
            }
        } catch (error) {
          console.error(error); // log the error to the console for debugging
        }
    }

  return (
    <div>
    
    <form onSubmit={handleRegister}>

        <input type='text'  className='border'  value={username} onChange={(e)=>setUsername(e.target.value)}  />
        <input type='email '  className='border'  value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type='password'  className='border'  value={password} onChange={(e)=>setPassword(e.target.value)}  />
        <button type='submit' className='border p-2'>sign</button>
    </form>
        {username}
        {email}
        {password}
    
    </div>
  )
}

export default Xyz