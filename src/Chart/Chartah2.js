 
import React from 'react'

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import garaf from '../img/garaf-bar.png'

const Chartah2 = () => {
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

                    <div class="bar-pogres-box-ah">
                    <div class="bar-pogres-box-cards-ah">
                        <div class="pogras-card-ah">
                            <span>
                                <h2>4.7</h2>
                                <p>Current ratings</p>
                            </span>
                        </div>

                        <div class="pogras-card-ah">
                            <span>
                                <h2>345</h2>
                                <p>Ratings</p>
                            </span>
                            <span class="parsent-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.56215 6.78579C1.14676 6.37039 1.14676 5.6969 1.56215 5.2815L5.52325 1.32041C5.93864 0.905008 6.61214 0.905008 7.02753 1.32041L10.9886 5.2815C11.404 5.6969 11.404 6.37039 10.9886 6.78579C10.5732 7.20118 9.89974 7.20118 9.48434 6.78579L6.27539 3.57683L3.06644 6.78579C2.65104 7.20118 1.97755 7.20118 1.56215 6.78579Z" fill="#9BDB08"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.56215 13.2848C1.14676 12.8694 1.14676 12.1959 1.56215 11.7805L5.52325 7.81943C5.93864 7.40403 6.61214 7.40403 7.02753 7.81943L10.9886 11.7805C11.404 12.1959 11.404 12.8694 10.9886 13.2848C10.5732 13.7002 9.89974 13.7002 9.48434 13.2848L6.27539 10.0759L3.06644 13.2848C2.65104 13.7002 1.97755 13.7002 1.56215 13.2848Z" fill="#9BDB08"/>
                                  </svg>
                                <p>6%</p>
                            </span>
                        </div>

                        
                        <div class="pogras-card-ah">
                            <span>
                                <h2>4.02</h2>
                                <p>Avg ratings</p>
                            </span>
                            <span class="parsent-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.56215 6.78579C1.14676 6.37039 1.14676 5.6969 1.56215 5.2815L5.52325 1.32041C5.93864 0.905008 6.61214 0.905008 7.02753 1.32041L10.9886 5.2815C11.404 5.6969 11.404 6.37039 10.9886 6.78579C10.5732 7.20118 9.89974 7.20118 9.48434 6.78579L6.27539 3.57683L3.06644 6.78579C2.65104 7.20118 1.97755 7.20118 1.56215 6.78579Z" fill="#9BDB08"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.56215 13.2848C1.14676 12.8694 1.14676 12.1959 1.56215 11.7805L5.52325 7.81943C5.93864 7.40403 6.61214 7.40403 7.02753 7.81943L10.9886 11.7805C11.404 12.1959 11.404 12.8694 10.9886 13.2848C10.5732 13.7002 9.89974 13.7002 9.48434 13.2848L6.27539 10.0759L3.06644 13.2848C2.65104 13.7002 1.97755 13.7002 1.56215 13.2848Z" fill="#9BDB08"/>
                                  </svg>
                                <p>6%</p>
                            </span>
                        </div>

                    </div>
                    <div class="bar-pogres-box-imger-ah">
                        <img src={garaf} alt=""/>
                    </div>
                    </div>

                </div>

    </>
  )
}

export default Chartah2