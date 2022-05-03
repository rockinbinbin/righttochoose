import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl'
    ],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48
      },
      '@media (min-width:600px)': {
        minHeight: 64
      }
    }
  },
  overrides: {
    PrivateSwitchBase: {
      input: {
        zIndex: '0'
      }
    },
    MuiCheckbox: {
      root: {
        color: '#9C9AA6',
        cursor: 'pointer'
      }
    },
    MuiExpansionPanel: {
      root: {
        '&:hover': {
          // backgroundColor: '#F1EEFF',
        }
      }
    },
    MuiChip: {
      deleteIcon: {
        color: 'rgba(255, 255, 255, 0.26)'
      },
      root: {
        backgroundColor: '#A72693'
      },
      label: {
        maxWidth: '11.5rem'
      }
    },
    MuiFormLabel: {
      root: {
        color: '#A72693'
      }
    },
    MuiAvatar: {
      root: {
        color: 'white',
        zIndex: '-1'
      },
      colorDefault: {
        backgroundColor: '#5f5c68'
      }
    },
    MuiStepConnector: {
      lineVertical: {
        borderLeftStyle: 'none'
      }
    },
    MuiStepIcon: {
      root: {
        color: '#A593FF',
        opacity: '0.8',
        '&$active': {
          color: '#7B5EFF'
        },
        '&$completed': {
          color: '#7B5EFF'
        }
      }
    },
    MuiFormGroup: {
      root: {
        display: 'flex',
        flexDirection: 'row'
      }
    },
    MuiTab: {
      wrapper: {
        alignItems: 'flex-start',
        textTransform: 'capitalize'
      },
      root: {
        padding: '0'
      }
    },
    MuiBox: {
      root: {
        padding: '0rem'
      }
    },
    MuiTabs: {
      root: {
        width: '200px'
      }
    },
    MuiAutocomplete: {
      paper: {
        background: '#FFF',
        filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.25))',
        color: 'black'
        // maxHeight: '10rem'
      },
      root: {
        background: '#FFF'
      },
      listbox: {
        background: '#FFF'
      }
    },
    MuiMenu: {
      list: {
        background: '#FFF'
      }
    },
    MuiDivider: {
      root: {
        borderColor: 'rgb(226, 223, 240)',
        width: '100%'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgb(255, 255, 255, 0)'
      }
    },
    MuiStepLabel: {
      root: {
        display: 'flex',
        alignItems: 'flex-start'
      }
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none'
      }
    }
  },
  palette: {
    common: {
      black: '#0E0922',
      white: '#F1F1F1'
    },
    type: 'light',
    primary: {
      main: '#FFFFFF', // white
      light: '#C864B8' // pink??
    },
    secondary: {
      main: '#9C9AA6', // medium gray
      light: '#8970fb' // purple??
    },
    error: {
      main: '#EB5757'
    },
    warning: {
      main: '#F2994A'
    },
    info: {
      main: '#F2C94C'
    },
    success: {
      main: '#7B5EFF'
    },
    grey: {
      50: '#f1f1f1',
      100: '#E2E0E8',
      200: '#9C99A6',
      300: '#928F9C',
      400: '#83808C',
      500: '#74717D',
      600: '#5F5C68',
      700: '#5B5865',
      800: '#54505F',
      900: '#4D495A',
      A100: '#464254',
      A200: '#3D384D',
      A400: '#1E1540',
      A700: '#0E0922'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: '#000',
      secondary: 'gray',
      disabled: '#5F5C68',
      hint: '#9C9AA6',
      icon: '#F1F1F1'
    },
    background: {
      paper: '#FFF',
      default: '#FFF',
      level2: '#E2DFF0',
      level1: '#FFF'
    },
    action: {
      active: '#5F5C68',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    }
  },
  props: {},
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  nprogress: {
    color: '#000'
  }
})

export default theme
