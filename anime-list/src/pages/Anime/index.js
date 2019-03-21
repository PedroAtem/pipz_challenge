import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Anime extends Component {
  render() {
    return (
      <div>
        <Link className="link-details" to={`/`}>
          Voltar
        </Link>
        anime
      </div>
    )
  }
}
