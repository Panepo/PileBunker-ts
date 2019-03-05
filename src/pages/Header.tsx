import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles, withWidth } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconBookmark from '@material-ui/icons/Bookmarks';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LinkInterface, listLink, listDrawer } from '../constants/ConstLink';
import { isSmartphone } from '../helpers/responsive.helper';

export namespace Header {
  export interface Props extends WithStyles<typeof styles>, WithWidth {
  }
  export interface State {
    drawer: boolean;
  }
}

const styles = (theme: Theme) => createStyles({
  root: {},
  appBar: {
    position: 'relative'
  },
  button: {
    margin: theme.spacing.unit
  },
  drawer: {
    color: '#616161'
  },
  drawerTitle: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    color: '#651fff',
    marginLeft: -12,
    marginRight: 20
  }
});

class Header extends React.Component<Header.Props, Header.State> {
  state = {
    drawer: false
  };

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawer: open
    });
  }

  render(): JSX.Element {
    const renderLink = listLink.reduce((output: any[], data: LinkInterface) => {
      output.push(
        <Button
          color="primary"
          className={this.props.classes.button}
          key={data.text}
          href={data.link}>
          {data.text}
        </Button>
      );
      return output;
    },                                 []);

    const renderDrawer = (
      <List>
        {listDrawer.map((data: LinkInterface) => (
          <ListItem
            button
            divider
            key={data.text}
            component="a"
            href={data.link}>
            <ListItemIcon>
              <IconBookmark />
            </ListItemIcon>
            <ListItemText primary={data.text} />
          </ListItem>
        ))}
      </List>
    );

    return (
      <header className={this.props.classes.root}>
        <AppBar position="static" color="inherit" className={this.props.classes.appBar}>
          <Drawer
            className={this.props.classes.drawer}
            open={this.state.drawer}
            onClose={this.toggleDrawer(false)}>
            <Typography
              className={this.props.classes.drawerTitle}
              variant="h6"
              color="inherit"
              noWrap>
              Reference
            </Typography>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}>
              {renderDrawer}
            </div>
          </Drawer>
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={this.props.classes.grow}
              noWrap={!isSmartphone(this.props.width)}>
              <b>{isSmartphone(this.props.width) ? '武器傷害機算機パイルバンカー' : '城プロRE 武器傷害機算機 蓬萊パイルバンカー'}</b>
            </Typography>
            {isSmartphone(this.props.width) ? null : renderLink}
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default withStyles(styles)((withWidth()(Header)));
