const NavBar = ({ name, handleInputChange, handleOnSubmit }) => {
  return (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <p className="subtitle is-5">
            <strong>Pokedex</strong>
          </p>
        </div>
        <div className="level-item">
          <form onSubmit={handleOnSubmit}>
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Find a pokemon"
                  onChange={handleInputChange}
                  value={name}
                  name="name"
                />
              </div>
              <div className="control">
                <button className="button">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
