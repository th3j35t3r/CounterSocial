import React from 'react';
import Column from '../ui/components/column';
import ColumnLink from '../ui/components/column_link';
import ColumnSubheading from '../ui/components/column_subheading';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import { me } from '../../initial_state';

const messages = defineMessages({
  heading: { id: 'getting_started.heading', defaultMessage: 'Getting started' },
  home_timeline: { id: 'tabs_bar.home', defaultMessage: 'Home' },
  notifications: { id: 'tabs_bar.notifications', defaultMessage: 'Notifications' },
  public_timeline: { id: 'navigation_bar.public_timeline', defaultMessage: 'Federated timeline' },
  navigation_subheading: { id: 'column_subheading.navigation', defaultMessage: 'Navigation' },
  settings_subheading: { id: 'column_subheading.settings', defaultMessage: 'Settings' },
  community_timeline: { id: 'navigation_bar.community_timeline', defaultMessage: 'Local timeline' },
  preferences: { id: 'navigation_bar.preferences', defaultMessage: 'Preferences' },
  follow_requests: { id: 'navigation_bar.follow_requests', defaultMessage: 'Follow requests' },
  sign_out: { id: 'navigation_bar.logout', defaultMessage: 'Logout' },
  favourites: { id: 'navigation_bar.favourites', defaultMessage: 'Favourites' },
  blocks: { id: 'navigation_bar.blocks', defaultMessage: 'Blocked users' },
  mutes: { id: 'navigation_bar.mutes', defaultMessage: 'Muted users' },
  info: { id: 'navigation_bar.info', defaultMessage: 'Extended information' },
  pins: { id: 'navigation_bar.pins', defaultMessage: 'Pinned toots' },
  lists: { id: 'navigation_bar.lists', defaultMessage: 'Lists' },
  keyboard_shortcuts: { id: 'navigation_bar.keyboard_shortcuts', defaultMessage: 'Keyboard shortcuts' },
});

const mapStateToProps = state => ({
  myAccount: state.getIn(['accounts', me]),
  columns: state.getIn(['settings', 'columns']),
});

@connect(mapStateToProps)
@injectIntl
export default class GettingStarted extends ImmutablePureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
    myAccount: ImmutablePropTypes.map.isRequired,
    columns: ImmutablePropTypes.list,
    multiColumn: PropTypes.bool,
  };

  render () {
    const { intl, myAccount, columns, multiColumn } = this.props;

    const navItems = [];

    if (multiColumn) {
      if (!columns.find(item => item.get('id') === 'HOME')) {
        navItems.push(<ColumnLink key='0' icon='home' text={intl.formatMessage(messages.home_timeline)} to='/timelines/home' />);
      }

      if (!columns.find(item => item.get('id') === 'NOTIFICATIONS')) {
        navItems.push(<ColumnLink key='1' icon='bell' text={intl.formatMessage(messages.notifications)} to='/notifications' />);
      }

      if (!columns.find(item => item.get('id') === 'COMMUNITY')) {
        navItems.push(<ColumnLink key='2' icon='users' text={intl.formatMessage(messages.community_timeline)} to='/timelines/public/local' />);
      }

      
    }

    navItems.push(
      <ColumnLink key='4' icon='star' text={intl.formatMessage(messages.favourites)} to='/favourites' />,
      <ColumnLink key='5' icon='bars' text={intl.formatMessage(messages.lists)} to='/lists' />
    );

    if (myAccount.get('locked')) {
      navItems.push(<ColumnLink key='6' icon='users' text={intl.formatMessage(messages.follow_requests)} to='/follow_requests' />);
    }

    

    

    return (
      <Column icon='asterisk' heading={intl.formatMessage(messages.heading)} hideHeadingOnMobile>
        <div className='getting-started__wrapper'>
          <ColumnSubheading text={intl.formatMessage(messages.navigation_subheading)} />
          {navItems}
          <ColumnSubheading text={intl.formatMessage(messages.settings_subheading)} />
          
          <ColumnLink icon='volume-off' text={intl.formatMessage(messages.mutes)} to='/mutes' />
          <ColumnLink icon='ban' text={intl.formatMessage(messages.blocks)} to='/blocks' />
          <ColumnLink icon='globe' text="Network Status" href='https://dashboard.counter.social' />
          <ColumnLink icon='book' text="About CounterSocial" href='/about/more' />
          <ColumnLink icon='thumb-tack' text="Frequent Questions" href='https://counter.social/faq.html' />
          <ColumnLink icon='cog' text={intl.formatMessage(messages.preferences)} href='/settings/preferences' />
          <ColumnLink icon='sign-out' text={intl.formatMessage(messages.sign_out)} href='/auth/sign_out' method='delete' />
        </div>

        <div className='getting-started__footer scrollable optionally-scrollable'>
          
          
          
<div className='static-content getting-started' align="center">          
       

<table width="277"  border="0" align="center" bordercolor="#282c37" bgcolor="#282c37">
<tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
<td>
<div align="center">
<table width="100%"  border="0" align="center" bordercolor="#282c37" bgcolor="#282c37">
  <tr>
    <td height="66"><div align="center">
      <table width='100%'  border='0'>
       
        <tr>
          <td><div align="left" width="90%">We block 100K+ proxies and these nations:</div></td>
        </tr>
      </table>
    </div>
      <table width='100%'  border='0' align="center">
        <tr>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/russia.png' title='Russia' alt='Russia' width='33' height='33' /></div></td>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/china.png' title='China' alt='China' width='33' height='33' /></div></td>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/iran.png' title='Iran' alt='Iran' width='33' height='33' /></div></td>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/nk.png' title='North Korea' alt='North Korea' width='33' height='33' /></div></td>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/syria.png' title='Syria' alt='Syria' width='33' height='33' /></div></td>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/pakistan.png' title='Pakistan' alt='Pakistan' width='33' height='33' /></div></td>
          <td><div align='center'><img src='https://counter.social/CustomStuff/flags/ukraine.png' title='Ukraine' alt='Ukraine' width='33' height='33' /></div></td>
        </tr>
    </table>
      </td></tr>
</table> 
<table width="100%"  border="0">
  <tr>
    <td colspan="2"><div align="left" width="90%">Counter.Social is based on open protocols and is compatible with any Mastodon app:</div></td>
  </tr>
  <tr>
    <td width="50%"><div align="center"><a href="https://play.google.com/store/apps/details?id=com.keylesspalace.tusky&hl=en" target="_blank"><img src="https://counter.social/CustomStuff/gplay.png" border="0" /></a></div></td>
    <td width="50%"><div align="center"><a href="https://itunes.apple.com/us/app/amaroq-for-mastodon/id1214116200?mt=8" target="_blank"><img src="https://counter.social/CustomStuff/istore.png" border="0" /></a></div></td>
  </tr>
</table>
</div>
</td>
</tr> 
</table>        
       

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
</div>

                     

<table width="95%"  border="0" align="center">
  <tr>
    <td width="98%"><div align="left"><a href="https://keybase.io/th3j35t3r" target="_blank"><img src="https://counter.social/CustomStuff/jactual.png" width="221" height="19" border="0" /></a></div></td>
    <td width="2%"><div align="right"><a href="https://console.counter.social" target="_blank"><img src="https://counter.social/CustomStuff/pi.png" width="24" height="19" border="0" /></a></div></td>
  </tr>
</table>

        </div>
      </Column>
    );
  }

}
