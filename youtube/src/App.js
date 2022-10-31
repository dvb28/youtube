import './App.css';
import Header from '~/components/Header';
import {publicRoutes} from '~/routes';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          {publicRoutes.map((item, index) => (
            <Route key={index} path={item.path} element={item.component}/>
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
