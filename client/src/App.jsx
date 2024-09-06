import Router from './components/Router';
import { CharacterProvider } from './context/CharacterContext';

function App() {
  return (
    <>
      <CharacterProvider>
        <Router />
      </CharacterProvider>
    </>
  );
}

export default App;
