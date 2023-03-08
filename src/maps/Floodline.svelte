<script>
    import { flood } from '$data/flood100.js';
    import { settlements } from '$data/settlements.js';
    import { dmos } from '$data/dmos.js';
    let showFlood = false
    let showDmos = false
    let showInformal = false

    // styles
    let floodStyle = {
        color: 'dodgerblue',
        weight: 1,
        opacity: 0.65,
    }

    let dmosStyle = {
        color: 'green',
        weight: 1,
        opacity: 0.65,
    }

    let informalStyle = {
        color: 'red',
        weight: 1,
        opacity: 0.65,
    }


    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let mapElement;
    let map;

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView([-29.805785660690166, 30.99037791796509], 13);

//             leaflet.tileLayer(
//   'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
//   {
//     attribution:
//       'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
//   }
// ).addTo(map);

            leaflet.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// Set Up Layers 
let floodLayer = leaflet.geoJSON(flood, {
  style: floodStyle,
})
let dmosLayer = leaflet.geoJSON(dmos, {
  style: dmosStyle,
})
let informalLayer = leaflet.geoJSON(settlements, {
  style: informalStyle,
})

let floodControl = document.querySelector('.flood-button')
floodControl.addEventListener('click', function (e) {

  if (!showFlood) {
    map.addLayer(floodLayer)
    showFlood = true
  } else {
    map.removeLayer(floodLayer)
    showFlood = false
  }
})

// dmos layer
let dmosControl = document.querySelector('.dmos-button')
dmosControl.addEventListener('click', function (e) {

  if (!showDmos) {
    map.addLayer(dmosLayer)
    showDmos = true
  } else {
    map.removeLayer(dmosLayer)
    showDmos = false
  }
})

// informal layer
let informalControl = document.querySelector('.informal-button')
informalControl.addEventListener('click', function (e) {
  if (!showInformal) {
    map.addLayer(informalLayer)
    showInformal = true
  } else {
    map.removeLayer(informalLayer)
    showInformal = false
  }
})


        }
    });

    onDestroy(async () => {
        if(map) {
      
            map.remove();
        }
    });
</script>


<main>
    <div class="options-bar">
    
        <div class="button flood-button">Add/remove flood plain</div>
        <div class="button dmos-button">Add/remove DMOS</div>
        <div class="button informal-button">Add/remove Informal Settlements</div>
</div >
    <div class="map" bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main { 
        position: relative;
;
    }
    .map { 
        aspect-ratio: 1/0.6;
  
    }
    :global(.leaflet-control-attribution) { 
        display: none !important;
    }

    .options-bar { 
            position: absolute; 
            top: 0px; 
            right: 0px; 
            padding: 10px;
            z-index: 3000;
            background: #fff;
            color: #000;
            font-size: 0.8rem;
            text-transform: uppercase;
            font-weight: 700;        }
        .button { 
            padding: 5px 15px;
            border: none;
            margin-bottom: 5px;
            background: rgb(205, 197, 92);
            cursor: pointer; 
        }
        .button:hover { 
            background: rgb(236, 229, 122);
        }
</style>