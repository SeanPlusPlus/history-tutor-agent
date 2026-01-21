# LangChain

LangChain abstracts LLM invocation across providers. When paired with a schema (e.g. Zod), it enforces the structural shape of model outputs, but it does not control or guarantee the semantics of the response.

It provides:

- a common invocation interface (invoke, stream, etc.)
- a common message abstraction (HumanMessage, AIMessage, ToolMessage)
- provider adapters (OpenAI, Anthropic, Bedrock, etc.)
- a way to attach output constraints (structured output, tools, JSON mode)

It guarantees that:

> “Calling a model looks the same regardless of provider.”

It does not guarantee that:

> “The model’s output will look the same.”

The model still decides what comes back.
