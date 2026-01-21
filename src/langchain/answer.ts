import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { z } from 'zod'

const AnswerSchema = z.object({
  answer: z.string(),
})

export async function answer(
  question: string,
  reasoning: string
): Promise<string> {
  const model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0.2,
  }).withStructuredOutput(AnswerSchema)

  const result = await model.invoke([
    new HumanMessage(
      `Use the reasoning below to answer the question clearly and concisely.\n\nReasoning:\n${reasoning}\n\nQuestion:\n${question}`
    ),
  ])

  return result.answer
}
