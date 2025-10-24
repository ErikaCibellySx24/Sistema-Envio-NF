import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx"; // Página inicial

export default function App() {
  return (
    <Router>

      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link> |

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
