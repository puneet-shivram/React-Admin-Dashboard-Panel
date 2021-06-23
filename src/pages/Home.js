import FetauredInfo from "../components/featuredInfo/FetauredInfo";
import Chart from "../components/chart/Chart";
import { userDataAnalytics } from "../dummyData";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <FetauredInfo />
      <Chart data={userDataAnalytics} title="User Analytics" />
    </div>
  );
}
