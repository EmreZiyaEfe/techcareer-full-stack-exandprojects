import React, { useState } from 'react'
import { suppliers } from '../data/suppliers'

function SuppliersTable() {

  const [suppliersList, setsuppliersList] = useState(suppliers)

  const allSuplierList = suppliers;

  
  const removeAll = () => {
    setsuppliersList([]);
  }

  const deleteSupplier = (id) => {
    let filteredSuppliers = suppliersList.filter(q => q.id !== id);

    setsuppliersList([...filteredSuppliers]);
  }

  const searchSupplier = (array) => {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    
    const searchedSupplierList = array.filter(value=>{
      return value.contactName.toLowerCase().match(searchTerm) ||
      value.companyName.toLowerCase().match(searchTerm) ||
      value.address.country.toLowerCase().match(searchTerm)
    
    })
    
    setsuppliersList([...searchedSupplierList]);
  }

  return (
    <>
     <div>
        <div>
          <label>Search: </label>
          <input id='search' type='text' />
        </div>
        <div>
          <button onClick={()=>searchSupplier(allSuplierList)}>Search</button>
        </div>
        <div>

        </div>
      </div>

      <button onClick={() => removeAll()}>Remove All</button>
      {
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              suppliersList.map((item, key) => {
                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.companyName}</td>
                  <td>{item.contactName}</td>
                  <td>{item.contactTitle}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.region}</td>
                  <td>{item.address.postalCode}</td>
                  <td>{item.address.country}</td>
                  <td>{item.address.phone}</td>
                  <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                </tr>

              })
            }

          </tbody>
        </table>
      }

    </>
  )
}

export default SuppliersTable