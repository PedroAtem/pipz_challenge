import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AnimesActions from '../../store/actions';
import './styles.scss';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

class Animes extends Component {
  componentDidMount() {
    this.props.requestAnimes();
  }

  filterByText = () => event => {
    let filter = event.target.value;
    if (filter != '') {
      filter = `filter[text]=${filter}`;
    }
    this.props.requestAnimesFromUrl(`urlwillbeignored?${filter}`);
  };
  
  state = {
    firstPage: () => {
      const { links } = this.props.animes.list;
      this.props.requestAnimesFromUrl(links.first);
    },
    prevPage: () => {
      const { links } = this.props.animes.list;
      this.props.requestAnimesFromUrl(links.prev);
    },
    nextPage: () => {
      const { links } = this.props.animes.list;
      this.props.requestAnimesFromUrl(links.next);
    },
    lastPage: () => {
      const { links } = this.props.animes.list;
      this.props.requestAnimesFromUrl(links.last);
    }
  }
  
  render() {
    const { animes } = this.props;
    const { links } = animes.list || {};

    return (
      <div>
        <Card className="flex-header">
          <TextField
            id="input-filter"
            label="Filter text"
            onChange={this.filterByText()}
          />
          <div className="separator"></div>
          {links ? links.first ? <Button variant="outlined" size="small" color="primary" onClick={this.state.firstPage}>First</Button> : null : null}
          {links ? links.prev ? <Button variant="outlined" size="small" color="primary" onClick={this.state.prevPage}>Prev</Button> : null : null}
          {links ? links.next ? <Button variant="outlined" size="small" color="primary" onClick={this.state.nextPage}>Next</Button> : null : null}
          {links ? links.last ? <Button variant="outlined" size="small" color="primary" onClick={this.state.lastPage}>Last</Button> : null : null}
        </Card>
        <div className="flex-table">
          <Card className="row row-title">
            <div className="col">
            <Typography>Image</Typography>
            </div>
            <div className="col">
              <Typography>Canonical Title</Typography>
            </div>
            <div className="col">
              <Typography>Average Rating</Typography>
            </div>
            <div className="col">
              <Typography>Start Date</Typography>
            </div>
            <div className="col">
              <Typography>End Date</Typography>
            </div>
            <div className="col">
              <Typography>Status</Typography>
            </div>
            <div className="col">
              <Typography>Action</Typography>
            </div>
          </Card>
          {animes.list ? animes.list.data ? animes.list.data.map((anime, index) => (
            <Card className="row" key={index}>
              <div className="col">
                {anime.attributes.posterImage ? <img className="poster" src={anime.attributes.posterImage.original} /> : null}
              </div>
              <div className="col">
                <Typography>{anime.attributes.canonicalTitle}</Typography>
              </div>
              <div className="col">
                <Typography>{anime.attributes.averageRating}</Typography>
              </div>
              <div className="col">
                <Typography>{anime.attributes.startDate}</Typography>
              </div>
              <div className="col">
                <Typography>{anime.attributes.endDate}</Typography>
              </div>
              <div className="col">
                <Typography>{anime.attributes.status}</Typography>
              </div>
              <div className="col">
                <Link to={`/anime/${anime.id}`}>
                  <Button variant="outlined" size="small" color="primary">
                    Details
                  </Button>
                </Link>
              </div>
            </Card>
          )) : null : null}
        </div>
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

const AnimesComponent = connect(mapStateToProps, mapDispatchToProps)(Animes);

export default AnimesComponent
