export type Problem = {
    id: number,
    title: string,
    difficulty: string,
    category: string,
    uml: string,
    answer: string,
}

export type Sheet = {
    id: number,
    name: string,
    summary: string,
    descriptions: SheetDescription[],
    sampleCodes: SheetSampleCode[],
    sampleImages: SheetSampleImageUrl[],
}

export type SheetDescription = {
    id: number,
    title: string,
    content: string,
}

export type SheetSampleCode = {
    id: number,
    code: string,
}

export type SheetSampleImageUrl = {
    id: number,
    url: string,
}
