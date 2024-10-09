import logo from './logo.svg';
import './App.css';
import {OkButton} from "./components/OkButton";
import Card from "./components/Card/Card";
import {click} from "@testing-library/user-event/dist/click";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "./stores/counter";

// let strUser = '?'¡
function App() {
  const list = [
    {
      title: 'test post 1',
      writer: 'tester',
      desc: '123123123123',
      date: '2024. 10. 02',
      isChecked: true
    },
    {
      title: 'test post 2',
      writer: 'tester',
      desc: '123123123123',
      date: '2024. 10. 02',
      isChecked: false
    }
  ];

  const items = [1, 2, 3];
  items.map(v => v * 3)
  const clickHandler = (e) => {
    alert('modify click');
    e.stopPropagation();
  }
  const parentClickHandler = (e) => {
    alert('parent click')
  }

  const [number, setNumber] = useState(0);

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>counter: {counter}</div>
      <button onClick={() => dispatch(increment())} > add </button>
    </div>
  );
}





export default App;
