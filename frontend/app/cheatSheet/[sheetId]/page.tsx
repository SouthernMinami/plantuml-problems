import { Sheet } from "@/app/types/types"

type Props = {
    sheet: Sheet
}

export const SheetContent = ({ sheet }: Props) => {
    const descriptions = sheet.descriptions
    const sampleCodes = sheet.sampleCodes
    const sampleImages = sheet.sampleImages

    return (
        <div className="tab-content text-left px-2 py-6 border-b border-gray">
            <h1 className="text-2xl">{sheet.name}</h1>
            <p>{sheet.summary}</p>
            <div className="syntax-descriptions px-2 py-6">
                {descriptions.map((description) => {
                    const id = description.id
                    return (
                        <div key={id} className="space-y-2">
                            <div className="description">
                                <h2 className="text-xl">{description.title}</h2>
                                <pre className="px-4">{description.content}</pre>
                            </div>
                            <div className="sample flex ">
                                <pre className="border bg-gray-100">{sampleCodes.find(sampleCode => sampleCode.id === id)?.code}</pre>
                                <img src={sampleImages.find(sampleImage => sampleImage.id === id)?.url} className="border" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}