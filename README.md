## tensorflow-sentence-similarity-typescipt

##### Clone & Install deps

Clone the repo locally.

```
# git clone https://github.com/philliplakis/tensorflow-sentence-similarity-typescipt.git
# cd tensorflow-sentence-similarity-typescipt
# yarn
```

##### Run tests

Test coverage is supplied with some default sentences.

```
# yarn coverage
```

##### Build & Import

Make sure you have installed deps & ran a test.

```
# yarn build
```

It will export the files into the `./build/*`
Then in your file:

```JS
import { cosine } from "./cosine"; // Typescript
const { cosine } = require("./cosine") // Javascript
```

##### Sources

https://medium.com/@sumn2u/string-similarity-comparision-in-js-with-examples-4bae35f13968
