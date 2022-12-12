import React, { useEffect, useContext } from 'react';
import { Card, Button } from "react-bootstrap";
import { services } from '../../Services/Services';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../Context/My-context';


const Product = () => {
  let { product } = useParams()
  const { data, getCategoryProduct, addToCart } = useContext(MyContext)
  
  useEffect(() => {
    const data = async () => {
      await services.getCategoryProduct(product)
        .then(res => {
          // console.log("product>>>", res.data.products)
          getCategoryProduct(res.data.products)
        })
    }
    data()
  }, [product])
  // console.log("data>>", data)

  return (
    <div>
      <h1>{product} {data.length}</h1>
      {
        data.map(elem => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={elem.images[0]} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
                  {elem.description}
                </Card.Text>
                <Button onClick={()=>addToCart(elem.id)}>add to cart</Button>
              </Card.Body>
            </Card>
          )
        })
      }

    </div>
  )
}

export default Product
