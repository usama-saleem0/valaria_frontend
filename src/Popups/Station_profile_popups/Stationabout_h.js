import { useState } from "react";
import axios from "axios";
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StationAboutForm = ({onCancel , onSucess}) => {
  const [formData, setFormData] = useState({
    About: '',
    Industry: '',
    Address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  const handleSelect = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      Industry: value
    }));
    setIsOpen(false);
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };

  const handleSaveClick = () => {
    handleSubmit({ preventDefault: () => { } });
    console.log('hello world');
  };


  const handleCancel = () => {
    console.log('Form submission cancelled');
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const { About, Industry, Address } = formData;

    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser ? storedUser.id : null;

    if (!userId) {
      setError('User ID is missing');
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/addaboutnews`, {
        About,
        Industry,
        Address,
        userId
      });


      const formData = {
        About,
        Industry,
        Address,
        userId
      }


      console.log('formData' , formData)



      console.log('Form submitted successfully:', response.data.about);

      localStorage.setItem('aboutData', JSON.stringify(formData));

      onSucess()



      toast.success(response.data.message);

    } catch (error) {
      setError(error.response?.data?.message || 'Error submitting form');
      console.error('Error submitting form:', error);
      toast.error('All Fields are required', error);

    }
    
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <ToastContainer />

      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">About</h1>
              <div className="about--close--h">
                <img src={require("../../img/Union_h.png")} onClick={onCancel} alt="" />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                You can write about your years of experience, industry, or
                skills.
              </label>
              <textarea
                className="form-control about--input--h"
                id="About"
                rows="3"
                placeholder="Type here..."
                value={formData.About}
                onChange={handleChange}

              ></textarea>
            </div>
            <div className="mb-3 mt-1 col-12 drop--position">
              <label
                htmlFor="inputGroupSelect01"
                className="form-label form-label-alt"
              >
                Industry
              </label>
              <div
                onClick={toggle}
                className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isOpen ? `experience--job--inp--h--dropdown--click--rad` : ``
                  }`}
                id="Industry"
              >
                {formData.Industry || 'Choose Option...'}

              </div>
              {isOpen && (
                <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                  <li onClick={() => handleSelect('Tv News')} >Tv News</li>
                  <li onClick={() => handleSelect('Radio')} >Radio</li>
                  <li onClick={() => handleSelect('Publications')} >Publications</li>
                  <li onClick={() => handleSelect('Podcasts')} >Podcasts</li>
                  <li onClick={() => handleSelect('Youtube')} >Youtube</li>
                </ul>
              )}
            </div>
            <div className="col-12 mb-3 mt-1">
              <label
                htmlFor="inputAddress"
                className="form-label form-label-alt"
              >
                Station Address
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="Address"
                placeholder="Type here..."
                value={formData.Address}
                onChange={handleChange}
              />
            </div>
            {/* <Buttonh /> */}
            <div className="experience--button--h pt-1">
              <button
                type="button"
                className="btn btn-primary experience--btn--h experience--btn--h--alt"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationAboutForm;


