import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './style'

import { Home } from './screens/home'
import { Movies } from './screens/movies'
import { Persons } from './screens/persons'
import { TvShows } from './screens/tv-shows'
import { Navbar } from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <main style={{ marginTop: 61 }}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/movies" component={Movies} />
          <Route exact={true} path="/tv" component={Persons} />
          <Route exact={true} path="/persons" component={TvShows} />
        </Switch>
      </main>
    </div>
  )
}

export default App
