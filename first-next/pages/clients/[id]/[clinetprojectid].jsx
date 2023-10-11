import React from 'react'
import { useRouter } from 'next/router'

function SelectedClientPages() {
    const router = useRouter();

    console.log(router.query)

    return (
        <div>SelectedClientPages</div>
    )
}

export default SelectedClientPages