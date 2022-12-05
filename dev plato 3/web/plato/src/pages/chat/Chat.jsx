import CourseList from '../../components/course/courseList';
import {
  ChevronRightIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { searchModalVisible } from '../../store/browserSetting';

const applications = [
  {
    applicant: {
      name: 'Ricardo Cooper',
      email: 'ricardo.cooper@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    href: '#'
  },
  {
    applicant: {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    href: '#'
  },
  {
    applicant: {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    href: '#'
  }
].reduce((a, i) => a.concat(Array(50).fill(i)), []);

export default function Home() {
  const [searchModal, setSearchModal] = useAtom(searchModalVisible);

  return (
    <>
      {/* LEFT PART */}
      <div className="col-span-4">
        <div className="h-16 w-full bg-pink-100"></div>
        <div className="w-full py-4">
          <button
            onClick={() => setSearchModal(true)}
            type="button"
            className="flex w-full items-center rounded-md bg-white py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none"
          >
            <MagnifyingGlassIcon className="ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            <span className="flex-1 text-left">Cari semua di sini...</span>
            <span className="flex-none pl-3 text-xs font-semibold">⌘K</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-md border bg-white">
          <ul role="list" className="divide-y divide-gray-200">
            {applications.map((application) => (
              <li key={application.applicant.email}>
                <a href={application.href} className="block hover:bg-gray-50">
                  <div className="flex items-center px-6 py-4">
                    <div className="flex min-w-0 flex-1 items-center ">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={application.applicant.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1 pl-4">
                        <div>
                          <div className="flex items-start">
                            <span className="text-md flex-1 truncate font-medium text-gray-900">
                              {application.applicant.name}
                            </span>
                            <span className="flex items-center text-xs text-gray-500">
                              <span className="truncate">14:01</span>
                            </span>
                          </div>
                          <div className="flex items-end">
                            <span className="flex-1 items-center truncate text-sm text-gray-500">
                              Latest text chat goes here...
                            </span>
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-medium text-green-100">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* HALF RIGHT */}
      <div className="sticky top-24 col-span-8 flex h-[calc(100vh-128px)] flex-col">
        <div className="flex-1 bg-teal-100"></div>
        <form>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center rounded-b-md bg-gray-50 py-2 px-3 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <input
              id="chat"
              rows="1"
              className="mx-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your message..."
            ></input>
            <button className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
              <svg
                aria-hidden="true"
                className="h-6 w-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
