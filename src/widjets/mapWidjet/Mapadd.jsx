import { useEffect } from 'react';
import { load } from '@2gis/mapgl';

export default function Mapadd() {
    // Вставляем div напрямую в JSX
    useEffect(() => {
        let map;

        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],  // Координаты центра
                zoom: 13,                      // Начальный зум
                key: '0eddb7c0-c192-420f-a922-56718c4ad7a3',  // Ваш API-ключ
            });
        });

        // Очистка карты при размонтировании
        return () => {
            if (map) {
                map.destroy();
            }
        };
    }, []);  // Пустой массив зависимостей для одноразового выполнения эффекта

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div id="map-container" style={{ width: '100%', height: '100%' }}></div> {/* Прямой рендеринг контейнера */}
        </div>
    );
}
