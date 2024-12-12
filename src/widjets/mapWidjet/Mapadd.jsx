import { useEffect } from 'react';
import { load } from '@2gis/mapgl';

export default function Mapadd() {

    useEffect(() => {
        let map;

        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [129.733568, 62.038],  
                zoom: 13,                    
                key: '0eddb7c0-c192-420f-a922-56718c4ad7a3', 
            });
        });


        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);  

    return (
        <div style={{ width: '500px', height: 'auto' }}>
            <div id="map-container" style={{ width: '500px', height: '500px' }}></div> {/* Прямой рендеринг контейнера */}
        </div>
    );
}
