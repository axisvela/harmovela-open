# Harmovela Open

> [English](README.md) | [协议仓库](https://github.com/axisvela/harmovela) | [规范站点](https://axisrobo.github.io/harmovela/)

**Harmovela Open** 是 [Harmovela 协议](https://github.com/axisvela/harmovela) 的公开示例与生态仓库。Harmovela 是一个面向自主系统的开放协调协议。

协议仓库是规范、JSON Schema、一致性测试夹具和参考实现的权威来源。本仓库聚焦于：

- **示例（Examples）** — 可运行的集成示例，展示各协调维度如何在真实系统中协同工作。
- **生态（Ecosystem）** — 围绕 Harmovela 构建的 SDK、运行时、传输层、适配器、工具和社区项目目录。
- **指南（Guides）** — 编写、验证和提交示例与生态条目的实用指南。

## Harmovela 是什么？

Harmovela 定义了智能体、工具、记忆系统、上下文提供者、环境观察者和多智能体运行时如何围绕七个相互依赖的维度进行协调：

| 维度 | Harmovela 定义的内容 |
|---|---|
| 事件（Event） | 发生了什么 — 发布、订阅、关联、重放、确认。 |
| 任务（Task） | 正在执行什么 — 从提交到完成、失败或取消的生命周期。 |
| 状态（State） | 当前什么是真的 — 版本化状态、新鲜度窗口、失效、变更传播。 |
| 上下文 / 记忆（Context / Memory） | 什么在影响决策 — 更新、失效、来源、检索就绪度。 |
| 委托（Delegation） | 谁做什么 — 分配、接受、移交、升级、取消传播。 |
| 恢复（Recovery） | 出错时怎么办 — 幂等、重放、检查点、中断、补偿。 |
| 治理（Governance） | 谁能做什么 — 身份、授权、审计、租户隔离、策略集成。 |

Harmovela 与 MCP 互补。MCP 仍然是同步能力调用层；Harmovela 提供异步协调层 — 事件流、任务生命周期、状态管理、上下文感知、委托、恢复和治理。

## 仓库结构

```text
harmovela-open/
├── examples/        按场景组织的可运行示例
├── ecosystem/       生态注册表与项目目录
├── docs/            示例编写、注册表与贡献指南
├── scripts/         仓库校验工具
└── .github/         Issue/PR 模板与 CI
```

## 快速开始

```bash
git clone https://github.com/axisvela/harmovela-open.git
cd harmovela-open
node scripts/validate-registry.mjs
```

然后浏览：

- [示例](examples/README.md)
- [生态](ecosystem/README.md)
- [仓库文档](docs/README.md)

## 范围

| 属于本仓库 | 不属于本仓库 |
|---|---|
| 基于 Harmovela 的可运行示例 | 协议规范变更 |
| SDK、运行时、传输层和适配器目录条目 | JSON Schema 与一致性夹具变更 |
| 集成指南与最佳实践 | 参考实现变更 |
| 社区项目发现 | 核心运行时发布二进制 |

协议、Schema、一致性测试和参考实现相关的变更请提交到 [协议仓库](https://github.com/axisvela/harmovela)。

## 参与贡献

提交 Pull Request 前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。

- **示例：** 在 `examples/<slug>/` 下添加目录，包含 `README.md`、可运行入口和锁定版本的依赖。
- **生态：** 在 [`ecosystem/registry.json`](ecosystem/registry.json) 中添加条目，并确保 `node scripts/validate-registry.mjs` 通过。

所有贡献均以 [Apache License 2.0](LICENSE) 接受。

## 许可证

Harmovela Open 仓库采用 [Apache License 2.0](LICENSE) 许可。
