import React from 'react'
import { AiOutlineDelete } from "react-icons/ai"
import useCart from '../cart-controller/CartContext'

const POSTABLE = () => {

  const { items, removeFromCart, addToCart, reduceQuantity } = useCart()

  return (
    <div className='pos-table'>
      <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discount</th>
                <th>TDSC</th>
                <th>Subtotal</th>
                <th>X</th>
            </tr>
        </thead>

        <tbody>
          { items?.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>
                <div className='quantity-btn-groups'>
                  <button className='quantity-btn' onClick={() => addToCart(product)}>+</button>
                  <p>{product.quantity}</p>
                  <button className='quantity-btn' onClick={() => reduceQuantity(product)}>-</button>
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.discount}</td>
              <td>{product.tdsc}</td>
              <td>{product.subtotal}</td>
              <td style={{cursor: "pointer"}} onClick={() => removeFromCart(product)}><AiOutlineDelete className='text-red' /></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default POSTABLE
