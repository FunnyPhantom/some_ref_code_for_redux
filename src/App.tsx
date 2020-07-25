import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store";
import Todo from "./Todo";
import AddTodo from './AddTodo';
import Counter from "./Counter";



// agar negah koni, dar vaghe ma darim miaim componentamoon ro ta jaye momken ahmagh mikonim (ahmagh kardan => state hash kame va ya logicesh mahdoode)
// masalan khodet didi sare widget haye flutter, ke zamani ke widgetamoon bahoosh bashan , che dahani service mishe ke
// debug bokone adam, bana bar in, in bande khoda, miad hame mantegh haro miare to khodesh, khodesho bahoosh mishe
// dg lazem nist componentat bahoosh bashan, ye seri component ahmagh tarif mikoni ke serfan ye serie props daran,
// ke nemidoonan che etefaghi miofte, kheyli ahmaghane faghat sedashoon mikonan ya namayeshesh midan :)))
// injuri kolli ham test kardane componentat rahat tar mishe, ham test kardane logicet.

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
        <AddTodo />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
