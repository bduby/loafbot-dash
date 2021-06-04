<script>
        import axios from 'axios'
        import {LISTENING_PORT} from '../../../server/src/server.config.json'
        import Profile_Loader from '../Components/Profile_Loader.svelte'

        var authState;
		axios.get(`http://localhost:${LISTENING_PORT}/auth`, {withCredentials: true})
			.then(({data}) =>{
				authState = data
			})
            .catch(err =>{
                document.location.href = '/'
            })
</script>

<main>
    {#if authState}
        <Profile_Loader user = {authState.user}/>
    {/if    }
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap');
    
    *{
        font-family: 'Noto Sans JP', sans-serif;
        color: whitesmoke
    }
    
</style>