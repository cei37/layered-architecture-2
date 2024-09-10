// src/App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserListComponent from './components/User/UserListComponent';
import UserComponent from './components/User/UserComponent';
import NewUserComponent from './components/User/NewUserComponent';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header>
          <h1>User Management</h1>
        </header>
        <main>
          <NewUserComponent />
          <UserListComponent />
          {/* Pass a userId prop to UserComponent for updating a user */}
          {/* Example: <UserComponent userId={1} /> */}
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
