import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//Pages
import Homescreen from './screens/homescreen'
import Familytree from './screens/familytree';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="family-tree" element={<Familytree />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
