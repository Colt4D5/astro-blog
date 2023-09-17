import { useState } from 'react';

export default function Tags({ categories }) {
  const [cats, setCats] = useState([]);

  function filterTags(e) {
    const category = e.target.dataset.category
    const catIndex = cats.indexOf(category)
    if (catIndex >= 0) {
      const newArr = cats.filter(cat => cat != category);
      setCats(newArr);
    } else {
      const catSet = new Set([...cats, category]);
      setCats([...catSet]);
    }
    console.log(cats);
  }
  
  return (
    <div id="post-categories">
      {
        categories.map((cat, i) => {
          return <button key={i} className={cats.length > 0 && cats.includes(cat) ? "active" : ""} onClick={filterTags} data-category={cat} >{cat}</button>
        })
      }
    </div>
  )
}