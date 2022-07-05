import React from 'react';

import st from 'components/shared/IconButton/IconButton.module.css';

const IconButton = ({ children }: React.PropsWithChildren) => {
  return <button className={st.iconButton}>{children}</button>;
};

export default IconButton;
