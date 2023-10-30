import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BookDetails from './pages/BookDetails/BookDetails';

function App() {
    return (
    <main>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
