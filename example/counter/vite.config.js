import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsxFactory: "createElementBabel",
		jsxInject: 'import { createElementBabel } from "@angelisium/jsx-lite";',
	},
});