### Advanced example

```javascript
import React, { useState, useCallback, memo } from 'react';

const Child = memo(({ onIncrement }) => {
  console.log('Child component re-rendered');
  return <button onClick={onIncrement}>Increment from Child</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

export default Parent;
```

---

### Detailed explanation of the advanced example
1. **Child component**:
```javascript
const Child = memo(({ onIncrement }) => {
  console.log('Child component re-rendered');
  return <button onClick={onIncrement}>Increment from Child</button>;
});
```
The `Child` component is wrapped with `React.memo`, which prevents it from re-rendering unless its props change. The `onIncrement` function is passed as a prop.

2. **Parent component**:
```javascript
function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}
```

The `Parent` component manages the `count` state and defines the `increment` function using `useCallback`. The memoized `increment` function is passed to the `Child` component as a prop.