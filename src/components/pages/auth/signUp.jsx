import { useState } from 'react'

//export signUp Page

export const SignUp = () => {
    
    const [dataBase, setDataBase] = useState([])

    const handleSignSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
            

        setDataBase(prevData => [...prevData, data])
            

        e.target.reset()
            
        console.log('User registered:', data)
        console.log('All users:', [...dataBase, data])
    }


    //make component

        return (

        <div className='signUp container'>
            <form  onSubmit={handleSignSubmit}  method="POST" className="signUp-form">
                <label htmlFor="signUpEmail"></label>
                <input type="text" name="signUpEmail" id="signUpEmail" /> <br />
                <input type="password" name="signUpPass" id="signUpPass" /> <br />
                <button className='signUpBtn'>Sign Up</button>
            </form>
        </div>

    )
}