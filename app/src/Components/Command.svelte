<script>
    export let commandName = "Placeholder";
    export let aliases = [];
    export let description = "Placeholder description";
    export let usage = "bred placeholder"
</script>

<div class="command">
    <h1>{commandName}</h1>
    {#if aliases.length <= 0}
        <h2>ALIASES: NONE</h2>
    {:else}
		<h2>ALIASES: [{aliases.join(', ')}]</h2>
	{/if}
    <p>{description}</p>
    <p>{usage}</p>
</div>

<style>
    .command {
        padding: 10px;
        border: 1px solid black;
        background-color: #1f1d19;
        word-wrap: break-word;
        min-height: 125px;
        min-width: 200px;
        transition-duration: 0.4s;
        transition-delay: 0.2s;
    }
    .command p, h1, h2{
        color:whitesmoke;
    }
    .command:hover {
        margin: 50px;
        font-size: larger;
    }
</style>