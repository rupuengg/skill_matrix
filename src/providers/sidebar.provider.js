import React, { useState } from 'react';
import { initialValue, SidebarContext } from '../contexts/sidebar.context';

const SidebarProvider = (props) => {
  const [sidebar, setSidebar] = useState(initialValue);

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;