import React, { useState } from 'react'
import smartphones from './dummyData';
const brands=['samsung','apple','oppo','vivo']

const Productlist = () => {
    const [productData, setproductData] = useState(smartphones);
    const displayProducts = ()=>{
        return productData.map((phone)=>{
            return <div className='col-md-3 mb-4'>
                <div className='card'>
                    <img style={{height: '200px', objectFit: 'cover' }} className='card-img-top' src={phone.image} alt="" />
                    <div className='card-body'>
                        <h5>
                            {phone.brand}
                        </h5>
                        <h3>
                            {phone.model}
                        </h3>
                        <h2>
                            {phone.price}
                        </h2>
                    </div>
                </div>
            </div>
        })
    };
    const searchProduct = (e)=>{
        const search = e.target.value;
        setproductData(
            smartphones.filter ((phone)=>{
                return phone.brand.toLowerCase().includes(search.toLowerCase())
            })
        );
    };
    const filterBrands = (e)=>{
        const search=e.target.value;
        setproductData(
            smartphones.filter((phone)=>{
                return phone.brand===search;
            })
        )
    }
  return (
    <div>
        <header className='bg-body-secondary'>
        <div className='container py-5'>
            <h1 className='text-center'>product list page</h1>

            <input onChange={searchProduct} type='text' className='form-control form-control-lg' placeholder='search product name' />
           <select onChange={filterBrands} name="" id="">
            {
                brands.map((brand) => {
                    return <option value={brand}>
                        {brand}
                    </option>
                })
            }
           </select>
            </div>

            </header>
            <div className='container'>
            <div className='row mt-4'>
                {
                    displayProducts()
                }

            </div>
        </div>
        </div>

  )
}

export default Productlist