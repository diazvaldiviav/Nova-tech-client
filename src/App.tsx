import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;