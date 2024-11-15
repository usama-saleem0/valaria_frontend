import React from "react";


import Past from '../img/Past-1.png'


import line from '../img/line-icon.png'

import gol from '../img/gol-icon-ah.png'
import { differenceInMonths, parseISO } from 'date-fns';
import { baseurl } from "../baseurl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Jobah = ({ jobContent, onSuccess, jobTypeFilter }) => {
    console.log('jobContentsss', jobContent)


    const navigate = useNavigate()


    const calculateDurationInMonths = (start, end) => {
        const startDate = parseISO(start);
        const endDate = parseISO(end);

        const years = endDate.getFullYear() - startDate.getFullYear();
        const months = endDate.getMonth() - startDate.getMonth();

        return years * 12 + months;
    };



    const Decline = async (e) => {


        const job_id = e


        console.log('hhhh', job_id)
        try {
            const response = await axios.post(`${baseurl}/declinejob`, { job_id });
            toast.success('Incoming Request Rejected');

            onSuccess()

        } catch (error) {

            console.error("Login error:", error);
        }
    };



    const Go_to_Chat = (e) => {

        localStorage.setItem('Reciever_Id', e)
        navigate('/ts')

    }



    return (



        <>

            <ToastContainer />

            <div class="Jacob-card-ah-box">

                {jobContent
                //    .filter(job => job.rejected !== 1 && (jobTypeFilter === '' || job.Job.jobType === jobTypeFilter))  // Add filter for jobTypeFilter
                    .map((job, index) => (
                        <div class="Jacob-card-ah">
                            <div class="Director-ah-boxing">
                                <div class="Director-ah-boxing-logo">

                                    <div class="span-logo-Director">
                                        <img src={Past} alt="" />
                                    </div>

                                    <span>
                                        <h2>{job.User.username}</h2>
                                        <p>News Director</p>
                                    </span>
                                </div>

                                <p>Why hire me?</p>
                            </div>

                            <div class="Director-ah-boxing-2">
                                <div class="Director-ah-boxing-list">
                                    <div class="Director-ah-boxing-list-logo">
                                        <img src={line} alt="" />
                                        <span><h2>Job Title</h2>
                                            <p>{job.Job.jobTitle}</p>
                                            </span>
                                    </div>

                                    <div class="Director-ah-boxing-list-span">
                                        <h2>{job.Job.startDate}  -  {job.Job.endDate}</h2>
                                        <p>{calculateDurationInMonths(job.Job.startDate, job.Job.endDate)} months</p>
                                    </div>

                                </div>
                                <div class="Director-ah-boxing-list">
                                    <div class="Director-ah-boxing-list-logo">
                                        <img src={line} alt="" />
                                        <span><h2>Job Type</h2>
                                            <p>{job.Job.jobType}</p></span>
                                    </div>


                                </div>

                            </div>


                            <div class="Director-ah-boxing-3">
                                <button onClick={() => Decline(job.job_id)} >Decline</button>

                                <button class="interview-ah" onClick={() => Go_to_Chat(job.User.id)}>Chat1</button>
                            </div>


                        </div>
                    ))}









            </div>

        </>

    )




}



export default Jobah
