import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import CharacterContext from '../context/CharacterContext';
import Spinner from '../components/Shared/Spinner';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const { isLoading, getOneCharacter } = useContext(CharacterContext);

  useEffect(() => {
    const fetchCharacter = async () => {
      let charData = await getOneCharacter(id);
      setCharacter(charData);
    };
    fetchCharacter();
  }, []);
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <section className="grid grid-cols-6 min-h-screen">
        <div className="avatar max-h-10">
          <div className="w-24 rounded">
            <img src={character.thumbnail_url} />
          </div>
        </div>
        <div className="collapse bg-base-200 max-h-20">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Character Info
          </div>
          <div className="collapse-content">
            <p>
              {character.name}
              {character.race}
              {character.class}
              {character.active_spec_name}
              {character.faction}
            </p>
          </div>
        </div>
        <div className="collapse bg-base-200 max-h-20">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Mythic info
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200 max-h-20">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            Raid Info
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default CharacterPage;
