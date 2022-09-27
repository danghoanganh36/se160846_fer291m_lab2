/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Films } from '../share/ListOfFilms'
import { useState } from 'react';

export default function FilmsPresentation() {
    const [film, setFilm]   = useState([])
  return (
    <div className="container">
            {Films.map((film) =>(
            <div className="column">
                <div className="card">
                    <div className='card_img'>
                      <img src = {film.img} alt=""></img>
                    </div>
                    <div className='card_content'>
                      <h3>{film.title}</h3>
                      <p className='year'>{film.year}</p>
                      <p className='nation'>{film.nation}</p>
                      <p><button onClick={() => {setFilm(film)}} class="glow-on-hover" type="button">
                            <a href='#popup1' id='openPopUp'>Details</a>
                          </button></p>
                    </div>
                </div>
            </div>
            ))}  
            <div id='popup1' className='overlay'>
              <div className='popup'>
                <a className='close' href='#'>&times;</a>
                <div className='content'>
                  <img src={film.details} alt=''/>
                  <h2>{film.title}</h2>
                  <p>{film.info}</p>
                </div>
              </div>
            </div>
        </div>
  )
}