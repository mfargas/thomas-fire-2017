
    //this allows to me to use any of the free maps on mapbox and the data will be mapped onto the image through the geoJSON data
    //https://www.mapbox.com/api-documentation/#retrieve-a-static-map-from-a-style link to research
mapboxgl.accessToken = 'pk.eyJ1IjoibWZhcmdhcyIsImEiOiJjamFuNmpwdXozYm0xMnhtaDhhaWN4YjVnIn0.96huVOXJVdkCrVSg5o7VIw';


const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/outdoors-v10',
   center: [-96, 37.8]
})

let mq = window.matchMedia( "(min-width: 420px)" );

if (mq.matches){
    map.setZoom(3); //set map zoom level for desktop size
} else {
    map.setZoom(5); //set map zoom level for mobile size
}

document.getElementById('flyTo').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40 by up to 5 degrees.
      map.flyTo({
      center: [
         -119.480602,
         34.502864
      ],
      pitch: 60, // pitch in degrees
      zoom: 9,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
   })
})
    //wasn't able to directly link a geoJSON website with the data so I converted the data manually and put it directly into the code here
    //link to website with csv data https://firms.modaps.eosdis.nasa.gov/active_fire/
map.on('load', () => {

   map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
            "type": "geojson",
            "data": {
               "type": "FeatureCollection",
               "features": [{
               "type": "Feature",
   "geometry": {
      "type": "Point",
      "coordinates":  [ -93.116,17.834 ]
   },
   "properties": {
   "brightness":300.5,
   "scan":3.9,
   "track":1.8,
   "acq_date":"2017-12-08",
   "acq_time":510,
   "satellite":"T",
   "confidence":26,
   "version":"6.0NRT",
   "bright_t31":288.5,
   "frp":30.4,
   "daynight":"N"
   }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.117,17.85 ]
    },
    "properties": {
    "brightness":324.4,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":288.8,
    "frp":165.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.123,17.839 ]
    },
    "properties": {
    "brightness":327.6,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":194.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.167,17.902 ]
    },
    "properties": {
    "brightness":301,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":30,
    "version":"6.0NRT",
    "bright_t31":289,
    "frp":36.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.204,17.898 ]
    },
    "properties": {
    "brightness":302.1,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":36,
    "version":"6.0NRT",
    "bright_t31":288.5,
    "frp":43.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.173,17.908 ]
    },
    "properties": {
    "brightness":303.9,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":288.8,
    "frp":50.1,
    "daynight":"N"
    }
},
{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates":  [ -103.255,19.336 ]
    },
    "properties": {
    "brightness":309.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":283.8,
    "frp":11.8,
    "daynight":"N"
    }
},
{
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -104.671,20.633 ]
    },
    "properties": {
    "brightness":302.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":510,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":281.2,
    "frp":8.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -110.108,27.478 ]
    },
    "properties": {
    "brightness":304.1,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":282.5,
    "frp":16.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.193,31.098 ]
    },
    "properties": {
    "brightness":303.3,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":54,
    "version":"6.0NRT",
    "bright_t31":286.6,
    "frp":39.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.225,31.091 ]
    },
    "properties": {
    "brightness":326.8,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":287.3,
    "frp":145.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.953,32.329 ]
    },
    "properties": {
    "brightness":318.3,
    "scan":3.3,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":285.9,
    "frp":106,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.865,32.397 ]
    },
    "properties": {
    "brightness":320.4,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.8,
    "frp":112.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.869,32.394 ]
    },
    "properties": {
    "brightness":321.5,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.5,
    "frp":119.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.229,33.28 ]
    },
    "properties": {
    "brightness":358.4,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":292.7,
    "frp":460.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.262,33.273 ]
    },
    "properties": {
    "brightness":327.9,
    "scan":3.3,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":288.7,
    "frp":154.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.2,33.303 ]
    },
    "properties": {
    "brightness":307,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":47.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.233,33.295 ]
    },
    "properties": {
    "brightness":342.6,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.6,
    "frp":273.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.266,33.288 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":3.3,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":288.1,
    "frp":73.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.211,33.315 ]
    },
    "properties": {
    "brightness":306.2,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":48,
    "version":"6.0NRT",
    "bright_t31":288.2,
    "frp":43.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.992,34.43 ]
    },
    "properties": {
    "brightness":311.6,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":284.9,
    "frp":94.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.035,34.419 ]
    },
    "properties": {
    "brightness":301.2,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":38,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":48,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.295,34.356 ]
    },
    "properties": {
    "brightness":300.5,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":18,
    "version":"6.0NRT",
    "bright_t31":281.8,
    "frp":49.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.335,34.346 ]
    },
    "properties": {
    "brightness":306.5,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":46,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":74.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.992,34.447 ]
    },
    "properties": {
    "brightness":323.5,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":283.7,
    "frp":169,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.033,34.437 ]
    },
    "properties": {
    "brightness":326.4,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":283.3,
    "frp":195.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.342,34.362 ]
    },
    "properties": {
    "brightness":328.8,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":286.9,
    "frp":224.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.998,34.419 ]
    },
    "properties": {
    "brightness":300.6,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":31,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":47.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.996,34.437 ]
    },
    "properties": {
    "brightness":338.3,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.6,
    "frp":312.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.04,34.426 ]
    },
    "properties": {
    "brightness":322.4,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":282.4,
    "frp":165.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.304,34.359 ]
    },
    "properties": {
    "brightness":315.8,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":131.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.342,34.35 ]
    },
    "properties": {
    "brightness":317.9,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":285.3,
    "frp":145.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.35,34.365 ]
    },
    "properties": {
    "brightness":323.1,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.3,
    "frp":183.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.053,34.475 ]
    },
    "properties": {
    "brightness":308.2,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":282.8,
    "frp":81.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.057,34.481 ]
    },
    "properties": {
    "brightness":319.3,
    "scan":3.9,
    "track":1.8,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":98,
    "version":"6.0NRT",
    "bright_t31":282.8,
    "frp":150.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.252,34.467 ]
    },
    "properties": {
    "brightness":302.6,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":283.8,
    "frp":58.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.262,34.517 ]
    },
    "properties": {
    "brightness":307.5,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":284.5,
    "frp":78,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.353,34.512 ]
    },
    "properties": {
    "brightness":316.8,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":284.7,
    "frp":127.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.362,34.516 ]
    },
    "properties": {
    "brightness":316.5,
    "scan":4.1,
    "track":1.9,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":283.6,
    "frp":124.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -104.009,44.028 ]
    },
    "properties": {
    "brightness":309.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":515,
    "satellite":"T",
    "confidence":38,
    "version":"6.0NRT",
    "bright_t31":266.1,
    "frp":27,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -70.355,18.934 ]
    },
    "properties": {
    "brightness":308,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":615,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":289.3,
    "frp":10.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -70.344,18.933 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":615,
    "satellite":"A",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":8.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.358,34.37 ]
    },
    "properties": {
    "brightness":306.1,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":41,
    "version":"6.0NRT",
    "bright_t31":277.5,
    "frp":94.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.363,34.369 ]
    },
    "properties": {
    "brightness":307.1,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":277.7,
    "frp":96.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.38,34.458 ]
    },
    "properties": {
    "brightness":337.7,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":276.1,
    "frp":390.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.235,34.518 ]
    },
    "properties": {
    "brightness":317,
    "scan":4.7,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":274.5,
    "frp":172.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.329,34.459 ]
    },
    "properties": {
    "brightness":306.6,
    "scan":4.7,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":274.5,
    "frp":91.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.387,34.457 ]
    },
    "properties": {
    "brightness":333.8,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":275.8,
    "frp":336.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.241,34.517 ]
    },
    "properties": {
    "brightness":317.9,
    "scan":4.7,
    "track":2,
    "acq_date":"2017-12-08",
    "acq_time":655,
    "satellite":"T",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":275,
    "frp":186.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -92.624,18.874 ]
    },
    "properties": {
    "brightness":305.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":755,
    "satellite":"A",
    "confidence":18,
    "version":"6.0NRT",
    "bright_t31":293.4,
    "frp":5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.04,19.344 ]
    },
    "properties": {
    "brightness":325.1,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":297,
    "frp":26.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.051,19.342 ]
    },
    "properties": {
    "brightness":331.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":296.4,
    "frp":37.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.042,19.353 ]
    },
    "properties": {
    "brightness":304.5,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":44,
    "version":"6.0NRT",
    "bright_t31":290.2,
    "frp":7.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.052,19.352 ]
    },
    "properties": {
    "brightness":327.7,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":292.2,
    "frp":31.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.043,19.363 ]
    },
    "properties": {
    "brightness":311.1,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":288.1,
    "frp":12.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.053,19.361 ]
    },
    "properties": {
    "brightness":342.8,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.7,
    "frp":57.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.063,19.385 ]
    },
    "properties": {
    "brightness":331.6,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.1,
    "frp":38.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.073,19.383 ]
    },
    "properties": {
    "brightness":338.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":294.2,
    "frp":51.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.083,19.381 ]
    },
    "properties": {
    "brightness":311.7,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":290.9,
    "frp":14.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.085,19.391 ]
    },
    "properties": {
    "brightness":379.6,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":308,
    "frp":181,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.095,19.389 ]
    },
    "properties": {
    "brightness":350,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":296.2,
    "frp":75.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.105,19.388 ]
    },
    "properties": {
    "brightness":327,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.5,
    "frp":32.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.116,19.386 ]
    },
    "properties": {
    "brightness":309.1,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":13.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.281,19.399 ]
    },
    "properties": {
    "brightness":330.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":289.2,
    "frp":39.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.272,19.41 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":285.4,
    "frp":11.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.282,19.408 ]
    },
    "properties": {
    "brightness":413.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":296.1,
    "frp":424,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.293,19.407 ]
    },
    "properties": {
    "brightness":317.3,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":830,
    "satellite":"T",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":286,
    "frp":20.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.23,34.531 ]
    },
    "properties": {
    "brightness":313.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":284,
    "frp":29.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.251,34.522 ]
    },
    "properties": {
    "brightness":338.5,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":287.9,
    "frp":87.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.231,34.52 ]
    },
    "properties": {
    "brightness":340.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":95.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.212,34.518 ]
    },
    "properties": {
    "brightness":303,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":282.8,
    "frp":15.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.16,34.512 ]
    },
    "properties": {
    "brightness":300.2,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":20,
    "version":"6.0NRT",
    "bright_t31":280.8,
    "frp":13,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.124,34.509 ]
    },
    "properties": {
    "brightness":323,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":282,
    "frp":46.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.105,34.507 ]
    },
    "properties": {
    "brightness":334.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":282.5,
    "frp":74.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.125,34.498 ]
    },
    "properties": {
    "brightness":302,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":46,
    "version":"6.0NRT",
    "bright_t31":279.9,
    "frp":15,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.058,34.491 ]
    },
    "properties": {
    "brightness":335.5,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285,
    "frp":75.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.041,34.489 ]
    },
    "properties": {
    "brightness":316.1,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":89,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":31.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.362,34.51 ]
    },
    "properties": {
    "brightness":315.9,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":283.2,
    "frp":32.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.062,34.48 ]
    },
    "properties": {
    "brightness":305.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":284.3,
    "frp":17.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.064,34.49 ]
    },
    "properties": {
    "brightness":322.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":283.1,
    "frp":44.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.048,34.488 ]
    },
    "properties": {
    "brightness":324.8,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.2,
    "frp":48.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.368,34.51 ]
    },
    "properties": {
    "brightness":307.2,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":29,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":18,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.35,34.508 ]
    },
    "properties": {
    "brightness":313.1,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":26,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.369,34.487 ]
    },
    "properties": {
    "brightness":387.1,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":295.8,
    "frp":380.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.351,34.485 ]
    },
    "properties": {
    "brightness":328.6,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":288.4,
    "frp":55,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.421,34.481 ]
    },
    "properties": {
    "brightness":327.7,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.7,
    "frp":58.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.403,34.479 ]
    },
    "properties": {
    "brightness":322.6,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":285.7,
    "frp":44.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.04,34.442 ]
    },
    "properties": {
    "brightness":316.9,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":284.9,
    "frp":33.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.021,34.44 ]
    },
    "properties": {
    "brightness":332.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":287.5,
    "frp":64.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.004,34.439 ]
    },
    "properties": {
    "brightness":319.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":285.1,
    "frp":35.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.989,34.437 ]
    },
    "properties": {
    "brightness":309.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":12,
    "version":"6.0NRT",
    "bright_t31":286.1,
    "frp":18.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.973,34.435 ]
    },
    "properties": {
    "brightness":335.8,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":288.4,
    "frp":73.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.407,34.468 ]
    },
    "properties": {
    "brightness":324,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.8,
    "frp":47.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.388,34.466 ]
    },
    "properties": {
    "brightness":330.8,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.6,
    "frp":62.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.372,34.465 ]
    },
    "properties": {
    "brightness":414.2,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":305.4,
    "frp":721.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.356,34.463 ]
    },
    "properties": {
    "brightness":380.1,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":296.6,
    "frp":317.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.34,34.461 ]
    },
    "properties": {
    "brightness":313.1,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":48,
    "version":"6.0NRT",
    "bright_t31":286.1,
    "frp":25.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.22,34.449 ]
    },
    "properties": {
    "brightness":306,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":278.8,
    "frp":19.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.202,34.448 ]
    },
    "properties": {
    "brightness":320.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":281.5,
    "frp":43,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.977,34.425 ]
    },
    "properties": {
    "brightness":367.8,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":292.1,
    "frp":209.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.962,34.423 ]
    },
    "properties": {
    "brightness":327.7,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":289.1,
    "frp":51.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.392,34.455 ]
    },
    "properties": {
    "brightness":305.6,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":40,
    "version":"6.0NRT",
    "bright_t31":284.6,
    "frp":16.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.375,34.453 ]
    },
    "properties": {
    "brightness":420.6,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":299.5,
    "frp":830,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.359,34.452 ]
    },
    "properties": {
    "brightness":372.6,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.4,
    "frp":259.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.309,34.447 ]
    },
    "properties": {
    "brightness":305.3,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":281.4,
    "frp":18.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.291,34.445 ]
    },
    "properties": {
    "brightness":328.3,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":280.7,
    "frp":59.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.22,34.438 ]
    },
    "properties": {
    "brightness":302,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":45,
    "version":"6.0NRT",
    "bright_t31":281.7,
    "frp":15.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.98,34.414 ]
    },
    "properties": {
    "brightness":310.2,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":284.8,
    "frp":21.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.432,34.392 ]
    },
    "properties": {
    "brightness":304.1,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":283.1,
    "frp":17.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.379,34.375 ]
    },
    "properties": {
    "brightness":309.3,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":22.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.327,34.37 ]
    },
    "properties": {
    "brightness":314.8,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":283.8,
    "frp":32.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.31,34.368 ]
    },
    "properties": {
    "brightness":300.6,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":30,
    "version":"6.0NRT",
    "bright_t31":279.5,
    "frp":14,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.328,34.359 ]
    },
    "properties": {
    "brightness":317,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":286.9,
    "frp":36.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.311,34.357 ]
    },
    "properties": {
    "brightness":311,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":283.9,
    "frp":26.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.244,33.298 ]
    },
    "properties": {
    "brightness":329,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.2,
    "frp":38.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.232,33.297 ]
    },
    "properties": {
    "brightness":331.3,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":42.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.233,33.287 ]
    },
    "properties": {
    "brightness":335.5,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":290,
    "frp":50.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.221,33.285 ]
    },
    "properties": {
    "brightness":322.6,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.5,
    "frp":28,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.248,33.279 ]
    },
    "properties": {
    "brightness":315.2,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":284.4,
    "frp":20,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.235,33.277 ]
    },
    "properties": {
    "brightness":310.4,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":15.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.242,33.277 ]
    },
    "properties": {
    "brightness":310.7,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":284.5,
    "frp":16.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.874,32.405 ]
    },
    "properties": {
    "brightness":304.3,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":54,
    "version":"6.0NRT",
    "bright_t31":286,
    "frp":10.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.862,32.403 ]
    },
    "properties": {
    "brightness":308.2,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":930,
    "satellite":"A",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":287.3,
    "frp":13.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.563,26.492 ]
    },
    "properties": {
    "brightness":311.9,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1540,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":294.9,
    "frp":17.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.569,26.49 ]
    },
    "properties": {
    "brightness":313.4,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1540,
    "satellite":"T",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":295.2,
    "frp":20.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -71.456,19.643 ]
    },
    "properties": {
    "brightness":315.8,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1540,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":300.5,
    "frp":12.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.232,32.446 ]
    },
    "properties": {
    "brightness":307.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":284.7,
    "frp":9.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.818,32.25 ]
    },
    "properties": {
    "brightness":302.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":283.3,
    "frp":7.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.088,31.46 ]
    },
    "properties": {
    "brightness":303.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":285.2,
    "frp":6.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.174,31.471 ]
    },
    "properties": {
    "brightness":305.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":283.3,
    "frp":8.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.213,31.412 ]
    },
    "properties": {
    "brightness":311.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":284.1,
    "frp":12.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.935,31.031 ]
    },
    "properties": {
    "brightness":310.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":281.4,
    "frp":12.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.212,30.951 ]
    },
    "properties": {
    "brightness":302.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":283.7,
    "frp":7.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.155,30.833 ]
    },
    "properties": {
    "brightness":310.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":282.7,
    "frp":12.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.145,30.831 ]
    },
    "properties": {
    "brightness":312.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":282.5,
    "frp":14.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.999,30.737 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":283.3,
    "frp":8.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.077,30.692 ]
    },
    "properties": {
    "brightness":308.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":10.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.067,30.691 ]
    },
    "properties": {
    "brightness":300.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":24,
    "version":"6.0NRT",
    "bright_t31":283.2,
    "frp":5.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.173,30.319 ]
    },
    "properties": {
    "brightness":311.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":282.2,
    "frp":13.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.111,30.387 ]
    },
    "properties": {
    "brightness":314.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":282.7,
    "frp":16.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.181,30.443 ]
    },
    "properties": {
    "brightness":302.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":54,
    "version":"6.0NRT",
    "bright_t31":281.7,
    "frp":9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.928,30.386 ]
    },
    "properties": {
    "brightness":307.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":282.5,
    "frp":11.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.307,30.155 ]
    },
    "properties": {
    "brightness":309.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":281.4,
    "frp":12.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.296,30.154 ]
    },
    "properties": {
    "brightness":302.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":282.3,
    "frp":7.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.033,30.059 ]
    },
    "properties": {
    "brightness":324.6,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":283.1,
    "frp":33.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.89,29.811 ]
    },
    "properties": {
    "brightness":305.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":280.1,
    "frp":11.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.045,29.494 ]
    },
    "properties": {
    "brightness":316.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":283.3,
    "frp":16.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.047,29.485 ]
    },
    "properties": {
    "brightness":311.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":13,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.95,21.662 ]
    },
    "properties": {
    "brightness":314.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":298.7,
    "frp":6.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.175,20.491 ]
    },
    "properties": {
    "brightness":315.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":300.5,
    "frp":8.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.946,20.734 ]
    },
    "properties": {
    "brightness":313.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":296.8,
    "frp":8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.383,20.591 ]
    },
    "properties": {
    "brightness":314.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":298.7,
    "frp":7.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.927,20.527 ]
    },
    "properties": {
    "brightness":314,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":300.1,
    "frp":6.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.917,20.526 ]
    },
    "properties": {
    "brightness":312.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":299.9,
    "frp":5.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.907,20.275 ]
    },
    "properties": {
    "brightness":312.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":64,
    "version":"6.0NRT",
    "bright_t31":298.2,
    "frp":5.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.821,20.349 ]
    },
    "properties": {
    "brightness":348,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":300.2,
    "frp":57.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.811,20.348 ]
    },
    "properties": {
    "brightness":320,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":300.4,
    "frp":12.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.039,20.221 ]
    },
    "properties": {
    "brightness":313,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":299.7,
    "frp":7.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.001,20.215 ]
    },
    "properties": {
    "brightness":314.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":299.3,
    "frp":7.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.959,20.331 ]
    },
    "properties": {
    "brightness":317.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":299.2,
    "frp":10.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.948,20.329 ]
    },
    "properties": {
    "brightness":328.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":298.7,
    "frp":23.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.96,20.321 ]
    },
    "properties": {
    "brightness":347,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":301.6,
    "frp":55.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.95,20.32 ]
    },
    "properties": {
    "brightness":364.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":302.8,
    "frp":103.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.941,20.309 ]
    },
    "properties": {
    "brightness":317.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":299.4,
    "frp":9.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.919,20.29 ]
    },
    "properties": {
    "brightness":316.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":29,
    "version":"6.0NRT",
    "bright_t31":299.8,
    "frp":8.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.901,20.268 ]
    },
    "properties": {
    "brightness":320.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":299.3,
    "frp":12.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.891,20.267 ]
    },
    "properties": {
    "brightness":322.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":78,
    "version":"6.0NRT",
    "bright_t31":299.9,
    "frp":15.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.265,20.299 ]
    },
    "properties": {
    "brightness":311.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":298.7,
    "frp":6.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.665,20.208 ]
    },
    "properties": {
    "brightness":318.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":301.8,
    "frp":10.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.638,20.185 ]
    },
    "properties": {
    "brightness":327.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":300.6,
    "frp":19.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.889,20.21 ]
    },
    "properties": {
    "brightness":314.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":299.6,
    "frp":7.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.879,20.209 ]
    },
    "properties": {
    "brightness":314.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":299.8,
    "frp":7.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.659,20.179 ]
    },
    "properties": {
    "brightness":314.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":301.2,
    "frp":6.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.649,20.177 ]
    },
    "properties": {
    "brightness":333.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":301.1,
    "frp":28.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.741,19.711 ]
    },
    "properties": {
    "brightness":319,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":300.9,
    "frp":11.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.731,19.709 ]
    },
    "properties": {
    "brightness":319.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":300.6,
    "frp":11.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.805,19.692 ]
    },
    "properties": {
    "brightness":311.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":297.7,
    "frp":6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.267,20.154 ]
    },
    "properties": {
    "brightness":310.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":297.9,
    "frp":6.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.299,19.53 ]
    },
    "properties": {
    "brightness":310.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":294.4,
    "frp":8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.213,19.608 ]
    },
    "properties": {
    "brightness":310,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":56,
    "version":"6.0NRT",
    "bright_t31":296.1,
    "frp":3.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.185,19.152 ]
    },
    "properties": {
    "brightness":313.6,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":296.5,
    "frp":9.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.547,19.29 ]
    },
    "properties": {
    "brightness":308.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":294.8,
    "frp":3.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.321,19.246 ]
    },
    "properties": {
    "brightness":311,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":285.9,
    "frp":13,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.979,18.861 ]
    },
    "properties": {
    "brightness":316.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":299.8,
    "frp":10.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.254,19.33 ]
    },
    "properties": {
    "brightness":322.1,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":286.4,
    "frp":26,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.199,18.683 ]
    },
    "properties": {
    "brightness":315.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":304.1,
    "frp":7.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.476,18.218 ]
    },
    "properties": {
    "brightness":315.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1720,
    "satellite":"T",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":302.8,
    "frp":5.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.812,40.518 ]
    },
    "properties": {
    "brightness":342.3,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":93,
    "version":"6.0NRT",
    "bright_t31":275.6,
    "frp":147.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.788,40.512 ]
    },
    "properties": {
    "brightness":327,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":85,
    "version":"6.0NRT",
    "bright_t31":273.5,
    "frp":84.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.818,40.516 ]
    },
    "properties": {
    "brightness":328.6,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":274.8,
    "frp":90,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.794,40.511 ]
    },
    "properties": {
    "brightness":328.1,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":85,
    "version":"6.0NRT",
    "bright_t31":274.4,
    "frp":88.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -95.964,40.825 ]
    },
    "properties": {
    "brightness":303.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":276.8,
    "frp":9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.087,39.785 ]
    },
    "properties": {
    "brightness":302.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":277.6,
    "frp":8.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -92.113,39.401 ]
    },
    "properties": {
    "brightness":313.5,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":276.6,
    "frp":19.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.417,38.493 ]
    },
    "properties": {
    "brightness":312.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":275.5,
    "frp":14.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.406,38.491 ]
    },
    "properties": {
    "brightness":301.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":273.8,
    "frp":7.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.42,38.484 ]
    },
    "properties": {
    "brightness":301.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":17,
    "version":"6.0NRT",
    "bright_t31":274.2,
    "frp":6.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.037,34.124 ]
    },
    "properties": {
    "brightness":341.3,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":280.8,
    "frp":68.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.9,34.299 ]
    },
    "properties": {
    "brightness":321.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":279.1,
    "frp":24,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.889,34.297 ]
    },
    "properties": {
    "brightness":351.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":280.3,
    "frp":74.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.877,34.295 ]
    },
    "properties": {
    "brightness":314,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1715,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":277.1,
    "frp":17,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -78.917,21.794 ]
    },
    "properties": {
    "brightness":324.1,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":290.6,
    "frp":29.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.7,26.508 ]
    },
    "properties": {
    "brightness":354.4,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":300.1,
    "frp":87.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.712,26.507 ]
    },
    "properties": {
    "brightness":327.9,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":298.2,
    "frp":27.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -80.64,26.557 ]
    },
    "properties": {
    "brightness":313.8,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":35,
    "version":"6.0NRT",
    "bright_t31":298.1,
    "frp":8.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -81.776,27.28 ]
    },
    "properties": {
    "brightness":313.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":297.4,
    "frp":9.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -81.427,27.363 ]
    },
    "properties": {
    "brightness":315.6,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":297.9,
    "frp":9.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -81.517,28.626 ]
    },
    "properties": {
    "brightness":317,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"A",
    "confidence":34,
    "version":"6.0NRT",
    "bright_t31":290.9,
    "frp":12.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.663,44.123 ]
    },
    "properties": {
    "brightness":304.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":273.2,
    "frp":10.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.852,42.663 ]
    },
    "properties": {
    "brightness":300.4,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":36,
    "version":"6.0NRT",
    "bright_t31":279.6,
    "frp":9.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.047,42.34 ]
    },
    "properties": {
    "brightness":305.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":13.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.032,42.338 ]
    },
    "properties": {
    "brightness":300.9,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":42,
    "version":"6.0NRT",
    "bright_t31":284.8,
    "frp":9.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.122,37.804 ]
    },
    "properties": {
    "brightness":300.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":28,
    "version":"6.0NRT",
    "bright_t31":289.7,
    "frp":6.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.245,34.525 ]
    },
    "properties": {
    "brightness":408,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":306.4,
    "frp":336.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.234,34.523 ]
    },
    "properties": {
    "brightness":370.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":296.8,
    "frp":127.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.294,34.523 ]
    },
    "properties": {
    "brightness":341.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":292,
    "frp":47.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.282,34.521 ]
    },
    "properties": {
    "brightness":430.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":310.6,
    "frp":542.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.27,34.519 ]
    },
    "properties": {
    "brightness":422.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":311.4,
    "frp":461.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.258,34.517 ]
    },
    "properties": {
    "brightness":347.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":297.5,
    "frp":58,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.247,34.516 ]
    },
    "properties": {
    "brightness":401.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":303,
    "frp":287.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.236,34.514 ]
    },
    "properties": {
    "brightness":335.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":294.2,
    "frp":34.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.063,34.485 ]
    },
    "properties": {
    "brightness":325.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":298.1,
    "frp":21.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.051,34.483 ]
    },
    "properties": {
    "brightness":324,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":39,
    "version":"6.0NRT",
    "bright_t31":292.9,
    "frp":20,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.319,34.518 ]
    },
    "properties": {
    "brightness":313.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":24,
    "version":"6.0NRT",
    "bright_t31":289.2,
    "frp":9.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.295,34.514 ]
    },
    "properties": {
    "brightness":350.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":294.4,
    "frp":65.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.283,34.512 ]
    },
    "properties": {
    "brightness":380.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":298.1,
    "frp":168.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.272,34.51 ]
    },
    "properties": {
    "brightness":336.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":293.2,
    "frp":35.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.052,34.474 ]
    },
    "properties": {
    "brightness":372.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":296.8,
    "frp":135.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.041,34.472 ]
    },
    "properties": {
    "brightness":402,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":297.2,
    "frp":298.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.032,34.461 ]
    },
    "properties": {
    "brightness":328,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":287.5,
    "frp":24.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.009,34.457 ]
    },
    "properties": {
    "brightness":364.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":295.1,
    "frp":110.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.997,34.455 ]
    },
    "properties": {
    "brightness":356.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":98,
    "version":"6.0NRT",
    "bright_t31":294.5,
    "frp":83.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.368,34.507 ]
    },
    "properties": {
    "brightness":342,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":93,
    "version":"6.0NRT",
    "bright_t31":291.8,
    "frp":50,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.356,34.505 ]
    },
    "properties": {
    "brightness":331,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":291.7,
    "frp":30.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.045,34.453 ]
    },
    "properties": {
    "brightness":326.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":293.8,
    "frp":21.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.033,34.451 ]
    },
    "properties": {
    "brightness":326.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":290.7,
    "frp":21.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.011,34.448 ]
    },
    "properties": {
    "brightness":371.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":300.2,
    "frp":131.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.999,34.446 ]
    },
    "properties": {
    "brightness":350.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":301.3,
    "frp":67.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.987,34.443 ]
    },
    "properties": {
    "brightness":323,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":293.6,
    "frp":18.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.37,34.498 ]
    },
    "properties": {
    "brightness":364.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":293.8,
    "frp":104.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.359,34.496 ]
    },
    "properties": {
    "brightness":366.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":295.9,
    "frp":112.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.035,34.442 ]
    },
    "properties": {
    "brightness":325.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":290.6,
    "frp":19.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.025,34.44 ]
    },
    "properties": {
    "brightness":335.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":89,
    "version":"6.0NRT",
    "bright_t31":292.4,
    "frp":33.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.013,34.438 ]
    },
    "properties": {
    "brightness":326.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":294.9,
    "frp":19.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.362,34.487 ]
    },
    "properties": {
    "brightness":325.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":54,
    "version":"6.0NRT",
    "bright_t31":291,
    "frp":19.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.393,34.485 ]
    },
    "properties": {
    "brightness":324.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":22,
    "version":"6.0NRT",
    "bright_t31":290.4,
    "frp":19.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.382,34.483 ]
    },
    "properties": {
    "brightness":335.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":84,
    "version":"6.0NRT",
    "bright_t31":292.4,
    "frp":36.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.418,34.479 ]
    },
    "properties": {
    "brightness":315.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":290,
    "frp":13.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.407,34.478 ]
    },
    "properties": {
    "brightness":324.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":292.7,
    "frp":22.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.338,34.457 ]
    },
    "properties": {
    "brightness":318.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":38,
    "version":"6.0NRT",
    "bright_t31":293.6,
    "frp":13.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.222,34.438 ]
    },
    "properties": {
    "brightness":311.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":289,
    "frp":10.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.211,34.436 ]
    },
    "properties": {
    "brightness":304.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":41,
    "version":"6.0NRT",
    "bright_t31":291.5,
    "frp":5.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.364,34.452 ]
    },
    "properties": {
    "brightness":327.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":292.2,
    "frp":24.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.467,34.385 ]
    },
    "properties": {
    "brightness":324.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":56,
    "version":"6.0NRT",
    "bright_t31":291.9,
    "frp":22,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.456,34.383 ]
    },
    "properties": {
    "brightness":346.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":294.5,
    "frp":58.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.376,34.37 ]
    },
    "properties": {
    "brightness":333,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":294.2,
    "frp":32.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.364,34.368 ]
    },
    "properties": {
    "brightness":334.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":293.3,
    "frp":34.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.353,34.367 ]
    },
    "properties": {
    "brightness":324.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":292,
    "frp":20.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.341,34.365 ]
    },
    "properties": {
    "brightness":322.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":291.7,
    "frp":18.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.876,32.403 ]
    },
    "properties": {
    "brightness":307.2,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":54,
    "version":"6.0NRT",
    "bright_t31":285.2,
    "frp":10.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.86,32.4 ]
    },
    "properties": {
    "brightness":324.7,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":38.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.844,32.397 ]
    },
    "properties": {
    "brightness":332.5,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":287.6,
    "frp":55.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.864,32.39 ]
    },
    "properties": {
    "brightness":316,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":287,
    "frp":21.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.848,32.387 ]
    },
    "properties": {
    "brightness":333.2,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":56.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.019,32.37 ]
    },
    "properties": {
    "brightness":306.2,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":281.4,
    "frp":11.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.996,32.333 ]
    },
    "properties": {
    "brightness":338.6,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":91,
    "version":"6.0NRT",
    "bright_t31":287.2,
    "frp":69.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.981,32.33 ]
    },
    "properties": {
    "brightness":336.1,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":89,
    "version":"6.0NRT",
    "bright_t31":287.5,
    "frp":62.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.966,32.327 ]
    },
    "properties": {
    "brightness":315.3,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":287.3,
    "frp":19.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.921,32.318 ]
    },
    "properties": {
    "brightness":361.7,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":290.5,
    "frp":161.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.905,32.315 ]
    },
    "properties": {
    "brightness":346.6,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":98.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.015,32.325 ]
    },
    "properties": {
    "brightness":333.9,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":284.9,
    "frp":58.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117,32.322 ]
    },
    "properties": {
    "brightness":366.1,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.2,
    "frp":181.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.984,32.319 ]
    },
    "properties": {
    "brightness":339.7,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":91,
    "version":"6.0NRT",
    "bright_t31":289.4,
    "frp":71.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.923,32.308 ]
    },
    "properties": {
    "brightness":355.4,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":98,
    "version":"6.0NRT",
    "bright_t31":286.3,
    "frp":131.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.908,32.305 ]
    },
    "properties": {
    "brightness":334.7,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"T",
    "confidence":89,
    "version":"6.0NRT",
    "bright_t31":283.9,
    "frp":61.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -111.701,49.724 ]
    },
    "properties": {
    "brightness":305,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"T",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":280.6,
    "frp":12.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.667,49.921 ]
    },
    "properties": {
    "brightness":311.4,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":1850,
    "satellite":"T",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":265.7,
    "frp":20.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -95.228,33.355 ]
    },
    "properties": {
    "brightness":311.7,
    "scan":3,
    "track":1.7,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":280.8,
    "frp":67.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.04,34.114 ]
    },
    "properties": {
    "brightness":314.2,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":280.5,
    "frp":46.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.887,34.292 ]
    },
    "properties": {
    "brightness":318.3,
    "scan":2.7,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":78,
    "version":"6.0NRT",
    "bright_t31":279.1,
    "frp":86.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.916,34.285 ]
    },
    "properties": {
    "brightness":311.5,
    "scan":2.7,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":279.3,
    "frp":62.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.893,34.295 ]
    },
    "properties": {
    "brightness":322.7,
    "scan":2.7,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":279.1,
    "frp":97.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.922,34.288 ]
    },
    "properties": {
    "brightness":304.6,
    "scan":2.7,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":25,
    "version":"6.0NRT",
    "bright_t31":279.1,
    "frp":35.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.393,38.49 ]
    },
    "properties": {
    "brightness":306,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":63,
    "version":"6.0NRT",
    "bright_t31":279.8,
    "frp":26.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -94.415,38.485 ]
    },
    "properties": {
    "brightness":369,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285,
    "frp":316.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.463,40.25 ]
    },
    "properties": {
    "brightness":302.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":276,
    "frp":8.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -86.815,40.507 ]
    },
    "properties": {
    "brightness":302.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":275.4,
    "frp":8.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -92.768,40.592 ]
    },
    "properties": {
    "brightness":301.7,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":277.8,
    "frp":13.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.133,41.635 ]
    },
    "properties": {
    "brightness":300.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":26,
    "version":"6.0NRT",
    "bright_t31":277.1,
    "frp":7.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -87.145,41.633 ]
    },
    "properties": {
    "brightness":315.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":1855,
    "satellite":"A",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":278,
    "frp":17.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.09,19.391 ]
    },
    "properties": {
    "brightness":364.3,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2040,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":318.8,
    "frp":193.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.286,19.402 ]
    },
    "properties": {
    "brightness":377.6,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2040,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":310.6,
    "frp":315.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.269,19.4 ]
    },
    "properties": {
    "brightness":356.1,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2040,
    "satellite":"T",
    "confidence":98,
    "version":"6.0NRT",
    "bright_t31":308.2,
    "frp":160.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.004,18.526 ]
    },
    "properties": {
    "brightness":323.5,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":309.7,
    "frp":17.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.79,19.109 ]
    },
    "properties": {
    "brightness":323.2,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":304.4,
    "frp":16.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.795,19.104 ]
    },
    "properties": {
    "brightness":318.4,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":303.9,
    "frp":9.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.099,19.71 ]
    },
    "properties": {
    "brightness":316,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":297.9,
    "frp":32.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.104,19.716 ]
    },
    "properties": {
    "brightness":311.6,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":297.3,
    "frp":18.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.263,19.333 ]
    },
    "properties": {
    "brightness":310.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":288.7,
    "frp":14.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.575,19.355 ]
    },
    "properties": {
    "brightness":313.9,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":300.2,
    "frp":9.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.259,20.056 ]
    },
    "properties": {
    "brightness":318.1,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":298.6,
    "frp":42.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.265,20.062 ]
    },
    "properties": {
    "brightness":317,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":298.3,
    "frp":38.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.797,20.069 ]
    },
    "properties": {
    "brightness":313.4,
    "scan":1.9,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":298.8,
    "frp":16,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.803,20.072 ]
    },
    "properties": {
    "brightness":313.1,
    "scan":1.9,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":298.5,
    "frp":15.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.375,19.869 ]
    },
    "properties": {
    "brightness":318.8,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":292.3,
    "frp":20.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.388,19.867 ]
    },
    "properties": {
    "brightness":308.1,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":15,
    "version":"6.0NRT",
    "bright_t31":289.2,
    "frp":8.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.311,20.04 ]
    },
    "properties": {
    "brightness":320.6,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":298.5,
    "frp":23.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.326,20.038 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":298.3,
    "frp":11.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.003,20.257 ]
    },
    "properties": {
    "brightness":319,
    "scan":1.9,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":300.1,
    "frp":24.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.679,20.193 ]
    },
    "properties": {
    "brightness":314,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":301.3,
    "frp":10.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.915,20.177 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":63,
    "version":"6.0NRT",
    "bright_t31":299.5,
    "frp":11,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.186,20.377 ]
    },
    "properties": {
    "brightness":314.8,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":301.3,
    "frp":12.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.547,20.343 ]
    },
    "properties": {
    "brightness":314.2,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":64,
    "version":"6.0NRT",
    "bright_t31":300.4,
    "frp":12,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.991,20.305 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":299.3,
    "frp":9.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.962,20.32 ]
    },
    "properties": {
    "brightness":318,
    "scan":1.6,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":300,
    "frp":18.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.285,20.512 ]
    },
    "properties": {
    "brightness":314.1,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":64,
    "version":"6.0NRT",
    "bright_t31":299.8,
    "frp":14.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.232,20.639 ]
    },
    "properties": {
    "brightness":311.3,
    "scan":2.2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":298.2,
    "frp":13.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.178,20.602 ]
    },
    "properties": {
    "brightness":321.9,
    "scan":1.9,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":300.2,
    "frp":32.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.808,22.806 ]
    },
    "properties": {
    "brightness":323.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":300,
    "frp":17.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.031,24.228 ]
    },
    "properties": {
    "brightness":315.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":281.7,
    "frp":17.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.649,25.616 ]
    },
    "properties": {
    "brightness":303.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":38,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":5.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.659,25.614 ]
    },
    "properties": {
    "brightness":305,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":289.7,
    "frp":6.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -108.111,25.902 ]
    },
    "properties": {
    "brightness":337.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":305,
    "frp":33,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -110.088,27.388 ]
    },
    "properties": {
    "brightness":310.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":300.8,
    "frp":5.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.921,28.886 ]
    },
    "properties": {
    "brightness":301,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":44,
    "version":"6.0NRT",
    "bright_t31":286,
    "frp":6.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.928,28.888 ]
    },
    "properties": {
    "brightness":304.8,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":285.7,
    "frp":9.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.691,28.676 ]
    },
    "properties": {
    "brightness":301,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":33,
    "version":"6.0NRT",
    "bright_t31":289.4,
    "frp":3.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.628,30.493 ]
    },
    "properties": {
    "brightness":303.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":5.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.574,30.722 ]
    },
    "properties": {
    "brightness":305.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":292.3,
    "frp":4.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.467,31.517 ]
    },
    "properties": {
    "brightness":301,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":43,
    "version":"6.0NRT",
    "bright_t31":284.3,
    "frp":11.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -115.188,32.262 ]
    },
    "properties": {
    "brightness":309.6,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":292.3,
    "frp":12.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.497,34.254 ]
    },
    "properties": {
    "brightness":328.2,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":288.7,
    "frp":70.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.908,32.313 ]
    },
    "properties": {
    "brightness":317.9,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":290.8,
    "frp":36.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.93,32.309 ]
    },
    "properties": {
    "brightness":343.7,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":93,
    "version":"6.0NRT",
    "bright_t31":293.8,
    "frp":132.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.912,32.303 ]
    },
    "properties": {
    "brightness":325.3,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":290.2,
    "frp":59.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.933,32.299 ]
    },
    "properties": {
    "brightness":315.4,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":63,
    "version":"6.0NRT",
    "bright_t31":289.5,
    "frp":30.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -113.293,33.001 ]
    },
    "properties": {
    "brightness":312.4,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":300.9,
    "frp":7.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.938,32.311 ]
    },
    "properties": {
    "brightness":331.5,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":292.2,
    "frp":74.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.962,32.319 ]
    },
    "properties": {
    "brightness":330.3,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":292.4,
    "frp":68.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.966,32.331 ]
    },
    "properties": {
    "brightness":323.2,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":80,
    "version":"6.0NRT",
    "bright_t31":291.4,
    "frp":49.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.987,32.327 ]
    },
    "properties": {
    "brightness":308,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":36,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":15.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.849,32.393 ]
    },
    "properties": {
    "brightness":319.7,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":286.7,
    "frp":45.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.869,32.389 ]
    },
    "properties": {
    "brightness":315.7,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":286.9,
    "frp":34.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.854,32.395 ]
    },
    "properties": {
    "brightness":319,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":287,
    "frp":39.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.071,32.441 ]
    },
    "properties": {
    "brightness":314.1,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":288.7,
    "frp":31.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.074,32.454 ]
    },
    "properties": {
    "brightness":328.9,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":287.7,
    "frp":73.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -117.078,32.443 ]
    },
    "properties": {
    "brightness":328.4,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":63,
    "version":"6.0NRT",
    "bright_t31":289.4,
    "frp":70.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -112.287,33.437 ]
    },
    "properties": {
    "brightness":309.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":296.9,
    "frp":6.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.878,35.224 ]
    },
    "properties": {
    "brightness":307.5,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":285.6,
    "frp":34.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -110.395,34.964 ]
    },
    "properties": {
    "brightness":304.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":291,
    "frp":4.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.408,35.703 ]
    },
    "properties": {
    "brightness":312.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":279.7,
    "frp":26.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.426,35.701 ]
    },
    "properties": {
    "brightness":345.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":283.1,
    "frp":108.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.444,35.699 ]
    },
    "properties": {
    "brightness":304.4,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":279.2,
    "frp":16.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.416,35.705 ]
    },
    "properties": {
    "brightness":337.4,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":280.9,
    "frp":80.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.434,35.703 ]
    },
    "properties": {
    "brightness":329.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":59.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.801,35.796 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2030,
    "satellite":"A",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":280.6,
    "frp":15,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119,34.44 ]
    },
    "properties": {
    "brightness":322.2,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":292.8,
    "frp":60.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.025,34.434 ]
    },
    "properties": {
    "brightness":312.5,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":33,
    "version":"6.0NRT",
    "bright_t31":290.6,
    "frp":28.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.362,34.375 ]
    },
    "properties": {
    "brightness":364.9,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":283,
    "frp":385,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.388,34.369 ]
    },
    "properties": {
    "brightness":371,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":285.5,
    "frp":465.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.035,34.461 ]
    },
    "properties": {
    "brightness":331.9,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":291.9,
    "frp":103,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.038,34.474 ]
    },
    "properties": {
    "brightness":331.3,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":293.7,
    "frp":102.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.067,34.468 ]
    },
    "properties": {
    "brightness":326.1,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":297.2,
    "frp":77.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.044,34.468 ]
    },
    "properties": {
    "brightness":352.1,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":296.4,
    "frp":242,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.073,34.462 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":30,
    "version":"6.0NRT",
    "bright_t31":296.5,
    "frp":32.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.227,34.513 ]
    },
    "properties": {
    "brightness":315.1,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":28,
    "version":"6.0NRT",
    "bright_t31":291.9,
    "frp":36.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.258,34.506 ]
    },
    "properties": {
    "brightness":325.1,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":292.7,
    "frp":74.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.364,34.483 ]
    },
    "properties": {
    "brightness":349.9,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":226.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.418,34.471 ]
    },
    "properties": {
    "brightness":319.9,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":40,
    "version":"6.0NRT",
    "bright_t31":281.1,
    "frp":61.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.233,34.526 ]
    },
    "properties": {
    "brightness":332.1,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":84,
    "version":"6.0NRT",
    "bright_t31":292.1,
    "frp":108.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.265,34.519 ]
    },
    "properties": {
    "brightness":431.2,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":309,
    "frp":1930.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.292,34.513 ]
    },
    "properties": {
    "brightness":416.4,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":314.8,
    "frp":1415.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.373,34.495 ]
    },
    "properties": {
    "brightness":399.2,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.3,
    "frp":973.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.266,34.533 ]
    },
    "properties": {
    "brightness":354.4,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":294.1,
    "frp":266.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.291,34.528 ]
    },
    "properties": {
    "brightness":435.3,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":324,
    "frp":2097,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.318,34.522 ]
    },
    "properties": {
    "brightness":374.3,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":295.4,
    "frp":491.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.236,34.518 ]
    },
    "properties": {
    "brightness":349.2,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":293.1,
    "frp":222.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.267,34.511 ]
    },
    "properties": {
    "brightness":386.7,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":301.1,
    "frp":694.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.296,34.505 ]
    },
    "properties": {
    "brightness":365.5,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":297.1,
    "frp":379,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.349,34.493 ]
    },
    "properties": {
    "brightness":366.3,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":290.6,
    "frp":394.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.372,34.488 ]
    },
    "properties": {
    "brightness":394,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":292.4,
    "frp":863.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.396,34.482 ]
    },
    "properties": {
    "brightness":321.6,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":280.3,
    "frp":69.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.423,34.476 ]
    },
    "properties": {
    "brightness":315.7,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":279.5,
    "frp":51,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.271,34.525 ]
    },
    "properties": {
    "brightness":430.9,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":307.9,
    "frp":1920.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.296,34.519 ]
    },
    "properties": {
    "brightness":431.8,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":322.3,
    "frp":1960.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.381,34.5 ]
    },
    "properties": {
    "brightness":334.5,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":121.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.269,34.54 ]
    },
    "properties": {
    "brightness":352.7,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":290,
    "frp":256.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.295,34.534 ]
    },
    "properties": {
    "brightness":426.1,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":315.8,
    "frp":1754.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.325,34.527 ]
    },
    "properties": {
    "brightness":333,
    "scan":2.6,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":290.2,
    "frp":120,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -112.104,36.281 ]
    },
    "properties": {
    "brightness":301.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":24,
    "version":"6.0NRT",
    "bright_t31":281.9,
    "frp":5.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -112.106,36.29 ]
    },
    "properties": {
    "brightness":302.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":34,
    "version":"6.0NRT",
    "bright_t31":282.6,
    "frp":6.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.004,37.499 ]
    },
    "properties": {
    "brightness":300.5,
    "scan":2.3,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":20,
    "version":"6.0NRT",
    "bright_t31":284.4,
    "frp":14.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.005,37.512 ]
    },
    "properties": {
    "brightness":301.8,
    "scan":2.3,
    "track":1.5,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":42,
    "version":"6.0NRT",
    "bright_t31":284.6,
    "frp":17.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.151,41.097 ]
    },
    "properties": {
    "brightness":314.5,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":269.6,
    "frp":38.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.557,42.45 ]
    },
    "properties": {
    "brightness":309.1,
    "scan":1.9,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":38,
    "version":"6.0NRT",
    "bright_t31":276.4,
    "frp":29,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.562,42.462 ]
    },
    "properties": {
    "brightness":319.8,
    "scan":1.9,
    "track":1.3,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":80,
    "version":"6.0NRT",
    "bright_t31":275.6,
    "frp":53.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.661,49.912 ]
    },
    "properties": {
    "brightness":329.7,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":267.8,
    "frp":49,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.679,49.909 ]
    },
    "properties": {
    "brightness":311.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":267.6,
    "frp":23.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.666,49.922 ]
    },
    "properties": {
    "brightness":328.5,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":267.9,
    "frp":45.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.683,49.919 ]
    },
    "properties": {
    "brightness":339,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-08",
    "acq_time":2035,
    "satellite":"A",
    "confidence":91,
    "version":"6.0NRT",
    "bright_t31":268.7,
    "frp":67.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -70.358,18.929 ]
    },
    "properties": {
    "brightness":301.1,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":235,
    "satellite":"T",
    "confidence":38,
    "version":"6.0NRT",
    "bright_t31":290.2,
    "frp":9.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.034,34.122 ]
    },
    "properties": {
    "brightness":301.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":420,
    "satellite":"T",
    "confidence":42,
    "version":"6.0NRT",
    "bright_t31":269.8,
    "frp":10.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.938,43.992 ]
    },
    "properties": {
    "brightness":303.3,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":420,
    "satellite":"T",
    "confidence":54,
    "version":"6.0NRT",
    "bright_t31":267.3,
    "frp":27.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.332,34.36 ]
    },
    "properties": {
    "brightness":312.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":279.8,
    "frp":15,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.345,34.367 ]
    },
    "properties": {
    "brightness":316.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":275.3,
    "frp":17.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.987,34.44 ]
    },
    "properties": {
    "brightness":313.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":287.2,
    "frp":14.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.989,34.449 ]
    },
    "properties": {
    "brightness":315.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":286.6,
    "frp":14.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.999,34.448 ]
    },
    "properties": {
    "brightness":328.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286.2,
    "frp":29.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.01,34.446 ]
    },
    "properties": {
    "brightness":305.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":39,
    "version":"6.0NRT",
    "bright_t31":286.4,
    "frp":8.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.021,34.444 ]
    },
    "properties": {
    "brightness":319.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":99,
    "version":"6.0NRT",
    "bright_t31":288.8,
    "frp":19.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.032,34.443 ]
    },
    "properties": {
    "brightness":322.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":22,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.043,34.441 ]
    },
    "properties": {
    "brightness":305,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":63,
    "version":"6.0NRT",
    "bright_t31":283.4,
    "frp":9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.025,34.462 ]
    },
    "properties": {
    "brightness":377.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":292.6,
    "frp":147.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.036,34.461 ]
    },
    "properties": {
    "brightness":333.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":84,
    "version":"6.0NRT",
    "bright_t31":283.7,
    "frp":33.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.027,34.471 ]
    },
    "properties": {
    "brightness":313.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":44,
    "version":"6.0NRT",
    "bright_t31":274.5,
    "frp":13.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.038,34.47 ]
    },
    "properties": {
    "brightness":339.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":277.7,
    "frp":46.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.049,34.468 ]
    },
    "properties": {
    "brightness":301.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":26,
    "version":"6.0NRT",
    "bright_t31":273.7,
    "frp":7.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.035,34.479 ]
    },
    "properties": {
    "brightness":331,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":271.9,
    "frp":34.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.313,34.446 ]
    },
    "properties": {
    "brightness":304.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":285.8,
    "frp":9.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.324,34.444 ]
    },
    "properties": {
    "brightness":319.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":99,
    "version":"6.0NRT",
    "bright_t31":286.9,
    "frp":20.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.349,34.459 ]
    },
    "properties": {
    "brightness":301.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":31,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":6.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.36,34.457 ]
    },
    "properties": {
    "brightness":326.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":284.5,
    "frp":29.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.371,34.456 ]
    },
    "properties": {
    "brightness":300.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":13,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":6.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.398,34.479 ]
    },
    "properties": {
    "brightness":309.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":282.5,
    "frp":11.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.409,34.478 ]
    },
    "properties": {
    "brightness":311.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":281.7,
    "frp":13,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.421,34.476 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":14.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.431,34.474 ]
    },
    "properties": {
    "brightness":313.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":281.5,
    "frp":15.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.36,34.504 ]
    },
    "properties": {
    "brightness":304.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":25,
    "version":"6.0NRT",
    "bright_t31":281.9,
    "frp":8.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.371,34.502 ]
    },
    "properties": {
    "brightness":309.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":27,
    "version":"6.0NRT",
    "bright_t31":281.6,
    "frp":10.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.293,34.542 ]
    },
    "properties": {
    "brightness":300.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":15,
    "version":"6.0NRT",
    "bright_t31":272.8,
    "frp":7.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.044,42.332 ]
    },
    "properties": {
    "brightness":313.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":600,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":275.9,
    "frp":18.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.047,19.347 ]
    },
    "properties": {
    "brightness":314.2,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":39,
    "version":"6.0NRT",
    "bright_t31":290.6,
    "frp":65.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.053,19.362 ]
    },
    "properties": {
    "brightness":309.9,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":287.5,
    "frp":51.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.055,19.346 ]
    },
    "properties": {
    "brightness":314.1,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":289.9,
    "frp":68.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.061,19.361 ]
    },
    "properties": {
    "brightness":306.2,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":42,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":42.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.066,19.39 ]
    },
    "properties": {
    "brightness":313.5,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":288.4,
    "frp":69.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.097,19.387 ]
    },
    "properties": {
    "brightness":326.2,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":289.6,
    "frp":132.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.278,19.399 ]
    },
    "properties": {
    "brightness":326.9,
    "scan":3,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.8,
    "frp":136.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.306,19.396 ]
    },
    "properties": {
    "brightness":307.1,
    "scan":3,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":284,
    "frp":49.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.279,19.414 ]
    },
    "properties": {
    "brightness":318.2,
    "scan":3,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":284.4,
    "frp":91.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.283,19.4 ]
    },
    "properties": {
    "brightness":329.5,
    "scan":3,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":286,
    "frp":153.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.285,19.414 ]
    },
    "properties": {
    "brightness":320.7,
    "scan":3,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":910,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":284.3,
    "frp":105.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.41,26.884 ]
    },
    "properties": {
    "brightness":304.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":835,
    "satellite":"A",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":276.5,
    "frp":11.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.585,34.811 ]
    },
    "properties": {
    "brightness":311.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":274,
    "frp":20.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.095,34.517 ]
    },
    "properties": {
    "brightness":314.4,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":89,
    "version":"6.0NRT",
    "bright_t31":268.1,
    "frp":31.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.114,34.509 ]
    },
    "properties": {
    "brightness":360.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":270.4,
    "frp":173.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.099,34.506 ]
    },
    "properties": {
    "brightness":357.4,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":272.7,
    "frp":158.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.133,34.501 ]
    },
    "properties": {
    "brightness":377.4,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":267.7,
    "frp":277.9,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.117,34.498 ]
    },
    "properties": {
    "brightness":313.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":267.1,
    "frp":29.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.034,34.471 ]
    },
    "properties": {
    "brightness":313,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":276,
    "frp":27.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.019,34.468 ]
    },
    "properties": {
    "brightness":356.7,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":282.2,
    "frp":154.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.003,34.465 ]
    },
    "properties": {
    "brightness":315.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":276.6,
    "frp":30,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.037,34.46 ]
    },
    "properties": {
    "brightness":350.4,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.9,
    "frp":124.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.021,34.457 ]
    },
    "properties": {
    "brightness":399,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":307.9,
    "frp":480.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.005,34.454 ]
    },
    "properties": {
    "brightness":356.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":289.9,
    "frp":151.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.053,34.452 ]
    },
    "properties": {
    "brightness":311.8,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":281.3,
    "frp":24.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.037,34.449 ]
    },
    "properties": {
    "brightness":438.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":312.9,
    "frp":1109.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.022,34.446 ]
    },
    "properties": {
    "brightness":391.1,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":300.9,
    "frp":397.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.007,34.443 ]
    },
    "properties": {
    "brightness":315.6,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":280.8,
    "frp":28,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.042,34.438 ]
    },
    "properties": {
    "brightness":316.8,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":282.1,
    "frp":33.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.027,34.435 ]
    },
    "properties": {
    "brightness":309.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":278.2,
    "frp":20.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.034,34.435 ]
    },
    "properties": {
    "brightness":312.5,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":280,
    "frp":23.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.885,32.352 ]
    },
    "properties": {
    "brightness":310.2,
    "scan":2.4,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":280.2,
    "frp":47.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.862,32.347 ]
    },
    "properties": {
    "brightness":320.3,
    "scan":2.4,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1015,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":282.5,
    "frp":77.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.041,42.342 ]
    },
    "properties": {
    "brightness":314.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1010,
    "satellite":"A",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":273.3,
    "frp":18.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.087,19.395 ]
    },
    "properties": {
    "brightness":379.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":310.9,
    "frp":180.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.076,19.393 ]
    },
    "properties": {
    "brightness":340.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":297.1,
    "frp":52.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.282,19.415 ]
    },
    "properties": {
    "brightness":310.4,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":80,
    "version":"6.0NRT",
    "bright_t31":286.3,
    "frp":15.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.271,19.414 ]
    },
    "properties": {
    "brightness":300.3,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":25,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":7.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.103,19.391 ]
    },
    "properties": {
    "brightness":326.1,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.2,
    "frp":31.4,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.093,19.389 ]
    },
    "properties": {
    "brightness":310.4,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":80,
    "version":"6.0NRT",
    "bright_t31":289.3,
    "frp":14,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.083,19.388 ]
    },
    "properties": {
    "brightness":333.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":302.1,
    "frp":42.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.072,19.386 ]
    },
    "properties": {
    "brightness":325.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":294,
    "frp":29.2,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.062,19.385 ]
    },
    "properties": {
    "brightness":332.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":297.5,
    "frp":39.1,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.283,19.406 ]
    },
    "properties": {
    "brightness":398.4,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.3,
    "frp":296,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.272,19.404 ]
    },
    "properties": {
    "brightness":384.5,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":291.5,
    "frp":209.8,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.055,19.365 ]
    },
    "properties": {
    "brightness":302.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":28,
    "version":"6.0NRT",
    "bright_t31":287.6,
    "frp":6.6,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.045,19.363 ]
    },
    "properties": {
    "brightness":340.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":293.6,
    "frp":52.5,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.047,19.354 ]
    },
    "properties": {
    "brightness":330.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":294.5,
    "frp":34.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.037,19.353 ]
    },
    "properties": {
    "brightness":320.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":295.1,
    "frp":21,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.048,19.345 ]
    },
    "properties": {
    "brightness":331.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":295.6,
    "frp":36.3,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.038,19.343 ]
    },
    "properties": {
    "brightness":311.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1155,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":295.1,
    "frp":11.7,
    "daynight":"N"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.397,29.998 ]
    },
    "properties": {
    "brightness":304.4,
    "scan":1.9,
    "track":1.4,
    "acq_date":"2017-12-09",
    "acq_time":1625,
    "satellite":"T",
    "confidence":44,
    "version":"6.0NRT",
    "bright_t31":282.8,
    "frp":23.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.817,39.187 ]
    },
    "properties": {
    "brightness":315.7,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":280.7,
    "frp":61.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.789,39.18 ]
    },
    "properties": {
    "brightness":326.7,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":85,
    "version":"6.0NRT",
    "bright_t31":282.2,
    "frp":103,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -104.674,39.903 ]
    },
    "properties": {
    "brightness":301.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":289.2,
    "frp":4.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -104.764,38.675 ]
    },
    "properties": {
    "brightness":300.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":31,
    "version":"6.0NRT",
    "bright_t31":288.4,
    "frp":3.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.423,34.474 ]
    },
    "properties": {
    "brightness":431.9,
    "scan":4.3,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":302.7,
    "frp":4059.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.38,34.472 ]
    },
    "properties": {
    "brightness":347.8,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":63,
    "version":"6.0NRT",
    "bright_t31":282.6,
    "frp":411.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.432,34.457 ]
    },
    "properties": {
    "brightness":408.7,
    "scan":4.3,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":297.1,
    "frp":2433.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.387,34.455 ]
    },
    "properties": {
    "brightness":417,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":300.3,
    "frp":2893.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.348,34.453 ]
    },
    "properties": {
    "brightness":337.8,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":280.1,
    "frp":254.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.44,34.44 ]
    },
    "properties": {
    "brightness":365.2,
    "scan":4.3,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":285.3,
    "frp":769.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.393,34.438 ]
    },
    "properties": {
    "brightness":409.7,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":290.4,
    "frp":2488.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.351,34.436 ]
    },
    "properties": {
    "brightness":367.4,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":280.6,
    "frp":801.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.433,34.471 ]
    },
    "properties": {
    "brightness":427.9,
    "scan":4.3,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":302,
    "frp":3734.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.388,34.469 ]
    },
    "properties": {
    "brightness":374.9,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":288.2,
    "frp":1012.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.442,34.455 ]
    },
    "properties": {
    "brightness":391.5,
    "scan":4.3,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":292.7,
    "frp":1612.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.396,34.452 ]
    },
    "properties": {
    "brightness":433.1,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":306.4,
    "frp":4069.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.355,34.45 ]
    },
    "properties": {
    "brightness":348.7,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":284.4,
    "frp":413.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.36,34.433 ]
    },
    "properties": {
    "brightness":371.3,
    "scan":4.2,
    "track":1.9,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":87,
    "version":"6.0NRT",
    "bright_t31":281.3,
    "frp":914.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.807,32.22 ]
    },
    "properties": {
    "brightness":301.6,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":288.2,
    "frp":4.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -106.839,32.319 ]
    },
    "properties": {
    "brightness":300.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":42,
    "version":"6.0NRT",
    "bright_t31":288.3,
    "frp":3.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.907,32.305 ]
    },
    "properties": {
    "brightness":306.4,
    "scan":2.7,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":281.2,
    "frp":30.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.731,31.964 ]
    },
    "properties": {
    "brightness":305.4,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":48,
    "version":"6.0NRT",
    "bright_t31":288.8,
    "frp":17,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.733,31.95 ]
    },
    "properties": {
    "brightness":359.7,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":292.5,
    "frp":341,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.739,31.96 ]
    },
    "properties": {
    "brightness":364.6,
    "scan":2.6,
    "track":1.6,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":291.8,
    "frp":399.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.626,30.498 ]
    },
    "properties": {
    "brightness":300.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":34,
    "version":"6.0NRT",
    "bright_t31":289.7,
    "frp":3.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.677,28.673 ]
    },
    "properties": {
    "brightness":319,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":298.4,
    "frp":13.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.709,28.668 ]
    },
    "properties": {
    "brightness":310.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":290.3,
    "frp":7.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -109.698,28.667 ]
    },
    "properties": {
    "brightness":317.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":293.3,
    "frp":12.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -111.493,28.744 ]
    },
    "properties": {
    "brightness":311,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":283.8,
    "frp":11.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.45,26.883 ]
    },
    "properties": {
    "brightness":302.5,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1800,
    "satellite":"T",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":288.2,
    "frp":21.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.785,46.409 ]
    },
    "properties": {
    "brightness":307.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1755,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":278.3,
    "frp":12.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.842,44.242 ]
    },
    "properties": {
    "brightness":343.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1755,
    "satellite":"T",
    "confidence":56,
    "version":"6.0NRT",
    "bright_t31":273.7,
    "frp":49.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -70.359,18.923 ]
    },
    "properties": {
    "brightness":318.4,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1755,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":298.2,
    "frp":14.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -107.771,25.282 ]
    },
    "properties": {
    "brightness":314.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":284.7,
    "frp":11.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -107.76,25.281 ]
    },
    "properties": {
    "brightness":317.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":78,
    "version":"6.0NRT",
    "bright_t31":285.7,
    "frp":14.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -107.762,25.271 ]
    },
    "properties": {
    "brightness":328.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":286.9,
    "frp":26.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.013,22.761 ]
    },
    "properties": {
    "brightness":304.4,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":291.9,
    "frp":50,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.216,23.149 ]
    },
    "properties": {
    "brightness":303.8,
    "scan":2.3,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":290.3,
    "frp":15.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.195,23.145 ]
    },
    "properties": {
    "brightness":322.2,
    "scan":2.3,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":290.9,
    "frp":64.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.166,23.003 ]
    },
    "properties": {
    "brightness":303.8,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":45,
    "version":"6.0NRT",
    "bright_t31":293.3,
    "frp":8.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -105.273,21.668 ]
    },
    "properties": {
    "brightness":303,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":22,
    "version":"6.0NRT",
    "bright_t31":278.8,
    "frp":10.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.951,20.322 ]
    },
    "properties": {
    "brightness":333.6,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":290.9,
    "frp":163.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.956,20.325 ]
    },
    "properties": {
    "brightness":322.8,
    "scan":3.2,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":290.3,
    "frp":99.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.926,20.319 ]
    },
    "properties": {
    "brightness":322.6,
    "scan":3.3,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":82,
    "version":"6.0NRT",
    "bright_t31":290,
    "frp":95.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.746,20.657 ]
    },
    "properties": {
    "brightness":326.9,
    "scan":2.3,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":85,
    "version":"6.0NRT",
    "bright_t31":289.3,
    "frp":81,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.872,20.276 ]
    },
    "properties": {
    "brightness":329.4,
    "scan":3.3,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":293,
    "frp":135.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.271,20.31 ]
    },
    "properties": {
    "brightness":306.1,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":34,
    "version":"6.0NRT",
    "bright_t31":288,
    "frp":29,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.926,20.21 ]
    },
    "properties": {
    "brightness":307.8,
    "scan":3.3,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":294.5,
    "frp":30.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.435,20.157 ]
    },
    "properties": {
    "brightness":309,
    "scan":3,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":296.6,
    "frp":26.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.29,20.036 ]
    },
    "properties": {
    "brightness":310.4,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":295.7,
    "frp":30.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.264,20.016 ]
    },
    "properties": {
    "brightness":313.2,
    "scan":3.1,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":295.1,
    "frp":42,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.023,19.169 ]
    },
    "properties": {
    "brightness":310.7,
    "scan":3.4,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1805,
    "satellite":"T",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":295.5,
    "frp":30.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.562,18.721 ]
    },
    "properties": {
    "brightness":314.5,
    "scan":1.9,
    "track":1.4,
    "acq_date":"2017-12-09",
    "acq_time":1930,
    "satellite":"A",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":300.2,
    "frp":15.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.105,34.51 ]
    },
    "properties": {
    "brightness":322.1,
    "scan":4.7,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":276.3,
    "frp":167.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.294,34.541 ]
    },
    "properties": {
    "brightness":355.2,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":290.4,
    "frp":657.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.243,34.528 ]
    },
    "properties": {
    "brightness":328.2,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":289.9,
    "frp":232,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.005,34.465 ]
    },
    "properties": {
    "brightness":321.6,
    "scan":4.8,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":56,
    "version":"6.0NRT",
    "bright_t31":283.2,
    "frp":162,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.109,34.51 ]
    },
    "properties": {
    "brightness":324.1,
    "scan":4.7,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":276.9,
    "frp":187.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.299,34.54 ]
    },
    "properties": {
    "brightness":347.4,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":94,
    "version":"6.0NRT",
    "bright_t31":290.2,
    "frp":502.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.247,34.527 ]
    },
    "properties": {
    "brightness":328.4,
    "scan":4.6,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":290.2,
    "frp":232.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.011,34.466 ]
    },
    "properties": {
    "brightness":323.8,
    "scan":4.8,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":284.2,
    "frp":185.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.351,34.498 ]
    },
    "properties": {
    "brightness":333.9,
    "scan":4.5,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":74,
    "version":"6.0NRT",
    "bright_t31":287,
    "frp":274,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.358,34.498 ]
    },
    "properties": {
    "brightness":339.2,
    "scan":4.5,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":285.4,
    "frp":342.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.379,34.467 ]
    },
    "properties": {
    "brightness":322.4,
    "scan":4.5,
    "track":2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"T",
    "confidence":37,
    "version":"6.0NRT",
    "bright_t31":283.2,
    "frp":146.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.566,46.154 ]
    },
    "properties": {
    "brightness":301.3,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"T",
    "confidence":46,
    "version":"6.0NRT",
    "bright_t31":280.6,
    "frp":11.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.907,44.266 ]
    },
    "properties": {
    "brightness":300.2,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"T",
    "confidence":31,
    "version":"6.0NRT",
    "bright_t31":270.1,
    "frp":29.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.536,19.052 ]
    },
    "properties": {
    "brightness":311.7,
    "scan":3.8,
    "track":1.8,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":294.8,
    "frp":29.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.356,20.085 ]
    },
    "properties": {
    "brightness":310.1,
    "scan":3.5,
    "track":1.8,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":295.2,
    "frp":38,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.362,20.08 ]
    },
    "properties": {
    "brightness":307.9,
    "scan":3.5,
    "track":1.8,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":295.6,
    "frp":28.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.366,20.095 ]
    },
    "properties": {
    "brightness":306.1,
    "scan":3.5,
    "track":1.8,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":46,
    "version":"6.0NRT",
    "bright_t31":294.7,
    "frp":23,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.558,20.288 ]
    },
    "properties": {
    "brightness":328.8,
    "scan":3,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":299.5,
    "frp":107.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.586,20.283 ]
    },
    "properties": {
    "brightness":311.8,
    "scan":3,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":298.2,
    "frp":26.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.224,20.204 ]
    },
    "properties": {
    "brightness":306.8,
    "scan":3.4,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":294.8,
    "frp":24.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.196,20.206 ]
    },
    "properties": {
    "brightness":309.5,
    "scan":3.4,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":295.7,
    "frp":36.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.228,20.199 ]
    },
    "properties": {
    "brightness":309.7,
    "scan":3.4,
    "track":1.7,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":67,
    "version":"6.0NRT",
    "bright_t31":294.8,
    "frp":37.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.908,20.669 ]
    },
    "properties": {
    "brightness":308.5,
    "scan":2.2,
    "track":1.4,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":297.7,
    "frp":11.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -100.528,20.551 ]
    },
    "properties": {
    "brightness":310.8,
    "scan":2.5,
    "track":1.5,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":298.8,
    "frp":20.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.338,22.831 ]
    },
    "properties": {
    "brightness":313.3,
    "scan":1.6,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":300.4,
    "frp":17.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.025,22.756 ]
    },
    "properties": {
    "brightness":318.3,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":295.5,
    "frp":29.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.042,22.753 ]
    },
    "properties": {
    "brightness":333.2,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":297.8,
    "frp":68.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.031,22.753 ]
    },
    "properties": {
    "brightness":332.8,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":297.2,
    "frp":67.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.048,22.75 ]
    },
    "properties": {
    "brightness":317.1,
    "scan":1.8,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":297.4,
    "frp":28.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.938,22.85 ]
    },
    "properties": {
    "brightness":306.4,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":295.7,
    "frp":8.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.931,23.084 ]
    },
    "properties": {
    "brightness":321,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":81,
    "version":"6.0NRT",
    "bright_t31":298.2,
    "frp":33.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.062,23.733 ]
    },
    "properties": {
    "brightness":304.7,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":59,
    "version":"6.0NRT",
    "bright_t31":294.2,
    "frp":8.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.447,26.878 ]
    },
    "properties": {
    "brightness":302.8,
    "scan":2.1,
    "track":1.4,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":290,
    "frp":14.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.841,29.768 ]
    },
    "properties": {
    "brightness":309.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":28,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":9.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.832,29.778 ]
    },
    "properties": {
    "brightness":313.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":73,
    "version":"6.0NRT",
    "bright_t31":286.5,
    "frp":13,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.843,29.777 ]
    },
    "properties": {
    "brightness":310.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":10.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.968,29.521 ]
    },
    "properties": {
    "brightness":304,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":58,
    "version":"6.0NRT",
    "bright_t31":292.4,
    "frp":5.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.206,29.906 ]
    },
    "properties": {
    "brightness":310.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":70,
    "version":"6.0NRT",
    "bright_t31":289,
    "frp":10.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.217,29.905 ]
    },
    "properties": {
    "brightness":302.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":32,
    "version":"6.0NRT",
    "bright_t31":289.8,
    "frp":4.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.203,29.914 ]
    },
    "properties": {
    "brightness":300.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":32,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.214,29.913 ]
    },
    "properties": {
    "brightness":310.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":10.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -95.055,30.338 ]
    },
    "properties": {
    "brightness":300.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":26,
    "version":"6.0NRT",
    "bright_t31":287.6,
    "frp":4.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.43,29.971 ]
    },
    "properties": {
    "brightness":316.1,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":289.8,
    "frp":23.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.097,30.44 ]
    },
    "properties": {
    "brightness":301.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":290.3,
    "frp":4.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.113,30.87 ]
    },
    "properties": {
    "brightness":302.2,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":51,
    "version":"6.0NRT",
    "bright_t31":291.1,
    "frp":5.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -99.126,30.868 ]
    },
    "properties": {
    "brightness":303.2,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":291.2,
    "frp":6.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.091,31.458 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":292.1,
    "frp":6.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -98.435,31.286 ]
    },
    "properties": {
    "brightness":306.5,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":64,
    "version":"6.0NRT",
    "bright_t31":290.3,
    "frp":9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.842,32.275 ]
    },
    "properties": {
    "brightness":301.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":48,
    "version":"6.0NRT",
    "bright_t31":290.5,
    "frp":4.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -102.645,31.493 ]
    },
    "properties": {
    "brightness":305.2,
    "scan":2,
    "track":1.4,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":290.9,
    "frp":13,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.403,32.679 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":62,
    "version":"6.0NRT",
    "bright_t31":290.7,
    "frp":6.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.414,32.678 ]
    },
    "properties": {
    "brightness":324.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":291.7,
    "frp":21.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -95.204,33.217 ]
    },
    "properties": {
    "brightness":305.2,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":6.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.241,33.825 ]
    },
    "properties": {
    "brightness":301,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":44,
    "version":"6.0NRT",
    "bright_t31":285.9,
    "frp":6.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.254,33.823 ]
    },
    "properties": {
    "brightness":309.5,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":287.2,
    "frp":13.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -93.046,34.122 ]
    },
    "properties": {
    "brightness":300.9,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":43,
    "version":"6.0NRT",
    "bright_t31":286.9,
    "frp":6.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.311,34.103 ]
    },
    "properties": {
    "brightness":305.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":288.1,
    "frp":6.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.321,34.101 ]
    },
    "properties": {
    "brightness":311.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":71,
    "version":"6.0NRT",
    "bright_t31":288.5,
    "frp":10.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.733,34.439 ]
    },
    "properties": {
    "brightness":319.1,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":287.9,
    "frp":17.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.744,34.438 ]
    },
    "properties": {
    "brightness":324.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":83,
    "version":"6.0NRT",
    "bright_t31":288.7,
    "frp":22.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.888,34.404 ]
    },
    "properties": {
    "brightness":303.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":56,
    "version":"6.0NRT",
    "bright_t31":288.4,
    "frp":6.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.867,34.611 ]
    },
    "properties": {
    "brightness":311.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":288.3,
    "frp":11.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -97.878,34.609 ]
    },
    "properties": {
    "brightness":303.5,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":288.9,
    "frp":5.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.649,35.365 ]
    },
    "properties": {
    "brightness":318.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":17.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.109,36.516 ]
    },
    "properties": {
    "brightness":314.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":285.1,
    "frp":14.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.121,36.515 ]
    },
    "properties": {
    "brightness":338.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":91,
    "version":"6.0NRT",
    "bright_t31":287.6,
    "frp":43.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.122,36.524 ]
    },
    "properties": {
    "brightness":306.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1935,
    "satellite":"A",
    "confidence":60,
    "version":"6.0NRT",
    "bright_t31":285.4,
    "frp":8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -92.518,39.345 ]
    },
    "properties": {
    "brightness":318.7,
    "scan":1.5,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":273.3,
    "frp":37,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.8,39.175 ]
    },
    "properties": {
    "brightness":307.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":282.4,
    "frp":9.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.802,39.184 ]
    },
    "properties": {
    "brightness":329,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":86,
    "version":"6.0NRT",
    "bright_t31":284.7,
    "frp":29.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.849,39.177 ]
    },
    "properties": {
    "brightness":311.7,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":72,
    "version":"6.0NRT",
    "bright_t31":281.6,
    "frp":13.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -96.86,39.176 ]
    },
    "properties": {
    "brightness":300.3,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":28,
    "version":"6.0NRT",
    "bright_t31":281.4,
    "frp":5.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.786,39.087 ]
    },
    "properties": {
    "brightness":301.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":48,
    "version":"6.0NRT",
    "bright_t31":288.3,
    "frp":6.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -101.789,39.096 ]
    },
    "properties": {
    "brightness":303.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":288.3,
    "frp":8.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -104.925,40.318 ]
    },
    "properties": {
    "brightness":301.5,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":47,
    "version":"6.0NRT",
    "bright_t31":288.4,
    "frp":9.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.818,44.21 ]
    },
    "properties": {
    "brightness":336,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":61,
    "version":"6.0NRT",
    "bright_t31":277.3,
    "frp":53.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -103.833,44.249 ]
    },
    "properties": {
    "brightness":330.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":1940,
    "satellite":"A",
    "confidence":65,
    "version":"6.0NRT",
    "bright_t31":274.8,
    "frp":44,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -155.289,19.407 ]
    },
    "properties": {
    "brightness":318.8,
    "scan":1.7,
    "track":1.3,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"T",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":288.6,
    "frp":30.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.908,32.308 ]
    },
    "properties": {
    "brightness":347.7,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":280.7,
    "frp":84,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.921,32.306 ]
    },
    "properties": {
    "brightness":353.6,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":282.8,
    "frp":101.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -116.888,32.351 ]
    },
    "properties": {
    "brightness":319.8,
    "scan":1.3,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":79,
    "version":"6.0NRT",
    "bright_t31":283.5,
    "frp":25.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.676,34.277 ]
    },
    "properties": {
    "brightness":306.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":41,
    "version":"6.0NRT",
    "bright_t31":290.5,
    "frp":5.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.688,34.275 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1.1,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":55,
    "version":"6.0NRT",
    "bright_t31":290.5,
    "frp":4.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.336,34.362 ]
    },
    "properties": {
    "brightness":432.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":310.4,
    "frp":549.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.348,34.36 ]
    },
    "properties": {
    "brightness":450.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":316,
    "frp":775.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.36,34.359 ]
    },
    "properties": {
    "brightness":342.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":88,
    "version":"6.0NRT",
    "bright_t31":294,
    "frp":42.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.343,34.368 ]
    },
    "properties": {
    "brightness":428.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":307.8,
    "frp":507.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.355,34.366 ]
    },
    "properties": {
    "brightness":399.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":305.7,
    "frp":271.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.366,34.365 ]
    },
    "properties": {
    "brightness":320.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":0,
    "version":"6.0NRT",
    "bright_t31":291.3,
    "frp":15.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.015,34.447 ]
    },
    "properties": {
    "brightness":321.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":31,
    "version":"6.0NRT",
    "bright_t31":285.5,
    "frp":17.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.017,34.456 ]
    },
    "properties": {
    "brightness":344,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":78,
    "version":"6.0NRT",
    "bright_t31":290.9,
    "frp":52.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.019,34.465 ]
    },
    "properties": {
    "brightness":341,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":291.1,
    "frp":46.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.031,34.464 ]
    },
    "properties": {
    "brightness":349.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":299.3,
    "frp":64.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.021,34.474 ]
    },
    "properties": {
    "brightness":341.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":290.3,
    "frp":49.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.032,34.473 ]
    },
    "properties": {
    "brightness":372.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":302.9,
    "frp":140.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.32,34.436 ]
    },
    "properties": {
    "brightness":342.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":93,
    "version":"6.0NRT",
    "bright_t31":298.8,
    "frp":42.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.332,34.435 ]
    },
    "properties": {
    "brightness":431.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":312.1,
    "frp":538.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.344,34.433 ]
    },
    "properties": {
    "brightness":377.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":299.4,
    "frp":146.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.355,34.432 ]
    },
    "properties": {
    "brightness":347.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":296.2,
    "frp":52.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.367,34.43 ]
    },
    "properties": {
    "brightness":347.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":297.3,
    "frp":52.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.311,34.447 ]
    },
    "properties": {
    "brightness":379.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":302.1,
    "frp":159.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.322,34.446 ]
    },
    "properties": {
    "brightness":416,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":314.6,
    "frp":390.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.334,34.444 ]
    },
    "properties": {
    "brightness":501.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":400.1,
    "frp":1790.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.346,34.443 ]
    },
    "properties": {
    "brightness":392,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":301.3,
    "frp":218.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.357,34.441 ]
    },
    "properties": {
    "brightness":377.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":300.3,
    "frp":144.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.369,34.44 ]
    },
    "properties": {
    "brightness":376.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":301.8,
    "frp":140.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.324,34.455 ]
    },
    "properties": {
    "brightness":353,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":296.7,
    "frp":67.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.336,34.453 ]
    },
    "properties": {
    "brightness":393.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":303.7,
    "frp":230.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.348,34.452 ]
    },
    "properties": {
    "brightness":340.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":294.5,
    "frp":40.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.417,34.443 ]
    },
    "properties": {
    "brightness":396.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":315.1,
    "frp":246.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.429,34.441 ]
    },
    "properties": {
    "brightness":376.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":305.4,
    "frp":146.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.425,34.45 ]
    },
    "properties": {
    "brightness":382.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":313.9,
    "frp":171.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.436,34.448 ]
    },
    "properties": {
    "brightness":347.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":90,
    "version":"6.0NRT",
    "bright_t31":302.9,
    "frp":57.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.151,34.494 ]
    },
    "properties": {
    "brightness":347.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":297.3,
    "frp":58.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.162,34.492 ]
    },
    "properties": {
    "brightness":322.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":66,
    "version":"6.0NRT",
    "bright_t31":293.8,
    "frp":17.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.416,34.46 ]
    },
    "properties": {
    "brightness":364.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":307.6,
    "frp":96.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.427,34.459 ]
    },
    "properties": {
    "brightness":346.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":304.6,
    "frp":52.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.107,34.509 ]
    },
    "properties": {
    "brightness":374.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":285.3,
    "frp":149.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.119,34.507 ]
    },
    "properties": {
    "brightness":353.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":286.2,
    "frp":77.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.142,34.504 ]
    },
    "properties": {
    "brightness":346.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":294.3,
    "frp":58.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.153,34.503 ]
    },
    "properties": {
    "brightness":429.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":330.5,
    "frp":532.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.165,34.501 ]
    },
    "properties": {
    "brightness":385.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":305.2,
    "frp":194.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.43,34.468 ]
    },
    "properties": {
    "brightness":392.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":304.9,
    "frp":228,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.441,34.466 ]
    },
    "properties": {
    "brightness":348.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":95,
    "version":"6.0NRT",
    "bright_t31":293.4,
    "frp":60,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.374,34.484 ]
    },
    "properties": {
    "brightness":409.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":306.6,
    "frp":338.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.386,34.483 ]
    },
    "properties": {
    "brightness":426.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":317.5,
    "frp":492.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.397,34.481 ]
    },
    "properties": {
    "brightness":373.3,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":292.9,
    "frp":131.6,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.409,34.48 ]
    },
    "properties": {
    "brightness":333.1,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":69,
    "version":"6.0NRT",
    "bright_t31":285.3,
    "frp":28.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.363,34.495 ]
    },
    "properties": {
    "brightness":352.5,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":97,
    "version":"6.0NRT",
    "bright_t31":291.2,
    "frp":67.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.375,34.494 ]
    },
    "properties": {
    "brightness":424.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":311.9,
    "frp":467.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.387,34.492 ]
    },
    "properties": {
    "brightness":443.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":319.1,
    "frp":687.2,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.398,34.491 ]
    },
    "properties": {
    "brightness":344,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":76,
    "version":"6.0NRT",
    "bright_t31":289.3,
    "frp":46.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.228,34.522 ]
    },
    "properties": {
    "brightness":338.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":91,
    "version":"6.0NRT",
    "bright_t31":286.7,
    "frp":43.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.364,34.504 ]
    },
    "properties": {
    "brightness":341.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":292.4,
    "frp":45.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.376,34.503 ]
    },
    "properties": {
    "brightness":390,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":100,
    "version":"6.0NRT",
    "bright_t31":303.9,
    "frp":212.8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.388,34.501 ]
    },
    "properties": {
    "brightness":349.4,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":96,
    "version":"6.0NRT",
    "bright_t31":291.9,
    "frp":61.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.229,34.531 ]
    },
    "properties": {
    "brightness":326.8,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":85,
    "version":"6.0NRT",
    "bright_t31":286.6,
    "frp":25.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.24,34.53 ]
    },
    "properties": {
    "brightness":355,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":98,
    "version":"6.0NRT",
    "bright_t31":291.9,
    "frp":79.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.31,34.521 ]
    },
    "properties": {
    "brightness":354.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":291.2,
    "frp":75.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.322,34.519 ]
    },
    "properties": {
    "brightness":356.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":93,
    "version":"6.0NRT",
    "bright_t31":286,
    "frp":82,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.378,34.512 ]
    },
    "properties": {
    "brightness":339.6,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":92,
    "version":"6.0NRT",
    "bright_t31":291.7,
    "frp":44.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.389,34.511 ]
    },
    "properties": {
    "brightness":322.2,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":77,
    "version":"6.0NRT",
    "bright_t31":289.6,
    "frp":18.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.242,34.539 ]
    },
    "properties": {
    "brightness":305.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":26,
    "version":"6.0NRT",
    "bright_t31":287.1,
    "frp":5.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.291,34.542 ]
    },
    "properties": {
    "brightness":317.9,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":52,
    "version":"6.0NRT",
    "bright_t31":285.1,
    "frp":15,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -119.303,34.541 ]
    },
    "properties": {
    "brightness":333.7,
    "scan":1.1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2115,
    "satellite":"A",
    "confidence":89,
    "version":"6.0NRT",
    "bright_t31":283.9,
    "frp":35.4,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.533,42.574 ]
    },
    "properties": {
    "brightness":314.7,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":75,
    "version":"6.0NRT",
    "bright_t31":273.2,
    "frp":21.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -120.548,42.572 ]
    },
    "properties": {
    "brightness":301.8,
    "scan":1.2,
    "track":1.1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":274.6,
    "frp":10.1,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.037,42.331 ]
    },
    "properties": {
    "brightness":303.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":56,
    "version":"6.0NRT",
    "bright_t31":286,
    "frp":8.3,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.049,42.33 ]
    },
    "properties": {
    "brightness":309.4,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":68,
    "version":"6.0NRT",
    "bright_t31":286.8,
    "frp":11.9,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.866,42.998 ]
    },
    "properties": {
    "brightness":301.9,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":50,
    "version":"6.0NRT",
    "bright_t31":286.3,
    "frp":6.7,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -124.093,43.141 ]
    },
    "properties": {
    "brightness":303.8,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":57,
    "version":"6.0NRT",
    "bright_t31":282.7,
    "frp":8,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -118.925,44.256 ]
    },
    "properties": {
    "brightness":301.8,
    "scan":1.4,
    "track":1.2,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":49,
    "version":"6.0NRT",
    "bright_t31":270.9,
    "frp":14.5,
    "daynight":"D"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -123.082,44.675 ]
    },
    "properties": {
    "brightness":303.6,
    "scan":1,
    "track":1,
    "acq_date":"2017-12-09",
    "acq_time":2120,
    "satellite":"A",
    "confidence":53,
    "version":"6.0NRT",
    "bright_t31":277.5,
    "frp":9.4,
    "daynight":"D"
    }

                }]
            }
        },
        "layout": {
            "text-field": "{brightness}", 
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        },
//            "text-offset": [0, 0.2],
        //isolates the ones that say brightness on them and is intended to display how bright the fire is through the values given and displays them in red and plots them on the map based on coordinates
        
        //https://earthdata.nasa.gov/firms-faq more research on fire data analysis here
        "paint": {
            "text-color": "#ff6347",
        }
    });
});