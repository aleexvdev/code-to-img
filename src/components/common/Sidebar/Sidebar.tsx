import { PaddingSelector } from '@/components/PaddingSelector';
import { RadiusSelector } from '@/components/RadiusSelector';
import { ThemeSelector } from '@/components/ThemeSelector';

export const Sidebar = () => {
  return (
    <div className='absolute w-72 bg-[#191919] h-full top-0 z-10'>
      <div className='pt-24 px-4 flex flex-col items-center justify-center'>
        <div className='w-full p'>
          <h1 className='text-white text-sm font-semibold'>Frame</h1>
          <div className='w-full flex flex-col items-center justify-start gap-3 mt-4 pl-5'>
            <PaddingSelector />
            <RadiusSelector />
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  )
}
