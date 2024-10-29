class Lists extends React.Component {

    render() {
        console.log("Lists组件渲染")
        const {pokemonsLists} = this.props;
        return (
            <ul>
            {
                pokemonsLists.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)
            }
            </ul>
        );
    }
}

