import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AssignmentIndOutlined, AttachMoneyOutlined, ForumOutlined, HomeOutlined, OndemandVideoOutlined, PageviewOutlined, SecurityOutlined, TrendingUpOutlined, VerifiedUserOutlined } from '@material-ui/icons';
import WifiIcon from '@material-ui/icons/Wifi'
import styles from './DesktopLeftMenu.module.scss'

const mainMenus = [
  {
    label: 'Início',
    linkTo: '#',
    Icon: HomeOutlined,
  },
  {
    label: 'Artigos',
    linkTo: '#',
    Icon: PageviewOutlined,
  },
  {
    label: 'Vídeos',
    linkTo: '#',
    Icon: OndemandVideoOutlined,
  },
  {
    label: 'Lista de Profissões',
    linkTo: '#',
    Icon: AssignmentIndOutlined,
  },
];

const secondaryMenus = [
  {
    label: 'Entrevistando Profissionais',
    linkTo: '#',
    Icon: ForumOutlined,
  },
  {
    label: 'Votações e Resultados',
    linkTo: '#',
    Icon: TrendingUpOutlined,
  },
  {
    label: 'Equipe',
    linkTo: '#',
    Icon: VerifiedUserOutlined,
  },
  {
    label: 'Consultoria de TI',
    linkTo: '#',
    Icon: SecurityOutlined,
  },
]

export default function DesktopLeftMenu() {
  return (
    <div className={styles.container}>
      <List dense>
        {mainMenus.map(({ label, linkTo, Icon }, index) => {
          return (
            <a title={label} href={linkTo} className={styles.menuItem}>
              <ListItem
                key={index}
              >
                <ListItemIcon className={styles.menuIcon}>
                  <Icon />
                </ListItemIcon>
                <ListItemText className={styles.menuText} primary={label} />
              </ListItem>
            </a>
          );
        })}

        <div className={styles.menuDivider}>&nbsp;</div>

        {secondaryMenus.map(({ label, linkTo, Icon }, index) => {
          return (
            <a title={label} href={linkTo} className={styles.menuItem}>
              <ListItem
                key={index}
              >
                <ListItemIcon className={styles.menuIcon}>
                  <Icon />
                </ListItemIcon>
                <ListItemText className={styles.menuText} primary={label} />
              </ListItem>
            </a>
          );
        })}
      </List>
    </div>
  )
}
