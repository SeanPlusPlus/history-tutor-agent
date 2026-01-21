import { z } from 'zod'

export const TutorStateSchema = z.object({
  question: z.string(),
  reasoning: z.string().optional(),
  answer: z.string().optional(),
})

export type TutorState = z.infer<typeof TutorStateSchema>
