import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {
                email: '',
                password: '',
            }
        };
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let errors = this.state.errors;
        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

    }


    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;


        const validateForm = (errors) => {
            let valid = true;
            Object.values(errors).forEach(
                (val) => val.length > 0 && (valid = false)
            );
            return valid;
        }

        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
        if (email === 'george@gmail.com' && password === '12345678') {
            history.push('/users');
        }
        this.setState({
            email: "",
            password: ""
        });
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="Absolute-Center is-Responsive">
                            <h1 className="App">Login</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email address:</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                </div>
                                {errors.email.length > 0 &&
                                    <span className='error'>{errors.email}</span>}
                                <div className="form-group">
                                    <label htmlFor="email">Password:</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} />
                                </div>
                                {errors.password.length > 0 &&
                                    <span className='error'>{errors.password}</span>}
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
