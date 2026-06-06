import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const disabledReactRules = Object.fromEntries(
  [...nextVitals, ...nextTs]
    .flatMap((config) => Object.keys(config.rules ?? {}))
    .filter((ruleName) => ruleName.startsWith("react/"))
    .map((ruleName) => [ruleName, "off"])
);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: disabledReactRules,
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
