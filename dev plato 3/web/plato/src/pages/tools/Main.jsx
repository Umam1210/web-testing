import CategoryLeftBar from '../../components/marketplace/categoryLeftBar';
import Header from '../../components/tools/header';
import ItemListCard from '../../components/marketplace/itemListCard';
import { Link } from 'react-router-dom';

const toolsList = [
  {
    url: 'draw',
    name: 'Draw',
    isNew: true,
    description: 'Visualize, teach, and collaborate on a single canvas.'
  },
  {
    url: 'uppy',
    name: 'Uppy',
    isNew: true,
    description: 'Upload freely to our cloud storage.'
  },
  {
    url: 'meet',
    name: 'Meet',
    isNew: true,
    description: 'Have a video conference with one another.'
  },
  {
    url: 'certificate',
    name: 'Certificate',
    isNew: true,
    description: 'Create a certificate for your students.'
  }
];

export default function Home() {
  return (
    <>
      <div className="col-span-12">
        <Header />
      </div>
      {toolsList.map((item, index) => (
        <Link key={index} to={item.url} className="col-span-3">
          <div className="relative flex aspect-video cursor-pointer select-none flex-col justify-between rounded-lg border p-4 hover:shadow-sm">
            {item.isNew ? (
              <span className="absolute -top-2 -right-2 rounded-full border border-green-300 bg-green-200 px-3 py-1 text-xs text-green-800">
                New
              </span>
            ) : null}

            <p className="text-2xl font-bold tracking-tight text-gray-900">{item.name}</p>
            <p className="mt-4 text-gray-900">{item.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
