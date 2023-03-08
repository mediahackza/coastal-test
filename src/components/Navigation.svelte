<script>
   import { sections } from '$data/sections'
   let colors = [
   '#7a7a7a','#6e6e6e','#626262','#555555','#494949','#3d3d3d','#313131','#252525','#181818','#0c0c0c'
   ]
</script>

<nav>
    <div class="navigation">
        <a href="/"><div class="nav-block" style="background: #FECE0A; color: #000;">
            <div class="section-name" style="color: #000;">Home</div>
        </div></a>
        {#each sections as s, i}
        <a href="{s.target}">
            <div class="nav-block" style="background: {colors[i+1]};">
                <div class="section-name">{s.section}</div>
                <div class="section-title">{s.title}</div>
            </div>
        </a>
        {/each}
        
    </div>
</nav>

<style>
    nav { 
        position: fixed; 
        top: 0px; 
        left: 0px;
        background: #1B1B1B;
        width: 100%;
        /* top: -50px; */
        transition: all 0.8s;
        z-index: 1000;
        
    }
    nav:hover { 
        top: 0px;
    }
    nav .section-title { 
        /* visibility: hidden; */
    }
    nav:hover .section-title { 
        /* visibility: visible; */
    }
    nav a { 
        text-decoration: none;
    }
    .navigation { 
        width: 100%;
        display: grid; 
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 2px;
        /* width: 150px; */
    }
    .nav-block { 
        background: rgb(77, 77, 77);
        text-align: center;
        cursor: pointer;
        padding: 15px 20px;
        min-height: 20px;
        transition: all 1s;
        height: 50px;

   
    }


    .nav-block:hover { 
        /* background: rgb(122, 122, 122) !important; */
    }
 
    .section-name { 
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 700;
        color: rgb(255, 206, 10);
    }
    .section-title { 
        font-size: 0.7rem;
        margin-top: 5px;
        color: #fff;
        text-decoration: none;
        /* visibility: hidden;
        height: 0px; 
        overflow-y: hidden; */
    }
</style>