# technical-test

> React Hook to streamline data fetching from API

[![NPM](https://img.shields.io/npm/v/technical-test.svg)](https://www.npmjs.com/package/technical-test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save technical-test
```

## Usage

```jsx
import React from 'react'
import { useFetch } from 'technical-test'

const Exemple = () => {
  const [data, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/users")

  if (isLoading)
    return (<div>Loading</div>)

  if (error)
    return (<div>Error : {error}</div>)

  return (
    <select>
      {data?.map((user) => <option value={user.id}>{user.name}</option>)}
    </select>
  )
}
```

## Test
```bash
npm test
```



## License

MIT © [Yassine Ait Tahar](https://github.com/yassine-aittahar)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
