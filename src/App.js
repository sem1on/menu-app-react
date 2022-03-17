import React from "react";
import { useState } from "react";

import items from './data';

import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['все', ...new Set(items.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'все') {
            setMenuItems(items);
            return;
        };
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Меню</h2>
                    <div className="underline"></div>
                </div>
                <Categories 
                    categories={categories} 
                    filterItems={filterItems}
                />
                <Menu items={menuItems}/>
            </section>
        </main>
  );
}

export default App;
