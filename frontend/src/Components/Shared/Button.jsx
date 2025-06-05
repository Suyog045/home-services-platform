import React from 'react'
import {Button} from "flowbite-react/components/Button"
export const LoginButton = ({label}) => {
  return (
    <>
    <Button className='bg-secondary rounded-4xl hover:bg-secondary cursor-pointer w-24'>
        {label}
    </Button>
    </>
  )
}
