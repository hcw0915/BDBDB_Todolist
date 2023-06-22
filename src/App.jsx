import React, { useState, useRef } from 'react'
import './App.css'
import { useTodoListStore } from './zustand/TodoStore'
import { NavbarLayout } from './components/Navbar/Navbar'

import { TodoDashboard, TodoCharts, TodoSettings, Contact } from './Pages/index'

const componentsMapping = {
  Dashboard: TodoDashboard,
  Charts: TodoCharts,
  Settings: TodoSettings,
  Contact: Contact,
}

const App = () => {
  const [navOption, setNavOption] = useState('Dashboard')
  const Componet = componentsMapping[navOption]

  return (
    <main>
      <NavbarLayout navOption={navOption} setNavOption={setNavOption}>
        <Componet />
      </NavbarLayout>
    </main>
  )
}

export default App
