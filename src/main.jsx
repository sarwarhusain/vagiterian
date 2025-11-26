import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider2 from "./providers/AuthProvider2.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider2>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider2>
  </StrictMode>
);
