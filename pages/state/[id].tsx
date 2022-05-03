import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowRightIcon, CogIcon, PencilAltIcon, UserAddIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import styles from 'styles/Home.module.css'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Button from "@mui/material/Button"

export default function State() {
  const router = useRouter()

  const showState = (state) => {
    router.push({
      pathname: `/state/${state}`
    })
  }

  return (
    <Grid item container direction='column' justifyContent='flex-start' alignItems='center' className="flex flex-wrap overflow-scroll px-5 py-2 w-full">
      <Typography variant='h3' style={{color: 'black', fontSize: '2rem', margin: '2rem'}} className="mb-8 md:mb-0">
        <b>{router.query['id']}</b>
      </Typography>
    </Grid>
  )
}
