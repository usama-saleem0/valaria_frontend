import DashStationRateCardh from "./component_hamza_dashboard/DashStationRateCard";
import StationRatingDashHeadh from "./component_hamza_dashboard/DashStationRatingHead";

const DashStationRating = () => {
  return (
    <section className="ah1">
    <div className="dash--job--open--news--h">

        <div className="row">
          <div className="col-lg-12">
            <StationRatingDashHeadh />
          </div>
          <div className="col-lg-12 job-card--cont--alt--h--2">
            <DashStationRateCardh />
          </div>
        </div>

    </div>
    </section>
  );
};

export default DashStationRating;
