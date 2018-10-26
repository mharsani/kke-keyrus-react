import React from 'react'
import Form from '../components/Form'
import List from '../components/List'

const AppContainer = ({handleSubmite, productList, isFacthing}) => (
    <div>
       <Form handleSubmite={handleSubmite} isFacthing={isFacthing}/>
        <List productList={productList}/>
    </div>
 
)
 
export default AppContainer