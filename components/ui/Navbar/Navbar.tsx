import Link from 'next/link'
import s from './Navbar.module.css'

import Logo from 'components/svgs/logo'
import { useRouter } from 'next/router'
import Select from 'components/select'
import Button from "@mui/material/Button"

const Navbar = () => {
  const router = useRouter()

  const showState = (state) => {
    router.push({
      pathname: `/state/${state}`
    })
  }

  return (
    <nav className={s.root} style={{backgroundColor: 'white', zIndex: 999999999999}}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <Link href="/">
              <a style={{fontFamily: 'Urbanist', marginLeft: '2rem', fontSize: '22px'}} className="hidden md:block">
                Right 2 Choose
              </a>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
            </nav>
          </div>

          <div className="flex justify-center align-center mx-auto w-full space-x-2 ml-6 hidden lg:block">
            <Select showState={showState} />
          </div>

          <div className="flex flex-1 justify-end space-x-2 md:space-x-8">
            <Link href="/">
              <a style={{fontFamily: 'Inter', marginLeft: '2rem', fontSize: '15px'}}>
                About
              </a>
            </Link>
            <Link href="/">
              <a style={{fontFamily: 'Inter', marginLeft: '2rem', fontSize: '15px'}}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
