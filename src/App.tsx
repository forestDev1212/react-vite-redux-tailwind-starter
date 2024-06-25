import { Suspense } from "react";
import MainRouter from "./routes";
import ContentLoader from "./components/ui/ContentLoader";
import { Provider } from "react-redux";

import store from "./store/store";

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={ContentLoader} >
        <Provider store={store} >
          <MainRouter />
        </Provider>
      </Suspense>
    </>
  )
}

export default App;