<div class="content-container">

    <div id="content">

        <div id="text-container">
            <div id="top-text" class="text">
                <h1 class="greeting">hi, i'm ashton</h1>
            </div>
        
            <div id="bottom-text" class="text">
                <h4 class="about">i am a college student <br> who enjoys web development</h4>
            </div>    
        </div>
    
        <img id="me" src="me.png" alt="Ashton George">


    </div>

</div>

<style>

    .content-container {
        background-color: rgb(254, 250, 246);
        margin-top: -3vh;
    }

    #content {
        display: flex;
        color: rgb(35, 35, 32);
        column-gap: 100px;
    }

    #text-container {
        display: inline-block;
        margin: auto auto;
        margin-left: 2vw;
        color: rgb(35, 35, 32);
    }

    .text {
        color: rgb(35, 35, 32);
        font-family: 'PT Serif', serif;
        font-weight: 800;
        flex-direction: row;
    }

    .greeting {
        text-align: left;
        font-size: 75px;
        white-space: nowrap;
        overflow: hidden;
    }

    .about {
        color: gray;
        font-family: 'PT Serif', serif;
        font-weight: 600;
        font-size: 30px;
    }

    #me {
        width: 50vw;
        height: 50vw;
        align-items: center;
        flex-shrink: 2;
    }

    #bottom-text {
        color: rgb(35, 35, 32);
    }


    @media only screen and (max-width: 1200px) {
        .greeting {
            font-size: 6vw;
        }
        .about {
            font-size: 2vw;
        }
    }

    @media only screen and (max-width: 800px) {
        .greeting {
            font-size: 40px;
        }
        .about {
            font-size: 15px;
        }
        #content {
            column-gap: 0px;
        }

    }

    @media only screen and (max-width: 429px) {
        
        .content-container {
            background-color: transparent;
        }
        #content {
            display: block;
        }
        #me {
            width: 100vw;
            height: 100vw;
        }
        .greeting {
            margin-top: 2vh;
            margin-left: 3vw;
            font-size: 7vw;
        }
        .about {
            margin-left: 3vw;
            font-size: 6vw;
        }
    }


</style>