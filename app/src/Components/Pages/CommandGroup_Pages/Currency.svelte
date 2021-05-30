<script>

</script>

<main>
    <div class="command-wrapper">
        <div class="command">
            <h1>Balance</h1>
            <h2>Aliases: [Bal]</h2>
            <p>Gets you are the @ed person's balance</p>
        </div>
        <div class="command">
            <h1>Withdraw</h1>
            <h2>Aliases: [With]</h2>
            <p>Withdraw coins from your bank</p>
            <p>Specify amount with a number or all, numbers can include "k" at the end to specify thousand</p>
            <p>(ex 5k = 5,000)</p>
        </div>
        <div class="command">
            <h1>Deposit</h1>
            <h2>Aliases: [Dep]</h2>
            <p>Deposit coins into your wallet</p>
            <p>Specify amount with a number or all, numbers can include "k" at the end to specify thousand</p>
            <p>(ex 5k = 5,000)</p>
        </div>
        <div class="command">
            <h1>Leaderboard</h1>
            <h2>Aliases: [Lb]</h2>
            <p>Shows the top 10 players of either the bank or wallet</p>
            <p>(specified as arguments ex: bred leaderboard wallet || bank)</p>
        </div>
        <div class="command">
            <h1>Fish</h1>
            <h2>Aliases: <b>NONE</b></h2>
            <p>Cast out your line, bring back a fish, or even more</p>
            <p>You need a fishing rod and bait to go fishing (see store section for more info)</p>
        </div>
        <div class="command">
            <h1>Loaf</h1>
            <h2>Aliases: <b>NONE</b></h2>
            <p>Search the deep depths of the oven to find loafs undiscovered by man, it could be something normal like bread, or even more.</p>
            <p><b>PLEASE NOTE</b> This is unrelated from the bakery, they are two separate entities and operate differently</p>
        </div>
        <div class="command">
            <h1>Collection</h1>
            <h2>Aliases: <b>NONE</b></h2>
            <p>The collection of every loaf you have ever gotten.</p>
        </div>
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
    .command {
        padding: 10px;
        border: 1px solid black;
        background-color: rgb(36, 36, 36);
        word-wrap: break-word;
        min-height: 300px;
        min-width: 200px;

    }
    .command p, h1, h2{
        color:whitesmoke;
    }

</style>