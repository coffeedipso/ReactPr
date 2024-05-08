import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from '../../header/Header';
import './Start.css'
export default function Start() {
  return (
    <div>
        <Header></Header>
        <div className="container">
        <h2>Создайте свой тест!</h2>
        <Button variant="outline-dark" className='button-enter'>Создать тест</Button>
        </div>
    </div>
  )
}
