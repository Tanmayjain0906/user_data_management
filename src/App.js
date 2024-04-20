import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import UserDataFormPage from "./pages/UserDataFormPage";
import TextEditor from "./pages/TextEditor";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<CounterPage />}/>
        <Route path="/user" element={<UserDataFormPage />}/>
        <Route path="/text-editor" element={<TextEditor />}/>
      </Routes>
      
    </div>
  );
}

export default App;
