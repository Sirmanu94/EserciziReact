import React from 'react';
import useCurrentLocation from './useCurrentLocation';

function LocationComponent() {
  const { currentLocation, loading, error, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getCurrentLocation} disabled={loading}>
        Ottieni Posizione
      </button>
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error}</p>}
      {currentLocation && (
        <p>
          Posizione Attuale: Latitudine {currentLocation.latitude}, Longitudine{' '}
          {currentLocation.longitude}
        </p>
      )}
    </div>
  );
}

export default LocationComponent;
