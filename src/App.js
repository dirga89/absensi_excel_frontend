import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="container-fluid d-flex flex-column">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
