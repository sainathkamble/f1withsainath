import './global.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home.jsx';
// import { CarData } from './components/carData.jsx';
// import { CarLocation } from './components/carLocation.jsx';
// import { DriversList } from './components/driversList.jsx';
// import { Intervals } from './components/interval.jsx';
// import { LapDetails } from './components/lapDetails.jsx';
// import { LiveStandings } from './components/liveStandings.jsx';
// import { PitData } from './components/pitData.jsx';
import { RaceControlData } from './data/raceControl.jsx';
// import { Schedule } from './components/schedule.jsx';
// import { Session } from './components/session.jsx';
// import { Stints } from './components/stints.jsx';
//import { TeamRadio } from './data/teamRadio.jsx';
import { WeatherData } from './data/weather.jsx';
import { Stream } from './components/stream.jsx';
import { Calendar } from './components/calendar.jsx';
import { Schedule } from './components/schedule.jsx';
import { Profile } from './components/profile.jsx';
import { Login } from './components/login.jsx';
import { Register } from './components/register.jsx';

function  App() {
  return (
    <>
      <Routes> 
          <Route path="/" element={<Home />} />
          {/* <Route path="/car_data" element={<CarData />} />
          <Route path="/car_location" element={<CarLocation />} />
          <Route path="/drivers" element={<DriversList />} />
          <Route path="/interval" element={<Intervals />} />
          <Route path="/lap_details" element={<LapDetails />} />
          <Route path="/live_standings" element={<LiveStandings />} />
          <Route path="/pit_data" element={<PitData />} /> */}
          <Route path="/race_control" element={<RaceControlData />} />
          {/* <Route path="/schedule" element={<Schedule />} />
          <Route path="/session" element={<Session />} />
          <Route path="/stints" element={<Stints />} />
          <Route path="/team_radio" element={<TeamRadio />} /> */}
          <Route path="/weather" element={<WeatherData />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App
