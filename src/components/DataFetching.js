import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    const [axiosData, setaxiosData] = useState([])

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

    useEffect(() => {
        const getData = async () =>{
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
                setaxiosData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error.message)
            } 
        };
        getData();
    }, [])
    
    // console.log(axiosData)

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
        <h2>Post Are: (Using Axios Library)</h2>
        <ul>
        {axiosData && axiosData.map(({id,title}) => (
            <li key={id}>{title}</li>
        ))}
        </ul>
        
    </div>
  )
}

export default DataFetching