
import React from 'react';
import logo from '../images/vta_white.png';
import history from './history';

class Bookings extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
            value: '',
            pasajero: '',
            tour: [],
            pax: [],
            precio: [] 
          } 
          this.onSubmit = this.onSubmit.bind(this) 
          this.createTour = this.createTour.bind(this); 
          this.createPax = this.createPax.bind(this);
          this.cratePrecio = this.createPrecio.bind(this);     
    }
        
    handleClick(e) {
        e.preventDefault()
        history.push('/');      
      }

    handleSelect(e) {
        this.setState({ 
            value: e.target.value
        })
    }

    handlePasa(e) {
        this.setState({ 
            pasajero: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        alert('Datos guardados correctamente')  
    }

    createTour(e){
        e.preventDefault();

        this.setState({
            tour: this.state.tour.concat([{name: e.target.tour.value}])
        });
        console.log(this.state)
    }

    createPax(e){
        e.preventDefault();

        this.setState({
            pax: this.state.pax.concat([{name: e.target.pax.value}])
        });
        console.log(this.state)
    }

    createPrecio(e){
        e.preventDefault();

        this.setState({
            precio: this.state.precio.concat([{name: e.target.precio.value}])
        });
        console.log(this.state)
    }

    render (){
    //    console.log(this.props.match.params)
        
        return(
        <React.Fragment>    
            <div className="bookings">
                <nav>
                <div className="navbar">
                    <img onClick={this.handleClick} className="logo-appbar" src={logo} alt="logo"/>  
                    <i className="fas fa-user"></i>
                    <span className="user_name">{this.props.match.params.user}</span>
                </div>
                </nav> 

                {/* Pasajeros */}
                <div className="bookings_pax">
                    <h1 className="pax_title">Datos Pasajero</h1>
                    <div className="inputs_pax">
                        <div className="adding_pax">
                            <form  className="form_pax">
                                <div className="form-group">
                                    <label className="exampleFormControlSelect1">Agencia:</label>
                                    <select className="form-control" id="exampleFormControlSelect1"  onChange={this.handleSelect.bind(this)} value={this.state.value}>
                                        <option value= "default">Elige una </option>
                                        <option value="Azul" >Azul</option>
                                        <option value="Rojo">Rojo</option>
                                        <option value="Blanco">Blanco</option>
                                        <option value="Negro">Negro</option>
                                        <option value="Morado">Morado</option>
                                    </select>
                                </div>

                                {this.state.value === 'Azul' ?
                                    <div className="form-group">
                                        <label className="exampleFormControlSelect1">Agente:</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value='default'>Elige una </option>
                                            <option>Ana</option>
                                            <option>Luis</option>
                                            <option>Nalle</option>
                                        </select>
                                    </div>
                                    : null
                                }
                                {this.state.value === 'Rojo' ?
                                    <div className="form-group">
                                        <label className="exampleFormControlSelect1">Agente:</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value='default'>Elige una </option>
                                            <option>Pedro</option>
                                            <option>Vilma</option>
                                            <option>Pablo</option>
                                        </select>
                                    </div>
                                    : null
                                }
                                {
                                this.state.value === 'Blanco' ?
                                    <div className="form-group">
                                        <label className="exampleFormControlSelect1">Agente:</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value='default'>Elige una </option>
                                            <option>Walter</option>
                                            <option>Jessy</option>
                                            <option>Spencer</option>
                                        </select>
                                    </div>
                                    : null
                                }
                                {
                                this.state.value === 'Negro' ?
                                    <div className="form-group">
                                        <label className="exampleFormControlSelect1">Agente:</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value='default'>Elige una </option>
                                            <option>Hannah</option>
                                            <option>Mario</option>
                                            <option>Harry</option>
                                        </select>
                                    </div>
                                    : null
                                }
                                {
                                this.state.value === 'Morado' ?
                                    <div className="form-group">
                                        <label className="exampleFormControlSelect1">Agente:</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value='default'>Elige una </option>
                                            <option>Pamela</option>
                                            <option>Andrés</option>
                                            <option>Alex</option>
                                        </select>
                                    </div>
                                    : null
                                }
                                <div className="form-group">
                                    <label className="exampleFormControlInput1">Pasajero:</label>
                                    <input onChange={this.handlePasa.bind(this)} type="email" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="form-group">
                                    <label className="exampleFormControlInput1">Hotel:</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="form-group room">
                                    <label className="exampleFormControlInput1">Habitación:</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="#" />
                                </div>
                                <div className="pax_btn">
                                    <button onClick={this.onSubmit} type="button" className="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div> 

                {/* Tours */}
                <div className="bookings_tour">
                    <h1 className="tours_title">Tours</h1>
                    <div className="adding_tours">
                        <div className="inputs_tours">
                            <form  onSubmit={this.createTour} className="form_tours">
                                <div className="form-group">
                                    <label className="exampleFormControlInput1">Tour:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    name= "tour" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="exampleFormControlInput1">Pax:</label>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="#" 
                                    name= "pax"
                                    />
                                </div>
                                <div className="form-group room">
                                    <label className="exampleFormControlInput1">Precio:</label>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="$" 
                                    name = "precio"
                                    />
                                </div>
                                <div className="pax_btn">
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                </div>    
                            </form> 
                        </div> 
                        <div className="table_tours">                      
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Tour</th>
                                        <th scope="col">Pax</th>
                                        <th scope="col">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.tour.map(t => {
                                        return(
                                    <tr>
                                         <td>{t.name}</td>                
                                    </tr>
                                );
                                })
                                }
                                {this.state.pax.map(p => {
                                        return(
                                    <tr>
                                         <td>{p.name}</td>                
                                    </tr>
                                );
                                })
                                } 
                                {this.state.precio.map(t => {
                                        return(
                                    <tr>
                                         <td>{t.name}</td>                
                                    </tr>
                                );
                                })
                                }      
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bookings_finish">
                    <div className="bookings_total">
                        <p className="total"> <b>Total:</b> </p><p className="total"></p>
                    </div> 
                    <div className="bookings_confirm">
                        <button type="button" className="btn btn-primary btn_confirm">Confirmar</button>
                    </div>
                </div> 
            </div>         
        </React.Fragment>        
        )
    }
}

export default Bookings;