import {Button} from "flowbite-react/components/Button"

export const SharedButton = ({label}) => {
  return (
    <>
    <Button className='bg-secondary rounded-4xl hover:bg-secondary cursor-pointer w-24 text-nowrap font-medium'>
        {label}
    </Button>
    </>
  )
}
