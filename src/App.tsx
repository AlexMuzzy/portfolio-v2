import { ThreeCanvas } from "./Background/ThreeCanvas";
import ContentPanel from "./Components/ContentPanel";
import Title from "./Background/Title";
import ErrorBoundary from "./Components/ErrorBoundary";
import useWindowDimensions from "./Components/UtilFunctions";

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* 3D Background */}
      <div className="fixed inset-0">
        <ErrorBoundary>
          <ThreeCanvas viewportWidth={width} />
        </ErrorBoundary>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        <Title />
        <div className="flex flex-1 items-start justify-center px-4 pb-16 pt-8">
          <ContentPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
