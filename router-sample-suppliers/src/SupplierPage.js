import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SupplierPage() {

    const [suppliers, setSuppliers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => setSuppliers(res.data))

    }, []);

    const goToDetail = (id) => {

        navigate('/suppliers/' + id)
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Go To Deatail</th>
                </tr>
            </thead>

            <tbody>
                {
                    suppliers && suppliers.map((item, key) => {
                        return <>
                            <tr>
                                <td>{item.id}</td>
                                <td  key={key}><Link to={'/suppliers/' + item.id}>{item.companyName}</Link></td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                                <td>{item.address.street}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.region}</td>
                                <td>{item.address.postalCode}</td>
                                <td>{item.address.country}</td>
                                <td>{item.address.phone}</td>
                                <td><button onClick={() => goToDetail(item.id)}>Go To Detail</button></td>
                            </tr>
                        </>
                    })
                }

            </tbody>


        </table>

    </>
    )

}

export default SupplierPage