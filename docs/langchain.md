# LangChain

LangChain gives us a consistent abstraction for invoking LLMs across providers. Consistent output shapes are achieved by explicitly constraining model output using structured schemas, which LangChain helps enforce.

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
