
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from "react-bootstrap";

import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Miracle"; // or "" if you want to test "Hello, there!"

function App() {
  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      <Card style={{ width: "22rem", textAlign: "center" }}>
        
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Greeting below the card */}
      <div className="mt-3">
        <h4>Hello, {firstName ? firstName : "there!"}</h4>
        {firstName && (
          <img
            src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
            alt="hello"
            width="150"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
