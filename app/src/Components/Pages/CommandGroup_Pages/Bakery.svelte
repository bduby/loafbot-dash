<script>
    import Command from "../../Command.svelte"
</script>

<main>
    <div class="command-wrapper">
        <Command 
        commandName="Bakery"
        aliases={[]}
        description="Gets the users bakery, the bakery has a whole list of subcommands you can run (bred bakery [subcommand]), subcommands are stated below"
        usage="bred bakery"
        />
        <Command 
        commandName="rename"
        aliases={[]}
        description="Rename your bakery"
        usage="bred bakery rename [new name]"
        />
        <Command 
        commandName="renameoven"
        aliases={[]}
        description="Rename your ovens"
        usage="bred bakery renameoven [position] [new name]"
        />
        <Command 
        commandName="upgrade"
        aliases={[]}
        description="Upgrade your bakery"
        usage="bred bakery upgrade"
        />
        <Command 
        commandName="upgradeoven"
        aliases={[]}
        description="Upgrade your ovens"
        usage="bred bakery upgrade [position] [new name]"
        />
        <Command 
        commandName="buyoven"
        aliases={[]}
        description="Buy ovens for your bakery"
        usage="bred bakery buyoven"
        />
    </div>
</main>

<style>
    .command-wrapper h1, h2{
        margin: 0px;
        color: whitesmoke;
    }
    .command-wrapper{
        align-items: center;
        padding: 10px;
    }

</style>