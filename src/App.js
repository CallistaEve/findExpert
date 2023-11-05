import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from './homepage';
import { OtherPage } from './otherPage';
import { ExpertPage } from "./expertPage";
import { login, register } from './controller/auth_controller/auth_controller';

function App() {
  useEffect(() => {
    const tryLogin = async () => {
      const data = await login("gg@gmail.com", "Awd123");
      console.log(data);
    }
    tryLogin();
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/other">Other Page</Link>
          </li>
          <li>
            <Link to="/listExpert">Expert Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/listExpert" element={<ExpertPage />} />
      </Routes>
    </Router>
  );
}

export default App;
