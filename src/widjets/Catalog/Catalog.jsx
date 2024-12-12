import React, { useState } from 'react';
import { products_item } from '../../Products';
import Product from '../product/product';
import '../../app/styles/widjets/tabs/tab.scss';

export default function Catalog() {
    const [activeMainTab, setActiveMainTab] = useState('Уют');
    const [activeSubTab, setActiveSubTab] = useState(null);


    const uniqueTypes = [...new Set(products_item.map(item => item.type))];


    const uniqueSubTypes = activeMainTab
        ? [...new Set(products_item
            .filter(item => item.type === activeMainTab)
            .map(item => item.under_type))]
        : [];

    const openMainTab = (type) => {
        setActiveMainTab(type);
        setActiveSubTab(null);
    };

    const openSubTab = (underType) => {
        setActiveSubTab(underType);
    };


    const filteredProducts = products_item.filter(product => {
        if (activeSubTab) {
            return product.type === activeMainTab && product.under_type === activeSubTab;
        } else {
            return product.type === activeMainTab;
        }
    });


    return (
        <>
            <div className="catalog">
                <div className='catalog-tag'>
                    <h2>Каталог</h2>
                </div>



                <div className="tab main-tab">

                    {uniqueTypes.map((type) => (
                        <button
                            key={type}
                            className={`main-tab-button ${activeMainTab === type ? 'active' : ''}`}
                            onClick={() => openMainTab(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>


                {uniqueSubTypes.length > 0 && (
                    <div className="sub-tab">
                        <button className="sub-tab" onClick={() => setActiveSubTab(null)}>
                            Все
                        </button>
                        {uniqueSubTypes.map((underType) => (
                            <button
                                key={underType}
                                className={`sub-tab-button ${activeSubTab === underType ? 'active' : ''}`}
                                onClick={() => openSubTab(underType)}
                            >
                                {underType}
                            </button>
                        ))}
                    </div>
                )}

                <div className="catalog-products">
                    {filteredProducts.map((product) => (
                        <div key={product.id}>
                            <Product
                                product={product}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                img={product.preview}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}