<script>
    import Command from "../Components/Command.svelte"
</script>

<main>
    <div class="command-wrapper">
        <Command 
        commandName="Balance"
        aliases={['Bal']}
        description="Displays the current users balance"
        usage="bred bal [optional: @ed user]"
        />
        <Command 
        commandName="Withdraw"
        aliases={['With']}
        description="Withdraw coins from your bank"
        usage="bred withdraw [amount]"
        />
        <Command 
        commandName="Deposit"
        aliases={['Dep']}
        description="Deposit coins into your bank"
        usage="bred deposit [amount]"
        />
        <Command 
        commandName="Leaderboard"
        aliases={['Lb']}
        description="Displays the leaderboard for either banks or wallets"
        usage="bred leaderboard [bank or wallet]"
        />
        <Command 
        commandName="Fish"
        aliases={[]}
        description="Cast out your line, bring back a fish, or even more"
        usage="bred fish"
        />
        <Command 
        commandName="Loaf"
        aliases={[]}
        description="Search the deep depths of the oven to find loafs undiscovered by man, it could be something normal like bread, or even more. PLEASE NOTE This is unrelated from the bakery, they are two separate entities and operate differently"
        usage="bred loaf"
        />
        <Command 
        commandName="Collection"
        aliases={[]}
        description= "The collection of every loaf you have ever gotten."
        usage="bred collection"
        />
    </div>
</main>

<style>
    .command-wrapper{
        padding: 10px;
    }
</style>