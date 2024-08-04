"use client";

import { LanguageSelector } from '@/components/LanguageSelector';
import { PaddingSelector } from '@/components/PaddingSelector';
import { RadiusSelector } from '@/components/RadiusSelector';
import { BackgroundSelector } from '@/components/BackgroundSelector';
import { ThemeSelector } from '@/components/ThemeSelector';
import { LineNumberSelector } from '@/components/LineNumberSelector';
import { LineStartSelector } from '@/components/LineStartSelector';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { OpacitySelector } from '@/components/OpacitySelector';

export const Sidebar = () => {

  const stateLineNumber = useSelector(
    (state: RootState) => state.editorReducer.linenumber
  );

  return (
    <div className='w-72 h-full bg-[#121212]'>
      <div className='w-full py-5 px-4 flex flex-col items-center justify-center gap-5'>
        <div className='w-full'>
          <h1 className='text-white text-sm font-semibold'>Frame</h1>
          <div className='w-full flex flex-col items-center justify-start gap-3 mt-4 pl-5'>
            <PaddingSelector />
            <RadiusSelector />
            <BackgroundSelector />
            <OpacitySelector />
          </div>
        </div>
        <div className='w-full'>
          <h1 className='text-white text-sm font-semibold'>Editor</h1>
          <div className='w-full flex flex-col items-center justify-start gap-3 mt-4 pl-5'>
            <LanguageSelector />
            <ThemeSelector />
            <LineNumberSelector />
            { stateLineNumber && <LineStartSelector /> }
          </div>
        </div>
      </div>
    </div>
  )
}
