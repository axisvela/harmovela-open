# Authoring Examples

Examples are the primary product of this repository. A good example is small, runnable, self-contained, and explicit about which Harmovela dimensions it demonstrates.

## Directory Layout

```text
examples/<slug>/
├── README.md          Required. Scenario, prerequisites, run steps, expected output.
├── <entrypoint>       Required. The file a reader runs first.
├── <supporting files> Optional. Source, config, fixtures, and package manifests.
└── .env.example       Optional. Document required variables; never commit real secrets.
```

## README Requirements

Every example README must include:

1. **Scenario** — the problem the example solves in one or two sentences.
2. **Dimensions** — the Harmovela dimensions involved (Event, Task, State, Context/Memory, Delegation, Recovery, Governance).
3. **Prerequisites** — runtime version, package manager, and any external services.
4. **Setup** — commands to install dependencies or start required services.
5. **Run** — the exact command to execute the example.
6. **Expected output** — what the reader should see, with a short sample.
7. **Cleanup** — how to stop services or remove generated data, when applicable.
8. **Protocol references** — links to the relevant specification sections.

## Guidelines

- Keep the example focused on one scenario. Split unrelated concerns into separate examples.
- Pin dependency versions in lockfiles or manifests.
- Prefer local, offline-friendly dependencies. If a broker or database is required, provide a container command or a clear setup section.
- Do not commit credentials, tokens, private keys, generated databases, or local environment files.
- Include a license notice only when the example contains code from another project.
- Link the example from [`examples/README.md`](../examples/README.md).
- Avoid duplicating reference implementation code; import published packages where possible.

## Naming

- Directory: lowercase kebab-case, for example `task-delegation`.
- Multi-language examples: use the same directory and standard file extensions, for example `main.ts`, `main.py`, `main.go`.
- If languages need separate dependency manifests, keep them in the same directory unless that becomes unreadable.

## Review Checklist

- [ ] The example runs from a clean checkout using the documented commands.
- [ ] The README covers scenario, dimensions, prerequisites, run steps, and expected output.
- [ ] Dependencies are pinned.
- [ ] No secrets, generated artifacts, or machine-specific paths are committed.
- [ ] The example is linked from `examples/README.md`.
- [ ] `node scripts/validate-registry.mjs` passes.
