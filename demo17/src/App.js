const App = () => {
  //console.log("渲染函数被调用");
  const [pokemons, setPokemons] = React.useState([]);
  const [filteredPokemons, setFilteredPokemons] = React.useState([]);
  // console.log(pokemons);
  React.useEffect(() => {
    console.log("Fetch前");
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(json => {

        json.results.map((result, index) => {
          result.id = index + 1;
        });

        setPokemons(json.results);
        setFilteredPokemons(json.results);
      });
    console.log("Fetch后");
  }, []);

  const onChangeHandler = (event) => {
    const comparedPokemons = pokemons.filter(
      pokemon => {
        return pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
      }
    );

    setFilteredPokemons(comparedPokemons);
  };

  return (
    <div>
      <h1>宝可梦</h1>
      <InputComponents onChangeHandler={onChangeHandler}/>
      <Lists pokemonsLists={filteredPokemons}/>
    </div>
  );
};


/**
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

 json.results.map((result, index) => {
 result.id = index + 1;
 });

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
 */
