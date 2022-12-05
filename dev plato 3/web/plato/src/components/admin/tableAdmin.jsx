const transactions = [
  {
    name: 'Introduction to Legal English (102)',
    date: '21/09/2022',
    type: 'Store',
    orderId: "1668044186932",
    status: 'Done',
    total: 'Rp350.000'
  },
  {
    name: 'Introduction to Legal English (101)',
    date: '19/09/2022',
    type: 'Store',
    orderId: "1668044186945",
    status: 'Done',
    total: 'Rp300.000'
  }
].reduce((a, i) => a.concat(Array(25).fill(i)), []);

export default function Table() {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Order ID
                  </th>
                  
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative py-4 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transact, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                      {transact.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transact.type}
                    </td>
                    <td className="
                    hover: cursor-pointer
                    underline underline-offset-4 underline-indigo-600 whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold">
                      {transact.orderId}
                    </td>
                   
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transact.date}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {transact.total}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className="inline-flex select-none items-center rounded-full bg-green-100 px-2.5 py-0.5 pb-1 font-medium leading-none text-green-800">
                        <svg
                          className="-ml-0.5 mr-1.5 mt-0.5 h-2 w-2 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                        {transact.status}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href="#" className="select-none text-indigo-600 hover:text-indigo-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
