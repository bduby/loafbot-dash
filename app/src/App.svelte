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
	let dropDownClicked = false;
	let profileData;

	function login() {window.location = "http://localhost:3000/auth/discord"}
	function logout() {window.location = "http://localhost:3000/auth/logout"}
	function redir(link) {window.location = link}

	function changeDropdownState() {
		dropDownClicked = !dropDownClicked;
	}

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
						<div id="profile" on:click={changeDropdownState}>
							<img id="user_avatar" src="https://cdn.discordapp.com/avatars/{profileData.user.UserID}/{profileData.user.avatar}" alt = "." width=48>
							<div class="account_username">
								<span id="username">{profileData.user.username}</span>
								{#if dropDownClicked != false}
								<span class="material-icons" style="cursor:pointer;">expand_less</span>
								{:else}
								<span class="material-icons" style="cursor:pointer;">expand_more</span>
								{/if}

							</div>
						</div>
							{#if dropDownClicked == true}
							<div class="desktop-dropdown_container">
								<ul class="desktop_dropdown">
									<li on:click={() => redir('#/profile')}>Profile</li>
									<li class="logout" on:click={logout}>Logout</li>
								</ul>
							</div>
							{/if}
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

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a {
		margin:0;
		padding: 0;
		text-decoration: none;
	}

	body {
		margin: 0;
		padding: 0;
		background-color:#2b2b2b;
		background: #2b2b2b;
	}

	.desktop_dropdown{ 
		position:absolute;
		top: 58px;
		width: 300px;
		transform: translateX(-95%)translateY(30%);
		background-color: #1c1919;
		border: 2px;
		border-radius: 8px;
		padding: 1rem;
		overflow: hidden;
	}

	.desktop_dropdown li {
		height: 50px;
		display: flex;
		align-items: center;
		border: 1px solid #474a4d;
		border-radius: 8px;
		transition: background 500ms;
		padding: 0.5rem;
		margin-bottom: 5px;
	}

	.desktop_dropdown li:hover {
		background-color: #3b3a3a;
	}
	.desktop_dropdown .logout:hover {
		background-color: #d41c25;
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
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.desktop_nav_routes li {
		list-style: none;
    display: inline-block;
		padding: 5px;
		font-size: 20px;
	}

	#profile {
		position: relative;
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