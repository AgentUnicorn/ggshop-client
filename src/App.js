import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import CreateProductForm from './components/CreateProductForm';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createProduct">Create Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<CreateProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
