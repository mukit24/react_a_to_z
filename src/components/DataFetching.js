import React from 'react';
import { useEffect,useState } from 'react';

const DataFetching = () => {
    const [data,setData] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        .then((response) => {
            if(!response.ok){
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            return response.json()
        })
        .then((data) => {
            setData(data);
            setError(null);
        })
        .catch((err)=> {
            setData(null);
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        })
    },[]);

  return (
    <div>
        <h2>Posts are:</h2>
        {loading && <h4>A moment Please</h4>}
        {error && <h4>There is a problem fetching the data: {error}</h4>}
        <ul>
            {data && 
            data.map(({id,title})=>(
                <li key={id}>
                    <h4>{title}</h4>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default DataFetching