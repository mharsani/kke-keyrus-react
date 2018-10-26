import React from 'react'

const List = ({productList}) => (
    <ul className="list-prod">
    {productList.map((product, index) => (
       <li key={index}>
       <img src={product.image} alt="" title=""/>
       <h2 className="title">{product.title}</h2>
       <span className="value">{product.price}</span>
       </li>
    ))}
		
</ul>
 
)

export default List