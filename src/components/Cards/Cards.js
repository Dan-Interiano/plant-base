import React from 'react'
import CardItem from './CardItem'
import './Card.css'

export default function Card() {
  return (
    <div className='cards'>
        <h1>
            Check Out These ADORABLE Dogs!
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'> 
                    <CardItem 
                    src="https://img.wallpapersafari.com/tablet/1200/1920/85/74/acuAdK.jpg"
                    text="Hanging plants can be a great way to utilize empty walls"
                    label="Nature"
                    path="/services"/>
                    <CardItem 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANwjxl6Rlc6W9kTdey6oUy4gXzBSmhIIQ6g&usqp=CAU"
                    text="Lorem Ipsum fdaonhp fadnpoa vnaonea nvoawep"
                    label="Nature"
                    path="/services"/>
                    <CardItem 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zvH6u-qQ_FXO_uZN9tz83Y0jthvTvMNzOQ&usqp=CAU"
                    text="Lorem Ipsum fdaonhp fadnpoa vnaonea nvoawep"
                    label="Nature"
                    path="/services"/>
                </ul>
            </div>
        </div>
    </div>
  )
}
