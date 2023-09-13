import React,{Component} from "react";
class ComponentA extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false, // Initial menu state is closed
    //     };
    // }
    //
    // toggleMenu = () => {
    //     Toggle the menu open/close state
        // this.setState((prevState) => ({
        //     isOpen: !prevState.isOpen,
        // }));
    // };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false,
    //     };
    // }
    //
    // toggleSidebar = () => {
    //     this.setState((prevState) => ({
    //         isOpen: !prevState.isOpen,
    //     }));
    // };
    // render() {
        // const { isOpen } = this.state;
        //
        // return (
        //     <div className="hamburger-menu">
        //         <button className="hamburger-icon" onClick={this.toggleMenu}>
        //
        //             {/* You can use any icon library or CSS for the hamburger icon */}
        //             {isOpen ? 'Close' : 'Open'}
        //         </button>
        //
        //         {/* Render the menu items conditionally based on the isOpen state */}
        //         {isOpen && (
        //             <ul className="menu-items">
        //                 <li>Item 1</li>
        //                 <li>Item 2</li>
        //                 <li>Item 3</li>
        //             </ul>
        //         )}
        //     </div>
        // const { isOpen } = this.state;
        //
        // return (
        //     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        //         <button className="toggle-button" onClick={this.toggleSidebar}>
        //             ☰
        //         </button>
        //         <ul className="menu">
        //             <li>Home</li>
        //             <li>About</li>
        //             <li>Services</li>
        //             <li>Contact</li>
        //         </ul>
        //     </div>);
    // }
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, // Initially closed
        };
    }

    toggleMenu = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { isOpen } = this.state;

        return (
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="toggle-button" onClick={this.toggleMenu}>
                    ☰
                </button>
                <ul className="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }

}
export default ComponentA
