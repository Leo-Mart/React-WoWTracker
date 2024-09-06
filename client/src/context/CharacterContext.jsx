import { createContext, useState, useEffect } from 'react';
import { GetAPIToken } from '../helpers/helpers';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCharacters()
  }, []);

  // TODO: Add functions for fetching, creating, deleteing, maybe updating characters and persisting characters in a db

  // getCharacterFromRaiderIO fetches the specified character with the supplied name, server, and region and saves it to db and context
  const getCharacterFromRaiderIO = async (name, server, region) => {
    setIsLoading(true)
    const response = await fetch(
      `https://raider.io/api/v1/characters/profile?region=${region}&realm=${server}&name=${name}`
    );
    const data = await response.json();

    // adds the character to the state
    setCharacters([...characters, { ...data }]);

    // adds chracters to db
    postCharacter(data)
    // TODO: Add some error handling if the fetch breaks
  };
  // getAllCharacters gets all characters from the database
  const getAllCharacters = async () => {
    setIsLoading(true)
    const response = await fetch('http://localhost:3000/characters');
    const data = await response.json();

    setCharacters(data);
    setIsLoading(false);
  };

  const getOneCharacter = async (id) => {
    setIsLoading(true)
    const response = await fetch(`http://localhost:3000/characters/${id}`);
    const data = await response.json()
    setIsLoading(false)

    return data

  }

  const postCharacter = async (charData) => {
    setIsLoading(true)
    const response = await fetch('http://localhost:3000/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(charData)
    });
    setIsLoading(false);

  }

  return (
    <CharacterContext.Provider
      value={{
        characters,
        isLoading,
        getCharacterFromRaiderIO,
        getOneCharacter
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
