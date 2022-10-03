<script>

    let viewWidth;

    let visibility = "invisible";

    function toggleMenu() {
        console.log("function trigger")

        if (visibility === "visible") {
            visibility = "invisible";
        } else {
            visibility = "visible";
        }
        console.log(visibility)
    }


</script>

<svelte:window bind:innerWidth={viewWidth}/>


    <nav>
        <a id="logo" class="nav-logo" href="/"><img id="logo" src="logo.png" alt="Ashton George"></a>
    
        <h1 id="name">ashton george</h1>
    
        <ul class="navbar">
            <li class="w-nav-link">
                <a id="home" href="/">home</a>
            </li>
            {#if viewWidth > 429}
                <li class="w-nav-link" id="contact">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img class="icon" src="drop_down_arrow.png">
                    
                    <div class="dropdown">
                        <h4>contact</h4>
                        <div class="dropdown-content">
                            <a class="contact-link" href="https://profile.indeed.com/?hl=en&co=US&from=gnav-homepage&_ga=2.15776307.427815812.1662084940-1313363788.1662084940">Indeed</a>
                            <a class="contact-link" href="https://twitter.com/ashtonegeorge">Twitter</a>
                            <a class="contact-link" href="https://www.linkedin.com/">LinkedIn</a>
                        </div>
                        </div>
                </li>
            {/if}
    
            {#if viewWidth <= 429}
    
                <div class="menu-wrapper">
    
                    <a id="menu-button" class="menu-element" href="#home" >
                        <img id="button-img" src="hamburgermenu.png" alt="Menu Icon" on:click={toggleMenu}>
                    </a>
    
                    <!-- {#if (visibility=="visible")}
                        <ul class="nav-menu menu-element">
                            <li class="m-nav-item" id="m-item-1">
                                <a href="/" class="m-nav-link">home</a>
                            </li>
                            <li class="m-nav-item" id="m-item-2">
                                <a href="/" class="m-nav-link">contact</a>
                            </li>
                        </ul>
                    {/if} -->
    
                </div>
    
            {/if}
    
        </ul>    
    </nav>    



    {#if (visibility == "visible")}
        
        <div id="mobile-menu">
            <div id="grid-menu-wrapper">

                <ul id="grid-menu">
                    <li class="item" id="item-1"> <a on:click={toggleMenu} id="home-link" href="/">home</a> </li>
                    <li class="item" id="item-2">
                        
                        <div id="contact-grid">

                            <a class="contact-item" href="https://profile.indeed.com/?hl=en&co=US&from=gnav-homepage&_ga=2.15776307.427815812.1662084940-1313363788.1662084940"><img class="contact-image" src="indeed-logo.png" alt="Indeed"></a>
                            <a class="contact-item" href="https://twitter.com/ashtonegeorge"><img class="contact-image" src="twitter-logo.png" alt="Twitter"></a>
                            <a class="contact-item" href="https://www.linkedin.com/"><img class="contact-image" src="linkedin-logo.png" alt="LinkedIn"></a>

                        </div>

                    </li>
                </ul>
            
            </div>    
        </div>

    {/if}
    



<style>

    * {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        padding: 0;
        margin: 0;
        z-index: 3;
    }

    nav {
        display: flex;
        position: sticky;
        top: 0;
        left: 0;
        margin: 0;
        height: 5vw;
        align-items: flex-end;
        backdrop-filter: blur(10px);
    }

    .navbar {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        align-items: flex-end;
    }

    #name {
        width: 100%;
        font-family: 'Jost', sans-serif;
        font-size: 3vw;
        text-align: center;
        color: rgb(35, 35, 32);
        white-space: nowrap;
        overflow: hidden;
    }

    .w-nav-link {
        font-weight: bold;
        font-size: 3vw;
        text-decoration: none;
        color: rgb(35, 35, 32);
        margin: 0px 50px;
        display: inline-block;
        position: relative;
        opacity: 0.75;
    }

    #contact {
        display: flex;
    }

    .icon {
        opacity: .75;
        width: 3vw;
        color: rgb(35, 35, 32);
    }

    #home {
        text-decoration: none;
        color: rgb(35, 35, 32);
    }

    .nav-logo {
        text-decoration: none;
        color: rgb(35, 35, 32 );
        filter: grayscale(100%);
    }

    #contact:hover .icon {
        transform: rotate(-180deg);
        -webkit-transform: rotate(-180deg);
    }

    .w-nav-link:hover {
        opacity: 1;
    }

    .nav-logo:hover {
        filter: grayscale(0%);
    }

    #logo {
        width: 3vw;
        height: 4vw;
        margin: 0;
        margin-left: 0.5vw;
        margin-bottom: 0.5vh;
        padding: 0;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover { background-color: #f1f1f1 }

    .dropdown:hover .dropdown-content { display: block; }

    .contact-link {
        font-size: 20px;
    }

    #button-img {
        width: 10vw;
        height: 10vw;
    }

    #menu-button {
        width: 10vw;
    }

    .menu-element {
        display: block;
    }

    .menu-wrapper {
        display: grid;
        position: fixed;
        top: 10px;
        right: 6vw;
        grid-template-rows: (2, 1fr);
        gap: 0px;
        grid-auto-rows: (100px, auto);
        margin: 0;
        padding: 0;
    }

    /* .m-nav-link {
        background-color: red;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        text-align: left;
    }

    #m-item-1 {
        grid-column: 1;
        grid-row: 1/2;
    }

    #m-item-2 {
        grid-column: 1;
        grid-row: 2/2;
    } */

    #mobile-menu {
        position: sticky;
        top: 50px;
        z-index: 2;
    }

    #grid-menu-wrapper {
        width: 100%;
    }

    #grid-menu {
        display: grid;
        position: relative;
        left: 0;
        padding: 0;
        grid-template-rows: 8vh 12vh;
        background-color: rgb(27, 110, 205);
        row-gap: 3px;
        list-style: none;
        text-align: center;
    }

    #item-1 {
        grid-row: 1;
        font-size: 50px;
        width: 100%;
        height: 100%;
        margin: auto auto;
        border-top: 3px solid black;
        border-bottom: 3px solid black;    }

    #home-link {
        text-decoration: none;
        color: rgb(35, 35, 32);
    }

    #item-2 {
        border-top: 3px solid black;
        border-bottom: 3px solid black;
        position: relative;
        left: 0;
        grid-row: 2;
    }

    #contact-grid {
        display: grid;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        grid-template-columns: 15vw 15vw 15vw;
        grid-template-rows: 15vw;
        column-gap: 5vw;
    }

    .contact-item {
        position: relative;
        top: 25%;
        width: 15vw;
        height: 15vw;
    }

    .contact-image {
        width: 60px;
        height: 60px;
    }


    @media only screen and (max-width: 429px) {

        nav {
            height: 12vw;
            justify-content: space-evenly;
        }

        #name {
            width: 50vw;
            text-align: left;
            margin-left: 1vw;
        }

        #home, .w-nav-link {
            display: none;
        }
        
        #contact, #name {
            font-size: 7vw;
        }

        #contact {
            margin: 0px 10px;
        }

        #logo {
            display: none;
        }

        .icon {
            width: 8vw;
        }



    }

</style>