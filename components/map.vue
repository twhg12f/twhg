<script setup >
const config = useRuntimeConfig()
const token =  config.public.mapKey

const data = [
  {
    addr: "台北市大安區忠孝東路三段",
    avgP: "112.16",
    bPin: "38.16",
    bed: "2",
    center: "121.52055718968609_25.04716602930513",
    code: "106",
    distance: 2.06,
    distance2: 10,
    dp: 0,
    floors: "6-6/7樓",
    kindId: "4",
    lPin: "10.02",
    lat: "25.0432243",
    layout: "2房3廳2.0衛",
    lng: "121.5405045",
    mDate: "2023-03-09 12:08:31",
    md: 423,
    newKindId: "4",
    newUseId: "2",
    no: "B102202999",
    pic: "https://img2.twhg.com.tw/nhapp/images/OB01/B1022029990120230309120637.jpg",
    price: "4280",
    title: "SOGO忠孝復興捷運",
    totalPrice: "null",
    type_sum: null,
    year: "50.7年",
  },
  {
    addr: "台北市內湖區內湖路一段",
    avgP: "155.91",
    bPin: "141.11",
    bed: "0",
    center: "121.52055718968609_25.04716602930513",
    code: "114",
    distance: 5.88,
    distance2: 10,
    dp: 0,
    floors: "1-1/8樓",
    kindId: "0",
    lPin: "19.50",
    lat: "25.0831699",
    layout: "0房0廳0.0衛",
    lng: "121.5632629",
    mDate: "2023-05-26 21:16:13",
    md: 1236,
    newKindId: "4",
    newUseId: "8",
    no: "B602103825",
    pic: "https://img2.twhg.com.tw/nhapp/images/OB01/B6021038250120220913185114.jpg",
    price: "22000",
    title: "內湖路面寬邊間金店",
    totalPrice: "null",
    type_sum: null,
    year: "23.5年",
  },
  {
    addr: "台北市南港區園區街",
    avgP: "194.98",
    bPin: "97.24",
    bed: "0",
    center: "121.52055718968609_25.04716602930513",
    code: "115",
    distance: 9.29,
    distance2: 10,
    dp: 0,
    floors: "-9999--9999/10樓",
    kindId: "0",
    lPin: "19.53",
    lat: "25.0591431",
    layout: "0房0廳0.0衛",
    lng: "121.6118698",
    mDate: "2023-04-14 06:44:12",
    md: 736,
    newKindId: "2",
    newUseId: "4104",
    no: "B602104399",
    pic: "https://img2.twhg.com.tw/nhapp/images/OB01/B6021043990120220414160649.jpg",
    price: "18960",
    title: "南港園區三角窗金店面",
    totalPrice: "null",
    type_sum: null,
    year: "14.7年",
  },
];

var pointsSource = {
  "id": "pois",
  "type": "symbol",
  "source": {
      "type": "geojson",
      "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "properties": {
              "description": "站點名稱：<a href='#'><strong>南海店</strong></a><br />站點編號：NH1001<br />開放時間：08:00 ~ 21:00<br />營業狀態：<span class=\"available\">營業中</span>",
            },
            "geometry": {
              "type": "Point",
              "coordinates": [121.50872, 25.029194]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description": "站點名稱：<a href='#'><strong>汀州店</strong></a><br />站點編號：DC1001<br />開放時間：08:30 ~ 22:00<br />營業狀態：<span class=\"available\">營業中</span>",
            },
            "geometry": {
              "type": "Point",
              "coordinates": [121.509718, 25.027623]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description": "站點名稱：<a href='#'><strong>明鑫店</strong></a><br />站點編號：MH1001<br />開放時間：08:00 ~ 22:00<br />營業狀態：<span class=\"available\">營業中</span>",
            },
            "geometry": {
              "type": "Point",
              "coordinates": [121.507754, 25.027246]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description": "站點名稱：<a href='#'><strong>中華店</strong></a><br />站點編號：ZH1001<br />開放時間：14:00 ~ 23:00<br />營業狀態：<span class=\"unvailable\">未營業</span>",
            },
            "geometry": {
              "type": "Point",
              "coordinates": [121.506262, 25.027673]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "description": "站點名稱：<a href='#'><strong>忠義店</strong></a><br />站點編號：ZY1001<br />開放時間：09:00 ~ 18:00<br />營業狀態：<span class=\"available\">營業中</span>",
            },
            "geometry": {
              "type": "Point",
              "coordinates": [121.505516, 25.029691]
            }
          }]
      }
  },
  "layout": {
      "icon-image": "marker",
      "icon-offset": [0, -21],
      "icon-allow-overlap": true
  }
};

