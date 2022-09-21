import React from "react";
import Router from "@/Router";
import { Provider } from "react-redux";
import globalStatus from "@/globalStatus";
import './app.scss'

const App = () => (
    <Provider store={globalStatus}>
        <Router />
    </Provider>
);

export default App;
