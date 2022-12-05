import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ButtonsWebinar() {
    let [categories] = useState({
    Semua:[],
    Berbayar: [],
    Gratis: [],
  })
    return (
        <div className="w-full max-w-md px-2 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl  p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                    'ring-white ring-opacity-60 focus:outline-none focus:ring-1',
                    selected
                      ? 'bg-indigo-600 shadow'
                      : 'text-indigo-600'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    )
}
