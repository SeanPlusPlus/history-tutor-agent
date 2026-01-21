import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'

export async function answerQuestion(question: string): Promise<string> {
  const model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0.2,
  })

  const response = await model.invoke([new HumanMessage(question)])

  const { content } = response

  if (typeof content === 'string') {
    return content
  }

  if (Array.isArray(content)) {
    return content
      .map((block) => {
        if (typeof block === 'string') {
          return block
        }

        if (block.type === 'text') {
          return block.text
        }

        return ''
      })
      .join('')
  }

  throw new Error('Unexpected response content format')
}
