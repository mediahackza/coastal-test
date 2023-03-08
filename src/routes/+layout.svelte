<script>
    
    import '../styles.css'

    
    import Navigation from '$components/Navigation.svelte'
    import Header from '$components/Header.svelte'
    import Getaway from '$images/getaway.jpeg';
   
</script>
<div class="background" style="background: url({Getaway}); ">
</div>
<Navigation />
<Header />

<main>
    <slot/>
</main>

<style>
.background {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>

    