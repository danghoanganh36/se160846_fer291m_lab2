import React, { Component } from 'react'
import { Films } from '../share/ListOfFilms'
import FilmsPresentation from './Films'
export class Main extends Component {
    constructor(){
        super()
        this.state ={
            fimls: Films
        };
    }
    render(){
        return <FilmsPresentation films={this.state.fimls} />
    }
}

export default Main