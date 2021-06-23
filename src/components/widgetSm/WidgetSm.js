import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New join members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="profile-pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Killer</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="profile-pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Anna Killer</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="pprofile-pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Anna Killer</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="profile-pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Anna Killer</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
            alt="profile-pic"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Anna Killer</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
