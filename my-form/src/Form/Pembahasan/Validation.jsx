import React from "react";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }
    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;

        let message = [];

        if(email.length === 0) {
            message = [...message, 'email tidak boleh kosong'];
        }
        if(password.length === 0) {
            message = [...message, 'password tidak boleh kosong'];
        }
        if (message.length > 0) {
            this.setState({
                errors: message
            });
        }
    }
    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Selamat Datang</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="email" 
                    onChange={Value => this.setState({email: Value})} />
                    <Input type="password" name="password" label="Password" 
                    onChange={Value => this.setState({password: Value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Validation;