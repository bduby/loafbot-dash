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
							</div>
						</div>
						<button id="logout_button" on:click={logout}>Logout</button>
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

	#profile, #logout_button {
		position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f1f1f;
    padding: 10px;
    border-radius: 10px; 	
	}

	.desktop_nav_right {
		margin-left: 20px;
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