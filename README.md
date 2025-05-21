# TypeScript Bootstrap Project

This repo is designed to serve as a bootstrap project.

## Components

### TypeScript

The project consists of TypeScript files with `.ts` extension.

The source files are located in `./src` directory.

The *TypeScript* compiler serves for validation only. It does not emit JavaScript files.

 - config: `tsconfig.json`
 - command: `"check": "tsc -p ./tsconfig.json"`

### typescript-eslint

We use `typescript-eslint` ([https://typescript-eslint.io]) for linting.

 - config: `eslint.config.mjs`
 - command: `"lint": "eslint --ext .ts ./src/**/*.ts"`


### Unit Tests

We use nodejs for testing.

 - command: `"test": "node --experimental-strip-types --experimental-transform-types --test"`

### Bundling

we use `esbuild` ([https://esbuild.github.io/]) for bundling the ESModules from separated TypeScript files to a single JavaScript file.

 - command `"bundle": "esbuild ./src/app.ts --outfile=./dist/out.js --bundle --sourcemap"`

### Generating TypeScript definitions

We use `dts-bundle-generator` ([https://github.com/timocov/dts-bundle-generator]) to export a single `out.d.ts` definition file.

 - command: `"dts": "dts-bundle-generator --out-file ./dist/out.d.ts --no-banner --project ./tsconfig.json ./src/app.ts"`

### Running

We run directly the TypeScript entry module by using type-stripping

 - command: `"start": "node --experimental-strip-types --experimental-transform-types --enable-source-maps ./src/app.ts"`

### Prepare for publishing

The `prepare` script runs the type checking, linting, testing, and bundling with one command.

 - command: `"prepare": "npm run check && npm run lint  && npm test && npm run bundle && npm run dts"`
