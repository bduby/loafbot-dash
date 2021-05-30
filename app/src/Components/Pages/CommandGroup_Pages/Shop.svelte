<script>
    import Command from '../../Command.svelte'
</script>

<main>
    <div class="command-wrapper">
            <Command 
            commandName="Inventory"
            aliases={['Inv']}
            description="Displays the current users inventory"
            usage="bred inventory"
            />

            <Command 
            commandName="Store"
            aliases={['Shop', 'Market']}
            description="Displays the store, specify an item to get details about that single item"
            usage="bred store [optional: item]"
            />

            <Command 
            commandName="Buy"
            aliases={[]}
            description="Buy an item from the store"
            usage="bred buy [item] [optional: count]"
            />

            <Command 
            commandName="Sell"
            aliases={[]}
            description="Sell an item from your inventory"
            usage="bred sell [item] [optional: count]"
            />
        
    </div>
</main>

<style>
    .command-wrapper{
        align-items: center;
        padding: 10px;
    }
</style>