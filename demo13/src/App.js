class App extends React.Component {
    constructor() {
        console.log("构造函数被调用");

        super();
        this.state = {
            pokemons: [],
            searching: "",
            filteredPokemons: [], // 搜索结果
        }
    }

    componentDidMount() {
        console.log("组件挂载完成");

        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => res.json())
            .then(json => {
                this.setState(
                    () => {
                        return {
                            pokemons: json.results,
                            filteredPokemons: json.results
                        };
                    },
                    () => {
                        // console.log(this.state)
                    });
            });
    }

    onChangeHandler = (event) => {
        const filteredPokemons = this.state.pokemons.filter(
            pokemon => {
                return pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
            }
        );

        this.setState(
            () => {
                return {filteredPokemons: filteredPokemons}
            },
            () => {
                console.log(this.state);
            }
        )
    }

    render() {
        console.log("渲染函数被调用");

        return (<div>
            <h1>宝可梦</h1>
            <InputComponents onChangeHandler={this.onChangeHandler} />
            <Lists pokemonsLists={this.state.filteredPokemons} />
        </div>);
    }
}
