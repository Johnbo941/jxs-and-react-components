
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Miracle"; // leave empty like "" if you want it to say "Hello, there!"

function App() {
  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center", padding: "20px", border: "1px solid lightgray" }}>
      <Image />
      <Name />
      <Price />
      <Description />

      <div style={{ marginTop: "20px" }}>
        <h3>Hello, {firstName ? firstName : "there!"}</h3>
        {firstName && <img src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" alt="hello" width="100" />}
      </div>
    </div>
  );
}

export default App;
