import React from 'react'
import {Button} from "flowbite-react/components/Button"
export const LoginButton = ({label}) => {
  return (
    <>
    <Button className='bg-primary hover:bg-secondary cursor-pointer w-24'>
        {label}
    </Button>
    </>
  )
}
