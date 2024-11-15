import { useState } from "react";

const JobOpenDashHead = ({
  searchTerm, handleSearchChange,
  filterType, setFilterType,
  verificationFilter, setVerificationFilter,
  sortFilter, setSortFilter

}) => {
  const [isStation, setIsStation] = useState(false);
  const [isJobType, setIsJobType] = useState(false);
  const [isProfession, setIsProfession] = useState(false);
  const [isSort, setIsSort] = useState(false);


  const handleSortSelect = (sortOption) => {
    setSortFilter(sortOption); // Update the selected sort option
    setIsSort(false); // Close the dropdown after selection
  };

  const handleVerificationSelect = (filter) => {
    setVerificationFilter(filter);
    setIsProfession(false);
  };

  const handleFilterSelect = (type) => {
    setFilterType(type);
    setIsStation(false);
  };




  const toggleStationFilter = () => {
    setIsStation(!isStation);
  };
  const toggleJobTypeFilter = () => {
    setIsJobType(!isJobType);
  };
  const toggleProfessionFilter = () => {
    setIsProfession(!isProfession);
  };
  const toggleSortFilter = () => {
    setIsSort(!isSort);
  };
  return (
    <>
      <section className="job--open--dash--news--h--head">
        <div className="job--open--dash--news--h--title">
          <h1>Newsroom’s Jop Openings</h1>
        </div>
        <div className="job--open--dash--news--h--filter--cont">
          <div className="job--open--dash--news--h--search--cont">
            <input
              type="text"
              placeholder="Search by username"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.63059 0.571777C3.86405 0.571777 0 4.43582 0 9.20237C0 13.9689 3.86405 17.833 8.63059 17.833C10.629 17.833 12.4687 17.1538 13.9315 16.0137L17.5991 19.6812C18.016 20.0981 18.692 20.0981 19.1089 19.6812C19.5258 19.2643 19.5258 18.5884 19.1089 18.1715L15.4414 14.504C16.5818 13.041 17.2612 11.201 17.2612 9.20237C17.2612 4.43582 13.3971 0.571777 8.63059 0.571777ZM2.13509 9.20237C2.13509 5.615 5.04323 2.70687 8.63059 2.70687C12.218 2.70687 15.1261 5.615 15.1261 9.20237C15.1261 12.7897 12.218 15.6979 8.63059 15.6979C5.04323 15.6979 2.13509 12.7897 2.13509 9.20237Z"
                fill="#828282"
              />
            </svg>
          </div>
          <div className="job--open--dash--news--h--filter--main">
            <label htmlFor="">Filter: </label>
            <div className="job--open--dash--news--h--filter--drop--cont">
              <div
                onClick={toggleStationFilter}
                className={`job--open--dash--news--h--filter--drop ${isStation ? "borderradiusnone" : ""
                  }`}
              >
                <span>Station</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.685 0.293382C11.0755 0.683906 11.0755 1.31707 10.685 1.7076L6.59065 5.80193C6.20013 6.19245 5.56696 6.19245 5.17644 5.80193L1.0821 1.7076C0.69158 1.31707 0.69158 0.683906 1.0821 0.293382C1.47263 -0.0971428 2.10579 -0.0971428 2.49632 0.293382L5.88354 3.68061L9.27077 0.293382C9.66129 -0.0971428 10.2945 -0.0971428 10.685 0.293382Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              {isStation && (
                <ul className="job--open--dash--news--h--filter--dropdown ">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )}
            </div>

            <div className="job--open--dash--news--h--filter--drop--cont">
              <div
                onClick={toggleJobTypeFilter}
                className={`job--open--dash--news--h--filter--drop ${isJobType ? "borderradiusnone" : ""
                  }`}
              >
                <span>{filterType || "Type"}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <span>{filterType || "Type"}</span>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.685 0.293382C11.0755 0.683906 11.0755 1.31707 10.685 1.7076L6.59065 5.80193C6.20013 6.19245 5.56696 6.19245 5.17644 5.80193L1.0821 1.7076C0.69158 1.31707 0.69158 0.683906 1.0821 0.293382C1.47263 -0.0971428 2.10579 -0.0971428 2.49632 0.293382L5.88354 3.68061L9.27077 0.293382C9.66129 -0.0971428 10.2945 -0.0971428 10.685 0.293382Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              {isJobType && (
                <ul className="job--open--dash--news--h--filter--dropdown">
                  <li onClick={() => handleFilterSelect('Hybrid')}>Hybrid</li>
                  <li onClick={() => handleFilterSelect('Remote')}>Remote</li>
                  <li onClick={() => handleFilterSelect('Onsite')}>On Site</li>
                  <li onClick={() => handleFilterSelect('')}>All Jobs</li>
                </ul>
              )}
            </div>

            <div className="job--open--dash--news--h--filter--drop--cont">
              <div
                onClick={toggleProfessionFilter}
                className={`job--open--dash--news--h--filter--drop ${isProfession ? "borderradiusnone" : ""
                  }`}
              >
                <span>Profession</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.685 0.293382C11.0755 0.683906 11.0755 1.31707 10.685 1.7076L6.59065 5.80193C6.20013 6.19245 5.56696 6.19245 5.17644 5.80193L1.0821 1.7076C0.69158 1.31707 0.69158 0.683906 1.0821 0.293382C1.47263 -0.0971428 2.10579 -0.0971428 2.49632 0.293382L5.88354 3.68061L9.27077 0.293382C9.66129 -0.0971428 10.2945 -0.0971428 10.685 0.293382Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              {isProfession && (
                <ul className="job--open--dash--news--h--filter--dropdown">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )}
            </div>
          </div>

          <div className="job--open--dash--news--h--filter--sort">
            <label htmlFor="">Sort: </label>
            <div className="job--open--dash--news--h--filter--drop--cont">
              <div
                onClick={toggleSortFilter}
                className={`job--open--dash--news--h--filter--drop ${isSort ? "borderradiusnone" : ""
                  }`}
              >
                <span>{sortFilter || 'Newest'}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.685 0.293382C11.0755 0.683906 11.0755 1.31707 10.685 1.7076L6.59065 5.80193C6.20013 6.19245 5.56696 6.19245 5.17644 5.80193L1.0821 1.7076C0.69158 1.31707 0.69158 0.683906 1.0821 0.293382C1.47263 -0.0971428 2.10579 -0.0971428 2.49632 0.293382L5.88354 3.68061L9.27077 0.293382C9.66129 -0.0971428 10.2945 -0.0971428 10.685 0.293382Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              {isSort && (
                <ul className="job--open--dash--news--h--filter--dropdown">
                  <li onClick={() => handleSortSelect('Newest')}>Newest</li>
                  <li onClick={() => handleSortSelect('Oldest')}>Oldest</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobOpenDashHead;
