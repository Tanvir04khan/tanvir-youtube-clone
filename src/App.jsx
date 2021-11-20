import { Container } from "react-bootstrap";
import Header from "./components/Home/header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import SideBar from "./components/Home/sideBar/SideBar";

import "./_app.scss";

const App = () => {
  return (
    <>
      <Header />
      <div className="app__container">
        <SideBar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
