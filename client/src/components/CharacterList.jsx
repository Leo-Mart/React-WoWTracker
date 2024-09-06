import { useContext } from 'react';
import Character from './Character';
import CharacterContext from '../context/CharacterContext';
import Spinner from './Shared/Spinner';

const CharacterList = () => {
  const { characters, isLoading } = useContext(CharacterContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="grid grid-cols-6 gap-4 mt-10 mx-5">
      {characters.map((item) => (
        <Character item={item} key={item.id} />
      ))}
    </div>
  );
};
export default CharacterList;
