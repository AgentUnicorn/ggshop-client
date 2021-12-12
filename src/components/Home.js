import React from 'react'
import { useState } from 'react/cjs/react.development'
import axios from 'axios';

export default function Home() {

    //page là biến, setPage hàm cập nhật biến, useState hook khởi tạo biến page = 1
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);


    function fetchData() {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/products?page=${page}`
        }).then(res => {
            setProducts(res.data)
            console.log(products);
        })
    }

 
    return (

        <div onLoad={fetchData}>
            <h1>Home page</h1>
            {page}

            <button onClick={fetchData}>Fetch Data</button>

            {products.map(
                ({ fullname }) => `Coffee type ${fullname}.`
            )}

        </div>
    )
}
