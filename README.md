# Harmovela Open

> [中文](README_zh.md) | [Protocol Repository](https://github.com/axisvela/harmovela) | [Spec Site](https://axisrobo.github.io/harmovela/)

**Harmovela Open** is the public examples and ecosystem hub for the [Harmovela Protocol](https://github.com/axisvela/harmovela) — an open coordination protocol for autonomous systems.

The protocol repository is the source of truth for specifications, JSON Schemas, conformance fixtures, and reference implementations. This repository focuses on:

- **Examples** — runnable integrations that show how the coordination dimensions work together in real systems.
- **Ecosystem** — a registry of SDKs, runtimes, transports, adapters, tools, and community projects built around Harmovela.
- **Guides** — practical guidance for authoring, validating, and submitting examples and ecosystem entries.

## What Is Harmovela?

Harmovela defines how agents, tools, memory systems, context providers, environment observers, and multi-agent runtimes coordinate across seven interdependent dimensions:

| Dimension | What Harmovela defines |
|---|---|
| Event | What happened — publish, subscribe, correlate, replay, acknowledge. |
| Task | What is executing — lifecycle from submitted through completed, failed, or cancelled. |
| State | What is true now — versioned state, freshness windows, invalidation, change propagation. |
| Context / Memory | What informs decisions — updates, invalidation, provenance, retrieval readiness. |
| Delegation | Who does what — assignment, acceptance, handoff, escalation, cancellation propagation. |
| Recovery | What to do when things break — idempotency, replay, checkpoints, interruption, compensation. |
| Governance | Who can do what — identity, authorization, audit, tenant isolation, policy integration. |

Harmovela complements MCP. MCP remains the synchronous capability invocation layer; Harmovela provides the asynchronous coordination layer — event streams, task lifecycle, state management, context awareness, delegation, recovery, and governance.

## Repository Layout

```text
harmovela-open/
├── examples/        Runnable examples grouped by scene
├── ecosystem/       Ecosystem registry and project catalog
├── docs/            Authoring, registry, and contribution guides
├── scripts/         Repository validation tooling
└── .github/         Issue/PR templates and CI
```

## Quick Start

```bash
git clone https://github.com/axisvela/harmovela-open.git
cd harmovela-open
node scripts/validate-registry.mjs
```

Then browse:

- [Examples](examples/README.md)
- [Ecosystem](ecosystem/README.md)
- [Repository documentation](docs/README.md)

## Scope

| In scope | Out of scope |
|---|---|
| Runnable examples built on Harmovela | Protocol specification changes |
| SDK, runtime, transport, and adapter catalog entries | JSON Schema and conformance fixture changes |
| Integration guides and best practices | Reference implementation changes |
| Community project discovery | Release binaries for the core runtime |

Protocol, schema, conformance, and reference implementation changes belong in the [protocol repository](https://github.com/axisvela/harmovela).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

- **Examples:** add a directory under `examples/<slug>/` with a `README.md`, a runnable entry point, and pinned dependencies.
- **Ecosystem:** add an entry to [`ecosystem/registry.json`](ecosystem/registry.json) and make sure `node scripts/validate-registry.mjs` passes.

All contributions are accepted under the [Apache License 2.0](LICENSE).

## License

The Harmovela Open repository is licensed under the [Apache License 2.0](LICENSE).
