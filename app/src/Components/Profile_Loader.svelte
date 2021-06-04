<script>
    import axios from 'axios';
import { each } from 'svelte/internal';
    import {LISTENING_PORT} from '../../../server/src/server.config.json'

    export let user;

    let bankData;
    let inventoryData;
    
    axios.get(`http://localhost:${LISTENING_PORT}/api/bank/${user.UserID}`).then(({data}) =>{bankData = data}).catch()
    axios.get(`http://localhost:${LISTENING_PORT}/api/inventory/${user.UserID}`).then(({data}) =>{inventoryData = data}).catch()
    

</script>

<div class = "stats_container">
    {#if bankData}
        <div class = "stats_box" id="bank">
            <h2>Balance</h2>
            <div class = "stat_content">
                <h3>Wallet — ֎ {bankData.bank.wallet.toLocaleString()}</h3>
                <h3>Bank — ֎ {bankData.bank.bank.toLocaleString()}</h3>
            </div>
            <div class = "stat_footer">
                <img src="https://cdn.discordapp.com/avatars/{user.UserID}/{user.avatar}" alt= "lol">
                <h3>{user.username}</h3>
            </div>
        </div>
    {/if}
    {#if inventoryData}
    <div class = "stats_box" id="inventory">
        <h2>Inventory</h2>
        <div class = "stat_content">
                {#each inventoryData.inventory.inventory as item}
                    <div class="inventory_item">
                        <div>
                            <h3>{item.name} — <b>x{item.count}</b></h3>
                        </div>
                    </div>
                {/each}
        </div>
        <div class = "stat_footer">
            <img src="https://cdn.discordapp.com/avatars/{user.UserID}/{user.avatar}" alt= "lol">
            <h3>{user.username}</h3>
        </div>
    </div>
{/if}
      
</div>

<style>
   .stats_container {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: flex-start;
   }
   .stats_box {
       min-width: 500px;
       border: 3px solid #1f1d1d;
       border-radius: 10px;
       padding: 10px;
       margin: 10px;
       background-color: #1f1d1d;
   }
   .stat_footer{
        display: flex;
        justify-content: left;
        align-items: center;
        background-color: #292929;
        padding: 0px;
        border-radius: 15px;
   }
   .stat_footer h3{
      font-weight: bold;
      margin-left:10px;
   }

   .stats_box img {
       width: 48px;
       height: 48px;
       margin-right: 4px;
       margin-left: 4px;
       border-radius: 15px;
   }

   #bank {
        min-width: 300px;
        min-height: 100px
   }
   #inventory{
        min-width: 50px;
   }
   #inventory .inventory_item{
        background-color: #242424;
        border: 2px solid #1f1f1f;
        border-radius: 5px;
        margin: 5px;
        padding: 2px;
   }
</style>