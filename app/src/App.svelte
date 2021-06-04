<script>
	import axios from 'axios'
	import {LISTENING_PORT} from '../../server/src/server.config.json'

	import Router from 'svelte-spa-router';

	import Commands from './Pages/Commands.svelte'
	import About from './Pages/About.svelte'
	import Home from './Pages/Home.svelte'
	import Profile from './Pages/Profile.svelte'

	import Currency from './Pages/Currency.svelte'
	import Bakery from './Pages/Bakery.svelte'
	import Shop from './Pages/Shop.svelte'
	
	let isAuthed = false;
	let profileData;

	function login() {window.location = "http://localhost:3000/auth/discord"}
	function logout() {window.location = "http://localhost:3000/auth/logout"}

	axios.get(`http://localhost:${LISTENING_PORT}/auth`, {withCredentials: true})
		.then(({data}) =>{
			if(data){
				isAuthed = true;
				profileData = data;
				console.log(profileData)
			}
		})
		.catch(err =>{
			isAuthed = false;
		})

</script>
<body>
	<div class="nav_wrapper">
		<nav class="desktop_nav_container">
				<div class="desktop_nav_left">
					<ul class="desktop_nav_routes">
						<li><a href="/#/">Home</a></li>
						<li><a href="/#/commands">Commands</a></li>
						<li><a href="/#/about">About</a></li>
					</ul>
				</div>
				<div class="desktop_nav_right">
					{#if isAuthed != true}
					<button on:click={login}>Login</button>
					{:else}
						<div id="profile">
							<img id="user_avatar" src="https://cdn.discordapp.com/avatars/{profileData.user.UserID}/{profileData.user.avatar}" alt = "." width=48>
							<div class="account_username">
								<span id="username">{profileData.user.username}</span>
								<span class="material-icons">
									expand_more
									</span>
							</div>
						</div>
					{/if}
				</div>
		</nav>
	</div>


	<div class="content">
		<Router routes={{
			'/': Home,
			'/commands': Commands,
			'/about': About,
			'/profile': Profile,
			'/commands/currency': Currency,
			'/commands/bakery': Bakery,
			'/commands/shop': Shop
		}} />
	</div>
</body>

<style>
	@import "https://fonts.googleapis.com/icon?family=Material+Icons";
	* {
		box-sizing: border-box;
		color:whitesmoke;
	}

	body {
		margin: 0;
		padding: 0;
		background-color:#2b2b2b;
	}

	.desktop_nav_container {
		background-color: #1c1919;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25px;
	}
	.desktop_nav_left {
		display: flex;
    justify-content: center;
    align-items: center;
	}

	.desktop_nav_routes {
		display: block;
	}

	.desktop_nav_routes li {
		list-style: none;
    display: inline-block;
		padding: 5px;
		font-size: 20px;
	}

	#profile {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f1f1f;
    padding: 10px;
    border-radius: 10px; 	
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.desktop_nav_right button{
    background: #1f1f1f;
    padding: 10px;
    border-radius: 10px; 	
	}
	.desktop_nav_right button:hover{
		background-color:#b00715; 
		color: black;
		box-shadow: 0 12px 16px 0 rgba(255,255,255,0.24), 0 17px 50px 0 rgba(255,255,255,0.19);
	}

	.desktop_nav_right {
		display: flex;
    justify-content: center;
    align-items: center;
	}

	.desktop_nav_right img{
		margin-right: 5px;
		border-radius: 5px;
	}

	.desktop_nav_right .account_username {
		display: flex;
    justify-content: center;
    align-items: center;
	}
	.desktop_nav_right span {
		font-size: 25px;
		color:whitesmoke;
		margin: 5px;
		padding: 5px;
	}
	
</style>