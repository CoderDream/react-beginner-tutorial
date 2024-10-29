class Lists extends React.Component {

  render() {
    console.log("Lists组件渲染")
    const {pokemonsLists} = this.props;
    return (
      <ul>
        {
          pokemonsLists.map((pokemon, index) => {
              return (
                <div key={pokemon.url}>
                  <li>{pokemon.name}</li>
                  <img src={`http://localhost:8004/images/pokemon/${pokemon.id}.png`} />
                </div>
              );
            }
          )
        }
      </ul>
    );
  }
}

