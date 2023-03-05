import React from 'react';
import { Provider } from 'react-redux';
import MyApp from './MyApp';
import { store } from './redux/store';


export default function Layout(props){

  return (
    <Provider store={store}>
        <MyApp>
          {props.children}
        </MyApp>
    </Provider>
  )
}