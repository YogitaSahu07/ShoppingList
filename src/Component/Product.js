import React,{useState, useEffect} from 'react'


const Product =()=>{
    const [product, setProduct ]= useState([]);
    const[loading, setLoading]= useState(false)

    useEffect(()=>{
   const getProduct= async()=>{
    setLoading(true);
    const response= await fetch(`https://fakestoreapi.com/products/${id}`)
    setProduct(await response.json());
    setLoading(false)
   }
   getProduct();
    },[])

    const Loading = () => {
        return <>Loading...</>;
      };


      const ShowProducts=()=>{
        return(
            <>
              <div className="col-md-6">
                <img src={product.image} alt={product.title} height='400px' width='400px' />
              </div >
          
            </>
        )
      }
    return(
        <>
        <div>
          <div className="row">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
        </>
    )
}
export default Product;