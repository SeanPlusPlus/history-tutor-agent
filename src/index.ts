import 'dotenv/config'
import ora from 'ora'
import { answerQuestion } from './langchain/answerQuestion.js'

const question = 'Why did the Roman Empire fall?'

const spinner = ora('Thinking...').start()

try {
  const answer = await answerQuestion(question)

  spinner.succeed('Answer ready')

  console.log('\nQuestion:')
  console.log(question)

  console.log('\nAnswer:')
  console.log(answer)
} catch (err) {
  spinner.fail('Failed to get answer')
  console.error(err)
  process.exit(1)
}
