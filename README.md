## Heroicons React

[![npm version](https://img.shields.io/npm/v/heroicons-react.svg)](https://www.npmjs.com/package/heroicons-react)
[![npm downloads](https://img.shields.io/npm/dm/heroicons-react.svg)](https://www.npmjs.com/package/heroicons-react)

### Installation

```sh
yarn add heroicons-react
```

```sh
npm install heroicons-react
```

### Usage

```javascript
import React from "react";
import { Sparkles } from "heroicons-react";

const App = () => {
  return <Sparkles />;
};

export default App;
```

Icons can be sized - based on height (default: 24)

```javascript
<Sparkles size={42} />
```

You can also include the whole icon pack:

```javascript
import React from "react";
import * as Icons from "heroicons-react";

const App = () => {
  return <Icons.Sparkles />;
};

export default App;
```

### Available Icons

https://heroicons.com/
