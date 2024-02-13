
import styles from './DownloadButton.module.css'

type Props = {
    code: string,
    extension: string,
}

export const DownloadButton = ({ code, extension }: Props) => {

    const downloadFile = (extension: string) => () => {
        // Add code here to handle the download
        fetch('http://localhost:8003/api.php', {
            method: 'POST',
            body: JSON.stringify({
                "code": code,
                "extension": extension
            }),
            headers: {
                'Content-Type': 'text/plain'
            },
        })
            .then(response => response.text())
            .then(data => {
                const blob = new Blob([data], { type: `image/${extension}` })
                const a = document.createElement('a')
                a.href = URL.createObjectURL(blob)
                a.download = `uml.${extension}`
                a.click()
            })
            .catch(error => console.error(error))
    }
    return (
        <a href="#" download>
            <button className={`${styles['download-btn']}`} onClick={downloadFile(extension)}> Download File </button>
        </a>
    )
}

// export const DownloadSvgButton = () => {
//     return (
//         <DownloadButton text="SVG" handleClick={downloadImage(".svg")} />
//     )
// }

// export const DownloadPngButton = () => {
//     return (
//         <DownloadButton text="PNG" handleClick={downloadImage(".png")} />
//     )
// }

// export const DownloadPdfButton = () => {
//     return (
//         <DownloadButton text="PDF" handleClick={downloadImage(".pdf")} />
//     )
// }

// export const DownloadTxtButton = () => {
//     return (
//         <DownloadButton text="TXT" handleClick={downloadImage(".txt")} />
//     )
// }

