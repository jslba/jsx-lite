# [createElement][index] implement of JSX

**Pourquoi ?**   
Principalement pour augmenter la maintenabilité de petit projet ne nécésitant
pas une manipulation avancé de React (et de JSX en général), nottament dans les
projets compilant en [script utilisateur][userscript].


état actuelle :
 - ne prend pas en charge les fragments (`<></>`, `<React.Fragment />`, etc)
 - ne prend pas en charge les éléments custom (`<CustomElement />`, etc)

Utilisation :

```js
// dans vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsxFactory: 'createElementBabel',
		jsxInject: 'import { createElementBabel } from "lite-jsx";'
	},
});
```

[index]: ./source/index.js
[userscript]: https://en.wikipedia.org/wiki/Userscript