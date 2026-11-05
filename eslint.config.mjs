import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Supplied third-party component, used as provided.
    //
    // The React Compiler rules misfire on it:
    //   - `refs`:   `set(k)` returns a ref callback. React invokes it at commit
    //               time, not during render, but the rule can't follow the
    //               indirection through the factory.
    //   - `purity`: `performance.now()` is read inside the `useEffect` body to
    //               seed the requestAnimationFrame loop, not during render.
    //
    // Both patterns are correct here, so the rules are off for this file only
    // and stay on everywhere else.
    files: ["components/ui/mascot-portfolio-hero.tsx"],
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/purity": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
