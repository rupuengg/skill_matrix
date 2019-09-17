import React from 'react';

const initialValue = {
  showSidebar: true
};

const SidebarContext = React.createContext(initialValue);

export { initialValue, SidebarContext };