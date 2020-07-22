import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo'
import Calendar from 'react-calendar';
import SketchPicker from 'react-color';
import Warm from './Images/warm_colours.jpg';
import Warm2 from './Images/warm_colours2.jpg';
import Cool from './Images/cool_colours.jpg';
import Cool2 from './Images/cool_colours2.jpg';
import Kitchen from './Images/kitchen.png';
import Bedroom from './Images/bedroom.png';
import Bathroom from './Images/bathroom.jpg';
import Garage from './Images/garage.jpg';
import House from './Images/house.jpg';
import Window from './Images/window.jpg';
import Palette from './Images/palette2.png';
import Interior from './Images/interior.jpeg';
import Exterior from './Images/exterior.jpg';
import Oil from './Images/oil.jpg';
import Primer from './Images/primer.jpg';
import AddToCalendar from 'react-add-to-calendar';
import Geography from './Images/geography-xxl.png';
import Help from './Images/help-xxl.png';
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Add a new task below'},
      {id: 2, content: 'Delete a task by clicking it'}
    ],
    event: {
      title: this.title,
      description: this.description,
      location: this.location,
      startTime: this.startTime,
      endTime: this.endTime
    },
    background: '#fff'
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  }

  onChange = date => this.setState({ date })

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', this.state.name)
  }
  render() {
    return (
      <div className="App container">
        <nav className="navbar navbar-expand-md bg-dark navbar-light justify-content-center">
          <div className="logo-image">
            <img src={Palette} alt={'Palette'} style={{width: '100px'}}/>
          </div>
          <h1 className="navbar-brand" href="#" style={{color:'rgb(232,116,180)'}}><b> Colour <br></br> Me <br></br> Happy</b></h1>
	        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
	          <span className="navbar-toggler-icon"></span>
	        </button>
          <div className="collapse navbar-collapse align-items-center" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#learn" style={{color:'rgb(232,116,180)', fontSize: '20px', margin:'15px'}}> Learn</a>
	            </li>
              <li className="nav-item">
                <a className="nav-link" href="#design" style={{color:'rgb(232,116,180)', fontSize: '20px', margin:'15px'}}> Design</a>
	            </li>
              <li className="nav-item">
                <a className="nav-link" href="#plan" style={{color:'rgb(232,116,180)', fontSize: '20px', margin:'15px'}}> Plan</a>
	            </li>
	          </ul>
	        </div> 
          <li className="nav-item dropdown">
            <img src={Geography} alt={'Globe'} style={{width: '25px'}}/>
            <button className="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">Language</button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#english">English</a>
              <a className="dropdown-item" href="#francais">Francais</a>
            </div>
          </li> 
        </nav>

        <div className="container" id="learn">
          <h1 id="top">Learn Painting 101:</h1>
          <p><b>Follow our step-by-step guide to help you determine the work you need done!</b></p>
          <h3 id="step1">Step 1: Colour Scheme</h3>
          <p>Choose your colour scheme...</p>
          <p>1. Here are some examples:</p>
          <div className="container">
            <div className="row">
              <div className="col-sm-6" align="center">
                <img src={Warm} alt={'Warm Colours'} style={{width: '200px'}}/>
                <img src={Warm2} alt={'Warm Colours'} style={{width: '200px'}}/>
                <p className="text">Warm Colours</p>
              </div>
              <div className="col-sm-6" align="center">
                <img src={Cool} alt={'Cool Colours'} style={{width: '200px'}}/>
                <img src={Cool2} alt={'Cool Colours'} style={{width: '200px'}}/>
                <p className="text">Cool Colours</p>
              </div>
            </div>
          </div>
          <p>2. Choose from colour picker:</p>
          <div className="container" align="center">
          <SketchPicker
            color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }
          />
          </div>

          <br></br>

          <button className="btn btn-outline-dark">
            <a href="#top" style={{color:'rgb(232,116,180)'}}> Back to Top</a>
          </button>
          <button className="btn btn-outline-dark">
            <a href="#step2" style={{color:'rgb(232,116,180)'}}> Next Step</a>
          </button>

          <br></br>
          <br></br>

          <h3 id="step2">Step 2: Paint Type</h3>
          <p>Choose your paint type...</p>
          <p>1. Here are some examples:</p>
          <div className="container">
            <div className="row">
              <div className="col-sm-3" align="center">
                <img src={Interior} alt={'Interior'} style={{width: '220px'}}/>
                <p className="text">Interior</p>
              </div>
              <div className="col-sm-3" align="center">
                <img src={Exterior} alt={'Exterior'} style={{width: '220px'}}/>
                <p className="text">Exterior</p>
              </div>
              <div className="col-sm-3" align="center">
                <img src={Oil} alt={'Oil'} style={{width: '220px'}}/>
                <p className="text">Oil</p>
              </div>
              <div className="col-sm-3" align="center">
                <img src={Primer} alt={'Primer'} style={{width: '220px'}}/>
                <p className="text">Primer</p>
              </div>
            </div>
          </div>
          <p>2. Choose your paint type:</p>
          <div className="container">
              <input type="radio" name="content" value="content"/> Interior <br></br>
              <input type="radio" name="content" value="content"/> Exterior <br></br>
              <input type="radio" name="content" value="content"/> Oil-based <br></br>
              <input type="radio" name="content" value="content"/> Primer <br></br>
          </div>

          <br></br>

          <button className="btn btn-outline-dark">
            <a href="#step1" style={{color:'rgb(232,116,180)'}}> Back to Step 1</a>
          </button>
          <button className="btn btn-outline-dark">
            <a href="#step3" style={{color:'rgb(232,116,180)'}}> Next Step</a>
          </button>

          <br></br>
          <br></br>

          <h3 id="step3">Step 3: Area</h3>
          <p>Choose the area to be painted...</p>
          <p>1. Here are some examples:</p>
          <div className="container">
            <p className="text">Interior Painting:</p>
            <div className="row">
              <div className="col-sm-4" align="center">
                <img src={Kitchen} alt={'Kitchen'} style={{width: '200px'}}/>
                <p className="text">Kitchen</p>
              </div>
              <div className="col-sm-4" align="center">
                <img src={Bedroom} alt={'Bathroom'} style={{width: '200px'}}/>
                <p className="text">Bathroom</p>
              </div>
              <div className="col-sm-4" align="center">
                <img src={Bathroom} alt={'Bedroom'} style={{width: '115px'}}/>
                <p className="text">Bedroom</p>
              </div>
            </div>
          </div>

          <div className="container">
            <p className="text">Exterior Painting:</p>
            <div className="row">
              <div className="col-sm-4" align="center">
                <img src={House} alt={'House'} style={{width: '200px'}}/>
                <p className="text">House</p>
              </div>
              <div className="col-sm-4" align="center">
                <img src={Garage} alt={'Garage'} style={{width: '240px'}}/>
                <p className="text">Garage</p>
              </div>
              <div className="col-sm-4" align="center">
                <img src={Window} alt={'Window'} style={{width: '200px'}}/>
                <p className="text">Window Trim</p>
              </div>
            </div>
          </div>

          <p>2. Enter the area of the house to be painted:</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange}/>
            <button className="btn btn-outline-dark" style={{color:'rgb(232,116,180)'}} >Save</button>
          </form>

          <br></br>

          <button className="btn btn-outline-dark">
            <a href="#step1" style={{color:'rgb(232,116,180)'}}> Back to Step 2</a>
          </button>
          <button className="btn btn-outline-dark">
            <a href="javascript:void(0)" style={{color:'rgb(232,116,180)'}}> Save</a>
          </button>
        </div>


        <br></br>
        <br></br>

        <div className="container" id="design">
          <h1>Design Your Ideal Product / Concevez votre produit idéal:</h1>
          <p><b>Write down your design of your ideal product / 
