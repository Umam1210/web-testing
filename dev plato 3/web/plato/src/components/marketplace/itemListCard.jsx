import { Link } from 'react-router-dom';

export default function ItemListCard({ subjects, href, limit = 1000 }) {
  const formatPrice = (value) => {
    let number_string = value.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    return rupiah;
  };

  return (
    <div className="bg-white">
      <div className="grid grid-cols-4 gap-y-4 gap-x-4">
        {subjects.length > 0 &&
          subjects.map((product, index) =>
            limit && index < limit ? (
              <div
                key={index}
                className="group relative flex flex-col rounded-lg border border-gray-200 bg-white">
                <span className="absolute -top-2 -right-2 z-10 inline-flex items-center rounded-md border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  <svg
                    className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 8 8">
                    <circle cx={4} cy={4} r={3} />
                  </svg>
                  Live
                </span>
                <div className="aspect-square overflow-hidden bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link to={href ? href : product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">By {product.by}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-base font-medium tracking-tighter text-gray-900">
                      <span className="pr-1 text-xs tracking-normal text-gray-500">Rp</span>
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}
