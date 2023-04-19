# [createElement][index] implement of JSX

**Pourquoi ?**   
Principalement pour augmenter la maintenabilité de petit projet ne nécésitant
pas une manipulation avancé de React (et de JSX en général), nottament dans les
projets compilant en [script utilisateur][userscript].


état actuelle :
 - ne prend pas en charge les fragments (`<></>`, `<React.Fragment />`, etc)
 - ne prend pas en charge les éléments custom (`<CustomElement />`, etc)
 - pas de support pour les listeners `on<Event>` (soon)

Utilisation :

```js
// dans vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsxFactory: 'createElementBabel',
		jsxInject: 'import { createElementBabel } from "@angelisium/jsx-lite";'
	}
});
```

```jsx
// dans vos sources
var count = 0;

function counter() {
  let out = document.querySelector('#output');
  out.textContent = `Count est à ${++count} !`;
}

window.counter = counter;

document.body.appendChild(
  <main>
    <h1>Mon titre</h1>
    <p id="output">Count est à {count.toString()} !</p>
    {/* pas encore de support pour les listeners */}
    <button onclick="window.counter();false">Up</button>
  </main>
);

// output
import { createElementBabel } from "@angelisium/jsx-lite";
var count = 0;
function counter() {
  let out = document.querySelector('#output');
  out.textContent = `Count est à ${++count} !`;
}
window.counter = counter;
document.body.appendChild(
  createElementBabel("main", null,
    createElementBabel("h1", null, "Mon titre"),
    createElementBabel("p", { id: "output" }, "Count est \xE0 ", count, " !"),
    createElementBabel("button", { onclick: "window.counter();false" }, "Up")
  )
);
```

[index]: ./source/index.js
[userscript]: https://en.wikipedia.org/wiki/Userscript
