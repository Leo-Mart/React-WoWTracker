import { data } from 'autoprefixer';
import CharacterContext from '../context/CharacterContext';
import CharacterList from './CharacterList';
import Modal from './Shared/Modal';
import { useState } from 'react';
import { useContext } from 'react';
import { GetAPIToken } from '../helpers/helpers';

const MainContent = () => {
  const [form, setForm] = useState({
    serverName: '',
    characterName: '',
    selectedRegion: '',
  });

  const { getCharacterFromRaiderIO } = useContext(CharacterContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getCharacterFromRaiderIO(form.characterName, form.serverName, form.selectedRegion)
    
    // TODO: add data(character) to db
    // TODO: form validation?
    document.getElementById('import_Modal').close();
  };
  return (
    <section className="min-h-screen">
      <CharacterList />
      <button
        onClick={() => {
          GetAPIToken();
        }}
        className="btn btn-ghost"
      >
        Import Character
      </button>
      <button
        onClick={() => {
          GetAPIToken();
        }}
        className="btn btn-ghost"
      >
        Get accesstoken
      </button>
      <Modal id={'import_Modal'}>
        <form onSubmit={onSubmit}>
          <label
            htmlFor="characterName"
            className="input input-bordered flex items-center gap-2"
          >
            Character Name
            <input
              required
              type="text"
              name="characterName"
              className="grow"
              placeholder="Leeroy"
              onChange={handleInputChange}
              value={form.characterName}
            />
          </label>
          <div className="flex">
            <select
              name="selectedRegion"
              className="select select-bordered w-full max-w-xs basis-1/4"
              onChange={handleInputChange}
              value={form.selectedRegion}
              required
            >
              <option defaultValue="region" disabled>
                Region
              </option>
              <option value="CN">CN</option>
              <option value="US">US</option>
              <option value="TW">TW</option>
              <option value="EU">EU</option>
              <option value="KR">KR</option>
            </select>
            <label
              className="input input-bordered flex items-center gap-2 basis-3/4"
              htmlFor="serverName"
            >
              Server
              <input
                required
                type="text"
                name="serverName"
                className="grow"
                placeholder="server name"
                onChange={handleInputChange}
                value={form.serverName}
              />
            </label>
          </div>
          <button className="btn btn-primay" type="submit">
            Add Character
          </button>
        </form>
      </Modal>
    </section>
  );
};
export default MainContent;
