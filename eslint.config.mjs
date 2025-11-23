import nextConfig from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'

const eslintConfig = [
  ...nextConfig,
  prettierConfig,
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
      'next-env.d.ts',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      '*.config.cjs',
    ],
  },
]

export default eslintConfig
