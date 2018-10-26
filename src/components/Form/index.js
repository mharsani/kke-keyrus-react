import React from 'react'

const Form = ({handleSubmite, isFacthing}) => (
    <div>
    <form onSubmit={handleSubmite}>
        <div className="ui action input">
            <input type="text" name="formSearch" disabled={isFacthing} />
            <button className="ui button" disabled={isFacthing}>Search</button>
        </div>
    </form>
    </div> 
    
)

export default Form