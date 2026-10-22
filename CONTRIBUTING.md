# Contributing to Harmovela Open

Thank you for contributing to Harmovela Open.

This repository is the examples and ecosystem hub for the [Harmovela Protocol](https://github.com/axisvela/harmovela). Protocol specifications, schemas, conformance fixtures, and reference implementations live in the protocol repository.

## Ways to Contribute

- **Add an example** — a runnable integration under `examples/`.
- **Add an ecosystem entry** — an SDK, runtime, transport, adapter, tool, or community project in `ecosystem/registry.json`.
- **Improve documentation** — fix errors, clarify guides, or add integration notes.
- **Report a bug** — open an issue using the bug report template.

## Before You Start

1. Read [`README.md`](README.md) and the [protocol documentation](https://github.com/axisvela/harmovela).
2. Check existing issues and pull requests to avoid duplicate work.
3. For protocol, schema, or reference implementation changes, open an issue in the [protocol repository](https://github.com/axisvela/harmovela) instead.
4. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Adding an Example

1. Create `examples/<slug>/` using lowercase kebab-case.
2. Add a `README.md` that covers the scenario, prerequisites, run instructions, expected output, and relevant protocol dimensions.
3. Keep the example self-contained and runnable from its own directory.
4. Pin dependency versions and avoid committing generated artifacts, credentials, or local environment files.
5. Link the example from [`examples/README.md`](examples/README.md).

See [Authoring Examples](docs/authoring-examples.md) for the full checklist.

## Adding an Ecosystem Entry

1. Add an object to the `entries` array in [`ecosystem/registry.json`](ecosystem/registry.json).
2. Fill in every required field: `name`, `type`, `description`, `url`, `license`, `maintainer`, and `status`.
3. Use a unique `name`.
4. Run the validator:

```bash
node scripts/validate-registry.mjs
```

See [Ecosystem Registry](docs/ecosystem-registry.md) for field definitions and status values.

## Pull Requests

- Keep each pull request focused on one example, one registry entry, or one documentation change.
- Describe what the change does and how it was verified.
- Include the commands you ran and their results.
- Make sure CI passes before requesting review.
- By submitting a pull request, you agree that your contribution is licensed under the [Apache License 2.0](LICENSE).

## Local Validation

```bash
node scripts/validate-registry.mjs
```

If you add tooling that needs dependencies, document the setup in the example or guide that uses it.

## License

This repository is licensed under the [Apache License 2.0](LICENSE). All contributions are accepted under the same license.
