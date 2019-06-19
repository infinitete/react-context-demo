import * as React from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeButton: React.FC = () => {

    const theme = React.useContext(ThemeContext);

    function handleClick() {
        const current = theme.color;

        if (current === 'dark') {
            theme.change("white");
        } else {
            theme.change("dark");
        }
    }
    return <button onClick={ handleClick }>这是按钮 - {theme.color}</button>;
}

export default ThemeButton;
