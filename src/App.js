import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ContentWrapper from './components/contentwrapper/ContentWrapper';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
