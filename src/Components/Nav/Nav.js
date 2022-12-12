import React, {useEffect, useContext} from 'react'
import { services } from '../../Services/Services';
import { MyContext } from './../../Context/My-context';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const {categories, getCategoryState}=useContext(MyContext)

  useEffect(()=>{
    const data= async()=>{
      await services.getCategories()
      .then(res=>{
        getCategoryState(res.data)
      })
    }
    data()
  },[])

  let navigate=useNavigate()
  const toggleClick=(title)=>{
    // console.log("title>>>", title)
    navigate(`/product/${title}`)
  } 

  return (
    <div className='nav-menu'>
      <h3>Category Products</h3>
      <ol>
        {
          categories.map(elem=>{
            return <li key={elem}
            onClick={()=>toggleClick(elem)}
            >
              {elem}
            </li>
          })
        }
      </ol>
      
    </div>
  )
}

export default Nav;