import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { PageSelectSet } from '../components/PageSelectSet'
import { PageViewSet } from '../components/PageViewSet'
import { PageCreateSet } from '../components/PageCreateSet'
import { FormCreateSet } from '../components/FormCreateSet'
import { FormCreateCards } from '../components/FormCreateCard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set/:id" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>}>
          <Route path='createset' element={<FormCreateSet/>}/>
          <Route path='createcard' element={<FormCreateCards/>}/>
        </Route>
        <Route path="*" element={<PageSelectSet/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
