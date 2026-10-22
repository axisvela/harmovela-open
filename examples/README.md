# Examples

Runnable examples that show how Harmovela coordinates autonomous systems. Each example lives in its own directory with a README, a runnable entry point, and pinned dependencies.

This index grows as examples are contributed. See [Authoring Examples](../docs/authoring-examples.md) for the required structure.

## Planned Categories

| Category | Focus | Harmovela dimensions |
|---|---|---|
| `quickstart/` | Smallest end-to-end runtime: create a service, subscribe, publish, receive. | Event |
| `task-lifecycle/` | Submit, accept, progress, complete, fail, and cancel tasks. | Task, Recovery |
| `mcp-bridge/` | Carry MCP tool calls over Harmovela task and event streams. | Task, Event, Tool |
| `memory-context/` | Publish context and memory updates with provenance and invalidation. | Context / Memory, State |
| `delegation/` | Assign work, hand off, escalate, and propagate cancellation. | Delegation, Recovery |
| `governance/` | Apply identity, authorization, audit, and tenant isolation. | Governance |
| `transports/` | Connect over WebSocket, SSE, gRPC, NATS, Kafka, and Redis Streams. | Event, Transport |
| `recovery/` | Demonstrate idempotency, replay, checkpoints, and compensation. | Recovery |

## Adding an Example

1. Create `examples/<slug>/`.
2. Add a `README.md` covering scenario, dimensions, prerequisites, run steps, and expected output.
3. Add the runnable entry point and pinned dependencies.
4. Link the example in the category table above.

## Prerequisites

Each example documents its own prerequisites. Common requirements are:

- Node.js 20 or later
- Python 3.11 or later
- Go 1.25 or later
- Java 21 or later

Use the runtime required by the example you are running; you do not need all four.

## Related

- [Harmovela Protocol examples](https://github.com/axisvela/harmovela/tree/main/examples)
- [Protocol scenarios](https://github.com/axisvela/harmovela/blob/main/design/protocol/scenarios.md)
- [Ecosystem registry](../ecosystem/README.md)
