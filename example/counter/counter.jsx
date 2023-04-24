var count = 0;

function formatCount(count) {
	return "Count is " + count + "!";
}

function counter() {
	let out = document.querySelector("#output");
	out.textContent = formatCount(++count);
}

const root = document.querySelector("#root");
root.append(
	<h1>Counter</h1>,
	<p id="output">{formatCount(count)}</p>,
	<button onclick={counter}>Up</button>
);