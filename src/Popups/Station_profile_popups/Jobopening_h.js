import axios from "axios";
import { useState, useEffect } from "react";
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobOpeningForm = ({ onCancel }) => {
  const [isExp, setIsExp] = useState(false);

  const [isEdu, setIsEdu] = useState(false);
  const [jobTitle, setjobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [yearlySalary, setyearlySalary] = useState("");
  const [jobType, setjobType] = useState("");
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
  const [qualification, setQualification] = useState("");
  const [careerlevel, setCareerlevel] = useState("");

  const [yearofexperience, setYearofexperience] = useState("");
  const [educationlevel, setEducationlevel] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [location, setLocation] = useState('');

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("userData");
    return user ? JSON.parse(user) : null;
  };



  const toggleJobType = () => {
    setIsJobTypeOpen(!isJobTypeOpen);
  };

  const handleJobTypeSelect = (type) => {
    setjobType(type);
    setIsJobTypeOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${baseurl}/getCountries`);
        setCountries(response.data.fetchCountries); // Correct structure
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []); // Empty dependency array to fetch only on mount

  useEffect(() => {
    if (selectedCountry) { // Check if a country is selected
      const fetchStates = async () => {
        try {
          const response = await axios.get(`${baseurl}/getStates?country_id=${selectedCountry}`); // Pass country_id
          setStates(response.data.fetchStates); // Set states
        } catch (error) {
          console.error('Error fetching states:', error);
        }
      };
      fetchStates();
    }
  }, [selectedCountry]); // Trigger when selectedCountry changes


  // Handle country input and filter results
  const handleCountryChange = (e) => {
    const input = e.target.value;
    setLocation(input);

    if (Array.isArray(countries)) {  // Check if countries is an array
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  // Handle country selection from typeahead
  const handleCountrySelect = (country) => {
    setSelectedCountry(country.id); // Use the `id` of the country instead of `name`
    setLocation(country.name); // Set the input value to the selected country name for display purposes
    setFilteredCountries([]); // Clear the suggestions
    setSelectedState(''); // Reset state selection
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUser = getUserFromLocalStorage();
    console.log("Retrieved user from local storage:", storedUser);
    const userId = storedUser.id;

    const formData = {
      jobTitle,
      jobDescription,

      yearlySalary,
      jobType,
      qualification,
      careerlevel,
      location,
      selectedState,
      yearofexperience,
      educationlevel,
      startDate,
      endDate,
      userId,
    };

    try {
      const response = await axios.post(`${baseurl}/createjob`, {
        formData,
      });

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      toast.error("All Fields are required", error);
    }
  };

  const yearToggle = () => {
    setIsExp(!isExp);
  };

  const educationToggle = () => {
    setIsEdu(!isEdu);
  };

  return (
    <div class="container">
      <div class="my--container--h mx-auto">
        <ToastContainer />

        <div class="row">
          <div class="col">
            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h1
                for="exampleFormControlInput1"
                class="form-label form-label-alt mb-1"
              >
                Job Opening
              </h1>
              <div class="about--close--h">
                <img
                  src={require("../../img/Union_h.png")}
                  onClick={onCancel}
                  alt=""
                />
              </div>
            </div>

            <div class="mb-3">
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt"
              >
                Job title
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={jobTitle}
                onChange={(e) => setjobTitle(e.target.value)}
              />
              <label
                for="exampleFormControlTextarea1"
                class="form-label form-label-alt mt-1"
              >
                Job description
              </label>
              <textarea
                class="form-control about--input--h mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
                value={jobDescription}
                onChange={(e) => setjobDescription(e.target.value)}
              ></textarea>
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt mt-1"
              >
                Yearly Salary
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={yearlySalary}
                onChange={(e) => setyearlySalary(e.target.value)}
              />
              {/* <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt mt-1"
              >
                Job Type
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={jobType}
                onChange={(e) => setjobType(e.target.value)}
              /> */}

              <div className="mb-3 mt-1 col-12 drop--position">
                <label htmlFor="jobType" className="form-label form-label-alt mt-1">
                  Job Type
                </label>
                <div
                  onClick={toggleJobType}
                  className={`form-select skills--inp--h experience--job--inp--h--dropdown--click ${isJobTypeOpen ? 'experience--job--inp--h--dropdown--click--rad' : ''}`}
                  id="jobType"
                >
                  {jobType === "" ? "Choose Option..." : jobType}
                </div>
                {isJobTypeOpen && (
                  <ul className="experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={() => handleJobTypeSelect("OnSite")}>OnSite</li>
                    <li onClick={() => handleJobTypeSelect("Hybrid")}>Hybrid</li>
                    <li onClick={() => handleJobTypeSelect("Remote")}>Remote</li>
                  </ul>
                )}
              </div>

              <div class="row job--opening--qualify--cont--h">
                <label
                  for="exampleFormControlInput1"
                  class="form-label form-label-alt mt-1 px-0"
                >
                  Qualification
                </label>
                
                  <input
                    type="text"
                    class="form-control skills--inp--h mb-3 "
                    id="exampleFormControlInput1"
                    placeholder="Type here..."
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    style={{width: '100%'}}
                  />
                
              
              </div>
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt mt-1"
              >
                Career level
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={careerlevel}
                onChange={(e) => setCareerlevel(e.target.value)}
              />
              <label htmlFor="countryInput" className="form-label form-label-alt mt-1">
                Country
              </label>
              <input
                type="text"
                className="form-control skills--inp--h mb-3"
                id="countryInput"
                placeholder="Type here..."
                value={location}
                onChange={handleCountryChange}
              />
              {filteredCountries.length > 0 && (
                <ul className="list-group">
                  {filteredCountries.map((country) => (
                    <li
                      key={country.id} // Use country.id as the key
                      className="list-group-item"
                      onClick={() => handleCountrySelect(country)} // Pass entire country object
                    >
                      {country.name}
                    </li>
                  ))}
                </ul>
              )}

              <label htmlFor="stateSelect" className="form-label form-label-alt mt-1">
                State
              </label>
              <select
                className="form-control skills--inp--h mb-3"
                id="stateSelect"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                disabled={!selectedCountry} // Disable if no country selected
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state.id} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>


              <div class="mb-3 mt-1 col-12 drop--position">
                <label for="inputAddress" class="form-label form-label-alt ">
                  Years of experience
                </label>
                <div
                  onClick={yearToggle}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isExp ? `experience--job--inp--h--dropdown--click--rad` : ``
                    }`}
                  id="inputWorkPlace"
                >
                  {yearofexperience === ""
                    ? "Choose Option..."
                    : yearofexperience}
                </div>
                {isExp && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li
                      onClick={() => {
                        setYearofexperience("1 Year");
                        yearToggle();
                      }}
                    >
                      1 Year
                    </li>

                    <li
                      onClick={() => {
                        setYearofexperience("2 Years");
                        yearToggle();
                      }}
                    >
                      2 Years
                    </li>
                    <li
                      onClick={() => {
                        setYearofexperience("3 Years");
                        yearToggle();
                      }}
                    >
                      3 Years
                    </li>
                    <li
                      onClick={() => {
                        setYearofexperience("4 Years");
                        yearToggle();
                      }}
                    >
                      4 Years
                    </li>
                    <li
                      onClick={() => {
                        setYearofexperience("5 Years");
                        yearToggle();
                      }}
                    >
                      5 Years
                    </li>
                  </ul>
                )}
              </div>
              <div class="mb-3 mt-1 col-12 drop--position">
                <label for="inputAddress" class="form-label form-label-alt">
                  Education level
                </label>
                <div
                  onClick={educationToggle}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEdu ? `experience--job--inp--h--dropdown--click--rad` : ``
                    }`}
                  id="inputWorkPlace"
                >
                  {educationlevel === "" ? "Choose Option..." : educationlevel}
                </div>
                {isEdu && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li
                      onClick={() => {
                        setEducationlevel("Graducated");
                        educationToggle();
                      }}
                    >
                      Graducated
                    </li>

                    <li
                      onClick={() => {
                        setEducationlevel("Masters");
                        educationToggle();
                      }}
                    >
                      Masters
                    </li>
                    <li
                      onClick={() => {
                        setEducationlevel("Intermediate");
                        educationToggle();
                      }}
                    >
                      Intermediate
                    </li>
                  </ul>
                )}
              </div>

              <div class="row job--opening--qualify--cont--h">
                <div class="col-lg-6 job--opening--qualify--h">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label form-label-alt mt-1"
                  >
                    Start date
                  </label>
                  <input
                    type="date"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="mm/dd/yy"
                    value={startDate}
                    onChange={(e) => setstartDate(e.target.value)}
                  />
                </div>
                <div class="col-lg-6 job--opening--qualify--h">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label form-label-alt mt-1"
                  >
                    End date
                  </label>
                  <input
                    type="date"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="mm/dd/yy"
                    value={endDate}
                    onChange={(e) => setendDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div class="about--button--h job--opening--buuton--a pt-1">
              <button
                type="button"
                class="btn btn-primary about--btn--h about--btn--h--alt"
                onClick={handleSubmit}
              >
                Post
              </button>
              <button
                type="button"
                class="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
                onClick={onCancel}
              >
                Cancel
              </button>
              <a href="">Save as a draft</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobOpeningForm;
