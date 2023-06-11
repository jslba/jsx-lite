const root = document.querySelector("#root");

const counter = new Proxy(
	{ value: 0 },
	{
		set(target, property, value) {
			target[property] = value;
			if (property == "value") {
				target.node.textContent = target.value;
			}
			return true;
		},
	}
);

counter.node = <p>{counter.value.toString()}</p>;
root.append(
	<h1>Counter</h1>,
	counter.node,
	<button onclick={(_) => counter.value++}>Up</button>
);