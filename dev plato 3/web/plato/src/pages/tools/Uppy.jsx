// import React, { useEffect } from 'react';
// import { Dashboard } from '@uppy/react';
// import Uppy from '@uppy/core';
// import Tus from '@uppy/tus';
// import '@uppy/core/dist/style.css';
// import '@uppy/dashboard/dist/style.css';

// const UppyHome = () => {
//   const uppy = React.useMemo(() => {
//     return (
//       new Uppy()
//         .use(Webcam) // `id` defaults to "Webcam". Note: no `target` option!
//         // or
//         .use(Webcam, { id: 'MyWebcam' })
//     ); // `id` is… "MyWebcam"
//   }, []);
//   React.useEffect(() => {
//     return () => uppy.close({ reason: 'unmount' });
//   }, [uppy]);

//   return (
//     <div className="col-span-12 h-[calc(100vh-128px)] overflow-hidden rounded-lg border p-2">
//       <Dashboard uppy={uppy} plugins={['Webcam']} />
//     </div>
//   );
// };

// export default UppyHome;

const UppyHome = () => {
  return (
    <div className="col-span-12 h-[calc(100vh-128px)] overflow-hidden rounded-lg border p-2"></div>
  );
};

export default UppyHome;
