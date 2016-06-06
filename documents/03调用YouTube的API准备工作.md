<br>

> 在chrome中输入：console.developers.google.com

<br>

> 登录或注册

<br>

> 最终来到：https://console.developers.google.com/apis/library

<br>

> 输入搜索条件：youtube

<br>

> 点击"YouTube Data API v3"

<br>

> 点击"创建项目"

<br>

> 点击"启用"

<br>

> 点击"转到凭据页面"，创建密匙

<br>

我的是：react   AIzaSyArNuJr2cyoM6E2ApUBeLIMTYCqAIcXZeY

<br>

> src/index.js

<br>

	import React from 'react';
	import ReactDOM from 'react-dom';
	
	const API_KEY = 'AIzaSyArNuJr2cyoM6E2ApUBeLIMTYCqAIcXZeY';
	
	const App = () => {
	    return <div>Hi!</div>
	}
	
	ReactDOM.render(<App />, document.querySelector('.container'));

<br>

> npm install youtube-api-search --save

<br>








