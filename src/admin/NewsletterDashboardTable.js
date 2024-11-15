import React, { useEffect, useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Col, Container, Modal, Row } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import { baseurl } from '../baseurl';
import {  useNavigate } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";

const NewsletterDashboardTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const navigate = useNavigate(); // Define navigate

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!selectedDate) {
            toast.error('Please select a date');
            return;
        }

        try {
            const response = await axios.post(`${baseurl}/post_articlebyid/${selectedRow.id}`, { createdAt: selectedDate });
            toast.success("Date updated successfully");
            setShowModal(false); // Close the modal after saving
            console.log('result', response);
        } catch (error) {
            console.error('Error updating date:', error);
            toast.error('Error updating date');
        }
    };

    const handleClose = () => setShowModal(false);

    const handleShow = (row) => {
        setSelectedRow(row); // Set the selected row to pass data if needed
        setSelectedDate(''); // Reset the date input when opening the modal
        setShowModal(true); // Show the modal
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${baseurl}/get-articles`);
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const goto = (row) => {
        localStorage.setItem("article", JSON.stringify(row));
        navigate("/newsletterarticleadmin");
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const date = new Date(dateString);
        return `${date.toLocaleDateString('en-US', options)} at ${date.toLocaleTimeString('en-US', timeOptions)}`;
    };

    return (
        <div className="dashnewsletter_data_box">
            <ToastContainer />
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>
                            <select>
                                <option value="">ID</option>
                            </select>
                        </th>
                        <th>
                            <select style={{ margin: '0px 0px 0px 30px' }}>
                                <option value="">Subject</option>
                            </select>
                        </th>
                        <th>
                            <select>
                                <option value="">Sent at</option>
                            </select>
                        </th>
                        <th>
                            <select style={{ margin: '0px 0px 0px 30px' }}>
                                <option value="">Progress</option>
                            </select>
                        </th>
                        <th>
                            <select style={{ margin: '0px 0px 0px 30px' }}>
                                <option value="">Action</option>
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((row) => (
                        <tr key={row.id}>
                            <td><input type="checkbox" /></td>
                            <td><h6>#{row.id}</h6></td>
                            <td><h2>{row.mainheading}.</h2></td>
                            <td><h5>{formatDate(row.createdAt)}</h5></td>
                            <td><ProgressBar current={34} total={32} /></td>
                            <td>
                                <div className="setting_icon_view" style={{width:'100%'}}>
                                <a onClick={() => handleShow(row)} style={{ color: 'white' }}>
                                             Change Date
                                        </a>
                                  
                                    <a
                                        style={{ cursor: 'pointer', color: 'white' }}
                                        onClick={() => goto(row)} // Navigate to the detailed view
                                    >
                                        View
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                show={showModal}
                onHide={handleClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="my--container--h mx-auto">
                        <div className="row">
                            <div className="col">
                                <div className="mb-3 d-flex justify-content-between align-items-center">
                                    <h1 className="form-label form-label-alt mb-1">Change Date</h1>
                                    <div className="about--close--h" onClick={() => handleClose(true)}>
                                        <img src={require("../img/Union_h.png")} alt="close" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="dateInput" className="form-label form-label-alt">New Date</label>
                                    <input
                                        type="date"
                                        className="form-control date--inp--h mb-3"
                                        id="dateInput"
                                        placeholder="Select date..."
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                </div>
                                <div className="experience--button--h pt-1">
                                    <button
                                        type="button"
                                        className="btn btn-primary experience--btn--h experience--btn--h--alt"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NewsletterDashboardTable;
