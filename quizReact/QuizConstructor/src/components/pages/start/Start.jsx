import React from 'react'
import Button from 'react-bootstrap/Button';
import './Start.css';
import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div>
        <div className="container">
            <h2>Создайте свой тест!</h2>
            <Link to='/builder'>
              <Button variant="outline-dark" className="button-enter">Создать тест</Button>
            </Link>
        </div>
    </div>
  )
}
