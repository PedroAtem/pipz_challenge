import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AnimesActions from '../../store/actions';

import './styles.scss';

import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Anime extends Component {
  componentDidMount() {
    this.props.requestAnime(this.props.match.params.id);
  }

  render() {
    const { anime } = this.props.animes;

    return (
      <div>
        <div className="back-button">
          <Link to={`/`}>
            <Button variant="contained" size="small" color="primary">
              Back
            </Button>
          </Link>
        </div>
        {anime ? anime.attributes ? (
          <Card className="anime">
            <div className="anime-title">
              <Typography>{anime.attributes.canonicalTitle}</Typography>
            </div>
            <div className="anime-poster">
              <img src={anime.attributes.posterImage.original} />
            </div>
            <div className="anime-avarage">
              <Typography>{anime.attributes.averageRating}</Typography>
            </div>
            <div className="anime-start">
              <Typography>{anime.attributes.startDate}</Typography>
            </div>
            <div className="anime-end">
              <Typography>{anime.attributes.endDate}</Typography>
            </div>
            <div className="anime-status">
              <Typography>{anime.attributes.status}</Typography>
            </div>
          </Card>
        ) : null : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    animes: state.animes,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(AnimesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Anime);
