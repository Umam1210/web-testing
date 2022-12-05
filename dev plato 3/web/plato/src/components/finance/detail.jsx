import {
  BanknotesIcon,
  UserIcon,
  ShoppingCartIcon,
  ClockIcon,
  FlagIcon,
  LinkIcon,
  HandThumbUpIcon,
  CheckIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/20/solid';
import classNames from '../../helpers/classNames';

const timeline = [
  {
    id: 1,
    content: 'Order made',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400'
  },
  {
    id: 2,
    content: 'Pending payment',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-yellow-500'
  },
  {
    id: 3,
    content: 'Payment completed',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500'
  }
];

export default function Detail() {
  return (
    <div className="w-full">
      <div className="w-full rounded-lg border p-4">
        <p className="flex-auto text-sm font-medium text-gray-400">Invoice</p>
        <p className="flex-auto text-xl font-bold">MDRX/4221/20/44</p>
      </div>

      <div className="mt-4 w-full rounded-lg border p-4">
        <div className="mb-4 flex items-center">
          <UserIcon className="h-6 w-6 text-gray-400" />
          <p className="ml-4 flex-auto text-sm font-medium">Muhammad Mifzan</p>
        </div>
        <div className="mb-4 flex items-center">
          <BanknotesIcon className="h-6 w-6 text-gray-400" />
          <p className="ml-4 flex-auto text-sm font-medium">BCA (Virtual Account)</p>
        </div>
        <div className="mb-4 flex items-center">
          <ShoppingCartIcon className="h-6 w-6 text-gray-400" />
          <p className="ml-4 flex-auto text-sm font-medium">Store purchase</p>
        </div>
        <div className="mb-4 flex items-center">
          <ClockIcon className="h-6 w-6 text-gray-400" />
          <p className="ml-4 flex-auto text-sm font-medium">19 September 2022</p>
        </div>
        <div className="mb-4 flex items-center">
          <FlagIcon className="h-6 w-6 text-gray-400" />
          <span className="ml-4 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 pb-1 text-sm font-medium leading-none text-green-800">
            <svg
              className="-ml-0.5 mr-1.5 mt-0.5 h-2 w-2 text-green-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            Done
          </span>
        </div>
        <div className="flex items-center">
          <LinkIcon className="h-6 w-6 text-gray-400" />
          <p className="ml-4 flex-auto text-sm font-medium">Invoice</p>
        </div>

        <div className="flex items-center py-8" aria-hidden="true">
          <div className="flex w-full border-t border-gray-100" />
        </div>

        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span
                      className="absolute top-4 left-1.5 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <span
                      className={classNames(
                        event.iconBackground,
                        'flex h-3 w-3 items-center justify-center rounded-full ring-8 ring-white'
                      )}
                    />
                    <div className="-mt-1 flex min-w-0 flex-1 justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{event.content}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-4 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <ArrowDownTrayIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Download invoice
      </button>
    </div>
  );
}
