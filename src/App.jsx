import { Header } from "./components";
import { Home, Note } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
