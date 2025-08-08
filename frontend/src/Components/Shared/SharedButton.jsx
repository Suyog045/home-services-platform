import {Button} from "flowbite-react/components/Button"
import { useAuthModal } from "../../hooks/useAuthModal";

export const SharedButton = ({label}) => {
  const { openModal,setModalType } = useAuthModal();

  const handleAuthBtn=()=>{
    setModalType(label);
    openModal();
  }
  return (
    <>
    <Button onClick={handleAuthBtn} className='bg-secondary rounded-4xl hover:bg-secondary cursor-pointer w-24 text-nowrap font-medium'>
        {label}
      </Button>
    </>
  );
};
