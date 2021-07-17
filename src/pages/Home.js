import FetauredInfo from "../components/featuredInfo/FetauredInfo";
import Chart from "../components/chart/Chart";
import { userDataAnalytics } from "../dummyData";
import WidgetLg from "../components/widgetLg/WidgetLg";
import WidgetSm from "../components/widgetSm/WidgetSm";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <FetauredInfo />
      <Chart
        data={userDataAnalytics}
        title="User Analytics"
        dataKey1="ActiveUsers"
        dataKey2="InActiveUsers"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
