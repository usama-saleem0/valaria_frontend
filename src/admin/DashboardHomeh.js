import LineChart from "./component_hamza_dashboard/SubscriptionCharth";
import HomeSecOneh from "./component_hamza_dashboard/DashHomeFirstSec";
import HomeSecTwoh from "./component_hamza_dashboard/DashHomeSecongSec";
import InsightChart from "./component_hamza_dashboard/InsightCharth";
import WooCommerceChart from "./component_hamza_dashboard/WooCommerceChart";

const DashHomeh = () => {



  return (
    <section className="ah1">
      <div className="row">
        <div className="col-lg-12">
          <HomeSecOneh />
        </div>
        <div className="home-sec-two-pad-top-h col-lg-12">
          <HomeSecTwoh />
        </div>

        






        <div className="col-lg-12">
          <div className="home-sec-three-title-h">
            <h1>Website Overview</h1>
            <p>Update of the last 7 days</p>
          </div>
          <div className="dash--home--chart--cont--h">
            <InsightChart />
            <WooCommerceChart />
            <LineChart />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DashHomeh;
