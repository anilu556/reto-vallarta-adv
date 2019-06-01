
import React from 'react';
import logo from '../images/vta_white.png';
import history from './history';

class Bookings extends React.Component {
    constructor(props) {
        super(props)
          this.state = { 
            value: '',
            pasajero: '',
            tours: [], 
            name: '',
            pax: '',
            price: '',
            total: 0
          }    
    }
        
    handleClick = (e) => {
        e.preventDefault()
        history.push('/');      
      }

    handleSelect = (e) => {
        this.setState({ 
            value: e.target.value
        })
    }

    handlePasa = (e) => {
        this.setState({ 
            pasajero: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        alert('Datos guardados correctamente')  
    }

    newTour = event => {
        event.preventDefault();
    
          this.setState({ 
            tours: [...this.state.tours, { 
              name: this.state.name, 
              pax: this.state.pax,
              price: this.state.price,
            }], 
            name: '',
            pax: '',
            price: '',
          });
      }

    calculateTotal() {
        const prices = this.state.tours.map(tour => tour.price * tour.pax);
        return prices.reduce((a, b) => a + b, 0);
    }

    handleConfirmation = (e) => {
        e.preventDefault()
        history.push(`/confirmation/${this.props.match.params.user}`); 
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
                            <form  onSubmit={this.newTour} className="form_tours">
                                <div className="form-group">
                                    <label className="exampleFormControlInput1">Tour:</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1"
                                    name= "tour"
                                    value={this.state.name} 
                                    onChange={e => this.setState({ name: e.target.value })}
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
                                    value={this.state.pax} 
                                    onChange={e => this.setState({ pax: e.target.value })}
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
                                    value={this.state.price} 
                                    onChange={e => this.setState({ price: e.target.value })}
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
                                {this.state.tours.map((tour, index) => 
                                <tbody key={index}>
                                    <tr>
                                        <td>{tour.name}</td>                
                                        <td>{tour.pax}</td>                
                                        <td>${tour.price}</td>                  
                                    </tr>    
                                </tbody>  
                                )}   
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bookings_finish">
                    <div className="bookings_total">
                        <p className="total"> <b>Total:</b> </p><p className="total">${this.calculateTotal().toFixed(2)}</p>   
                    </div>     
                    <div className="bookings_confirm">
                        <button onClick={this.handleConfirmation} type="button" className="btn btn-primary btn_confirm">Confirmar</button>
                    </div>
                </div> 
            </div>         
        </React.Fragment>        
        )
    }
}

export default Bookings;
