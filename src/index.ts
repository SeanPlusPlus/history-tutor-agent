import 'dotenv/config'
import ora from 'ora'
import { tutorGraph } from './graph/tutorGraph.js'

const question = 'Why did the Roman Empire fall?'

const spinner = ora('Thinking...').start()

const result = await tutorGraph.invoke(
  { question },
  { runName: 'history-tutor-cli' }
)
spinner.succeed('Answer ready')

console.log('\nAnswer:\n')
console.log(result.answer)
