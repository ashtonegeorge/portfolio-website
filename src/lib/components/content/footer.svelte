<script>

    let y;
    let viewHeight;
    let viewWidth

</script>

<svelte:window bind:scrollY={y} bind:innerHeight={viewHeight} bind:innerWidth={viewWidth} />


<div id="text-container">

    {#if (y >= viewHeight*0.65) || (viewWidth < 700)}
    <div id="top-text">
        <h1 class="text">i am open to freelancing opportunities</h1>
    </div>
    <div id="bottom-text">
        <h1 class="text">please send me a message using one of the links in the contact menu <br> or send me an email at ashtongeorge17@gmail.com</h1>
    </div>

    <img id="logo" src="logo.png" alt="Ashton George">
    {/if}

</div>


<style>

    #text-container {
        background-color: rgb(254, 250, 246);
        color: rgb(35, 35, 32);
        font-family: 'PT Serif', serif;
        font-weight: 800;
        display: block;
        text-align: center;
        width: 100%;
        margin-top: 5vh;
    }

    #top-text {
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
    }

    #bottom-text {
        color: gray;
        font-family: 'PT Serif', serif;
        font-weight: 600;
        font-size: 8px;
    }

    #logo {
        margin-top: 5vh;
        width: 15vw;
    }

    @media only screen and (max-width: 820px) {

        #top-text {
            font-size: 2vw;
        }

        #bottom-text {
            font-size: 1vw;
        }

    }

    @media only screen and (max-width: 429px) {

        #text-container {
            background-color: transparent;
        }

    }

</style>