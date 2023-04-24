const jsxLite = (function () {
	const TextNode = "__TEXT_NODE__";

	function addChild(target, el) {
		if (el instanceof Text || el instanceof HTMLElement) {
			target.appendChild(el);
		} else if (typeof el === "string") {
			target.appendChild(createElement(TextNode, {}, el));
		} else {
			throw "Unexpected child type: " + typeof el;
		}
	}

	function createElement(type, attribute = {}, children = []) {
		/**********************************************************************
		 * Create Element                                                     *
		 **********************************************************************/
		if (type === TextNode) {
			if (typeof children != "string") {
				throw "A text node cannot contain anything other than text.";
			}
			return document.createTextNode(children);
		}
		let element = document.createElement(type);
		/**********************************************************************
		 * Add Attribute                                                      *
		 **********************************************************************/
		for (let [attr, value] of Object.entries(attribute)) {
			if(attr.startsWith("on") && typeof value === "function") {
				let event = attr.slice(2);
				element.addEventListener(event, value);
			} else {
				element.setAttribute(attr, value);
			}
		}
		/**********************************************************************
		 * Add Children                                                       *
		 **********************************************************************/
		if (children instanceof Array) {
			for (let el of children) {
				addChild(element, el);
			}
		} else {
			addChild(element, children);
		}

		return element;
	}

	function createElementBabel(type, options, ...children) {
		if (options === null) {
			options = {};
		}
		return createElement(type, options, children);
	}

	return { createElement, createElementBabel };
})();

module.exports = jsxLite;
