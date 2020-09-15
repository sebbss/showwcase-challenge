import React, {useState} from 'react'


function HomePage() {
    const [name, setName] = useState('')
    return (
        <div className='container'>

            <p>Hi there, welcome to your education showcase</p>

            <form onSubmit={(e)=>{
                e.preventDefault()
                sessionStorage.setItem('user', name)
            }}>
                <label>Type your name and click enter</label><br/>
                <input onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <br/>
            <input value='Enter' type='submit'/>

            </form>
            
        </div>
    )
}

export default HomePage
