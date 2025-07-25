import { createTheme, Datepicker } from 'flowbite-react'
import React from 'react'

const customTheme = createTheme(
    {
  "root": {
    "base": "relative"
  },
  "popup": {
    "root": {
      "base": "absolute top-10 z-50 block pt-2",
      "inline": "relative top-0 z-auto",
      "inner": "inline-block rounded-lg bg-white p-4 shadow-lg"
    },
    "header": {
      "base": "",
      "title": "px-2 py-3 text-center font-semibold text-gray-900",
      "selectors": {
        "base": "mb-2 flex justify-between",
        "button": {
          "base": "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black",
          "prev": "cursor-pointer",
          "next": "cursor-pointer",
          "view": ""
        }
      }
    },
    "view": {
      "base": "p-1"
    },
    "footer": {
      "base": "hidden",
      "button": {
        "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium",
        "today": "bg-secondary cursor-pointer text-white hover:bg-secondary-hover",
        "clear": "border border-gray-300 bg-white text-gray-900 cursor-pointer"
      }
    }
  },
  "views": {
    "days": {
      "header": {
        "base": "mb-1 grid grid-cols-7",
        "title": "h-6 text-center text-sm font-medium leading-6 text-gray-500"
      },
      "items": {
        "base": "grid w-64 grid-cols-7",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900",
          "selected": "bg-secondary text-white hover:bg-secondary-hover",
          "disabled": "text-gray-500"
        }
      }
    },
    "months": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100",
          "selected": "bg-secondary text-white hover:bg-secondary-hover",
          "disabled": "text-gray-500"
        }
      }
    },
    "years": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 ",
          "selected": "bg-secondary text-white hover:bg-secondary-hover",
          "disabled": "text-gray-500"
        }
      }
    },
    "decades": {
      "items": {
        "base": "grid w-64 grid-cols-4",
        "item": {
          "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          "selected": "bg-secondary text-white hover:bg-secondary-hover",
          "disabled": "text-gray-500"
        }
      }
    }
  }
}
)
const DatePicker = () => {
  return (
    <Datepicker theme={customTheme} inline/>
  )
}

export default DatePicker