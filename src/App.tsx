import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import CountryPage from './CountryPage/CountryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
