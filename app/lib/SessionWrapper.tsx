"use client"

import {SessionProvider} from "next-auth/react"


const SessionWapper =({children} : {children: React.ReactNode})=>{
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionWapper