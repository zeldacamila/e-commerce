import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Section from './pages/Sections/Section';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections/sectionFire' element={<Section />} />
        <Route path='/collections/Fire/products/Candela1' element={<ProductPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
