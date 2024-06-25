import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Test from "./components/Test";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/test" element={<Test />} />
     
      </Routes>
    </Router>
    </>
  );
}

export default App;
