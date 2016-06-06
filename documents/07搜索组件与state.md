<br>

搜索组件现在有了事件，通过事件可以获取到文本框的值。

<br>

**文本框的值保存到哪里去呢？**
--可以保存到state中去

<br>

> src/components/search_bar.js

<br>

	import React, {Component} from 'react';
	
	class SearchBar extends Component {
	    constructor(props){
	        super(props);
	        this.state={term: ''};
	    }
	    
	    render(){
	        return (
	            <div>
	                <input onChange={(event) => this.setState({term: event.target.value})} />
	                Value of the input: {this.state.term}
	            </div>
	        );
	    }
	        
	}
	
	export default SearchBar;

- React为我们维护着一个state属性，用来保存状态，state就是一个对象
- React也我们提供了`this.setState({})`方法用来更改状态
- 同样，我们可以通过`this.state`获取状态

<br>

> localhost:8080

<br>