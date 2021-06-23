import { React, useState, useEffect } from 'react';
import MenuItem from './MenuItem'
import Greeting from './Greeting/Greeting'
import Shopping from './Shopping/Shopping'


const Header = (props) => {

  const transformItems = props.items.map((item, i) => {
    return <MenuItem key={i} href={item.href} title={item.title} />
  })

  return (
    <header className="App-header">
      <nav>
        <ul className="header__menu">
          {transformItems}
        </ul>
      </nav>
      < Greeting />
      < Shopping />
    </header>
  )
}

export default Header

