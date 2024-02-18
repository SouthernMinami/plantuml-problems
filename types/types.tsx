export type Problem = {
    id: number,
    title: string,
    difficulty: string,
    category: string,
    answer: string,
}

export type Sheet = {
    id: number,
    name: string,
    summary: string,
    descriptions: string[],
    sampleCodes: string[],
    sampleImages: string[],
}