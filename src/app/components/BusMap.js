import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Set the access token from the environment variable
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

const BusMap = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',  // Mapbox style
      center: [longitude, latitude],  // Initial map center
      zoom: 12,  // Initial zoom level
    });

    // Add navigation controls to the map (zoom in/out)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Create a marker at the bus location
    const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    // Optional: Update the marker position in real-time
    const intervalId = setInterval(() => {
      // Simulate real-time position update, e.g., fetch from an API
      const newLatitude = latitude + (Math.random() - 0.5) / 100;  // Simulate latitude change
      const newLongitude = longitude + (Math.random() - 0.5) / 100;  // Simulate longitude change

      // Update marker position
      marker.setLngLat([newLongitude, newLatitude]);
    }, 5000);  // Update every 5 seconds

    // Clean up on component unmount
    return () => {
      clearInterval(intervalId);
      map.remove();
    };
  }, [latitude, longitude]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default BusMap;
