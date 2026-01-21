# history-tutor-agent

A very small TypeScript project that builds a simple **history tutor CLI** from first principles.

The goal is to **nail the mental model** of the LangChain ecosystem by building something you can read top‑to‑bottom and fully understand.

This repo intentionally progresses in this order:

1. **LangChain first** — make a single, well‑typed model call
2. **LangGraph second** — introduce control flow only when it becomes necessary
3. **LangSmith third** — observe and debug once behavior exists

This project intentionally keeps:

- one tutor
- one question at a time
- minimal prompts
- explicit schemas and guardrails
- no magic abstractions

Over time, the repo may evolve, but every change should preserve readability and explainability.

If it stops being easy to understand, it’s doing the wrong thing.

---

## LangChain (first principles)

The first milestone in this repo is a **single LangChain call** with a hard contract.

We use LangChain only as a thin wrapper around an LLM call — no agents, no graphs, no loops.

Model output is constrained using a Zod schema so the function returns a **typed object**, not free‑form text. If the model fails to comply with the schema, the call fails loudly.

This establishes a clear mental model:

- LangChain does **not** make decisions
- LangChain does **not** manage control flow
- LangChain simply executes a model call and enforces structure

Only after this step feels obvious do we introduce LangGraph.

---

## Environment variables

This project uses environment variables for secrets (for example, API keys).

1. Copy the example file:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your real values.

3. Environment variables are loaded automatically using `dotenv`.

The `.env` file is ignored by git and should never be committed.

---

## Running the project

Install dependencies:

```bash
npm install
```

Run the app in development mode (TypeScript, no build step):

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Run the built output:

```bash
npm start
```

---

## Linting and formatting

Check linting:

```bash
npm run lint
```

Fix lint issues automatically where possible:

```bash
npm run lint:fix
```

Check formatting:

```bash
npm run format
```

Format all files:

```bash
npm run format:fix
```

Run both lint and formatting fixes in one command:

```bash
npm run fix
```

---

## Testing

Build and run the simple test:

```bash
npm run verify
```

This command compiles the TypeScript code and runs a minimal Node-based test. It is intentionally simple and does not use a test framework.

---

## OpenAI API key verification

To verify that your OpenAI API key is present and valid, run:

```bash
npm run check:openai
```

This command performs two checks:

- Confirms that the `OPENAI_API_KEY` environment variable is set
- Makes a lightweight request to the OpenAI API to verify the key is valid

This script is intended for local development and debugging. It does not run as part of the main application flow.
