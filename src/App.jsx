import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Home/header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import SideBar from "./components/Home/sideBar/SideBar";

import "./_app.scss";

const App = () => {
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
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
