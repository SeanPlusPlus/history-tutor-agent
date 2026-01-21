# history-tutor-agent

A very small TypeScript project that builds a simple history tutor agent from first principles.

The goal is not to build a smart agent, but a **clear one** — something you can read top-to-bottom and understand how a basic “question → think → answer” flow works using modern LLM tooling.

This project intentionally keeps:
- one agent
- one graph
- minimal prompts
- explicit guardrails
- no magic abstractions

Over time, this repo may evolve, but every change should preserve readability and explainability.

If it stops being easy to understand, it’s doing the wrong thing.
