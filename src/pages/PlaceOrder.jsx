// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const navigate = useNavigate();
  const { backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    landmark: '',
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {
        // API CALLS FOR COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })

          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }

          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* --------------LEFT SIDE----------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name ' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name ' />
        </div>
        <input onChange={onChangeHandler} name='email' value={formData.email} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input required onChange={onChangeHandler} name='city' value={formData.city} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='street' value={formData.street} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street (Area)' />
          <input required onChange={onChangeHandler} name='landmark' value={formData.landmark} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Nearest Landmart' />
        </div>
        {/* <div className='flex gap-3'>
          <input className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input onChange={onChangeHandler} name='country' value={formData.country} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div> */}
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border boerder-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />

      </div>
      {/* --------------RIGHT SIDE----------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/*----------------- PAYMENT METHOD SELECTION----------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('khalti')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'khalti' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.khalti_logo} alt="" />
            </div>
            <div onClick={() => setMethod('esewa')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'esewa' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.esewa_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

          </div>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
