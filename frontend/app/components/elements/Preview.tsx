import Image from "next/image"


export const Preview = () => {
    return (
        <div className="preview-container">
            <div id="preview" className="preview">
                <Image id="preview-img" src="" alt="preview" className="preview-img" />
            </div>
        </div>
    )
}

export const SamplePreview = () => {
    return (
        <div className="preview-container">
            <div id="preview" className="preview">
                <h1>見本</h1>
                <Image id="sample-img" src="" alt="sample" className="sample-img" />
            </div>
        </div>
    )
}