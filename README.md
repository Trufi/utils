# Utils

My utility functions.

Vector and matrix functions were taken from https://github.com/toji/gl-matrix.

## Usage

Install with npm:

```sh
npm install @trufi/utils
```

Import the function you need to your project and use it:

```js
import { vec2lerp } from '@trufi/utils';

// or
import { vec2lerp } from '@trufi/utils/vec2';

// or
import { vec2lerp } from '@trufi/utils/vec2/lerp';
```

## Contributing principles

1. One function — one file.
2. Zero dependencies.
