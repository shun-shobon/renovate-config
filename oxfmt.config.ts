import { defineConfig } from "oxfmt";

export default defineConfig({
	useTabs: true,
	quoteProps: "consistent",
	sortImports: {
		groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
	},
	sortPackageJson: {
		sortScripts: true,
	},
});
