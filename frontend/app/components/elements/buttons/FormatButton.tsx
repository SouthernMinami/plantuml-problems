
import styles from './DownloadButton.module.css'

type Props = {
    code: string,
    extension: string,
    setExtension: (value: string) => void
}

export const FormatButton = ({ code, extension, setExtension }: Props) => {

    const changeFormat = async (extension: string) => {
        setExtension(extension)

        const res = await fetch('http://localhost:8003/api.php', {
            method: 'POST',
            body: JSON.stringify({
                "code": code,
                "extension": extension
            }),
            headers: {
                'Content-Type': 'text/plain'
            },
        })

        const data = await res.text()
        const previewImage = document.getElementById('preview-img') as HTMLImageElement
        previewImage.src = data

        if (extension === "txt") {
            const ascii = await getAscii(data)
            console.log(ascii)
            previewImage.innerHTML = `<pre>${ascii}</pre>`
        }
        // .then(response => response.text())
        // .then(data => {
        //     const previewImage = document.getElementById('preview-img') as HTMLImageElement
        //     previewImage.src = data

        //     const preview = document.getElementById('preview') as HTMLDivElement

        //     if (extension === "txt") {
        //         // TODO: dataをasciiに変換    
        //         const ascii = getAscii(data)
        //         console.log(ascii)
        //         preview.innerHTML = `<pre>${ascii}</pre>`
        //     }
        // })
        // .catch(error => console.error(error))
    }

    const getAscii = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.text();
            return data;
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <a href="#" download>
            <button className={`${styles['download-btn']}`} onClick={() => changeFormat(extension)}> {extension} </button>
        </a>
    )
}