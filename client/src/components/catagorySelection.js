import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategorySelection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
      {/* Render your categories here */}
    </div>
  );
};

export default CategorySelection;

