// 异步加载，也就是按需加载

import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    return <div>正在加载...</div>
  }
});

export default ()=><LoadableComponent/>