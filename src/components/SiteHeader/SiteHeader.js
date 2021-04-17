import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import styles from './SiteHeader.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
import { siteUrl } from '../../lib/utils/url.utils'

export default function SiteHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.title}>
          <a href={siteUrl('/')}>
            Brasil Home Office
          </a>
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  )
}
