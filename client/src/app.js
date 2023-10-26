import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategorySelection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch category data from your server
    axios.get('/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Render the categories in your component
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelection;

