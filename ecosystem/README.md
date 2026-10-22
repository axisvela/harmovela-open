# Ecosystem

Projects, integrations, and tooling built around the Harmovela Protocol.

The catalog is maintained in [`registry.json`](registry.json). It is intentionally machine-readable so that documentation sites, package indexes, and community dashboards can consume it.

## What Belongs Here

- SDKs for Harmovela transports, events, tasks, state, and governance.
- Runtimes and hosted services that implement Harmovela.
- Transport bindings and brokers with Harmovela adapters.
- Bridges to MCP, agent frameworks, workflow engines, and memory systems.
- Developer tools: CLIs, inspectors, conformance runners, and test harnesses.
- Integration examples published outside this repository.

## What Does Not Belong Here

- Protocol specifications, schemas, or conformance fixtures.
- Reference implementation code maintained in the protocol repository.
- Unpublished, private, or inaccessible projects.
- Abandoned projects with no maintainer or working URL.

## Registry Status

| Status | Meaning |
|---|---|
| `official` | Maintained by the Harmovela project. |
| `community` | Maintained by a third party and suitable for general use. |
| `experimental` | Early-stage or unstable; use with caution. |

## Adding an Entry

1. Fork this repository.
2. Add an object to the `entries` array in [`registry.json`](registry.json).
3. Run `node scripts/validate-registry.mjs`.
4. Open a pull request describing the project and how it uses Harmovela.

See [Ecosystem Registry](../docs/ecosystem-registry.md) for field definitions.

## Current Entries

The registry is being seeded. Official implementations and examples are tracked in the [Harmovela protocol repository](https://github.com/axisvela/harmovela) until they are cataloged here.
