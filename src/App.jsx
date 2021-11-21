import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Home/header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import SideBar from "./components/Home/sideBar/SideBar";
import LoginScreen from "./components/Login/LoginScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./_app.scss";

const HomeScreenLayout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => setIsSidebarVisible((value) => !value);

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <SideBar
          isSidebarVisible={isSidebarVisible}
          onToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreenLayout>
            <HomeScreen />
          </HomeScreenLayout>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <h1>Search me</h1>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
