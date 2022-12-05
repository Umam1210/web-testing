import classNames from '../../helpers/classNames';

const ExpandScreenNotice = ({ sidebarCollapsed }) => {
  return (
    <div
      className={classNames(
        sidebarCollapsed ? 'max-[1080px]:visible' : 'max-[1280px]:visible',
        'invisible absolute z-50 flex h-screen w-screen items-center justify-center bg-slate-900/60 text-center font-medium text-white backdrop-blur-md'
      )}
    >
      <span className="mx-8 text-4xl">←</span>
      <div className="mx-8 max-w-md">
        <p className="text-2xl">Please expand your page</p>
        <p className="text-md mt-2 font-normal">
          We are working on supporting smaller screens. Meanwhile, please view our site from
          Desktop.
        </p>
      </div>
      <span className="mx-8 text-4xl">→</span>
    </div>
  );
};

export default ExpandScreenNotice;
