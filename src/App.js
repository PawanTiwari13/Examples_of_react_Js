import logo from './logo.svg';
import './App.css';
import BackgroundButton from './Components/BackgroundButton'
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import {useState} from "react";
import FileUpload from "./Components/FileUpload";
import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import MenuBar from "./Components/MenuBar";

function App() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

    // Function to delete an item by index
    const deleteItem = (indexToDelete) => {
        // Using the spread operator to create a new array without the item at the specified index
        const updatedItems = [...items];
        updatedItems.splice(indexToDelete, 1);
        console.log('Data is Deleted ')
        // Remove 1 item at the specified index
        setItems(updatedItems); // Update the state with the new array
    };
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
  //   const layout = [
  //       { i: 'a', x: 0, y: 0, w: 1, h: 2 },
  //       { i: 'b', x: 1, y: 0, w: 3, h: 2 },
  //       { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  //   ];

    return (
        // <GridLayout className="layout" layout={layout} cols={5} rowHeight={100} width={1200}>
        //     <div key="a">Item A</div>
        //     <div key="b">Item B</div>
        //     <div key="c">Item C</div>
        // </GridLayout>
<div>
This is Example of Menu Bar
    {/*<ComponentA/>*/}
    <div>
<BackgroundButton/>
    </div>

</div>
    );

}

export default App;
