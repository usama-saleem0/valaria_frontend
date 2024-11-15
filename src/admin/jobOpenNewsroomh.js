import LineChart from "./component_hamza_dashboard/SubscriptionCharth";
import JobOpenNewsCardh from "./component_hamza_dashboard/JobOpenNewsCardh";
import JobOpenDashHead from "./component_hamza_dashboard/JobOpenNewsHeadh";
import Asistantnewsdirector from "../Asistantnewsdirector/Asistantnewsdirector";
import Asistantnewsdirectoradmin from "../Asistantnewsdirector/Asistantnewsdirectoradmin";
import { useState } from "react";
import axios from "axios";
import { baseurl } from "../baseurl";
const JobOpenNewsroom = () => {


  const [jobContent, setjobContent] = useState([]);

  const fetchJobsData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getjobs`);
      console.log("xxxxx", response.data.jobs);
      setjobContent(response.data.jobs);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [verificationFilter, setVerificationFilter] = useState('');
  const [sortFilter, setSortFilter] = useState('Newest');

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter and sort jobs
  const filteredUsers = jobContent
    .filter(user => user.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(user => filterType === '' || user.jobType === filterType)
    .filter(user =>
      verificationFilter === '' ||
      (verificationFilter === 'Verified' && user.verified_account === 1) ||
      (verificationFilter === 'Not Verified' && user.verified_account !== 1)
    )
    .sort((a, b) => {
      if (sortFilter === 'Newest') {
        return new Date(b.createdAt) - new Date(a.createdAt); // Sort by newest first
      } else if (sortFilter === 'Oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt); // Sort by oldest first
      }
      return 0;
    });



  return (
    <section className="ah1">
        <div className="row">
          <div className="col-lg-12">
          <JobOpenDashHead
            searchTerm={searchTerm} handleSearchChange={handleSearchChange}
            filterType={filterType} setFilterType={setFilterType}
            verificationFilter={verificationFilter} setVerificationFilter={setVerificationFilter}
            sortFilter={sortFilter} setSortFilter={setSortFilter}
            />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            {/* <JobOpenNewsCardh /> */}

            <Asistantnewsdirectoradmin fetchJobsData={fetchJobsData} filteredUsers={filteredUsers} />
          </div>
        </div>
        </section>
  );
};

export default JobOpenNewsroom;
