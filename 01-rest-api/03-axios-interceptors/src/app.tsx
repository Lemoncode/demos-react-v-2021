import React from 'react';
import { AppRouter } from './app.router';
import { ApiConfig } from './core/api-configuration/api-config.component';

export const App = () => {
  return (
    <ApiConfig>
      <AppRouter />
    </ApiConfig>
  );
};
