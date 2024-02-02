import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Section from './pages/Sections/Section';
import SectionPaper from './pages/Sections/SectionPaper';
import SectionDabs from './pages/Sections/SectionDabs';
import SectionElectronics from './pages/Sections/SectionElectronics';
import SectionGlass from './pages/Sections/SectionGlass';
import SectionGrow from './pages/Sections/SectionGrow';
import SectionApto from './pages/Sections/SectionApto';
import SectionKits from './pages/Sections/SectionKits';
import SectionMedicinal from './pages/Sections/SectionMedicinal';
import ProductPage from './pages/ProductPage/ProductPage';
import ButtonWhatsapp from './components/ButtonWhatsapp/ButtonWhatsapp';
import Cart from './pages/Cart/Cart';
import ButtonBag from './components/ButtonBag/ButtonBag';

function App() {
  return (
    <div className="main-container">
      <Header />
      <ButtonBag />
      <ButtonWhatsapp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections/Fire' element={<Section />} />
        <Route path='/collections/Paper' element={<SectionPaper />} />
        <Route path='/collections/Glass' element={<SectionGlass />} />
        <Route path='/collections/Electronics' element={<SectionElectronics />} />
        <Route path='/collections/IndoorAccesories' element={<SectionApto />} />
        <Route path='/collections/Dabs' element={<SectionDabs />} />
        <Route path='/collections/Kits' element={<SectionKits />} />
        <Route path='/collections/Grow' element={<SectionGrow />} />
        <Route path='/collections/Medicinal' element={<SectionMedicinal />} />
        <Route path='/collections/:Collection/:Product' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
