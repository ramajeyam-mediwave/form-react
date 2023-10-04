import "./App.css";
import { Input, Button } from "./Components";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input
          name="First Name"
          type="text"
          placeholder="Enter your First name"
        />
        <Input
          name="Second Name"
          type="text"
          placeholder="Enter your Second name"
        />
        <Input name="Your Age" type="number" placeholder="Enter your age" />
        <Button/>
      </header>
    </div>
  );
}
export default App;
