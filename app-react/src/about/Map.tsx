import React, { useEffect, useRef, useState } from 'react';
import { routeCoordinates, routes } from './RouteCoordinates';
/// <reference types="@types/googlemaps" />

declare global {
  interface Window {
    google: any;
  }
}

const mapUserKey = process.env.REACT_APP_GOOGLE_MAPS_API;


const MapCon: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any| null>(null);
  const [marker, setMarker] = useState<any| null>(null);
  const [route, setRoute] = useState<number>(-1);
  const [once, setOnce] = useState<boolean>(true);

  useEffect(() => {
    if (mapUserKey) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${mapUserKey}`;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener('load', () => {
        const styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8ec3b9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1a3646"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#64779e"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#4b6878"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#334e87"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6f9ba5"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3C7680"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#304a7d"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2c6675"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#255763"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#b0d5ce"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#023e58"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#98a5be"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1d2c4d"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#283d6a"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3a4762"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0e1626"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#4e6d70"
              }
            ]
          }
        ];
      // Disable zoom and movement on Google Maps API
      const mapOptions = {
        zoomControl: false, // disable zoom control
        draggable: false, // disable drag and drop movement
        scrollwheel: false, // disable scroll wheel zoom
        disableDoubleClickZoom: true // disable double click zoom
      };
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.916847, lng: 32.685360 },
        zoom: 4,
        styles: styles, // add the styles array to the map instance
        ...mapOptions // add the mapOptions object as additional options to the map instance
      });
      
      setMap(map);
      
      });


      return () => {
        window.document.body.removeChild(googleMapScript);
      }
    }
  }, []);

  function changeMapCenter(){

    setRoute(route+1);


    if (once) {
      // Define the route polyline
      const routePolyline = new window.google.maps.Polyline({
        path: routeCoordinates,
        geodesic: true,
        strokeColor: "#FFA500",
        strokeOpacity: .9,
        strokeWeight: 2,
      });


      let newMarker = null;

      newMarker = new window.google.maps.Marker({
        position: { lat: 33.061263, lng: 36.329332 },
        map: map,
        title: 'My home town',
        animation: window.google.maps.Animation.DROP,
      });
      setMarker(newMarker);
      setOnce(false);

      // Add the route polyline to the map
      routePolyline.setMap(map);
    }



    if (marker) {
      animateRoute();   
      console.log("marker is : ", marker);   
    }
  }


      // Define the route
      // const routeCoordinates = [
      //   { lat: 33.061263, lng: 36.329332 },
      //   { lat: 33.515852, lng: 36.235886 },
      //   { lat: 33.802936, lng: 35.863360 },
      //   { lat: 33.907857, lng: 35.470337 },
      //   { lat: 36.389644, lng: 35.698793 },
      //   { lat: 38.423733, lng: 27.142826},
      //   { lat: 37.349964, lng: 25.207669},
      //   { lat: 37.983810, lng: 23.727539},
      //   { lat: 41.945690563738935, lng: 21.73894891886329 },
      //   { lat: 44.25905041523722, lng: 20.384701271356352},
      //   { lat: 45.7529840593932, lng: 16.826932027906054},
      //   { lat: 47.23914897417437, lng: 18.089366275581945},
      //   { lat: 47.82899441753759, lng: 14.944757331371035},
      //   { lat: 48.32071539727881, lng: 11.249267988174285},
      //   { lat: 53.60512605970116, lng: 9.80320694083642},
      //   { lat: 56.063877333036515, lng: 13.957763283188044},
      //   { lat: 59.5584292192377, lng: 18.15822632545515},
      //   { lat: 57.73317325525221, lng: 11.990924384785009}
      // ];

  // Define the animation function
  function animateRoute() {
    let count = 0;
    const interval = setInterval(() => {
      if (count === routes[route].length) {
        clearInterval(interval);
        return;
      }

      // Move the marker
      marker.setPosition(routes[route][count]);

      // Pan the map
      map.panTo(marker.getPosition());

      count++;
    }, 1000); // Change this value to adjust the animation speed
  }

  return (
    <div>
      <div className="map-container" ref={mapRef} style={{ width: '1920px', height: '800px' }}></div>
      <button className="add-marker-button" onClick={changeMapCenter}>Add Marker</button>
    </div>
  );
}


export default MapCon;
