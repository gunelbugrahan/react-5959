import "./App.css";
import HeroSection from "./component/HeroSection";
import NavbarComponent from "./component/NavbarComponent";
import CardComponent from "./component/CardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { heroSectionData, cardData } from "./data/data";
import Container from "react-bootstrap/esm/Container";
import Footer from "./component/Footer";
import "./scss/Main.scss";
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection
                title={heroSectionData.title}
                body={heroSectionData.body}
                buttonText={heroSectionData.buttonText}
              />
              <Container className="px-lg-5">
                <div className="row gx-lg-5 d-flex justify-content-center flex-wrap">
                  {cardData.map((card) => (
                    <CardComponent
                      key={card.id}
                      title={card.title}
                      content={card.content}
                      img={
                        typeof card.img === "string" || card.icon instanceof String ? (
                          <img
                            className="warzoneImg"
                            src={card.img}
                            alt={card.title}
                          />
                        ) : (
                          <FontAwesomeIcon icon={card.img} />
                        )
                      }
                    />
                  ))}
                </div>
              </Container>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
