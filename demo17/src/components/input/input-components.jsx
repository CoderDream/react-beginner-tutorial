const InputComponents = (props) => {
  console.log("InputComponents组件渲染")
  const {onChangeHandler} = props;
  return (
    <input type="search" onChange={onChangeHandler}/>
  );
}

/**
 class InputComponents extends React.Component {

 render() {
 console.log("InputComponents组件渲染")
 const { onChangeHandler } = this.props;
 return (
 <input type="search" onChange={onChangeHandler}/>
 );
 }
 }
 */
