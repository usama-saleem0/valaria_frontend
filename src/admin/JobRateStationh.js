import JobOpenNewsCardh from "./component_hamza_dashboard/JobOpenNewsCardh";
import JobOpenRateDashHead from "./component_hamza_dashboard/JobOpenRateHeadh";
import JobOpenRateCardh from "./component_hamza_dashboard/JobRateStationCardh";

const JobOpenRateh = () => {
  return (
<section className="ah1">
        <div className="row">
          <div className="col-lg-12">
            <JobOpenRateDashHead />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            <JobOpenRateCardh />
          </div>
        </div>
        </section>
  );
};

export default JobOpenRateh;
