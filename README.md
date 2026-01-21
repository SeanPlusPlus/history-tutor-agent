# history-tutor-agent

A deliberately small TypeScript project for building a **history tutor CLI** from first principles.

The goal is not to ship a feature-rich agent. The goal is to **develop a correct mental model** of the LangChain ecosystem by building something you can read, understand, and explain end-to-end.

This repo progresses intentionally in this order:

1. **LangChain** — invoke an LLM behind a clean abstraction
2. **LangGraph** — express multi-step behavior as an explicit state machine
3. **LangSmith** — observe and debug real execution

If the code ever stops being easy to reason about, it’s doing the wrong thing.

---

## Philosophy

This project treats LLMs as _components_, not magic.

- State is explicit and validated
- Control flow is declarative, not loop-based
- Model outputs are constrained with schemas
- Failure modes are visible, not implicit

The result is a small but real system that behaves like software, not prompt glue.

---

## LangChain (invocation + structure)

LangChain is used as a **thin abstraction over LLM invocation**.

It standardizes:

- how models are called
- how messages are passed
- how providers are swapped

It does **not** control semantics.

To enforce output shape, LangChain is paired with **Zod** using structured output. Each model call must return data that conforms to an explicit schema or fail loudly.

This establishes a clean contract:

- LangChain executes the call
- Zod enforces structure
- Semantics are handled via prompts and evaluation

---

## LangGraph (explicit control flow)

As soon as the tutor requires more than one model call (for example: _think → answer_), coordination becomes the core problem.

LangGraph solves this by treating the system as a **typed state machine**.

- State is defined using a Zod schema
- Nodes receive state and return partial state updates
- Edges define the only legal execution paths
- Termination is structural, not heuristic

There is no long-running `while` loop. Iteration happens by **walking the graph**, not by spinning until a condition is met.

If repetition is desired, a loop is drawn explicitly. If not, it cannot happen.

This eliminates an entire class of runaway-agent bugs.

---

## LangSmith (observability + debugging)

Once behavior exists, **observability becomes the hard problem**.

LangSmith is used to trace and inspect actual executions of the tutor graph.

It provides:

- end-to-end traces for each run
- per-node latency and token usage
- visibility into intermediate state
- a concrete view of how the graph actually executed

Importantly, LangSmith shows **execution**, not abstract graph structure.

Nodes appear as sequential spans (siblings), reflecting real runtime behavior, while the graph itself defines which transitions were allowed.

This makes it possible to:

- verify that the graph terminates correctly
- see exactly which model calls happened
- debug unexpected behavior without guessing

LangSmith turns agent behavior from something you _hope_ is correct into something you can _prove_ is happening.

---

## Environment variables

This project requires an OpenAI API key.

Create a `.env` file at the project root:

```env
OPENAI_API_KEY=sk-...
```

Never commit this file. Bun loads `.env` automatically.

---

## Prerequisites

This project uses [Bun](https://bun.sh) as its runtime and package manager.

Install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

---

## Installation

```bash
bun install
```

---

## Running the tutor

To run the CLI:

```bash
bun run dev
```

---

## Linting and formatting

Check linting:

```bash
bun run lint
```

Fix linting and formatting:

```bash
bun run fix
```

---

## Verifying OpenAI access

To confirm that your API key is present and valid:

```bash
bun run check:openai
```

This script checks that:

- `OPENAI_API_KEY` is set
- the key can successfully hit the OpenAI API

---

## Mental model (one-liner)

> LangChain standardizes _how_ we talk to models.
> Zod defines _what_ we accept back.
> LangGraph defines _when_ and _in what order_ things are allowed to happen.
> LangSmith shows _what actually happened_.

---

## Status

This repo is intentionally small and evolving.

Each new concept is added only when it becomes necessary.
