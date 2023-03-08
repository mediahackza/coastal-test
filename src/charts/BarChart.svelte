<script>
    import { formatK } from '$lib/utils.js'
    let promise = false
    import * as d3 from 'd3'
	import { onMount } from 'svelte'
	import { listen, text } from 'svelte/internal';
    export let data
    let width
    $: height = width * 0.7
    let margin = {  top: 30, right: 50, bottom: 50, left: 70 }
    $: console.log(data)
    let xAxis 

    $: x = d3.scaleLinear() 
        .domain([1991,2026])
        .range([margin.left, width-margin.right])


    $: y = d3.scaleLinear()
        .domain([0, 5100000])
        .range([height-margin.bottom, margin.top])

    $: if (xAxis) {
        select(xAxis).call(axisBottom(x).ticks(width / 60));
    }

    // $: xTicks = x.ticks('year')
    $: yTicks = y.ticks(5)

    onMount(() => { 
        promise = true
    })

    
    
</script>

{#if promise}
<div class="chart" bind:clientWidth={width}>
    <div class="chart-title">Population of Ethekwini</div>
    <svg {width} {height}>
        <!-- zero line -->
        <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="#eee" stroke-width="1" />        
      
        {#each yTicks as tick}
            {#if tick !== 0}
        <line x1={margin.left} y1={y(tick)} x2={width - margin.right} y2={y(tick)} class="grid-line"></line>
        {/if}

          <!-- Y-axis  -->
            <g class="axis y-axis">
                <text x={margin.left - 10} y="{y(tick)}">{formatK.format(tick)}</text>
            </g>
        {/each}
        <!-- X-axis -->
       
        <!-- X-Axis -->
        {#each data.data as d}
        <g transform="translate(-25,0)">
        <rect class="bar" x={x(d.year)} y={y(d.population)} width={((width - margin.left -margin.right)/8)-2} height={height - y(d.population) - margin.bottom}  />
        </g>

        <!-- <text class="bar-labels" x={x(d.year) + x.bandwidth() / 2} y={y(d.population) - 15}>{formatK.format(d.population)}</text> -->
        {/each}
    </svg>
</div>
{/if}

<style>
    .chart { 
        width: 100%; 
    }
    text { 
        fill: rgb(154, 154, 154); 
        font-size: 0.7rem;
    }
    .axis { 
        text-anchor: end;
    }
    .bar { 
        fill: var(--primary-light)
    }
    .grid-line { 
        stroke: rgb(91, 91, 91);
        stroke-width: 1;
        shape-rendering: crispEdges;
        stroke-dasharray: 5,5;
    }
    .y-axis { 
        transform: translate(0px, 4px);
    }
    .chart-title { 
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--primary-light);
       
    }
    .bar-labels { 
        text-anchor: middle;
    }

</style>