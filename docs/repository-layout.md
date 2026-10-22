# Repository Layout

Harmovela Open is deliberately small. It holds runnable examples, the ecosystem registry, and the guides needed to maintain them.

```text
harmovela-open/
├── README.md                  Project overview
├── README_zh.md               Chinese overview
├── CONTRIBUTING.md            Contribution process
├── CODE_OF_CONDUCT.md         Community standards
├── SECURITY.md                Security reporting process
├── LICENSE                    Apache License 2.0
├── docs/                      Repository guides
│   ├── repository-layout.md
│   ├── authoring-examples.md
│   └── ecosystem-registry.md
├── examples/                  Runnable examples grouped by scene
│   └── README.md              Example index
├── ecosystem/                 Ecosystem catalog
│   ├── README.md              Catalog overview
│   └── registry.json          Machine-readable registry
├── scripts/                   Repository validation tooling
│   └── validate-registry.mjs
└── .github/                   Issue/PR templates and CI
```

## Boundaries

| Concern | Location |
|---|---|
| Protocol specifications | [Harmovela protocol repository](https://github.com/axisvela/harmovela) |
| JSON Schemas and conformance fixtures | Protocol repository |
| Reference implementations | Protocol repository |
| Runnable integration examples | `examples/` in this repository |
| SDK, runtime, transport, adapter catalog | `ecosystem/` in this repository |
| Repository validation | `scripts/` in this repository |

## Naming Conventions

- Example directories use lowercase kebab-case, for example `examples/mcp-bridge/`.
- One example directory contains one focused integration.
- Ecosystem entries use a unique lowercase name that matches the project's public name where possible.
- Language-specific files inside an example use the standard extension for that language.
