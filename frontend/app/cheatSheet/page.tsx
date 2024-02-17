'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { Sheet } from "@/app/types/types"
import { SheetContent } from "./[sheetId]/page"

const CheatSheet = () => {
    const [sheets, setSheets] = useState<Sheet[]>([])

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'sheets.json', true);
        xhr.onload = () => {
            if (xhr.status === 200) {
                setSheets(JSON.parse(xhr.responseText));
            } else {
                console.error('問題データの取得に失敗しました。');
            }
        };
        xhr.send();
    }, []);

    return (
        <>
            <div className="text-center py-2">
                <h1 className="text-2xl">チートシート</h1>
                <p>ここではUMLで作図する際の基本構文を確認出来ます。</p>
            </div>
            <div className="tab-container py-2">
                {sheets.map((sheet, index) => {
                    return (
                        <SheetContent sheet={sheet} key={index} />
                    )
                })}
            </div>
        </>
    )
}

export default CheatSheet