import Image from "next/image"


export const Preview = () => {
    return (
        <div className="preview-container">
            <div id="preview" className="preview">
                {/* <img id="preview-img" src="" alt="preview" /> */}
                <Image id="preview-img" src="" alt="preview" className="preview-img" />
            </div>
        </div>
    )
}