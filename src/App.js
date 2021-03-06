/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './App.css';
import Scenario from './Scenario'
import About from './About'
import Feedback from './Feedback'
import Home from './Home'
import {DropdownButton, Dropdown, Button} from 'react-bootstrap'

class App extends Component {

  state = {
    header: <header>
              <div className = "wrapper">
                <h1>Large Scale</h1>
                <nav>
                  <ul className="menu">
                    <li><a href="#" onClick={()=>this.goHome()}>Home</a></li>
                    <li><a href="#" onClick={()=>this.set_page(1)}>Try</a></li>
                    <li><a href="#" onClick={()=>this.set_page(2)}>About</a></li>
                    <li><a href="#" onClick={()=>this.set_page(3)}>Feedback</a></li>
                    <li>
                    <DropdownButton variant="secondary" style = {{"line-height" : "70px"}} id="dropdown-basic-button" title="Language" size = "sm">
                        <Dropdown.Item as="button" onClick={()=>this.choose_language(0)}>Korean</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={()=>this.choose_language(1)}>English</Dropdown.Item>
                    </DropdownButton>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>,
    page_id: 0,
    page : ['home','scenario','about','feedback'],
    stage_id: 0,
    stage : ['intro','discription'],
    language_list : ['English', 'Korean'],
    language: 0,
    stopper: 0,
    request: 0
  }

  goHome = () => {
    if (this.state.page_id === 1){
      this.setState({stopper: 1, request: 0})
      return;
    }
    this.setState({stage_id: 0, page_id: 0})
  }

  goHome_default = () => {
    this.setState({stage_id: 0, page_id: 0})
  }

  set_stage = (id) => {
    this.setState({stage_id: id})
  }

  set_page = (id) => {
    if (this.state.page_id === 1 && id !== 1){
      this.setState({stopper: 1, request: id})
      return;
    }
    this.setState({page_id : id})
  }

  choose_language = (language) => {
    this.setState ({language : language, page_id: 0, stage_id: 0});
  }

  stop_process = (response, page) => {
    this.setState({stopper: 0})
    if (response === 1)
      this.setState({stage_id: 0, page_id: page})
  }

  render () {
    let content;
    var stage = this.state.page[this.state.page_id];
    switch (stage){
      case 'home':
        content = <Home header={this.state.header} stage_id = {this.state.stage_id} stage = {this.state.stage} set_stage = {this.set_stage}
                   page_id = {this.state.page_id} set_page = {this.set_page}/>
        break;
      case 'scenario':
        content = <div>
                   <Scenario header = {this.state.header} goHome_default = {this.goHome_default}/>
                   {this.state.stopper === 1 && 
                    <div className="Description">
                      <div style={{"margin" : "200px"}}>
                        <h3>If you leave here, your response will be deleted. Is it OK?</h3>
                        <div>
                        <Button variant="success" className="ButtonMargin" onClick = {()=>this.stop_process(1,this.state.request)}>Yes</Button>
                        <Button variant="danger" className="ButtonMargin" onClick = {()=>this.stop_process(0,this.state.request)}>No</Button>
                        </div>
                      </div>
                    </div>}
                  </div>
        break;

      case 'about':
        content = <About header = {this.state.header} />;
        break;

      case 'feedback':
        content = <Feedback header = {this.state.header} />;
        break;

      default:
        alert("You don't have to come here.")
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}


export default App;
