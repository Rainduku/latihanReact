import React from "react";

class ClassComponen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: 1
        }
        
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus() {
        if(this.state.value < 10) {
            
            this.setState({value: this.state.value +1});
        }
    }
    handleMinus() {
        if(this.state.value > 1) {
            this.setState({value: this.state.value -1});
        }
    }

    render() {
        return(
            <div>
                <h1>halo {this.props.nama}, Selamat Datang</h1>
                <h2>Masukan Angka Favoritmu dari 0-10</h2>
                <button onClick={this.handleMinus}>-</button>
                <span>{" "}{this.state.value}{" "}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponen;