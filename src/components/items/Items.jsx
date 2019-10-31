import React from "react";
import "./item.css"

const items = [
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
    {name: 'item8'},
    {name: 'item9'},
    {name: 'item10'},
    {name: 'item11'},

]



export const Items = () => {
    return (
        <div className='container'>
            {items.map(el => (<div className='card'> {el.name}</div>))}
        </div>
    )



}