import React from 'react';

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

export default function CustomCard({ item }) {
  //console.log(".......................customCard..........................")
  //console.log(item)
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
        title={item.name}
        className={classes.title}
      />
      <CardMedia
        className={classes.media}
        image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        title={item.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
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
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.icon} onClick={() => console.log("press favorite...") } />
        </IconButton>
        <IconButton aria-label="share">
          <Delete className={classes.icon} onClick={() => console.log("press delete...") } />
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
            {item.description}
          </Typography>
          <Typography>
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
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
  );
}