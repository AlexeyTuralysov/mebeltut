import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import './../../app/styles/widjets/map/Map.scss';

export default function Mapadd() {
    const MapWrapper = React.memo(
        () => {
            return <div id="map-container" style={{ width: '50%', height: '100%' }}></div>;
        },
        () => true,
    );

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [129.732314, 62.038286],
                zoom: 13,
                key: '0eddb7c0-c192-420f-a922-56718c4ad7a3',
            });

            // Проверяем наличие API для создания маркера
            if (mapglAPI.Marker) {
                // Создание маркера без указания иконки
                const marker = new mapglAPI.Marker({
                    coordinates: [129.732314, 62.038286], // координаты маркера
                });

                marker.addTo(map); // добавляем маркер на карту
            } else {
                console.error("Marker API is not available.");
            }
        }).catch(error => {
            console.error("Error loading map:", error);
        });

        // Удаляем карту при размонтировании компонента
        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
