import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateEmployee from './pages/CreateEmployee';
import CurrentEmployees from './pages/CurrentEmployees';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/employees" element={<CurrentEmployees />} />
          <Route path="/createEmployee" element={<CreateEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
