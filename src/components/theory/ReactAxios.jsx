// Axios :
// Axios is a promise-based HTTP client for the browser and Node.js.
// Axios is used to make API calls from a React application.
// It provides an easy-to-use API to make HTTP requests, handle responses, and manage errors. 
// Axios supports features like interceptors, request cancellation, and automatic JSON data transformation.

// Axios Installation :

// npm i axios

// Importing Axios in a React Component :

    // import React, { useEffect, useState } from 'react';
    // import axios from 'axios';


import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ReactAxios() {

    const todoListApiEndpoint = "https://jsonplaceholder.typicode.com/todos";

    // State to store the fetched data

    const [todos, setTodos] = useState([]);


    useEffect(()=>{
        // Fetching data using Axios

        axios.get(todoListApiEndpoint)
        .then((res)=>setTodos(res.data))
        .catch((error)=>{
            console.error("Error fetching data: ", error);
        });

    }, []);

    console.log(todos);



  return (
    <div>
        <h2 className='text-blue-600 text-4xl bg-gray-300 text-center px-4  py-2 rounded-2xl'>Todo List</h2>

        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo)=>{
                        return(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "Yes" : "No"}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}


