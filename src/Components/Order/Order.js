import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyContext } from '../../Context/My-context';
import {useContext} from 'react'
import { services } from '../../Services/Services';
import {useState} from 'react'
function Order(props) {
  const {cart} = useContext(MyContext)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const onOrder = async () => {
    await services.postOrderProduct({ 
      name, 
      title: cart.map(e => e.title),
      phone,
      address })
        .then(res => console.log(res))
        props.onHide()
}
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Оформить Товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column'>
          <input onChange={e => setName(e.target.value)} type="text" placeholder='ФИО' />
          <input onChange={e => setPhone(e.target.value)} type="text" placeholder='телефон' />
          <input onChange={e => setAddress(e.target.value)} type="text" placeholder='адрес' />
          <div className='d-flex'>
            <div>
              <input checked type="radio" name="car" />
              <label htmlFor="">доставка</label>
            </div>
            <div>
              <input type="radio" name="car" />
              <label htmlFor="">самовызов</label>
            </div>
          </div>
        </div>
        {
          cart.map(elem => {
            return <p>{elem.title}</p>
          })
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={onOrder} variant="btn btn-success">Заказать</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Order
