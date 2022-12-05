import { Excalidraw, THEME } from '@excalidraw/excalidraw';

const DrawHome = () => {
  return (
    <div className="col-span-12 h-[calc(100vh-128px)] overflow-hidden rounded-lg border bg-[#121212] p-2">
      <Excalidraw
        autoFocus={true}
        handleKeyboardGlobally={true}
        theme={THEME.DARK}
        className="border"
      />
    </div>
  );
};

export default DrawHome;
