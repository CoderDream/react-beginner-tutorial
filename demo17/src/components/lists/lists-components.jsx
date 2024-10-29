const Lists = ({pokemonsLists}) => { // 解构赋值 const {pokemonsLists} = props;
  // console.log("Lists组件渲染");
  // console.log(props);

  const imgCSS = {
    border: "1px solid darkorange",
    borderRadius: "10px"
  }
  return (
    <ul className="ul-container">
      {
        pokemonsLists.map((pokemon, index) => {
            return (
              <div key={pokemon.url}>
                <li>{pokemon.name}</li>
                <img src={`http://localhost:8004/images/pokemon/${pokemon.id}.png`}
                     style={imgCSS}
                />
              </div>
            );
          }
        )
      }
    </ul>
  );
}

/**
 class Lists extends React.Component {

 render() {
 console.log("Lists组件渲染")
 const {pokemonsLists} = this.props;
 const imgCSS = {
 border: "1px solid darkorange",
 borderRadius: "10px"
 }
 return (
 <ul className="ul-container">
 {
 pokemonsLists.map((pokemon, index) => {
 return (
 <div key={pokemon.url}>
 <li>{pokemon.name}</li>
 <img src={`http://localhost:8004/images/pokemon/${pokemon.id}.png`}
 style={imgCSS}
 />
 </div>
 );
 }
 )
 }
 </ul>
 );
 }
 }

 */
