import React, { useEffect,useState } from 'react'

import axios from 'axios'
export default function Home() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
     axios.get('http://localhost:5000/getUser')
      .then(response => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  },[])
  return (
    
       <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <ul className="divide-y divide-gray-200">
          {users.map(user => (
            <li key={user.id} className="p-4 bg-gray-50">
              <div className="flex items-center mb-2">
                <div className="text-lg">Name: {user.name}</div>
              </div>
              <div className="text-gray-500">Email: {user.email}</div>
              <div className="text-gray-500">Role: {user.role}</div>
              <div className="text-gray-500">Date Created: {user.createdAt}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
       
        
      
     
     


  )
}
