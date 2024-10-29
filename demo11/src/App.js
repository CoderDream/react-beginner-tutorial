class App extends React.Component {
    constructor() {
        console.log("构造函数被调用");

        super();
        this.state = {
            pokemons: [],
            searching: "",
        }
    }

    componentDidMount() {
        console.log("组件挂载完成");

        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => res.json())
            .then(json => {
                this.setState(
                    () => {
                        return {pokemons: json.results};
                    },
                    () => {
                        console.log(this.state)
                    });
                console.log(this.state);
            });
    }

    onChangerHandler = (event) => {
        this.setState(
            () => {
                return {searching: event.target.value};
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
            <input type="search" placeholder="请输入宝可梦名称" onChange={ this.onChangerHandler }/>
            <ul>
                {
                    this.state.pokemons.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)
                }
            </ul>
        </div>);
    }
}
