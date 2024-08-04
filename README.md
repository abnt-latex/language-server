# Language Server LaTeX

## Structure

```
.
├── client // Language Client
│   ├── src
│   │   ├── test // End to End tests for Language Client / Server
│   │   └── extension.ts // Language Client entry point
├── package.json // The extension manifest.
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```

## Features

- [ ] Notebooks to equations LaTeX
- [ ] Commands for compilation
- [ ] Autocomplete
- [ ] Outline tree
- [ ] `...`

## Vscode Extension

### Running the Sample

* Run `npm install` in this folder.
* Press Ctrl+Shift+B or F5 to start compiling the client and server in watch mode.

### Publishing Extension

```bash
$ vsce package
```

* Create `.vsix` file in root folder