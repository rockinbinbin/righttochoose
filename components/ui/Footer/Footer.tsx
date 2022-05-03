import { useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowRightIcon, CogIcon, PencilAltIcon, UserAddIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { makeStyles } from '@material-ui/core/styles'
import Logo from 'components/svgs/logo'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer style={{width: '100%', padding: '2rem', flexWrap: 'nowrap'}} className="w-full flex flex-col md:flex-row">
      <div className="flex flex-row mb-10 w-full md:w-1/2 md:justify-center md-align-end md:mb-0">
        <Grid item container direction='column' justifyContent='flex-end' alignItems='flex-start' style={{width: 'fit-content'}}>
          <a
            href='/'
            className={s.link}
          >
            <Typography variant='caption'>
              <u>Home</u>
            </Typography>
            </a>
            <a
              href='/about'
              target='_blank'
              rel='noopener noreferrer'
              className={s.link}
            >
            <Typography variant='caption'>
              <u>About</u>
            </Typography>
          </a>
          <a
            href='/team'
            target='_blank'
            rel='noopener noreferrer'
            className={s.link}
          >
          <Typography variant='caption'>
            <u>Team</u>
          </Typography>
        </a>
        </Grid>
        <Grid item container direction='column' justifyContent='flex-end' alignItems='flex-start' style={{width: 'fit-content'}} className="ml-4 md:ml-10">
        <a
          href='/mission'
          target='_blank'
          rel='noopener noreferrer'
          className={s.link}
        >
          <Typography variant='caption'>
            <u>Mission</u>
          </Typography>
        </a>
        </Grid>
      </div>
      <Grid item container direction='column' justifyContent='flex-end' alignItems='flex-start' className="w-full md:w-1/2">
        <Logo />
        <Typography variant='caption' style={{marginTop: '1.5rem', maxWidth: '25rem', marginBottom: '1.5rem'}}>
          Right 2 Choose gives you information for abortion access closest to you.
        </Typography>
      </Grid>
    </footer>
  )
}
export default Footer
