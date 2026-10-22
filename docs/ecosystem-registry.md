# Ecosystem Registry

The ecosystem registry is a machine-readable catalog of projects built around Harmovela. It lives in [`ecosystem/registry.json`](../ecosystem/registry.json).

## Format

```json
{
  "version": 1,
  "entries": [
    {
      "name": "harmovela-example-sdk",
      "type": "sdk",
      "description": "Short description of what the project provides.",
      "url": "https://github.com/example/harmovela-example-sdk",
      "language": "TypeScript",
      "license": "Apache-2.0",
      "maintainer": "example-org",
      "status": "community"
    }
  ]
}
```

## Fields

| Field | Required | Description |
|---|---|---|
| `name` | yes | Unique project name. Lowercase, hyphenated. |
| `type` | yes | One of `sdk`, `runtime`, `transport`, `adapter`, `tool`, `integration`, or `example`. |
| `description` | yes | One sentence describing the project. |
| `url` | yes | Canonical project URL, starting with `https://`. |
| `language` | no | Primary implementation language. |
| `license` | yes | SPDX license identifier, for example `Apache-2.0` or `MIT`. |
| `maintainer` | yes | GitHub user or organization responsible for the project. |
| `status` | yes | One of `official`, `community`, or `experimental`. |

## Status Values

| Status | Meaning |
|---|---|
| `official` | Maintained by the Harmovela project. |
| `community` | Maintained by a third party and suitable for general use. |
| `experimental` | Early-stage or unstable; use with caution. |

## Rules

- Names must be unique.
- Entries must link to a public, working URL.
- Descriptions must be factual and free of marketing claims.
- Experimental projects must use the `experimental` status.
- Removed projects should be deleted from the registry rather than left with a dead URL.
- Run `node scripts/validate-registry.mjs` before opening a pull request.

## Validation

The validator checks structure, required fields, allowed values, URL format, and duplicate names. It does not verify that a project is functional; reviewers should confirm that separately.
