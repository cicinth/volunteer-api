import *  as awilix  from 'awilix'
import initDomain from './domain/initDomain'
import initData, {initDataFake} from './data/initData'
import initApplication from './application/initApplication'
import initApi from './api/initApi';


// Create the container and set the injectionMode to PROXY (which is also the default).

export default (()=>{
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  })
  
  initDataFake(container);
  initDomain(container);
  initApplication(container); 
  initApi(container);
})();


export const TesteDiInit = ()=>{
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  })
  
  initDataFake(container);
  initDomain(container);
  initApplication(container); 
  return container
}


