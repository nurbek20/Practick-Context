import React, { useEffect, useContext } from 'react'
import { services } from '../../Services/Services';
import { MyContext } from './../../Context/My-context';
import { Card } from "react-bootstrap"

const Home = () => {
  const { getAll, setGetAll } = useContext(MyContext)

  useEffect(() => {
    const getall = async () => {
      await services.allProduct()
        .then(res => {
          // console.log("allProduct>>", res.data.products)
          setGetAll(res.data.products)
        })
    }
    getall()
  }, [])
  // console.log("getall>>", getAll)

  return (
    <div>
      <h1>Home</h1>

      <div className='card'>
      {
        getAll.map((elem, index) => {
          return (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={elem.thumbnail}/>
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
                {elem.description}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
      </div>
    </div>
  )
}

export default Home;
