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
