import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import catMapIcon from '../utils/catMapIcon';
import dogMapIcon from '../utils/dogMapIcon';

interface IAnimalProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  specie: string;
}

export function GetAnimalData() {
  const [animals] = useState<IAnimalProps[]>([
    {
      id: 17,
      latitude: -27.1024667,
      longitude: -52.6342728,
      name: 'PEV Jardim América',
      specie: 'dog',
    },
    {
      id: 18,
      latitude: -27.1163136,
      longitude: -52.6278108,
      name: 'PEV Santo Antônio / SAIC',
      specie: 'cat',
    },
  ]);

  return (
    <div>
      {animals.map((animals) => {
        return (
          <Marker
            key={animals.id}
            icon={animals.specie === 'dog' ? dogMapIcon : catMapIcon}
            position={[animals.latitude, animals.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {animals.name}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${animals.latitude},${animals.longitude}`}
              >
                <FiArrowRight size={20} color="#FFF" />
              </a>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
}
