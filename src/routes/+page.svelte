<script>
    import Footer from "$lib/components/content/footer.svelte";
    import HomeTop from "$lib/components/content/home-top.svelte";
    import Works from "$lib/components/content/works.svelte";
</script>

<div id="page-container">

    <div id="hometop-wrapper">
        <HomeTop />
    </div>

    <Works />
    
    <div id="footer-wrapper">
        <Footer />    
    </div>
</div>


<style>

    #page-container {
        background-color: rgb(254, 250, 246);
    }

    @media only screen and (max-width: 429px) {
        #hometop-wrapper {
            margin-top: 20px;
        }
        #footer-wrapper {
            margin-top: 100vw;
            margin-bottom: 5vh;
        }
    }
    
</style>