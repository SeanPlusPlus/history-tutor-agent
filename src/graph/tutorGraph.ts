import { StateGraph, START, END } from '@langchain/langgraph'
import { TutorStateSchema } from './state.js'
import { think } from '../langchain/think.js'
import { answer } from '../langchain/answer.js'

const NODES = {
  THINK: 'think',
  GENERATE_ANSWER: 'generateAnswer',
} as const

const graph = new StateGraph({
  state: TutorStateSchema,
})

graph.addNode(NODES.THINK, async (state) => {
  return {
    reasoning: await think(state.question),
  }
})

graph.addNode(NODES.GENERATE_ANSWER, async (state) => {
  if (!state.reasoning) {
    throw new Error('Missing reasoning')
  }

  return {
    answer: await answer(state.question, state.reasoning),
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
graph.addEdge(START, NODES.THINK as any)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
graph.addEdge(NODES.THINK as any, NODES.GENERATE_ANSWER as any)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
graph.addEdge(NODES.GENERATE_ANSWER as any, END)

export const tutorGraph = graph.compile()
