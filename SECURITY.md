# Security Policy

This document defines how security vulnerabilities in the Harmovela Open examples, ecosystem tooling, and documentation are reported, triaged, fixed, and disclosed.

## Reporting a Vulnerability

Report security vulnerabilities privately to the Axisrobo security team at **security@axisrobo.com**. Do **not** open a public issue for a security vulnerability.

Include in your report:

- A description of the vulnerability and its potential impact.
- Steps to reproduce or a proof of concept.
- Affected examples, tooling, or documentation versions.
- Any suggested mitigations.

For vulnerabilities in the protocol specification, JSON Schemas, conformance fixtures, or reference implementations, use the same private channel and note that the report concerns the [protocol repository](https://github.com/axisvela/harmovela).

## Response Timeline

| Phase | Target | Description |
|-------|--------|-------------|
| Acknowledge | 48 hours | Confirm receipt of the report and assign a tracker ID. |
| Triage | 5 business days | Assess severity, scope, and affected versions. |
| Fix development | Varies by severity | Develop and test a fix. Critical vulnerabilities prioritised. |
| Coordinated disclosure | Mutually agreed date | Publish fix, advisory, and CVE (if applicable). |

## Scope

In scope:

- Example applications and scripts in this repository.
- Ecosystem registry and validation tooling.
- Repository automation and CI configuration.
- Documentation that could cause unsafe integration guidance.

Out of scope:

- Vulnerabilities in third-party dependencies; report those upstream.
- Issues that require a modified local environment with no realistic attack path.
- Protocol specification issues that cannot be demonstrated in this repository.

## Supported Versions

During the 0.x pre-release phase, only the latest commit on the `main` branch is supported for security fixes.

## Related Documents

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Harmovela Protocol Security](https://github.com/axisvela/harmovela/blob/main/SECURITY.md)
