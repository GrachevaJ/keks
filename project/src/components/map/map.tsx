import {Marker, Icon} from 'leaflet';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import type { Address } from '../../types/types';
import { addresses } from '../../const';
import 'leaflet/dist/leaflet.css';

const DEFAULT_ICON = new Icon({
  iconUrl: 'img/content/map-marker2.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const SPEC_ICON = new Icon({
  iconUrl: 'img/content/map-marker1.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = (): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      addresses.forEach((address: Address) => {
        const marker = new Marker([address.position.lat, address.position.lng]);

        marker.setIcon(address.isSpec ? SPEC_ICON : DEFAULT_ICON).addTo(map);
      });
    }
  },[map]);

  return <div className="map__wrapper" ref={mapRef} />;
};

export default Map;
