import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { z } from 'zod'

const ThinkSchema = z.object({
  reasoning: z.string(),
})

export async function think(question: string): Promise<string> {
  const model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0.2,
  }).withStructuredOutput(ThinkSchema)

  const result = await model.invoke([
    new HumanMessage(
      `Think step-by-step about how to answer this question, but do not provide the final answer.\n\nQuestion: ${question}`
    ),
  ])

  return result.reasoning
}
