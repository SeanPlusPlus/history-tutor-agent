# LangGraph

LangGraph is a state machine for LLM calls.

---

While LangChain is about invoking models, LangGraph is about orchestrating steps.

LangGraph doesn’t really care what your nodes do. They could call an LLM, hit a database, read a file, or just transform state. What LangGraph is obsessed with is:

- State
- Transitions
- Control flow

You’re basically building a tiny, typed state machine.

Or put differently: _LangGraph is Redux for programs where the reducers happen to call LLMs._
