import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const List = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setData(res.data.products)
            })
    }, [])
    console.log(data)
    return(
        <div>
            <h1>All Products👩‍🚀🌏</h1>
            <hr/>
            {
                data.map((product, idx) =>(
                    <div key={idx} >
                        <h2>Product #{idx+1} 🔥</h2>
                        <h3>Check Product: <Link to={`/products/${product._id}`}>{product.title}</Link> ⚡</h3>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}
export default List;

