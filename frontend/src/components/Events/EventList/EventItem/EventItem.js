import React from 'react';
import { Paper, Button, Avatar, IconSeparator } from 'react-md';
import './EventItem.css';

const eventItem = props => (

  <Paper
    key={props.eventId}
    zDepth={3}
    className="events__list-item"
  >
    <div>
      <h1>{props.title}</h1>
      <h2>
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (

        <Item label="Your the owner of this event.">
          <Avatar random>{props.title}</Avatar>
        </Item>
      ) : (
          <Button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>
            View Details
        </Button>
        )}
    </div>
  </Paper>

);

const Item = ({ label, children }) => (
  <IconSeparator label={label} iconBefore component="li" className="md-cell md-cell--12">
    {children}
  </IconSeparator>
);

export default eventItem;
