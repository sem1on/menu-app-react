import React from 'react';


const Categories = ({filterItems, categories}) => {
  return (
      <article className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button 
                        type='button'
                        key={index}
                        className='filter-btn'
                        onClick={() => filterItems(category)} >
                        {category}
                    </button>
                )
            })}
      </article>
  );
};

export default Categories;