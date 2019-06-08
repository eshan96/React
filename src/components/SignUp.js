import React, { Component } from 'react'
import {Button} from 'react-bootstarp'

export class SignUp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             Name: '',
             Username: '',
             Email: '',
             Password: ''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    handleChangeInput(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name] : value
        })
    }
    
    handleSubmit(event) {
        alert('You have successfullyt Registered')
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input
                    name = "Name"
                    type = "text"
                    value = {this.state.Name}
                    onChange = {this.handleChangeInput}
                    />
                </label>
                <br />
                <label>
                    Username:
                    <input
                    name = "Username"
                    type = "text"
                    value = {this.state.Username}
                    onChange = {this.handleChangeInput}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    name = "Email"
                    type = "email"
                    value = {this.state.Email}
                    onChange = {this.handleChangeInput}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    name = "Password"
                    type = "password"
                    value = {this.state.Password}
                    onChange = {this.handleChangeInput}
                    />
                </label>
                <br />

                <button variant="primary" type = "submit">Submit</button>
            </form>

                
        )
    }
}

export default SignUp
