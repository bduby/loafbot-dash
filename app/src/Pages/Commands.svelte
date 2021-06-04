<script>
    import FeatureBlock from '../Components/FeatureBlock.svelte';
</script>

<main>
        <div class="features">
            <FeatureBlock header="Economy" image="\resources\images\loaf-piggy-bank.png" imageAlt="Piggy Bank Loaf" link="currency"/>
            <FeatureBlock header="Shop" image="\resources\images\loaf-shop.png" imageAlt="bread behind shopfront" link="shop"/>
            <FeatureBlock header="Bakery" image="\resources\images\loaf-oven.png" imageAlt="bread in oven" link="bakery"/>
            <FeatureBlock header="Misc" image="#" imageAlt="Bread With Wrench" link="misc"/>
            <FeatureBlock header="Casino" image="#" imageAlt="Bread Casino" link="casino"/>
            <FeatureBlock header="Fun" image="\resources\images\loaf-party.png" imageAlt="Bread With Party Hat" link="fun"/>
        </div>
</main>

<style>
    *{
        font-family: 'Noto Sans JP', sans-serif;
    }
    .features{
        text-align: center;
    }
</style>