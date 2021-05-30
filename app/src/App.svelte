<script>
	import Router from 'svelte-spa-router';

	import Commands from './Components/Pages/Commands.svelte'
	import About from './Components/Pages/About.svelte'
	import Home from './Components/Pages/Home.svelte'

</script>
<body>
	<header>
		<div class="nav-container">
			<ul class="nav_routes">
				<li><a href="/#/">Home</a></li>
				<li><a href="/#/commands">Commands</a></li>
				<li><a href="/#/about">About</a></li>
			</ul>
		</div>
			<a class="invite-btn" href="https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D739231799598907563%26scope%3Dbot%26permissions%3D8">
				<button>Invite</button>
			</a>
	</header>

	<div class="content">
		<Router routes={{
			'/': Home,
			'/commands': Commands,
			'/about': About
		}} />
	</div>
</body>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		background-color:#2b2b2b;
	}
	li, a, button{
		font-weight: 500;
		font-size: 16px;
		color: #dedbd5;
		text-decoration: none;
		background-color: #1c1919;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30px 10px;
		background-color: #1c1919;
	}
	.nav_routes {
		list-style-type: none;
		background-color: #1c1919;
	}
	.nav_routes li {
		display: inline-block;
		padding: 0px 20px;
		background-color: #1c1919;
	}
	
	.nav_routes li a:hover {
		color: whitesmoke;
	}
	@keyframes button-radius-animation {
  100% {border-radius: 15px; background-color:whitesmoke; color: black}
}
	button {
		padding: 10px 25px;
		background-color: rgba(41, 43, 41, 0.50);
		border: none;
		border-radius: 100px;
		transition-duration: 0.5s;
	}
	button:hover {
		border-radius: 2px; 
		background-color:whitesmoke; 
		color: black;
		box-shadow: 0 12px 16px 0 rgba(255,255,255,0.24), 0 17px 50px 0 rgba(255,255,255,0.19);
	}

</style>