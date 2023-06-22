import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');

      setData(await response.clone().json());
       setFilter(await response.json());
      setLoading(false);
      console.log(filter);
    };
    getProduct();
  }, []);


  const Loading = () => {
    return <>Loading...</>;
  };


  const filterProduct = (cat) => {
    const updateList = data.filter(x=>x.category === cat);
    setFilter(updateList);
  };

  
  const ShowProducts = () => {
    return (
      <>
        <div className="d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark"
            onClick={() =>setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product,index) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px" key={index.id}
                  />
                  <div className="card-body mb-0">
                    <h5 className="card-title lead fw-bold ">
                      {product.title}
                    </h5>
                    <p className="card-text">${product.price}</p>
                    < Link to={`./products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
}
export default Products;
