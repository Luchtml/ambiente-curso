import React from "react";

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('ativou')
  }

  componentDidUpdate() {
    console.log('ativado')
  }

  componentWillUnmount() {
    console.log('saiu')
  }



  handleClick() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos;
