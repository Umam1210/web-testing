import { Menu, Transition } from '@headlessui/react';
import { FunnelIcon } from '@heroicons/react/20/solid';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useState } from 'react'
import classNames from '../../helpers/classNames';

const instituteOptions = [
    { name: 'ET-ASIA', href: '#', current: false },
    { name: 'Universitas Indonesia', href: '#', current: false },
  ];
const facultyOptions = [
    { name: 'Law', href: '#', current: false },
    { name: 'Social & Politics', href: '#', current: false },
    { name: 'Information Technology', href: '#', current: false },
    { name: 'Science', href: '#', current: false },
    { name: 'Medical', href: '#', current: false }
  ];
const majorOptions = [
    { name: 'Teknik Informatika', href: '#', current: false },
    { name: 'Arsitektur', href: '#', current: false },
    { name: 'Ilmu Hukum', href: '#', current: false },
    { name: 'Kedokteran Gigi', href: '#', current: false },
  ];
const courseOptions = [
    { name: 'Dasar Pemrograman', href: '#', current: false },
    { name: 'Kalkulus', href: '#', current: false },
    { name: 'Pengantar Sistem Basis Data', href: '#', current: false },
    { name: 'Pemrograman Berorientasi Objek', href: '#', current: false },
  ];
const classRooms = [
    { name: 'IT-110', href: '#', current: false },
    { name: 'MB-121', href: '#', current: false },
]
const rolesOptions = [
    { name: 'Student', href: '#', current: false },
    { name: 'Instructor', href: '#', current: false },
]

const CategoryLeftBar = () => {
    const [institute, setInstitute] = useState("");
    const [faculty, setFaculty] = useState("");
    const [major, setMajor] = useState("");
    const [course, setCourse] = useState("");
    const [classRoom, setClassRoom] = useState("");
    const [role, setRole] = useState("");


  return (
    <section aria-labelledby="products-heading" className="sticky top-24">
      <form className="flex flex-col gap-4">
        <div className="flex">
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Institution</p>
                <Menu.Button className="rounded-md p-1 justify-between group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                    {institute === "" ? `Select` : institute}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {instituteOptions.map((option) => {
                        return (
                            <Menu.Item key={option.name}>
                                {({ active }) => (
                                <a
                                    onClick={() => setInstitute(option.name)}
                                    href={option.href}
                                    className={classNames(
                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {option.name}
                                </a>
                                )}
                            </Menu.Item>
                            )
                    })}
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
        <div className="flex">
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Faculty</p>
                <Menu.Button className="rounded-md p-1 justify-between group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                    {faculty === "" ? `Select` : faculty}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {facultyOptions.map((option) => {
                        return (
                            <Menu.Item key={option.name}>
                                {({ active }) => (
                                <a
                                    onClick={() => setFaculty(option.name)}
                                    href={option.href}
                                    className={classNames(
                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {option.name}
                                </a>
                                )}
                            </Menu.Item>
                            )
                    })}
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
        <div className="flex">
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Major</p>
                <Menu.Button className="rounded-md p-1 justify-between group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                    {major === "" ? `Select` : major}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {majorOptions.map((option) => (
                    <Menu.Item key={option.name}>
                        {({ active }) => (
                        <a  
                            onClick={() => setMajor(option.name)}
                            href={option.href}
                            className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            {option.name}
                        </a>
                        )}
                    </Menu.Item>
                    ))}
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
        <div className="flex">
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Course</p>
                <Menu.Button className="rounded-md p-1 justify-between group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                    {course === "" ? `Select` : course}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {courseOptions.map((option) => (
                    <Menu.Item key={option.name}>
                        {({ active }) => (
                        <a  
                            onClick={() => setCourse(option.name)}
                            href={option.href}
                            className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                            )}
                            
                        >
                            {option.name}
                        </a>
                        )}
                    </Menu.Item>
                    ))}
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
        <div className="flex">
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Class Room</p>
                <Menu.Button className="rounded-md p-1 justify-between group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                    {classRoom === "" ? `Select` : classRoom}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {classRooms.map((option) => (
                    <Menu.Item key={option.name}>
                        {({ active }) => (
                        <a
                            onClick={() => setClassRoom(option.name)}
                            href={option.href}
                            className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            {option.name}
                        </a>
                        )}
                    </Menu.Item>
                    ))}
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
        <div className="flex">
            <Menu as="div" className="relative inline-block text-left">
            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Roles</p>
                <Menu.Button className="rounded-md p-1 justify-between group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                    {role === "" ? `Select` : role}
                <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {rolesOptions.map((option) => (
                    <Menu.Item key={option.name}>
                        {({ active }) => (
                        <a
                            onClick={() => setRole(option.name)}
                            href={option.href}
                            className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            {option.name}
                        </a>
                        )}
                    </Menu.Item>
                    ))}
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
        <div>
        <button
            type="button"
            className="mt-8 inline-flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Filter
            <FunnelIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  )
}

export default CategoryLeftBar