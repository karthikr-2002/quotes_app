import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [quotesData, changeQuotesData] = useState(
        { "quotes": [], "total": 1454, "skip": 0, "limit": 30 }

    )
    const fetchData =()=>{
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeQuotesData(response.data)
            }
        ).catch()
        
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <h1 className='header'><center>View All User</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-striped  ">

                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Quote</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotesData.quotes.map(
                                    (value, index) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.author}</td>
                                                <td>{value.quote}</td>
                                            </tr>

                                        )
                                    }
                                )}
                            </tbody>

                        </table>



                    </div>   </div>     </div>
        </div>
    )
}

export default Viewall