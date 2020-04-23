import React from 'react'
import './SignIn.scss'

interface SignInI {
    email:string,
    password:string
}

class SignIn extends React.Component<{},SignInI> {

    constructor(props:any)
    {
        super(props)

        this.state={

            email:'',
            password:''
        }
    }

    handleSubmit = (e:any) =>{
        e.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    handleChange = (event:any) => {

        const { name, value} = event.target

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    <input 
                    name="password"
                     type="password" 
                     placeholder="Password"
                     value={this.state.password} 
                     onChange={this.handleChange}
                      />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SignIn