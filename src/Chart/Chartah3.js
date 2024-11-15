 
import React from 'react'

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import gol from '../img/gol-bar.png'

const Chartah3 = () => {
  return (
    <>
    <div class="Statistic-card-ah">
                    <div class="Overall-Statistic-ah">
                        <h2>Overall Newsroom Rating</h2>

                        <ul>
                            <li>All</li>
                            <li>Day</li>
                            <li>Week</li>
                            <li>Month</li>
                            <li>Year</li>
                        </ul>
                    </div>

                    <div class="gol-bar-ah">
                        <div class="gol-bar-head">
                            <h2>435</h2>
                            <p>Total ratings</p>
                        </div>

                        <div class="gol-bar-box">
                            <img src={gol} alt=""/>
                        </div>

                        <div class="gol-bar-tital">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <circle cx="7.7251" cy="8.13916" r="7.19775" fill="#89C400"/>
                                  </svg>
                                <p>Sexual Discrimination</p>
                            </span>

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <circle cx="7.7251" cy="8.14014" r="7.19775" fill="#9BDB08"/>
                                  </svg>
                                <p>Racial Discrimination</p>
                            </span>

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <circle cx="7.7251" cy="8.14014" r="7.19775" fill="#194D79"/>
                                  </svg>
                                <p>Sexual Harrassment</p>
                            </span>


                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <circle cx="7.7251" cy="8.14014" r="7.19775" fill="#2B6CA2"/>
                                  </svg>
                                <p>Toxic Work Environmentn</p>
                            </span> 
                        </div>
                    </div>

                </div>

    </>
  )
}

export default Chartah3