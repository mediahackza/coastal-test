<script>
    export let data
    $: console.log(data)

    // Charts and Images
    import BarChart from '$charts/BarChart.svelte'

    
    // Sections
    import Introduction from '$sections/Introduction.md'
    import Section1 from '$sections/Section1.md'
    import Section2 from '$sections/Section2.md'
    import Section3 from '$sections/Section3.md'
    import Section4 from '$sections/Section4.md'
    import Section5 from '$sections/Section5.md'
    import Section6 from '$sections/Section6.md'
    import Section7 from '$sections/Section7.md'
    import Section8 from '$sections/Section8.md'
    import Section9 from '$sections/Section9.md'
    import FloodlineMap from '$maps/Floodline.svelte'
</script>

<svelte:head><title>
    A Perfect Storm
</title></svelte:head>



<div class="introduction">
    <Introduction />
</div>


    <div class="panel-wrap">
        <div class="panel-spacer-50"></div>
        <div class="panel panel-columns panel-columns-1000">
            <div>
                <BarChart data={data} />
            </div>
            <div><span class="caption">Caption text could go in here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas nobis repellendus maxime porro, cum amet repellat sint. Inventore, ad maxime minus autem repellendus est accusantium maiores saepe dolorum nam?</span ></div>
        </div>
    </div>


    <div class="panel-wrap">
        <div class="panel-spacer-50"></div>
        <div id="section1" class="panel">
            <Section1 />
        </div>
    </div>

    <div class="panel-wrap">
        <div id="section2" class="panel">
            <Section2 />
        </div>
    </div>

    <div class="panel-wrap">
        <div id="section3" class="panel">
            <Section3 />
        </div>
    </div>

    <div class="panel-wrap">
        <!-- Floodline Map  -->
<div class="floodline-map"><FloodlineMap /> </div>       
        <div id="section4" class="panel">
            <Section4 />
        </div>
    </div>
    
    <div class="panel-wrap">
        <div id="section5" class="panel">
            <Section5 />
        </div>
    </div>
    
    <div class="panel-wrap">
        <div id="section6" class="panel">
            <Section6 />
        </div>
    </div>
    
    <div class="panel-wrap">
        <div id="section7" class="panel">
            <Section7 />
        </div>
    </div>
    
    <div class="panel-wrap">
        <div id="section8" class="panel">
            <Section8 />
        </div>
    </div>
    
    <div class="panel-wrap">
        <div id="section9" class="panel">
            <Section9 />
        </div>
    </div>


<style>

    .panel-columns { 
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .panel-columns * { 
        width: 100%;
    }
    .panel-columns-1000 { 
        max-width: 1000px; 
        margin-left: auto;
        margin-right: auto;
    }

    .floodline-map   { 
        width: 80%; 
        margin-left: auto; 
        margin-right: auto;
    }
    
</style>