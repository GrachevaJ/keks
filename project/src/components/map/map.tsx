import {Marker, Icon, LayerGroup} from 'leaflet';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import { addresses } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/use-app';
import { getActiveAddressId } from '../../store/site-process/selectors';

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
  const activeAddressId = useAppSelector(getActiveAddressId);

  const markerLayerRef = useRef<LayerGroup | null>(null);

  useEffect(() => {
    if (map && !markerLayerRef.current) {
      markerLayerRef.current = new LayerGroup().addTo(map);
    }
  },[map]);

  useEffect(() => {
    if (map && markerLayerRef.current) {
      markerLayerRef.current.clearLayers();

      const currentAddress = addresses.find((item) => item.id === activeAddressId);

      if (currentAddress) {
        const {lat, lng} = currentAddress.position;
        const marker = new Marker([lat, lng]);

        marker
          .setIcon(currentAddress.isSpec ? SPEC_ICON : DEFAULT_ICON)
          .addTo(markerLayerRef.current);

        map.setView([lat, lng], map.getZoom(), {
          animate: true,
          duration: 0.8,
        });
      }
    }
  }, [map, activeAddressId]);

  return <div className="map__wrapper" ref={mapRef} />;
};

export default Map;
