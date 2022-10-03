<script>
    import Navbar from '$lib/components/layout/navbar.svelte'
</script>

<Navbar/>

<slot></slot>

<style>
    
    * {
        box-sizing: border-box;
        background-color: rgb(254, 250, 246);
    }

    @media only screen and (max-width: 429px) {
        
    }

</style>