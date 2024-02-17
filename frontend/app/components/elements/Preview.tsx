export const Preview = () => {
    return (
        <div className="preview-container border border-lg">
            <div id="preview" className="preview">
                <img id="preview-img" src="" alt="preview" className="preview-img" />
            </div>
        </div>
    )
}

export const SamplePreview = () => {
    return (
        <div className="preview-container border border-lg">
            <div id="preview" className="preview">
                <h1 className="text-xl pb-5">見本図</h1>
                <img id="sample-img" src="" alt="sample" className="sample-img" />
            </div>
        </div>
    )
}