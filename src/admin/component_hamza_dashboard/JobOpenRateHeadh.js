import { useState } from "react";
const JobOpenRateDashHead = () => {
  const [isJobType, setIsJobType] = useState(false);
  const [isProfession, setIsProfession] = useState(false);
  const [isSort, setIsSort] = useState(false);

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
          <h1>Rate My Station’s Jop Openings</h1>
        </div>
        <div className="job--open--dash--news--h--filter--cont">
          <div className="job--open--dash--rate--h--btn--cont">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <circle cx="11.9488" cy="11.6045" r="11.2534" fill="white" />
                <path
                  d="M11.9492 6.9707C11.4613 6.9707 11.0658 7.36623 11.0658 7.85413V11.1541H7.76526C7.27736 11.1541 6.88184 11.5496 6.88184 12.0375C6.88184 12.5254 7.27736 12.921 7.76526 12.921H11.0658V16.2215C11.0658 16.7094 11.4613 17.1049 11.9492 17.1049C12.4371 17.1049 12.8326 16.7094 12.8326 16.2215V12.921H16.1327C16.6206 12.921 17.0161 12.5254 17.0161 12.0375C17.0161 11.5496 16.6206 11.1541 16.1327 11.1541H12.8326V7.85413C12.8326 7.36623 12.4371 6.9707 11.9492 6.9707Z"
                  fill="#194D79"
                />
              </svg>{" "}
              Add New Job Opening
            </a>
          </div>
          <div className="job--rate--dash--h--filter--sort--cont">
            <div className="job--open--dash--news--h--filter--main job--open--dash--news--h--filter--main--alt">
              <label htmlFor="">Filter: </label>

              <div className="job--open--dash--news--h--filter--drop--cont">
                <div
                  onClick={toggleJobTypeFilter}
                  className={`job--open--dash--news--h--filter--drop ${
                    isJobType ? "borderradiusnone" : ""
                  }`}
                >
                  <span>Job Type</span>{" "}
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
                {isJobType && (
                  <ul className="job--open--dash--news--h--filter--dropdown">
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                )}
              </div>

              <div className="job--open--dash--news--h--filter--drop--cont">
                <div
                  onClick={toggleProfessionFilter}
                  className={`job--open--dash--news--h--filter--drop ${
                    isProfession ? "borderradiusnone" : ""
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

            <div className="job--open--dash--news--h--filter--sort job--open--dash--rate--h--filter--sort--alt">
              <label htmlFor="">Sort: </label>
              <div className="job--open--dash--news--h--filter--drop--cont">
                <div
                  onClick={toggleSortFilter}
                  className={`job--open--dash--news--h--filter--drop ${
                    isSort ? "borderradiusnone" : ""
                  }`}
                >
                  <span>Newest</span>{" "}
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
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobOpenRateDashHead;
