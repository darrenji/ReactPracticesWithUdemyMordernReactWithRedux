<br>

本项目的数据依赖于YouTube,所以，首先尝试下是否可以从YouTube获取到数据。

<br>

> src/components/search_bar.js

<br>

	import React from 'react';
	import ReactDOM from 'react-dom';
	import SearchBar from './components/search_bar';
	import YTSearch from 'youtube-api-search';
	
	const API_KEY = 'AIzaSyArNuJr2cyoM6E2ApUBeLIMTYCqAIcXZeY';
	
	
	YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	   console.log(data);
	});
	
	const App = () => {
	    return (
	        <div>
	            <SearchBar />
	        </div>
	    )
	}
	
	ReactDOM.render(<App />, document.querySelector('.container'));

<br>

> localhost:8080

<br>

