<script>
    import FeatureBlock from '../../Components/FeatureBlock.svelte';
</script>

<main>
    <div class="wrapper">
        <h1>LoafBot</h1>
        <h2>Discord Economy Bot</h2>
        <h2>With Bread</h2>
        <div class="features">
            <FeatureBlock header="Strong Fishing System" image="\resources\images\fish-loaf.png" imageAlt="Loaf of bread with fish"/>
            <FeatureBlock header="Economy System" image="\resources\images\loaf-piggy-bank.png" imageAlt="Piggy Bank Loaf"/>
            <FeatureBlock header="Shop System" imageAlt="bread behind shopfront"/>
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

</style>