let coordindate = ref("")
let strBounds = ref({
  N:0,
  S:0,
  E:0,
  W:0
})
let result = ref("")

onMounted(()=>{
  gomp.accessToken = token;
  const map = new gomp.Map({
    container: 'map',
    style: 'https://api.map8.zone/styles/go-life-maps-tw-style-std/style.json',
    maxBounds: [[105, 15], [138.45858, 33.4]],
    center: [121.54885, 25.03625],
    zoom: 15,
    minZoom: 12,
    maxZoom: 16,
    speedLoad: false,
    attributionControl: false,
  });


  // console.log(map)

  map.on('load',function(){

  //過濾他牌(不完全)
  map.setFilter(
    'poi-all',
    ["all",
      ["!=", "subclass", "cthouse"],
      ["!=", "subclass", 'yungchinghouse'],
      ["!=", "subclass", 'sinyihouse'],
      ["!=", "subclass", 'twhouse'],
      ["!=", "subclass", 'umhouse'],
      ['!=', 'class', 'housing']
    ]
  )
  })


  map.addControl(new gomp.AttributionControl({
    compact: false,
  }));

  map.addControl(new gomp.NavigationControl(), "top-left");
  
  // 比例尺
  var scale = new gomp.ScaleControl({
    maxWidth: 100,
  });
  map.addControl(scale, "bottom-right");

  // 畫圖
  var draw = new gompDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
  });
  map.addControl(draw, "top-left");
  map.on("draw.create", drawArea);
  map.on("draw.delete", drawArea);
  map.on("draw.update", drawArea);

  function drawArea() {
    var area = draw.getAll();
    if (area.features.length > 0) {
      coordindate.value = area.features[0].geometry.coordinates[0]
      console.log(area.features)
    }
  }

  function findBounds() {
    let zoom = map.getZoom();
    if (zoom > 15) {
      result.value = "資料們";
    } else {
      result.value = "請放大地圖以顯示物件";
    }
    var mapBounds = map.getBounds();
    strBounds.value.N = mapBounds._ne.lat
    strBounds.value.S = mapBounds._sw.lat
    strBounds.value.E = mapBounds._ne.lng
    strBounds.value.W = mapBounds._sw.lng
  }
  map.on("load", findBounds);
  map.on("dragend", findBounds);
  map.on("zoomend", findBounds);


  function showListings() {
    data.forEach(function (item) {
      var nowMapPoint = {
        lng: item.lng,
        lat: item.lat,
      };
      var markerPoint = new gomp.Popup({
        anchor: "bottom",
        closeButton: false,
        closeOnClick: false,
      })
        .setLngLat(nowMapPoint)
        .setHTML(`
          <a href="/" target="_blank">
            ${item.title}
            ${item.price}
          </a>
        `)
        .addTo(map);
    });
  }
  map.on("load", showListings);




  var imageEl = document.createElement('img');
  imageEl.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAqCAYAAACgLjskAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjlJREFUeNrUl8FOwkAQhocVjAYJmBgveCDxBTTqwZN9A/EN8Amsid7x7EWfQHgC9A3grInwACZcuKiJEkI0ouBOnZJa2t2Bbk38k2VLd7ZfZ3d2Z5sYjUag0vbpc05WJVksKlmfSVeWOpXK3fnKq+p5iTAggcqyHMF0usR+YeBAoIQV8W0DvOEKvS5J6LW/QQTAbFnVIsCA+tbks0pKD8ngCszqUHpamQDSMNYgHh24w+sAKUDaEYdRN6cFDCR3Du0YYe6c2o6HWydPLO+Ggzd4f3mAz/4jjIaDn/kQKUimV2FheR1EapHlZVL+FHWwr48e9Du3Y5Ar/D/odZyXSOd3YG4+o/OyKAio9CwI5gejDdpq5AAtlQUOowrmhaKtRpbQDScOF1cM26zgvDlXHFuhmz/TUgIx1DH0ueLYaocU1xlXHFsENlQGuKg5b442aKtRQ1CmVg4rLmoVFNvQhrHbXAtKtErhDrK0tgupTP4XGK/xHrZpdpkx0M0W6OUexKuGzBaWN1vELXscpZLclNVZjLBjYkwcMTAr7xuG3UhYMWwd4pmmZRDWomcGL3w6S1qGoPgMy38+ndhpDEEDYaFbW0RoKEy5l84IVcK0m/eUUC1M+THjO/5vyOpeY7bprrVI6cmzMVRVX0wcGBtIKivaLoxkfJ+X7RAvq9QGpj100gvzXrSg8QWQt0NXepczdogKy2ue67rRU1uIvJDmXwCb/wo4ddBQ4LRpqRSm7ZucMf3UZ+wH3wIMAPnJ+VlcHpUWAAAAAElFTkSuQmCC';
  var tagEl = document.createElement('div')
  tagEl.style = 'width: 80px; height: 40px; background-color: #F60'
  var popup = new gomp.Popup({
    anchor: 'bottom',
    closeButton: true,
    closeOnClick: false,
    offset: [0, -42]
  });
  map.on('click', 'unclustered-point', function(e) {
    // 設定滑鼠游標樣式
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // 確保訊息視窗不會被遮擋
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // 設定訊息視窗內容並在地圖上顯示
    popup.setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  map.on('load',function(){
    // 群聚
    map.addSource("housesale", {
      type: "geojson",
      data: pointsSource.source.data,
      cluster: true,
      clusterMaxZoom: 14, // 顯示群聚點的最大 zoom level
      clusterRadius: 50 // 設定群聚半徑 (單位公尺 / 預設 50)
    });

    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "housesale",
      filter: ["has", "point_count"],
      paint: {
        "circle-color": [
          "step",
          ["get", "point_count"],
          // 數量小於 10 為黃褐色
          "rgba(110, 204, 57, 0.6)",
          10,
          // 數量 10 - 50 為淡藍色
          "rgba(240, 194, 12, 0.6)",
          // 數量 50 以上 為灰藍色
          50,
          "#838B98"
        ],
        "circle-radius": [
          "step",
          ["get", "point_count"],
          20,
          20,
          30,
          50,
          40
        ]
      }
    });
  // 群聚點
    map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "housesale",
        filter: ["has", "point_count"],
        layout: {
            "text-field": "{point_count}",
            "text-size": 16,
            "text-font": ["Noto Sans Regular"]
        }
    });
    // 非群聚點
    map.addImage("image", imageEl); // 將圖片加入地圖
      map.addLayer({
          id: "unclustered-point",
          type: "symbol",
          source: "housesale",
          filter: ["!", ["has", "point_count"]],
          layout: {
            "icon-image": "image", // 以圖片呈現點位
            "icon-size": 0.7
          },
      });
    // 查看群聚點
    map.on('click', 'clusters', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
      var clusterId = features[0].properties.cluster_id;
      map.getSource('housesale').getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err)
          return;
          
          map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
          });
      });
    });

    map.on('mouseenter', 'clusters', function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', function () {
        map.getCanvas().style.cursor = '';
    });
  })

 

});




// 待研究
// view-source:https://www.map8.zone/showcase/DrawCircleSquareData
// https://turfjs.org/
// https://www.map8.zone/api-explorer/
</script>
<template>
  <div>
    <div id="map" class="w-3/4 h-96 "></div>
    <div id="coordindate">
      coordindate:
      {{ coordindate }}
    </div>
    <div id="bounds">
      bounds: 
      {{ strBounds }}
    </div>
    <div id="result" >
      result:
      {{ result }}
    </div>
  </div>
</template>