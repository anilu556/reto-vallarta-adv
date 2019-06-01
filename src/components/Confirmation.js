import React from 'react';
import logo from '../images/vta_white.png';
import history from './history';

class Confirmation extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        history.push('/');      
    }

    render (){
        console.log(this.props)
        return(
            <React.Fragment>
            <div className="confirmation">
                <nav>
                    <div className="navbar">
                        <img onClick={this.handleClick} className="logo-appbar" src={logo} alt="logo"/>  
                    </div>
                </nav> 
                <div className="confirmation_box">
                    <h1 className="confirmation_text">¡Has realizado tu compra con éxito!</h1>
                    <h2 className="confirmation_thanks"> Gracias, {this.props.match.params.user} </h2>
                </div>
            </div>    
            </React.Fragment>
        )
    }
}

export default Confirmation;