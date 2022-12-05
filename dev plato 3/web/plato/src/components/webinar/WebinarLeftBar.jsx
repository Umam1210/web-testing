import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useState, useRef } from 'react';
import { webinarsStore } from '../../store/webinarsStore';
const subCategories = [
  { name: 'Webinar Terdekat', href: '#' },
  { name: 'Popularitas', href: '#' },
  { name: 'Terbaru', href: '#' },
  { name: 'Harga Terendah', href: '#' },
  { name: 'Harga Tertinggi', href: '#' }
];
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'finance', label: 'Finance', checked: false },
      { value: 'accounting', label: 'Accounting', checked: false },
      { value: 'human-resource', label: 'Human Resource', checked: false },
      { value: 'it-development', label: 'IT Depelopment', checked: false },
      { value: 'personal-develpment', label: 'Personal Development', checked: false },
      { value: 'sales-marketing', label: 'Sales & Marketing', checked: false },
      { value: 'teaching-academics', label: 'Teaching & Academics', checked: false },
    ]
  }
];

export default function WebinarLeftBar({ setSubjects }) {
  const webinarListState = webinarsStore((state) => state.webinarList);
  console.log("ini webinar", webinarListState);

  let activeCategory = useRef([])
  const handleCategory = (category, status) => {
    let filteredSubject = []

    if (status) {
      activeCategory.current.push(category);
    } else {
      const tagIndex = activeCategory.current.indexOf(category);
      activeCategory.current.splice(tagIndex, 1);
    }

    if (!activeCategory.current.length) {
      console.log("webinar",webinarListState);
      filteredSubject = webinarListState;
      
    } else {
      filteredSubject = webinarListState.filter((data) =>
        activeCategory.current.includes(data.category)
      );
    }
    setSubjects(filteredSubject)
  }
  
  return (
    <section aria-labelledby="products-heading" className="sticky top-24">
      {/* Filters */}
      <form className="hidden lg:block">
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
        >
          {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href}>{category.name}</a>
            </li>
          ))}
        </ul>

        {filters.map((section) => (
          <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{section.name}</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onClick={(e) => handleCategory(option.value, e.target.checked)}
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </form>
    </section>
  );
}
