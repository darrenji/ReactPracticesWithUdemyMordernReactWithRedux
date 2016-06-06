import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyArNuJr2cyoM6E2ApUBeLIMTYCqAIcXZeY';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));