import {useState, useEffect} from 'react'

export const LoadingFetch = () => {
const [data, setData] = useState([]);

useEffect(() =>{
    fetch('http://swapi.dev/api/people')
    .then(res=> res.json())
    .then(result => {
        setData(result.results)
    })
},[])

    return (
<ul>
    {!data.length && <li>Loading...</li>}
   {data.map(x => (<li key={x.name}>{x.name}</li>))} 
</ul>
            )
}
