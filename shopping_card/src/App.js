import React from 'react'
import Header from './components/Header/Header'
import Training from './components/Footer/Training/Training'

import RandomNumber from './components/RandomNumber'
import './App.css';


const App = () => {

  const menuItems = [
    { href: '/main', title: 'Главная' },
    { href: '/service', title: 'Услуги' },
    { href: '/portfolio', title: 'Портфолио' },
    { href: '/about', title: 'О нас' },
    { href: '/contacts', title: 'Контакты' },
  ]
  const min = 0
  const max = 100;

  return (
    <div className="App">
      <Header items={menuItems} />
      <RandomNumber min={min} max={max} />
      <Training />

    </div>
  );
}

export default App;