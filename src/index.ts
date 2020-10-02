import *  as awilix  from 'awilix'
import initDomain from './domain/initDomain'
import initData from './data/initData'
import initApplication from './application/initApplication'
import initApi from './api/initApi'

// Create the container and set the injectionMode to PROXY (which is also the default).

export default ()=>{
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  })
  
  initApi(container);
  initApplication(container);
  initDomain(container);
  initData(container);
}



