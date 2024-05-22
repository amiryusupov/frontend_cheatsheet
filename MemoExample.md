#### Advanced Example
```javascript
import React, { useState, useMemo } from 'react';

const ExpensiveList = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

function App() {
  const [filter, setFilter] = useState('');
  const [items] = useState(['apple', 'banana', 'orange', 'pear', 'grape']);

  return (
    <div>
      <input 
        type="text" 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
        placeholder="Filter items" 
      />
      <ExpensiveList items={items} filter={filter} />
    </div>
  );
}

export default App;
```

#### Detailed Explanation of the Advanced Example

1. **Filtering Logic:**

```javascript
const filteredItems = useMemo(() => {
  console.log('Filtering items...');
  return items.filter(item => item.includes(filter));
}, [items, filter]);
```

The `filteredItems` are memoized using `useMemo`, which ensures that the filtering logic only runs when `items` or `filter` change.

2. **Parent Component:**

```javascript
const [filter, setFilter] = useState('');
const [items] = useState(['apple', 'banana', 'orange', 'pear', 'grape']);
```

The `App` component manages the filter state and the list of items. It passes these to the `ExpensiveList` component.

3. **Child Component:**

```javascript
return (
  <ul>
    {filteredItems.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

The `ExpensiveList` component renders the filtered list of items.