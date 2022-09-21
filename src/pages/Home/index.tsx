import React from "react";
import store from "@/globalStatus";
import {
    increment,
    decrement,
    incrementByAmount,
} from "@/globalStatus/counter";
import { useSelector, useDispatch } from "react-redux";
import './style.scss'
const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return <div>home</div>;
};

export default Home;
