import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function Example() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="h-[14px] w-[36px] relative ">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        style={{background: '#D2D2D2'}}
        className={`
          relative inline-flex shrink-0 w-full h-full cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4 bg-[royalblue]' : 'translate-x-[-1px] bg-black'}
            absolute top-[-4px] shadow-[0_1px_5px_rgba(0,0,0,0.06)] pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
