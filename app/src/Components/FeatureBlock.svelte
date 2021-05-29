<script>
    export let header = "placeholder block";
    export let image = "#";
    export let imageAlt = "Image Alt"

</script>


<div class="content-block">
    <h2>{header}</h2>
    <a href="/#/commands"><img src={image} alt={imageAlt} width=180px height=180px></a>z
</div>

<style>
.content-block img{
    display:inline;
    border-radius: 75px;
    border-radius: 27px 27px 27px 27px;
    -moz-border-radius: 27px 27px 27px 27px;
    -webkit-border-radius: 27px 27px 27px 27px;
    border: 1px solid #000000;
    transition-duration:0.4s;
}

.content-block img:hover{
    width: 400px;
    height: 400px;
    filter: brightness(120%);
}

.content-block{
    padding-top: 50px;
    padding-right: 30px;
    padding-left: 30px;
    display: inline-block;
}
img{ 
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;

}
h2{
    color: whitesmoke;
    margin: 1px;
    padding: 0;
}
img{ 
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;

    }
</style>