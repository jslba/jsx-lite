const root = document.querySelector("#root");

var count = 0;
count.__proto__.toString = () => "Count is " + count + "!";
const output = <p>{count.toString()}</p>;
count.__proto__.next = function () {
	count++;
	output.textContent = count.toString();
};

root.append(
	<h1>Counter</h1>,
	output,
	<button onclick={count.next}>Up</button>
);