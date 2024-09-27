import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SubMain from "./components/SubMain";
import { Container } from "react-bootstrap";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container fluid className="px-4">
      <SubMain />
      <Main />
      <Footer />
      </Container>
    </div>
  );
}

export default App;
