import React from 'react';
import s from './App.module.css';
import {MainContainer} from "./components/Main";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <div className={s.app}>
            <Provider store={store}>
                <MainContainer/>
            </Provider>
        </div>
    );
}


export default App;
