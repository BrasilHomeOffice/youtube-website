import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Paper, Switch } from '@material-ui/core';
import styles from './CareerUserActions.module.scss'
import WifiIcon from '@material-ui/icons/Wifi'
import { useState } from 'react';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

const _userActions = [
  {
    label: 'Quero mais vídeos',
    slug: 'want-videos',
    active: true,
  },
  {
    label: 'Quero mais notícias',
    slug: 'want-news',
    active: false,
  },
  {
    label: 'Quero estudar',
    slug: 'want-study',
    active: false,
  },
  {
    label: 'Já fiz algum curso',
    slug: 'did-course',
    active: false,
  },
  {
    label: 'Já trabalho na área',
    slug: 'working',
    active: false,
  },
];

export default function CareerUserActions({
  positionSlug,
}) {

  const [userActions, setUserActions] = useState(_userActions);

  const onChangeUserAction = (actionIndex) => {
    const ua = [...userActions];
    ua[actionIndex].active = !ua[actionIndex].active;
    setUserActions(ua);
  };

  return (
    <Paper elevation={4}>
      <List
        dense
        subheader={
          <ListSubheader>O que você acha dessa profissão?</ListSubheader>
        }
      >
        {userActions.map(({ slug, label, active }, index) => {
          return (
            <ListItem
              key={slug}
              className={styles.actionItem}
              onClick={() => onChangeUserAction(index)}
            >
              <ListItemIcon>
                <WifiIcon />
              </ListItemIcon>
              <Switch
                edge="start"
                color="primary"
                onChange={() => onChangeUserAction(index)}
                checked={active}
                inputProps={{ 'aria-labelledby': `action-${slug}` }}
              />
              <ListItemText id={`action-${slug}`} primary={label} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
