import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowRightIcon, CogIcon, PencilAltIcon, UserAddIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Link from 'next/link'
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectDropdown from '@mui/material/Select';

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

export default function Select(props) {
  const { showState } = props
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [usState, setUSState] = useState('');

  const handleChange = (event) => {
    setUSState(event.target.value)
    showState(event.target.value)
  }

  let error = false

  if (loading) return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <CircularProgress variant='indeterminate' color='secondary' size='3rem'/>
    </Grid>
  )

  if (error) return <>{console.log(error)}</>

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">US State</InputLabel>
        <SelectDropdown
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={usState}
          label="State"
          onChange={handleChange}
        >
          {
            states.map(i => <MenuItem value={i}>{i}</MenuItem>)
          }
        </SelectDropdown>
      </FormControl>
    </Box>
  )
}
