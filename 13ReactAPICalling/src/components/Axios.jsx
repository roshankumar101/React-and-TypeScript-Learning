import axios from 'axios'
import { useState } from 'react'

const Axios = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data);
        setData(response.data);

        // or we can directly destructure the data
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(data);
    }

    return (
        <div>
            <button onClick={getData}>Get Data with Axios</button>
            <div>
                {data.map(function(elem, idx){
                    return <div>
                        <h3>{elem.name} {idx}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Axios