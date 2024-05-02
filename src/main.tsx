import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route } from "@/routes/Route.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({});
ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  {/* <Default /> */}
  <QueryClientProvider client={queryClient}>
   <Route />
  </QueryClientProvider>
 </React.StrictMode>
);