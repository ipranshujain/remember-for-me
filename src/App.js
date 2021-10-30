import { useState, useEffect } from "react";
import DisplayGrid from "./components/DisplayGrid";
import InputDate from "./components/InputDate";
import DailyTasks from "./components/DailyTasks";

import { getDate, daysInMonth } from "./utils/dateUtil";
import "./Display.css";
import Upcoming from "./components/Upcoming";
import { cleanStorage } from "./utils/cleanUtil";
import { IoInformationCircleSharp } from "react-icons/io5";

function App() {
  const { cYear, cMonth, cDay } = getDate();
  const [currentDate, setCurrentDate] = useState({
    year: parseInt(cYear),
    month: parseInt(cMonth),
    nDays: daysInMonth(cYear, cMonth),
  });
  const [daysWithInfo, setDaysInfo] = useState([]);

  useEffect(() => {
    cleanStorage();
    const savedData = JSON.parse(localStorage.getItem("eventInfo"));
    const { year, month, nDays } = currentDate;
    const tempDays = [];
    for (let i = 1; i <= nDays; i++) {
      let message = "";
      const d = `${i}-${month}-${year}`;
      if (savedData && d in savedData) {
        message = savedData[d].message;
      }
      tempDays.push({
        day: i,
        message: message,
      });
    }
    setDaysInfo([...tempDays]);
  }, [currentDate]);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div class="phead">Remember For Me</div>
      {showInfo && (
        <div className="showinfo">
          <div>
            This is a simple application which you can use to enter info about
            future events and it will save it in your local storage. The
            speciality of this application is that I automatically removes past
            events (events from previous month/year). So only future events can
            be saved. No external database is used therefore the info saved is
            in your localStorage.
          </div>
        </div>
      )}
      <IoInformationCircleSharp
        className="info"
        onClick={(e) => setShowInfo(!showInfo)}
      />

      <div className="distribute">
        <div>
          <InputDate
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
          <DisplayGrid
            currentDate={currentDate}
            daysWithInfo={daysWithInfo}
            setDaysInfo={setDaysInfo}
          />
        </div>
        <Upcoming />
      </div>
      <DailyTasks />
      <span className="author">Created By Pranshu Jain</span>
    </div>
  );
}

export default App;
