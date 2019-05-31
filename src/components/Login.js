import React from 'react';
import Forms from './Forms';
import logo from '../images/vta_white.png';
import history from './history';

class Login extends React.Component {


  handleClick(e) {
    e.preventDefault()
    history.push('/');      
  }

    render (){
      
        return(  
        <React.Fragment> 
        <nav>
            <div className="navbar">
                <img onClick={this.handleClick} className="logo-appbar" src={logo} alt="logo"/>  
            </div>
        </nav>         
        <div className ="login-body">   
            <div className="login-form"> 
                <p className="login-title">Inicia Sesión</p>
                <Forms />
            </div>        
        </div>
        </React.Fragment> 
        )
    }
}

export default Login;