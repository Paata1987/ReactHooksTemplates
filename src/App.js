import HookUseEffect from './examples/HookUseEffect';
import State from './examples/State';
import UseCallBack from './examples/UseCallBack';
import UseMemo from './examples/UseMemo';
import UseRef from './examples/UseRef';

//HOOK USeState
function App() {
  return (
    <div className="App">
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      <UseCallBack />
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      <UseMemo />
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      <UseRef />
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      <HookUseEffect />
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
      <State />
    </div>
  );
}

export default App;
