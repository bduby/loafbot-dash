<script>
    import FeatureBlock from '../../Components/FeatureBlock.svelte';
    function redirect(link) {
        window.location.href = link
    }
</script>

<main>
    <div class="wrapper">
        <h1>LoafBot</h1>
        <h2>Discord Economy Bot</h2>
        <h2>With Bread</h2>
        <div class="features">
            <FeatureBlock header="Fishing System" image="\resources\images\fish-loaf.png" imageAlt="Loaf of bread with fish" link="currency"/>
            <FeatureBlock header="Economy System" image="\resources\images\loaf-piggy-bank.png" imageAlt="Piggy Bank Loaf" link="currency"/>
            <FeatureBlock header="Shop System" image="\resources\images\loaf-shop.png" imageAlt="bread behind shopfront"/>
            <FeatureBlock header="Bakery" image="\resources\images\loaf-oven.png" imageAlt="bread in oven"/>
        </div>
        <div class="contributing">
            <button on:click={() => window.open("https://github.com/LoafOfCode/loafbot-dash", "_newtab" )}>Star/Contribute</button>
            <button on:click={() => {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_newtab')}}>Out Of Order</button>
        </div>
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap');
    *{
        font-family: 'Noto Sans JP', sans-serif;
    }
    .wrapper h1{

        color: whitesmoke;
        margin: 5px;
    }
    .wrapper h2{
    color: whitesmoke;
    margin: 1px;
    padding: 0;
}
    .wrapper{
        text-align: center;
    }
    .contributing{
        display: inline-block;
        padding-top: 50px;
    }
    .contributing button {
        padding-left: 30px;
        padding-right: 30px;
        margin: 30px;
        height:50px;
        width:200px;
        background-color: #252625;
        border: none;
        color: whitesmoke;
        cursor: pointer;
        font-family: "Noto Sans JP", sans-serif;
        transition-duration: 0.6s;
    }
    .contributing button:hover{
        height: 75px;
        width: 215px;
        box-shadow: 0 12px 16px 0 rgba(58, 59, 58,0.24), 0 17px 50px 0 rgba(255, 255, 255,0.19);
        border-radius: 100px;
    }

</style>