import { Link, Route, Routes } from "react-router-dom";
import SupplierPage from "./SupplierPage";
import SupplierDetail from "./SupplierDetail";
import HomePage from "./HomePage";

function App() {
  return (<>
    <h1>Site Header</h1>

    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/suppliers'>Supplier List</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/suppliers" element={<SupplierPage />}></Route>
      <Route path="/suppliers/:id" element={<SupplierDetail />}></Route>
    </Routes>

    <h1>Site Footer</h1>

  </>
  );
}

export default App;
