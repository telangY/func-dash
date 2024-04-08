import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
  {
    entries: ['./src/index.ts'],
    outDir: 'dist',
    declaration: true,
    clean: true,
    rollup: {
      emitCJS: true,
    },
  },
  {
    name: 'mini',
    entries: ['./src/index.ts'],
    outDir: 'dist/min',
    declaration: true,
    clean: true,
    rollup: {
      emitCJS: true,
      esbuild: {
        minify: true,
      },
      output: {
        name: 'dashy',
        format: 'umd',
      },
    },
  },
])
