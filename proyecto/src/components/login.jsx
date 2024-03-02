import Header from './header';
import Footer from './Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Login() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<login/>}/>
          <Header />
          <Footer />

        </Routes>
        </BrowserRouter>

      </div>
    );
}
export default Login
