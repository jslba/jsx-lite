# JSX Lite
![npm](https://img.shields.io/npm/v/@angelisium/jsx-lite?color=blue&style=flat)
![GitHub](https://img.shields.io/github/license/jslba/mtwin-codec?style=flat)

The philosophy of this project is to provide a light and fast structure to allow
the  use  of the  JSX  syntax  in  a  JavaScript  application to  increase  your
productivity and the  maintainability of your project !

All JSX  chunk are valid [HTMLElement][htmlElemnt] which can then be manipulated
as you wish.

> **Note**   
> If you want to know how to use it, you can see some examples [here][eg].

### Demonstration :
```jsx
// classic JS chunk :
var p = document.createElement("p");
p.appendChild(
   document.createTextNode("Hello World")
);
var main = document.createElement("main");
main.setAttribute("class", "light");
main.appendChild(p);
document.body.appendChild(main);

// becomes :
document.body.appendChild(
   <main class="light">
      <p>Hello World</p>
   </main>
);

```

### &#x26a0;&#xfe0f; Warning &#x26a0;&#xfe0f; 
Currently the project does not support :
 - the JSX fragments like `<> ... </>` or `<React.Fragment />`.
 - custom elements like `<CustomJSXElement />`.

No planned JSX fragments support (for now) ;  because I cannot find any concrete
case requiring the  use of fragments ; most can be solved  with the use of array
and `append` instead of `appendChild`.

[eg]: /example/
[index]: /source/index.js
[htmlElemnt]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
