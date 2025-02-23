import './App.css'
import AgeCalculator from "./components/AgeCalculator.tsx";
import PasswordStrength from "./components/PasswordStrength.tsx";
import PasswordInput from "./components/PasswordInput.tsx";
import {useState} from "react";

function App() {
  const [password, setPassword] = useState("");
  return (
    <>
      <AgeCalculator></AgeCalculator>
      <PasswordInput password={password} setPassword={setPassword}></PasswordInput>
      <PasswordStrength password={password}></PasswordStrength>
    </>
  )
}

export default App
