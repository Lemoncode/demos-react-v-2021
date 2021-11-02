import React from "react";
import { RouterComponent } from "core/router";
import { ThemeProviderComponent } from "core/theme";
import { AuthProvider } from 'common-app/auth';

export const App = () => {
  return (
    <ThemeProviderComponent>
      <AuthProvider>
        <RouterComponent />
      </AuthProvider>
    </ThemeProviderComponent>
  );
};
