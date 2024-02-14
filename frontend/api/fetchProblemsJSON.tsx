import { Problem } from '@/app/types/types'
import fs from 'fs'
import path from 'path'

export const fetchProblemsJSON = (): Problem[] => {
  console.log(process.cwd())
  const filePath = path.join(process.cwd(), 'public', 'problems.json')
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const problems: Problem[] = JSON.parse(fileData)
  return problems
}