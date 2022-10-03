<script lang="js">
    import { fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    let y;

    let viewHeight;
    let viewWidth;

    // the entire goal of what you're doing right now is shifting from the svelte if y >= 200 then the element appears, because if you change 
    // the opacity to 0 instead, then the elements will always be there and the window height will always be tall enough for all of the works 
    // to load

</script>

<svelte:window bind:scrollY={y} bind:innerHeight={viewHeight} bind:innerWidth={viewWidth}/>


<div class="content-container">

    <div id="content">

        <div id="img-container">
            {#if y > viewWidth*0.25 }
                <img class="works" src="hall_pass_bubble.png" alt="Hall Pass"  transition:fade={{delay: 250, duration: 3000, easing: quintOut}}>
            {/if}

            <img src="hall-pass-preview.png" alt="Hall Pass" id="m-work-1" class="m-works">

        </div>
            
        <div>
            {#if (y > viewWidth*0.55) || (viewWidth < 600 && y > viewHeight/9)}
                <img class="works" src="natura_bubble.png" alt="Natura" transition:fade={{delay: 250, duration: 3000, easing: quintOut}}>
            {/if} 

            <img src="natura-preview.png" alt="Natura" id="m-work-2" class="m-works">

        </div>
            
    </div>

</div>

<style>

    .content-container {
        background-color: rgb(254, 250, 246);
        height: 100vw;
    }

    #content {
        width: 100%;
        text-align: center;
    }

    .works {
        aspect-ratio: 28/18;
        width: 75vw;
        z-index: 0;
        flex-shrink: 2;
    }
    
    .m-works {
        display: none;
        width: 75vw;
    }

    #m-work-1 {
        aspect-ratio: 5/2;
        height: 55vw;
    }

    #m-work-2 {
        aspect-ratio: 10/1;
        height: 120vw;
    }

    @media only screen and (max-width: 429px) {

        .content-container {
            background-color: transparent;
        }

        .m-works {
            display: inline;
        }

        .works {
            display: none;
        }
    
    }

    @media only screen and (max-width: 1099px) {

        .content-container {
            height: 100vw;
        }

    }

    @media only screen and (max-width: 900px) {

        .content-container {
            height: 120vw
        }

    }

</style>