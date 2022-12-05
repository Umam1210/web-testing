import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useRef, useState } from 'react';
import { storeSellCourses } from '../../store/storeSellCourses';
// const subCategories = [
//   { name: 'Corses', href: '#' },
//   { name: 'Tickets', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' }
// ];
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'algorithm', label: 'Algorithm', checked: false },
      { value: 'programming', label: 'Programming', checked: false },
      { value: 'web', label: 'Web', checked: false }
    ]
  },
  {
    id: 'price',
    name: 'Price',
    options: []
  }
];

export default function CategoryLeftBar({ setSubjects, setSortBy }) {
  const courseListState = storeSellCourses((state) => state.courseList);

  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  let activeCategory = useRef([]);

  const handleCategory = (category, status) => {
    let filteredSubject = [];

    if (status) {
      activeCategory.current.push(category);
    } else {
      const tagIndex = activeCategory.current.indexOf(category);
      activeCategory.current.splice(tagIndex, 1);
    }

    if (!activeCategory.current.length) {
      filteredSubject = courseListState;
    } else {
      filteredSubject = courseListState.filter((data) =>
        activeCategory.current.includes(data.options)
      );
    }

    setSubjects(filteredSubject);
    setSortBy('terbaru');
  };

  const handlePrice = (inputValue, label) => {
    const toInteger = parseInt(inputValue) || undefined;
    let unSortedSubjects = [];

    setSortBy('terbaru');

    if (inputValue === '' || inputValue < 1) {
      setSubjects(courseListState);

      return label === 'min' ? setPriceMin(inputValue) : setPriceMax(inputValue);
    } else if (toInteger) {
      if (label === 'min') {
        setPriceMin(toInteger);
        unSortedSubjects = courseListState.filter((data) => data.price >= toInteger);

        unSortedSubjects.sort((next, curr) => (next.price < curr.price ? -1 : 1));
      } else if (label === 'max') {
        setPriceMax(toInteger);
        unSortedSubjects = courseListState.filter((data) => data.price <= toInteger);

        unSortedSubjects.sort((next, curr) => (next.price > curr.price ? -1 : 1));
      }

      setSubjects(unSortedSubjects);
    }
  };

  return (
    <section aria-labelledby="products-heading" className="sticky top-24">
      <h2 id="products-heading" className="sr-only">
        Products
      </h2>

      {/* Filters */}
      <form className="hidden lg:block">
        {/* <h3 className="sr-only">Categories</h3>
        <ul
          role="list"
          className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
          {subCategories.map((category) => (
            <li key={category.name}>
              <a href={category.href}>{category.name}</a>
            </li>
          ))}
        </ul> */}

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
                    {section.options.length > 0 ? (
                      section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onClick={(e) => handleCategory(option.value, e.target.checked)}
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))
                    ) : (
                      <form className="flex flex-col items-center gap-2">
                        <input
                          className="focus:shadow-outline block w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                          id="price_min"
                          type="text"
                          placeholder="Minimum"
                          value={priceMin ? priceMin : ''}
                          onChange={(event) => handlePrice(event.target.value, 'min')}
                        />
                        <input
                          className="focus:shadow-outline block w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                          id="price_max"
                          type="text"
                          placeholder="Maximum"
                          value={priceMax ? priceMax : ''}
                          onChange={(event) => handlePrice(event.target.value, 'max')}
                        />
                      </form>
                    )}
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
