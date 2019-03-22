import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AnimesActions from '../../store/actions';

import './styles.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';

const Animes = ({ animes, requestAnimes }) => (
  <div>
    <Card className="title-card">
      <Typography variant="h4">
        Animes list
      </Typography>
      <button onClick={() => requestAnimes()}>Carregar todos</button>
      {/* <form noValidate autoComplete="off">
        <TextField
          id="filter-input"
          label="Filter"
          className="filter-input"
          onChange={this.filter}
          margin="normal"
        />
      </form> */}
    </Card>
    <div className="animes">
      {animes.data.map((anime, index) => (
        <Card key={index} className="anime">
          <CardHeader
            title={anime.canonicalTitle}
          />
          <CardMedia
            className="anime-poster-image"
            image={anime.posterImage}
          />
          <CardContent>
            <Typography variant="h5">
              {anime.averageRating}
            </Typography>
            <Typography component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions className="actions">
            <Link className="link-details" to={`/anime/${index}`}>
              <Button variant="outlined" color="secondary" size="small">
                Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  </div>
)

const mapStateToProps = state => {
  console.log(state)
  return {
    animes: state.animes,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(AnimesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Animes);

// export default class Animes extends Component {
  

//   componentWillMount() {
//     const { animes } = this.state;
//     this.state.filtered_animes = animes;
//   }

//   filter = event => {
//     const text = event.target.value;
//     this.setState({
//       filter_text: text
//     });
//     const filtered_animes = this.state.animes.filter(anime => {
//       if (anime.canonicalTitle.toLowerCase().indexOf(text.toLowerCase()) > -1) {
//         return anime
//       }
//     });
//     this.setState({ filtered_animes })
//   }

//   render() {
//     const { filtered_animes } = this.state;
//     return (
      
//     )
//   }
// }
