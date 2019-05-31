import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import history from './history';

const styles = {
    textField: {
        display: 'block',
    },
    button: {
    backgroundColor: '#ff6e00',
    '&:hover': {
        background: '#ffd328',
      },
    marginLeft: '28%',
    marginRight: '28%', 
    marginTop: '20px', 
    }  
}

class Fields extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
              name: '',
              pass: ''
          }
          this.onSubmit = this.onSubmit.bind(this)
        }

    handleName(e) {
        this.setState({ 
            name: e.target.value
        })
    }

    handlePass(e) {
        this.setState({ 
            pass: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault()
        history.push(`/bookings/${this.state.name}`); 
        console.log(this.state)
  }

  render (){
    const { classes } = this.props; 
  
    return (

    <form onSubmit={ this.onSubmit} className="form_login" autoComplete="off">
        <div className="inputName">
        {this.props.params}
        <TextField
            required
            id="outlined-name"
            label="Usuario"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type= "text"
            value={this.state.name} 
            onChange={ this.handleName.bind(this) }
        />
        </div>
        <div className="inputPass">
        <TextField
            required
            id="outlined-password-input"
            label="Contraseña"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            type= "password"
            autoComplete="current-password"
            value={this.state.pass} 
            onChange={ this.handlePass.bind(this) }
        />
        </div>
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Enviar
        </Button>
    </form>
  );
}
}

export default withStyles(styles) (Fields);
