import Navbar from "@component/navbar";
import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retry: 1
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="px-4 pt-6 md:px-20 md:pt-12">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
