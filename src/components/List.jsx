//rafc snippet componente de funcion

import React, { Component } from "react";
import Cards from "./Cards";

export default class List extends Component {
  constructor() {
    super(); // Se puedan heredar
    this.state = {
      // Estados del componente
      superHeroes: [],
    };
  }
  // Otros metodos
  // componentDidMount se monta el componente
  componentDidMount() {
    this.getSuperHeroes();
    //console.log("Se acaba de montar");
  }

  getSuperHeroes = async () => {
    const url =
      "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json";
    const resp = await fetch(url);
    const data = await resp.json();
    const { results } = data;
    // Cambiar el estado
    this.setState({ superHeroes: results });
    //console.log(results);
  };
  // componentDidUpdate se actualiza el componente
  componentDidUpdate() {
    //console.log("Se acaba de actualizar");
  }
  // componentWillUnmount se desmonta el componente
  componentWillUnmount() {
    //console.log("Se acaba de desmontar");
  }

  render() {
    // Para llamar el estado
    console.log(this.state.superHeroes);
    return (
      <div>
        {this.state.superHeroes.map((heroe, index) => {
          return <Cards heroe={heroe} key={index}/>;
        })}
      </div>
    );
  }
}
