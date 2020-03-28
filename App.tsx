import React from "react";
import { AppRoutes } from "./src/AppRoutes";
import { AuthProvider } from "./src/providers/AuthProvider";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
