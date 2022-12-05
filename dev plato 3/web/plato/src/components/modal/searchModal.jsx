import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { searchModalVisible } from '../../store/browserSetting';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const people = [
  { id: 1, name: 'Leslie Alexander', url: '#' }
  // More people...
];

export default function Example() {
  const [searchModal, setSearchModal] = useAtom(searchModalVisible);

  const [query, setQuery] = useState('');

  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ''
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={searchModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setSearchModal}
      >
        <Transition.Child
          as={Fragment}
          enter=""
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave=""
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-200 bg-opacity-50  backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter=""
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave=""
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={(person) => (window.location = person.url)}>
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Search..."
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>

                  {filteredPeople.length > 0 && (
                    <Combobox.Options
                      static
                      className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                    >
                      {filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              'cursor-default select-none px-4 py-2',
                              active && 'bg-indigo-600 text-white'
                            )
                          }
                        >
                          {person.name}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredPeople.length === 0 && (
                    <p className="p-4 text-sm text-gray-500">No people found.</p>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
