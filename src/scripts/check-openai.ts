import 'dotenv/config'

const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  console.error('❌ OPENAI_API_KEY is not set')
  process.exit(1)
}

try {
  const response = await fetch('https://api.openai.com/v1/models', {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`API request failed: ${response.status} ${text}`)
  }

  console.log('✅ OPENAI_API_KEY is set and valid')
} catch (err) {
  console.error('❌ Failed to validate OPENAI_API_KEY')
  console.error(err)
  process.exit(1)
}
