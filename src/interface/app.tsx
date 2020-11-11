import React from 'react'

import { Menu } from './components/Menu'
import { Content } from './components/Content'

import './style/common.sass'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Menu />
        <Content>
          <p>HOLA!</p>
        </Content>
      </div>
    )
  }
}

export default App
