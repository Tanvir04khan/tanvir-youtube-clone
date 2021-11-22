import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Home/header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import SideBar from "./components/Home/sideBar/SideBar";
import LoginScreen from "./components/Login/LoginScreen";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

import "./_app.scss";
import { useSelector } from "react-redux";

const HomeScreenLayout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const ToggleSidebarHandler = () => setIsSidebarVisible((value) => !value);

  return (
    <>
      <Header onToggleSidebar={ToggleSidebarHandler} />
      <div className="app__container">
        <SideBar isSidebarVisible={isSidebarVisible} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!accessToken && !loading) {
      history.push("/login");
    }
  }, [accessToken, loading, history]);

  return (
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
  );
};

export default App;
