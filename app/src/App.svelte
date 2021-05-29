<script>
	import Router from 'svelte-spa-router';

	import Commands from './Components/Pages/Commands.svelte'
	import About from './Components/Pages/About.svelte'
	import Home from './Components/Pages/Home.svelte'

</script>
<body>
	<div class="nav-container">
		<a href="/#/">Home</a>
		<a href="/#/commands">Commands</a>
		<a href="/#/about">About</a>
		<button>
			<a href="https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D739231799598907563%26scope%3Dbot%26permissions%3D8">
				Invite LoafBot
			</a>
		</button>
	</div>

	<Router routes={{
		'/': Home,
		'/commands': Commands,
		'/about': About
	}} />

</body>



	
<style>
	* *::before *::after {
		padding: none;
		margin: none;
	}
	body{
		background-color: #191a19;
	}
	.nav-container {
  		background-color: #333;
  		overflow: hidden;
	}
	.nav-container a {
		float: left;
  		color: #f2f2f2;
  		text-align: center;
  		padding: 14px 16px;
  		text-decoration: none;
  		font-size: 17px;
	}
	.nav-container a:hover{
		background-color: #ddd;
  		color: black;
	}
	.nav-container button a{ 
		background-color: rgb(59, 59, 59);
		padding: 12px 12px;
		text-decoration: none;

	}
	.nav-container button{
		font-size: 2px;
	}
</style>