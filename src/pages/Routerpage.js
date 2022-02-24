import React from 'react'

import {
    BrowserRouter,
    Switch, // Just Use Routes instead of "Switch"
    Route,
  } from "react-router-dom";
import Home from './Home'
import Book from './Book'
import Choosecar from './Choosecar';
import Service  from './Service';


export default function RouterPage(){
    return(
    <div>
      <BrowserRouter >
      <Switch>
        <Route exact path="/" element={<Home />}>
          <Home/>
        </Route>
        <Route exact path="/Book" element={<Book />}>
          <Book/>
        </Route>
        <Route exact path="/Choosecar" element={<Choosecar />}>
          <Choosecar/>
        </Route>
        <Route exact path="/Service" element={<Service />}>
          <Service/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
    )
}