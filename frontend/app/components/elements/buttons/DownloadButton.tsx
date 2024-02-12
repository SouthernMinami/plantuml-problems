import styles from './DownloadButton.module.css'

type Props = {
    text: string
}

export const DownloadButton = ({ text }: Props) => {
    return (
        <button className={`${styles['download-btn']}`}> {text} </button>
    )
}

export const DownloadSvgButton = () => {
    return (
        <DownloadButton text="SVG" />
    )
}

export const DownloadPngButton = () => {
    return (
        <DownloadButton text="PNG" />
    )
}

export const DownloadPdfButton = () => {
    return (
        <DownloadButton text="PDF" />
    )
}

export const DownloadTxtButton = () => {
    return (
        <DownloadButton text="TXT" />
    )
}