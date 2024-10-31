import React from 'react';

const List = () => {
  const items = [1, 2, 3,4,5,6];

  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>لا يوجد عناصر في المصفوفة.</p>
      )}
    </div>
  );
};

export default List;
