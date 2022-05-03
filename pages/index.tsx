import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Select from 'components/select'

export default function Home() {
  const router = useRouter()

  const showState = (state) => {
    router.push({
      pathname: `/state/${state}`
    })
  }

  return (
    <div className="flex flex-row mx-16 md:px-4 justify-center align-start xl:justify-start mt-5 mx-auto max-w-6xl px-6 h-screen flex-wrap-nowrap">
      <div className="flex-col justify-center align-center max-w-xs md:mr-10 md:max-w-max">
        <div style={{fontWeight: '400px'}} className="text-6xl text-center lg:text-left md:text-5xl xl:text-5xl md:mt-10 font-title tracking-tighter">
          Everyone Deserves the Right to Choose.
        </div>
        <div className="lg:hidden mt-10 m-auto w-full">
          <Select showState={showState} />
        </div>
        <div style={{fontSize: '22px'}} className="text-center lg:text-left mt-32 lg:mt-10">
          blah blah description goes here
        </div>
      </div>
    </div>
  )
}
