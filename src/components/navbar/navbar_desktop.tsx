"use client"

import { useRouter } from 'next/navigation'
import Cube from './assets/cube'
import Menu from './assets/menu'

export default function NavBarDesktop() {
    const router = useRouter()

    const handleHome = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault()
        router.push('/')
    }
    return (
        <div className="z-20 w-screen h-[66px] bg-[rgb(34,34,34)] pl-2 lg:pl-10 pr-2 lg:pr-10 flex justify-between items-center">
            <div onClick={handleHome} className="flex flex-row justify-start items-center mt-[-10px] cursor-pointer">
                <div className='mt-[-5px]'>
                    <Cube />
                </div>
                <div className='w-fit h-fit flex flex-col'>
                    <p className='text-white text-xs lg:text-lg font-extrabold'>Rwanda 3D virtual tours</p>
                    <div className='flex justify-start items-end'>
                        <p className='text-black text-[11px] font-bold bg-white p-[1px] pl-2 pr-2 w-fit leading-1'>DISCOVER</p>
                    </div>                    
                </div>
            </div>

            <div className='w-fit h-fit z-10 flex flex-row justify-start items-center'>
                <Menu />
            </div>
        </div>
    )
}
