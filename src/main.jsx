import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from "../src/pages/Index"
import Details from './pages/Details.jsx'
import "./assets/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<Index />} />
      <Route path="/todo/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
)
