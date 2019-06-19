import React from 'react';
import Toolbar from './components/Toolbar';
import ThemeContext from './context/ThemeContext';

import './App.css';

class App extends React.Component {
    state = { color: 'dark' }

    public changeColor(color: string): string {
        this.setState({color})
        return color
    }

    public render() {
        return (<div className="App">
            <ThemeContext.Provider value={{color: this.state.color, change: this.changeColor.bind(this) }}>
                <Toolbar />
            </ThemeContext.Provider>
        </div>);
    }

}

export default App;
