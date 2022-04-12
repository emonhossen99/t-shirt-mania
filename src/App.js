import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './componets/Grandpa/Grandpa';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import OrderReview from './componets/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/orderreview" element={<OrderReview></OrderReview>}></Route>
       <Route path="/grandpa" element={<Grandpa></Grandpa>}></Route>
     </Routes>
    </div>
  );
}

export default App;
