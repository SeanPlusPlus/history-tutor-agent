import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { z } from 'zod'

const AnswerSchema = z.object({
  answer: z.string(),
})

export async function answerQuestion(question: string): Promise<string> {
  const model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0.2,
  }).withStructuredOutput(AnswerSchema)

  const response = await model.invoke([new HumanMessage(question)])

  return response.answer
}
