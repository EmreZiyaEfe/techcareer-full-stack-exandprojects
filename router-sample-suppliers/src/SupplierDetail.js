import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SupplierDetail() {

    const [detail, setDetail] = useState({});
   // const [address, setAddress] = useState({});

    let { id } = useParams();

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
            .then(res => setDetail(res.data))

    }, [])

    return (<>
        {/*console.log(detail)}
        {console.log(detail.companyName)}
        {console.log(address)}
        {console.log(address.street)}
    {console.log('Emre')*/}

        <h1>Id: {detail.id}</h1>
        <h1>Company Name: {detail.companyName}</h1>
        <h1>Contact Name: {detail.contactName}</h1>
        <h1>Contact Title: {detail.contactTitle}</h1>
        {detail.address && detail.address.street !== undefined && <h1> Street:{detail.address.street}</h1>}
        {detail.address && detail.address.city !== undefined && <h1> City:{detail.address.city}</h1>}
        {detail.address && detail.address.region !== undefined && <h1>Region:{detail.address.region}</h1>}
        {detail.address && detail.address.postalCode !== undefined && <h1>Postal Code:{detail.address.postalCode}</h1>}
        {detail.address && detail.address.country !== undefined && <h1>Country:{detail.address.country}</h1>}
        {detail.address && detail.address.phone !== undefined && <h1>Phone:{detail.address.phone}</h1>}

    </>
    )
}

export default SupplierDetail