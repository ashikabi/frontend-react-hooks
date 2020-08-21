import React, { useContext } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Delete from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './style'
import { FavoriteContext } from "../../context/FavoriteContext"


const _comicDetails = (item) =>{
  return (
    <ul>
      <li>
        Number of pages: { item.pageCount }
      </li>
      <li>
        Prices: ${ item.prices[0].price || 0.00 }
      </li>
      <li>
        Creators: { item.creators.items.map((creator) => `${creator.name}(${creator.role})`).join(", ") }
      </li>
    </ul>
  );
}

const _characterDetails = (item) =>{
  return (
    <ul>
      <li>
        Total of Comics: { item.comics.available }
      </li>
      <li>
        Total of Series: { item.series.available }
      </li>
      <li>
        Total of Stories: { item.stories.available }
      </li>
      <li>
        Total of Events: { item.events.available }
      </li>
    </ul>
  );
}

const _serieDetails = (item) =>{
  return (
    <ul>
      <li>
        Start Year: {item.startYear} - End Year: {item.endYear}
      </li>
      <li>
        Creators: { item.creators.items.map((creator) => `${creator.name}(${creator.role})`).join(", ") }
      </li>
    </ul>
  );
}

const _characterExtraResources = (item) =>{
  return (
    <ul>
            {
              item.urls.map((extras) => {
                return (
                  <li>
                    <a href={extras.url} >{extras.type}</a>
                  </li>
                )
              })
            }
          </ul>
  );
}

export default function CustomCard({ item }) {
  //console.log(".......................customCard..........................")
  //console.log(item)
  const {favorites, dispatch} = useContext(FavoriteContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
  <div style={{ margin:"50px" }} >
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
        }
        title={item.name || item.title}
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        title={item.name || item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { item.name? _characterDetails(item) : null }
          { item.format=="Comic"? _comicDetails(item) : null }
          { item.type? _serieDetails(item) : null }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.icon} onClick={() => dispatch({type: "SET_FAVORITE", favoriteItem: item}) } />
        </IconButton>
        <IconButton aria-label="share">
          <Delete className={classes.icon} onClick={() => dispatch({type: "REMOVE_FAVORITE", id: item.id}) } />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            {item.description || item.variantDescription}
          </Typography>
          <Typography>
            { item.urls? _characterExtraResources(item) : null }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  );
}