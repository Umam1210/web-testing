import { Accordion } from 'flowbite-react'
import React from 'react'
import CourseContent from './CourseContent'

const CourseContentsAccordion = ({session, list}) => {
  return (
    <div>
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>{session}</Accordion.Title>
              <Accordion.Content>
                <fieldset className="space-y-5">
                    {list.map((item, i) => (
                        <CourseContent key={i} session={session} title={item.title} type={item.type} files={item.files} />
                    ))}
                  {/* <legend className="sr-only">Notifications</legend> */}
                  {/* <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="candidates" className="font-medium text-gray-700">
                        Candidates
                      </label>
                      <p id="candidates-description" className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div> */}
                  {/* <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="offers" className="font-medium text-gray-700">
                        Offers
                      </label>
                      <p id="offers-description" className="text-gray-500">
                        Get notified when a candidate accepts or rejects an offer.
                      </p>
                    </div>
                  </div> */}
                </fieldset>
              </Accordion.Content>
            </Accordion.Panel>

            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
              return (
                <>
                  <Accordion.Panel>
                    <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the Figma software so
                        everything you see in the library has a design equivalent in our Figma file.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out the{' '}
                        <a
                          href="https://flowbite.com/figma/"
                          className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Figma design system
                        </a>{' '}
                        based on the utility classes from Tailwind CSS and components from Flowbite.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      What are the differences between Flowbite and Tailwind UI?
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The main difference is that the core components from Flowbite are open
                        source under the MIT license, whereas Tailwind UI is a paid product. Another
                        difference is that Flowbite relies on smaller and standalone components,
                        whereas Tailwind UI offers sections of pages.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, we actually recommend using both Flowbite, Flowbite Pro, and even
                        Tailwind UI as there is no technical reason stopping you from using the best
                        of two worlds.
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Learn more about these technologies:
                      </p>
                      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                        <li>
                          <a
                            href="https://flowbite.com/pro/"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Flowbite Pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://tailwindui.com/"
                            rel="nofollow"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                          >
                            Tailwind UI
                          </a>
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                </>
              );
            })} */}
          </Accordion>
        </div>
  )
}

export default CourseContentsAccordion