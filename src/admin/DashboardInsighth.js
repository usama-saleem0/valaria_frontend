import LineChart from "./component_hamza_dashboard/SubscriptionCharth";
import HomeSecOneh from "./component_hamza_dashboard/DashHomeFirstSec";
import HomeSecTwoh from "./component_hamza_dashboard/DashHomeSecongSec";
import InsightChart from "./component_hamza_dashboard/InsightCharth";
import WooCommerceChart from "./component_hamza_dashboard/WooCommerceChart";
import DashboardInsightChart from "./component_hamza_dashboard/DasboardInsightCharth";
import DashInsightHeadh from "./component_hamza_dashboard/DashInsightHeadh";
import InsightSecTwoh from "./component_hamza_dashboard/InsightSecTwoh";
import DashboardInsightChartTwo from "./component_hamza_dashboard/DashboardInsightChartTwoh";

const DashInsightSech = () => {
  return (
    <section className="ah1">
      <div className="row">
        <div className="col-lg-12">
          <DashInsightHeadh />
          <DashboardInsightChart />
          <InsightSecTwoh />
          <DashboardInsightChartTwo />
        </div>
      </div>
      </section>
  );
};
export default DashInsightSech;
