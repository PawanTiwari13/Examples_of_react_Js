import logo from './logo.svg';
import './App.css';
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import {useState} from "react";
import FileUpload from "./Components/FileUpload";
import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
    // const [displaySideBySide, setDisplaySideBySide] = useState(false);
    //
    // Function to handle the onClick event and toggle the state
    // const handleClick = () => {
    //     setDisplaySideBySide(!displaySideBySide);
    // };
  // return (
  //     <div className="App">
          {/*<h1>File Upload Example</h1>*/}
          {/*<FileUpload />*/}

      // </div>
  // );
    const layout = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];

    return (
        <GridLayout className="layout" layout={layout} cols={5} rowHeight={100} width={1200}>
            <div key="a">Item A</div>
            <div key="b">Item B</div>
            <div key="c">Item C</div>
        </GridLayout>
    );

}

export default App;
