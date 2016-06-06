<br>

在上一节中，已经能从YouTube获取到数据了。

<br>

**如何把获取到的数据保存到state中呢？**

<br>

在前几节中是通过事件，调用this.setState来设置。在这里，我们可以通过组件的构造函数来设置state。

<br>

> src/index.js

<br>

	import React, { Component } from 'react';
	import ReactDOM from 'react-dom';
	import SearchBar from './components/search_bar';
	import YTSearch from 'youtube-api-search';
	
	const API_KEY = 'AIzaSyArNuJr2cyoM6E2ApUBeLIMTYCqAIcXZeY';
	
	
	class App extends Component {
	    constructor(props){
	        super(props);
	        
	        this.state = { videos: []};
	        
	        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
	           this.setState({videos: data});
	        });        
	    }
	    
	    return (
	        <div>
	            <SearchBar />
	        </div>
	    )
	}
	
	ReactDOM.render(<App />, document.querySelector('.container'));

<br>