Écrivez votre conception de votre produit idéal!</b></p>
          <form onSubmit={this.handleSubmit}>
            <p style={{color:'rgb(170, 1, 20)'}}>* = Required / Obligatoire</p>
            <input type="text" placeholder="* Full Name / Nom complet" style={{width: '200px'}} onChange={this.handleChange}/>
            <button className="btn btn-outline-dark" style={{color:'rgb(232,116,180)'}} >Save / Sauver</button>
          </form>
          <br></br>

          <form onSubmit={this.handleSubmit}>
            <textarea name="paragraph_text" cols="50" rows="25" onChange={this.handleChange}></textarea>
            <br></br>
            <button className="btn btn-outline-dark" style={{color:'rgb(232,116,180)'}} >Save / Sauver</button>
          </form>
        </div>

        <br></br>
        <br></br>

        <div className="container" id="plan">
          <h1>Plan Your Project:</h1>
          <p><b>Figure out your ideal timeline so you can get your project started!</b></p>
          <h3>Tasks To Do:</h3>
          <p><b>Add items to your 'To Do' list to help you plan!</b></p>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
          
          <br></br>

          <h3>Notes:</h3>
          <p><b>Write down notes to help you organize your thoughts!</b></p>
          <form onSubmit={this.handleSubmit}>
            <textarea name="paragraph_text" cols="30" rows="5" onChange={this.handleChange}></textarea>
            <br></br>
            <button className="btn btn-outline-dark" style={{color:'rgb(232,116,180)'}} >Save</button>
          </form>

          <br></br>

          <h3>Calendar:</h3>
          <p><b>Mark dates on your calendar to help you see you plans!</b></p>
          <Calendar 
            onChange={this.onChange}
            value={this.state.date}
          />
          <br></br>
          <img src={Help} alt={'Help'} style={{width: '40px', backgroundColor:'rgb(0,0,0)'}}/>Not sure what to do? Click the button below to add an event to your personal calendar.
          
          <br></br>
          <br></br>

          <button className="btn btn-outline-dark" style={{color:'rgb(232,116,180)'}}>
            <AddToCalendar event={this.state.event}/>
          </button>
    

          

          

        </div>
      </div>
    );
  }
}

export default App;
