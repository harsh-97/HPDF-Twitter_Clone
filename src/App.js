import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Mui from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red500, white, blue500, green500, grey100, grey200, grey300, grey400, grey600} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import HomeIcon from 'material-ui/svg-icons/action/home';
import LightningIcon from 'material-ui/svg-icons/image/flash-on';
import SearchIcon from 'material-ui/svg-icons/action/search';
import NotificationIcon from 'material-ui/svg-icons/social/notifications-none';
import PersonIcon from 'material-ui/svg-icons/social/person';
import ListIcon from 'material-ui/svg-icons/action/view-list';
import AtomIcon from 'material-ui/svg-icons/hardware/toys';
import GraphIcon from 'material-ui/svg-icons/device/graphic-eq';
import MoonIcon from 'material-ui/svg-icons/image/brightness-3';
import PhotoIcon from 'material-ui/svg-icons/editor/insert-photo';
import GifIcon from 'material-ui/svg-icons/action/gif';
import PollIcon from 'material-ui/svg-icons/social/poll';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import MessageIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';
import RetweetIcon from 'material-ui/svg-icons/av/loop';
import LikeIcon from 'material-ui/svg-icons/action/thumb-up';
import DMIcon from 'material-ui/svg-icons/communication/mail-outline';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExpandIcon from 'material-ui/svg-icons/navigation/expand-more';
import LockIcon from 'material-ui/svg-icons/action/lock';
import PeopleIcon from 'material-ui/svg-icons/social/people-outline';
import LaunchIcon from 'material-ui/svg-icons/action/launch';

import logo from './logo.svg';
import user1DP from './User1.jpg';
import user2DP from './User2.jpg';
import user3DP from './User3.jpg';
import tweetImage from './tweetMedia.jpg';
import tweetImage2 from './tweetMedia2.jpg';
import banner from './Banner.jpg';

import './App.css';


const muiTheme = getMuiTheme({
		palette: {
			primary1Color: white,
			alternateTextColor: green500,
			accent1Color: green500,
		},
		fontFamily: 'Arial, sans-serif',
});


function Hyperlink(props){
	return (
			<a href={props.redirectTo} className={props.className}>{props.displayText}</a>
		);
}


const capsuleButtonStyles = {
	followButton: {
		buttonProps:{
			height: '24px',
			backgroundColor: 'transparent',
			borderColor: muiTheme.palette.alternateTextColor,
			marginLeft: '5%',
			paddingLeft: '10%',
			paddingRight: '10%',
		},
		fontProps:{
			fontSize: '12px',
			fontWeight: 'bold',	
			color: muiTheme.palette.alternateTextColor,
		},
	},
	requestButton: {
		buttonProps:{
			height: '32px',			
			backgroundColor: 'transparent',
			borderColor: muiTheme.palette.alternateTextColor,
		},
		fontProps:{
			fontSize: '12px',
			fontWeight: 'bold',	
			color: muiTheme.palette.alternateTextColor,
		},
	},
	tweetTopBarButton: {
		buttonProps:{
			height: '34px',
			backgroundColor: muiTheme.palette.alternateTextColor,
			borderColor: muiTheme.palette.alternateTextColor,
		},
		fontProps:{
			fontSize: '14px',
			color: white,
			fontWeight: 'bold',	

		},
	},
};


function CapsuleButton(props){
	return (
		<button className='capsuleButton' style={props.className.buttonProps} onClick={() => window.location.href = props.redirectTo}>
			<span style={props.className.fontProps}>{props.buttonText}</span>
		</button>
		);
}


const iconLabelStyle = {
	fontColor: muiTheme.palette.alternateTextColor,
	fontWeight: 'bold',
	fontSize: '13px',
	display: 'flex',
	alignItems: 'center',
	textTransform: 'none',
};


function Home(props){
	return(
		<div style={iconLabelStyle}>
			<HomeIcon style={{height: 24, width: 24}} color={muiTheme.palette.alternateTextColor}/>
			<span style={{marginLeft: '2%'}}>Home</span>
		</div>
		);
}


function Moments(props){
	return(
		<div style={iconLabelStyle}>
			<LightningIcon style={{height: 24, width: 24}} color={muiTheme.palette.alternateTextColor}/>
			<span style={{marginLeft: '2%'}}>Moments</span>
		</div>
		);
}


function Notifications(props){
	return(
		<div style={iconLabelStyle}>
			<NotificationIcon style={{height: 24, width: 24}} color={muiTheme.palette.alternateTextColor}/>
			<span style={{marginLeft: '2%'}}>Notifications</span>
		</div>
		);
}


function Messages(props){
	return(
		<div style={iconLabelStyle}>
			<DMIcon style={{height: 24, width: 24}} color={muiTheme.palette.alternateTextColor}/>
			<span style={{marginLeft: '2%'}}>Messages</span>
		</div>
		);
}


function TopBarLeft(props){
	return(
		<Tabs className={props.className} initialSelectedIndex={props.initialIndex}>
			<Tab icon={<Home/>} href="/"/>
			<Tab icon={<Moments/>}/>
			<Tab icon={<Notifications/>}/>
			<Tab label={<Messages/>}/>
		</Tabs>
		);
}


function NewTweetButton(props){
	return(
		<CapsuleButton className={capsuleButtonStyles.tweetTopBarButton} buttonText='Tweet' redirectTo={props.redirectTo}/>
		);
}


const searchBarStyle = {
	div: {
		borderRadius: '500px',
		borderStyle: 'solid',
		borderWidth: '1px',
		paddingLeft: '10px',
		paddingRight: '10px',
		paddingTop: '5px',
		paddingBottom: '5px',
		width: '60%',
		display: 'flex',
		alignItems: 'center',
		background: grey100,
		borderColor: grey200,
	},
	input: {
		borderWidth: '0px',
		fontSize: '12px',
		width: '100%',
		background: grey100,
	},
};


function Search(props){
	return(
		<div style={searchBarStyle.div}>
			<input type='text' placeholder='Search Twitter' style={searchBarStyle.input} defaultValue={props.query}/>
			<IconButton style={{height: 24, width: 24, padding: 0}} href="/search">
				<SearchIcon style={{height: 24, width: 24}} color={grey600}/>
			</IconButton>
		</div>
		);
}


function ProfileDropdown(props){
	return(
			<Popover
				open={props.open}
				anchorEl={props.anchorEl}
				anchorOrigin={props.anchorOrigin}
				targetOrigin={props.targetOrigin}
				onRequestClose={props.handleClose}
				style={{borderRadius: '2%'}}>
				<Menu desktop={true} selectedMenuItemStyle={{color: muiTheme.palette.alternateTextColor}}>
					<div style={{paddingLeft: '5%',}}>
						<span style={{fontWeight: 'bold', fontSize: '18px'}}>{props.name}</span>
						<LockIcon style={{height: 16, width: 16}} color='black'/>
						<br/>
						<span style={{color: grey600, fontSize: '14px'}}>  @{props.userID} </span>
					</div>
					<Divider/>
	        	    <MenuItem className="menuOption" leftIcon={<PersonIcon/>} primaryText="Profile"/>
		            <MenuItem className="menuOption" leftIcon={<ListIcon/>} primaryText="Lists" />
		            <MenuItem className="menuOption" leftIcon={<LightningIcon/>} primaryText="Moments" />
		            <Divider/>
		            <MenuItem className="menuOption" leftIcon={<AtomIcon/>} primaryText="Promote Mode" />
		            <MenuItem className="menuOption" leftIcon={<LaunchIcon/>} primaryText="Twitter Ads" />
		            <MenuItem className="menuOption" leftIcon={<GraphIcon/>} primaryText="Analytics" />
		            <Divider/>
		            <MenuItem className="menuOption" primaryText="Settings and privacy" />
		            <MenuItem className="menuOption" primaryText="Help Center" />
		            <MenuItem className="menuOption" primaryText="Keyboard shortcuts" />
		            <MenuItem className="menuOption" primaryText="Log out" />
		            <Divider/>
		            <MenuItem className="menuOption" rightIcon={<MoonIcon color={muiTheme.palette.alternateTextColor}/>} primaryText="Night mode" />
	            </Menu>
	        </Popover>
		);
}


class TopBarRight extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			className: props.className,
			query: props.query,
			redirectTo: props.redirectTo,
			profilePicture: props.profilePicture,
			userID: props.userID,
			name: props.name,
			dropdownOpen: false,
			anchorOrigin: {
		        horizontal: 'left',
		        vertical: 'bottom',
	        },
	    	targetOrigin: {
		        horizontal: 'middle',
		        vertical: 'top',
	      	},
		}
	}

	handleClick = (event) => {
		event.preventDefault();
		this.setState({
			dropdownOpen: true,
			anchorEl: event.currentTarget,
		});
	}

	handleClose = () => {
		this.setState({
			dropdownOpen: false,
		});
	}

	render(){
		return(
			<div className={this.state.className}>
				<Search query={this.state.query} redirectTo={this.state.redirectTo}/>
				<Avatar src={this.state.profilePicture} size={36} onClick={this.handleClick}/>
				<ProfileDropdown open={this.state.dropdownOpen} anchorEl={this.state.anchorEl}
					anchorOrigin={this.state.anchorOrigin} targetOrigin={this.state.targetOrigin} 
					handleClose={this.handleClose} userID={this.state.userID} name={this.state.name}/>
				<NewTweetButton redirectTo={this.state.redirectTo}/>
			</div>
			);
	}
}


function TopBar (props){
	return(
		<Paper className='topBar' style={{color: muiTheme.palette.primary1Color}}>
				<TopBarLeft className='topBarLeft' initialIndex={props.initialIndex}/>
				<a href="/"><img src={logo} style={{height: '42px'}} alt="App Logo"/></a>
				<TopBarRight className='topBarRight' profilePicture={props.profilePicture} query={props.query} redirectTo={props.redirectTo} userID={props.userID} name={props.name}/>
		</Paper>
		);
}


const querySelectorStyles = {
	fontWeight: 'bold',
	fontSize: '13px',
	textTransform: 'none',
};


function QuerySelectors(props){
	return(
		<Tabs className='querySelectors' initialSelectedIndex={props.initialIndex}>
			<Tab style={querySelectorStyles} label="Top">
			</Tab>
			<Tab style={querySelectorStyles} label="Latest">
			</Tab>
			<Tab style={querySelectorStyles} label="People">
			</Tab>
			<Tab style={querySelectorStyles} label="Photos">
			</Tab>
			<Tab style={querySelectorStyles} label="Videos">
			</Tab>
			<Tab style={querySelectorStyles} label="News">
			</Tab>
			<Tab style={querySelectorStyles} label="Broadcasts">
			</Tab>
		</Tabs>
		);
}


function MoreSearchOptions(props){
	return(
		<Popover
			open={props.open}
			anchorEl={props.anchorEl}
			anchorOrigin={props.anchorOrigin}
			targetOrigin={props.targetOrigin}
			onRequestClose={props.handleClose}
			style={{borderRadius: '3%'}}>
			<Menu desktop={true}>
				<MenuItem className="menuOption">
					<div>
						<span>Search settings</span><br/>
						<span style={{color: grey400, fontSize: '12px'}}>Hiding sensitive content</span>
					</div>
				</MenuItem>
	            <Divider/>
	            <MenuItem className="menuOption" primaryText="Save this search" />
	            <MenuItem className="menuOption" primaryText="Embed this search" />
            </Menu>
		</Popover>
		);
}


class QueryBar extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			initialIndex: props.initialIndex,
			query: props.query,
			dropdownOpen: false,
			anchorOrigin: {
		        horizontal: 'left',
		        vertical: 'bottom',
	        },
	    	targetOrigin: {
		        horizontal: 'middle',
		        vertical: 'top',
	      	},
		};
	}

	handleClick = (event) => {
		event.preventDefault();
		this.setState({
			dropdownOpen: true,
			anchorEl: event.currentTarget,
		});
	}

	handleClose = () => {
		this.setState({
			dropdownOpen: false,
		});
	}

	render()
	{
		return (
			<div className='queryBar'>
				<Paper className='queryLabel' style={{background: muiTheme.palette.alternateTextColor}}>
					<span>{this.state.query}</span>
				</Paper>
				<Paper style={{background: white, display: 'flex', justifyContent: 'space-between'}}>
					<QuerySelectors initialIndex={this.state.initialIndex}/>
					<IconButton tooltip="More search actions" tooltipPosition="bottom-center" onClick={this.handleClick} style={{paddingRight: '7%'}}>
						<MoreIcon size={10}/>
					</IconButton>
					<MoreSearchOptions open={this.state.dropdownOpen} anchorEl={this.state.anchorEl}
						anchorOrigin={this.state.anchorOrigin} targetOrigin={this.state.targetOrigin} 
						handleClose={this.handleClose} userID={this.state.userID} name={this.state.name}/>
				</Paper>
			</div>
		);
	}
}


function NewTweetActions(props){
	return(
		<div style={{width: '100%', paddingLeft: '5%'}}>
			<IconButton iconStyle={{width: 30, height: 30}} style={{width: 30, height: 30, padding: 0, marginRight: '5%'}} href={props.redirectTo}>
				<PhotoIcon color={muiTheme.palette.primary1Color}/>
			</IconButton>
			<IconButton iconStyle={{width: 30, height: 30}} style={{width: 30, height: 30, padding: 0, marginRight: '5%'}} href={props.redirectTo}>
				<GifIcon color={muiTheme.palette.primary1Color}/>
			</IconButton>
			<IconButton iconStyle={{width: 30, height: 30}} style={{width: 30, height: 30, padding: 0, marginRight: '5%'}} href={props.redirectTo}>
				<PollIcon color={muiTheme.palette.primary1Color}/>
			</IconButton>
			<IconButton iconStyle={{width: 30, height: 30}} style={{width: 30, height: 30, padding: 0, marginRight: '5%'}} href={props.redirectTo}>
				<LocationIcon color={muiTheme.palette.primary1Color}/>
			</IconButton>
		</div>
	);
}


class NewTweetWindow extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			profilePicture: props.profilePicture,
			handleBlur: props.handleBlur,
		};
	}

	render(){
		return(
			<div className='newTweet' style={{background: muiTheme.palette.alternateTextColor, opacity: '0.3'}}>
				<Avatar src={this.state.profilePicture} size={30}/>
				<div style={{width: '100%', paddingRight: '5%'}}>
					<textarea style={{backgroundColor: white, color: muiTheme.palette.alternateTextColor}} className='newTweetInput' placeholder="What's happening?" onBlur={this.state.handleBlur} rows={4}/>
					<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
						<NewTweetActions redirectTo="/"/>
						<NewTweetButton redirectTo="/"/>
					</div>
				</div>
			</div>
		);
	}
}


function NewTweetPlaceholder(props){
	return(
		<div className='newTweet' style={{background: muiTheme.palette.alternateTextColor, opacity: '0.3'}}>
			<Avatar src={props.profilePicture} size={30}/>
			<input type='text' style={{backgroundColor: white, color: muiTheme.palette.alternateTextColor}} className='newTweetPlaceholder' placeholder="What's happening?" onClick={props.handleClick}/> 
			<IconButton iconStyle={{width: 30, height: 30}} style={{width: 30, height: 30, padding: 0}} href="/">
				<PhotoIcon color={muiTheme.palette.primary1Color}/>
			</IconButton>
		</div>
		);
}


class NewTweet extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expand: false,
			profilePicture: props.profilePicture,
		};
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleClick = (event) => {
		event.preventDefault();
		this.setState({expand: true});
	}

	handleBlur(event) {
		this.setState({expand: false});
	}

	render(){
		return (	
			<div className='tweet'>
				{
					this.state.expand ? 
					<NewTweetWindow profilePicture={this.state.profilePicture} handleBlur={this.handleBlur}/>
					:
					<NewTweetPlaceholder profilePicture={this.state.profilePicture} handleClick={this.handleClick}/>
				}
			</div>
		);
	}
}


function TweetOptions(props){
	return (
		<Popover
			open={props.open}
			anchorEl={props.anchorEl}
			anchorOrigin={props.anchorOrigin}
			targetOrigin={props.targetOrigin}
			onRequestClose={props.handleClose}
			style={{borderRadius: '3%'}}>
			<Menu desktop={true}>
        	    <MenuItem className="tweetOption" primaryText="Copy link to Tweet" />
	            <MenuItem className="tweetOption" primaryText="Embed Tweet" />
	            <MenuItem className="tweetOption" primaryText={"Mute @" + props.userID} />
	            <MenuItem className="tweetOption" primaryText={"Block @" + props.userID} />
	            <MenuItem className="tweetOption" primaryText="Report Tweet" />
	            <MenuItem className="tweetOption" primaryText="I don't like this Tweet" />
	            <Divider/>
	            <MenuItem className="tweetOption" primaryText="Add to new moment" />
            </Menu>
        </Popover>
		);
}


function TweetActions(props){
	return (
		<div className='tweetActions'>
			<IconButton iconStyle={{width: 16, height: 16}} style={{width: 16, height: 16, marginRight: '5%'}} href={props.redirectTo}>
				<MessageIcon color={blue500}/>
			</IconButton>
			<IconButton iconStyle={{width: 16, height: 16}} style={{width: 16, height: 16, marginRight: '5%'}} href={props.redirectTo}>
				<RetweetIcon color={green500}/>
			</IconButton>
			<IconButton iconStyle={{width: 16, height: 16}} style={{width: 16, height: 16, marginRight: '5%'}} href={props.redirectTo}>
				<LikeIcon color={red500}/>
			</IconButton>
			<IconButton iconStyle={{width: 16, height: 16}} style={{width: 16, height: 16, marginRight: '5%'}} href={props.redirectTo}>
				<DMIcon color={muiTheme.palette.alternateTextColor}/>
			</IconButton>
		</div>
		);
}


class Tweet extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			userID: props.userID,
			profilePicture: props.profilePicture,
			name: props.name,
			image: props.image,
			timeSince: props.timeSince,
			redirectTo: props.redirectTo,
			content: props.content,
			tweetOptionsOpen: false,
			anchorOrigin: {
		        horizontal: 'left',
		        vertical: 'bottom',
	        },
	    	targetOrigin: {
		        horizontal: 'left',
		        vertical: 'top',
	      	},
		};
	}

	handleClick = (event) => {
		event.preventDefault();
		this.setState({
			tweetOptionsOpen: true,
			anchorEl: event.currentTarget,
		});
	};

	handleClose = () => {
		this.setState({
			tweetOptionsOpen: false,
		});
	};

	render () {
		return(
			<Paper zDepth={0}>
				<div style={{display: 'flex', padding: '1%'}}>
					<Avatar src={this.state.profilePicture} size={45}/>
					<div style={{width: '100%'}}>
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<div>
								<span className='name'>{this.state.name}</span>
								<span className='handle'>  @{this.state.userID} <b> . </b>
									<Hyperlink displayText={this.state.timeSince + 'm'} redirectTo={this.state.redirectTo} className='infoLink'/>
								</span>
							</div>
							<IconButton iconStyle={{width: 16, height: 16}} style={{width: 16, height: 16, marginRight: '5%'}} onClick={this.handleClick}>
								<ExpandIcon size={10}/>
							</IconButton>
						</div>
						<div className='tweetContent'>
							{this.state.content}
						</div>
						<div>
							<a href='/'><img className='tweetImage' src={this.state.image} height={'20%'} width={'98%'} alt=''/></a>
						</div>
						<TweetActions redirectTo={this.state.redirectTo}/>
					</div>
				</div>
				<TweetOptions open={this.state.tweetOptionsOpen} anchorEl={this.state.anchorEl} 
					anchorOrigin={this.state.anchorOrigin} targetOrigin={this.state.targetOrigin}
					handleClose={this.handleClose} userID={this.state.userID}/>
			</Paper>
		);	
	}
}


class Feed extends React.Component{
	constructor(props)
	{
		super(props);
		this.state =
		{
			tweets: props.tweets,
			profilePicture: props.profilePicture,
			redirectTo: props.redirectTo,
		};
	}

	render()
	{
		return(
			<div>
				{
					this.state.tweets.map(tweet => <div className="tweet" key={tweet[0]}>
						<Tweet 
							userID={tweet[2]}
							name={tweet[1]}
							profilePicture={tweet[3]}
							content={tweet[4]}
							timeSince={tweet[0]}
							redirectTo={this.state.redirectTo}
							image={tweet[5]}/>
						<Divider/>
					</div>)
				}
			</div>
			);
	}
}


function ProfileInfo(props) {
	return(
		<Paper className='leftContentBox' zDepth={0}>
			<div>
				<a href='/'><img src={props.bannerPicture} height={80} width={'100%'} alt="Profile Banner"/></a>
			</div>
			<div className='profileInfo'>
				<a href='/'><Avatar src={props.profilePicture} className='profilePictureFrame' size={60}/></a>
				<div className='profileNameWrapper'>
					<span style={{fontWeight: 'bold', fontSize: '18px'}}>{props.name}</span>
					<LockIcon style={{height: 16, width: 16}} color='black'/>
					<br/>
					<span style={{color: grey600, fontSize: '14px'}}>  @{props.userID} </span>
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '5%'}}>
				<div>
					<span className="profileStatsHeader" style={{color: grey600}}>Tweets</span><br/>
					<span className="profileStatsInfo" style={{color: muiTheme.palette.alternateTextColor}}>36</span>
				</div>
				<div>
					<span className="profileStatsHeader" style={{color: grey600}}>Following</span><br/>
					<span className="profileStatsInfo" style={{color: muiTheme.palette.alternateTextColor}}>101</span>
				</div>
				<div>
					<span className="profileStatsHeader" style={{color: grey600}}>Followers</span><br/>
					<span className="profileStatsInfo" style={{color: muiTheme.palette.alternateTextColor}}>42</span>
				</div>
			</div>
		</Paper>
		);
}


function FollowerRequests(props) {
	return(
		<Paper className='leftContentBox' zDepth={0}>
			<CapsuleButton 
				className={capsuleButtonStyles.requestButton} 
				buttonText={props.numberOfRequests + ' new follower requests'}
				redirectTo='/'/>
		</Paper>
		);
}


function Trend(props){
	return (
			<div className='trend'>
				<span><Hyperlink redirectTo={props.redirectTo} displayText={"#" + props.title} className='trendLink'/></span><br/>
				{props.stats !== '' &&
					<span className='trendStats'>{props.stats}</span>
				}
			</div>
		);
}


class Trends extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			trends: props.trends,
			redirectTo: props.redirectTo,
		}
	}

	render()
	{
		return (
			<Paper zDepth={0} className="leftContentBox">
				<span style={{fontSize: 18}}>
					<b>Trends for you</b> . <Hyperlink redirectTo={this.state.redirectTo} displayText='Change' className='altColorLink'/>
				</span>
				<div>
				{
					this.state.trends.map(trend => <div key={trend[0]}> <Trend id={trend[0]} title={trend[1]} stats={trend[2]} redirectTo={this.state.redirectTo}/> </div>)
				}
				</div>
			</Paper>
		);
	}
}


function Suggestion(props){
	return (
			<div className='suggestion'>
				<Avatar src={props.profilePicture} />
				<div>
					<span className='name'>{props.name}</span> <span className='handle'>  @{props.userID} </span>
					<CapsuleButton className={capsuleButtonStyles.followButton} buttonText='Follow' redirectTo={props.redirectTo}/>
				</div>
				<IconButton iconStyle={{width: 16, height: 16}} style={{width: 16, height: 16, alignSelf: 'flex-start', paddingTop: '0'}}>
					<CloseIcon color={grey300}/>
				</IconButton>
			</div>
		);
}


class Suggestions extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			recommended: props.recommended,
			wrapperClassName: props.wrapperClassName,
			className: props.className,
			redirectTo: props.redirectTo,
		}
	}

	render()
	{
		return (
			<Paper zDepth={0} className={this.state.wrapperClassName}>
				<span className="boxHeading">Who to follow</span><span> . 
					<Hyperlink redirectTo={this.state.redirectTo} displayText='Refresh' className='altColorLink'/> . 
					<Hyperlink redirectTo={this.state.redirectTo} displayText='View all' className='altColorLink'/> 
				</span><br/>
				<Paper zDepth={0} className={this.state.className}>
					<div key={this.state.recommended[0][0]}> 
						<Suggestion 
							userID={this.state.recommended[0][2]} 
							name={this.state.recommended[0][1]}
							profilePicture={this.state.recommended[0][3]}
							redirectTo={this.state.redirectTo}
						/>
					</div>
					<div>
					{
						this.state.recommended.splice(1).map(suggestion => <div key={suggestion[0]}>
							<Divider/><Suggestion userID={suggestion[2]} name={suggestion[1]} profilePicture={suggestion[3]} redirectTo={this.state.redirectTo}/>
							</div>)
					}
					</div>
				</Paper>
				<Divider/>
				<Paper zDepth={0}>
					<IconButton tooltip="Find people you know" tooltipPosition="top-center" href={this.state.redirectTo}>
						<PeopleIcon color={muiTheme.palette.alternateTextColor}/>
					</IconButton>
					<Hyperlink redirectTo={this.state.redirectTo} displayText="Find people you know" className='altColorLink'/>
				</Paper>
			</Paper>
		);
	}
}


function ExpandedFilterBox(props){
	return(
		<div className='leftContentBox'>
			<select className="select" value={props.select1} name="select1" onChange={props.handleChange}>
				<option value="0">From anyone</option>
				<option value="1">People you follow</option>
			</select><br/>

			<select className="select" value={props.select2} name="select2" onChange={props.handleChange}>
				<option value="0">Anywhere</option>
				<option value="1">Near you</option>
			</select><br/>

			<select className="select" value={props.select3} name="select3" onChange={props.handleChange}>
				<option value="0">All languages</option>
				<option value="1">English</option>
			</select><br/><br/>
			<Hyperlink redirectTo={props.redirectTo} displayText="Advanced search" className="relatedLink"/>
		</div>
	);
}


class Filters extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			expanded: false,
			linkText: 'Show',
			select1: 0,
			select2: 0,
			select3: 1,
			redirectTo: props.redirectTo,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({[event.target.name]: event.target.value});
	}

	handleClick = (event) => {
		event.preventDefault();
		if(this.state.expanded === false)
		{
			this.setState({expanded: true, linkText: 'Hide'});
		}
		else
		{
			this.setState({expanded: false, linkText: 'Show'});
		}
	}

	render(){
		return (
		<Paper zDepth={0} className='leftContentBoxWrapper'>
			<span className="boxHeading">Search filters </span>.
			<span onClick={this.handleClick}><Hyperlink redirectTo='' displayText={this.state.linkText} className='altColorLink'/></span>
			{ this.state.expanded ? 
				<ExpandedFilterBox select1={this.state.select1} select2={this.state.select2} select3={this.state.select3} handleChange={this.handleChange} redirectTo={this.state.redirectTo}/> 
				: 
				<div style={{paddingBottom: '5%'}}/>
			}
		</Paper>
		);
	}
}


class Related extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			suggestions: props.suggestions,
		};
	}

	render ()
	{
		return(
			<Paper zDepth={0} className='leftContentBoxWrapper'>
				<span className="boxHeading">Related searches</span>
				<div className='leftContentBox'>
				{
					this.state.suggestions.map(related => <div key={related[0]} className='related'> <Hyperlink redirectTo='/search' displayText={related[1]} className='relatedLink'/></div>)
				}
				</div>
			</Paper>
			);
	}
}


function TwitterInfo(props){
	return (
		<Paper zDepth={0} className="rightContentBoxWrapper">
			<Paper zDepth={0} className='rightContentBox'>
				<span style={{color: "grey", fontSize: '12px'}}>{"© 2017 Twitter  "}</span>
				<Hyperlink redirectTo={props.redirectTo} displayText='About  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Help Center  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Terms  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Privacy policy  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Cookies   ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Ads info  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Brand  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Blog  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Status  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Apps  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Jobs  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Marketing  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Businesses  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Developers  ' className='infoLink'/>
			</Paper>
			<Divider/>
			<Paper zDepth={0}>
					<IconButton tooltip="Advertise with Twitter" tooltipPosition="top-center" href={props.redirectTo}>
						<LaunchIcon color={muiTheme.palette.alternateTextColor}/>
					</IconButton>
					<Hyperlink redirectTo={props.redirectTo} displayText="Advertise with Twitter" className='altColorLink'/>
			</Paper>
		</Paper>
		);
}


function SmallTwitterInfo(props){
	return (
		<div className="leftContentBoxWrapper">
			<div className="leftContentBox">
				<span style={{color: "grey", fontSize: '12px'}}>{"© 2017 Twitter "}</span>
				<Hyperlink redirectTo={props.redirectTo} displayText='About  ' className='infoLink \'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Help Center  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Terms  ' className='infoLink'/><br/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Privacy policy  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Cookies  ' className='infoLink'/>
				<Hyperlink redirectTo={props.redirectTo} displayText='Ads info  ' className='infoLink'/>
			</div>
		</div>
	);
}


class HomePage extends React.Component{
	constructor(props)
	{
		super(props);
		this.state ={
			name: 'Harsh Seth',
			userID: 'qazwer',
			profilePicture: user1DP,
			bannerPicture: banner,
			numberOfRequests: 18,
			tweets: [
				[1, 'Harsh Seth', 'qazwer', user1DP, "Nothing like a glass of nimbu paani on a hot day"],
				[2, 'Mudit Khanna', 'protostar', user2DP, "Announcement time! I got a new job! I'll be moving to Australia for it!!! *Starts packing*", tweetImage],
				[3, 'Yash Chandramani', 'nakku', user3DP, 'Thank god for the internet and the online community. Who knows how else I would have finished this hugeeee task I had for my college assignment'],
				[4, 'Harsh Seth', 'qazwer', user1DP, "I heard there's gonna be a music fest soon. Anyone headed for it? Drop me a DM", tweetImage],
				[5, 'Yash Chandramani', 'nakku', user3DP, 'There was a show named the Mythbusters. I used to love it soooo much! Buster, the test dummy had to go through so much'],
				[6, 'Harsh Seth', 'qazwer', user1DP, 'Interesting how toasted bread always seems to fall on the butter side down. -_-"'],
				[7, 'Mudit Khanna', 'protostar', user2DP, "There's a big announcement coming real soon! Watch out for my next tweet"],
				[8, 'Yash Chandramani', 'nakku', user3DP, 'I need to unwind! All work and no play makes Jack a dull boy', tweetImage2],
				[9, 'Harsh Seth', 'qazwer', user1DP, 'Just saw the match! What a win!!'],
				[10, 'Yash Chandramani', 'nakku', user3DP, 'Bored...', tweetImage],
			],
			trends: [
				[1, 'FilesGo', '1,930 Tweets'],
				[2, 'RobotsVSNinjas', ''],
				[3, 'Nepal', '@UN is Tweeting about this'],
			],
			recommended: [
				[1, 'Prachi Singh', 'plmoiu', tweetImage2],
				[2, 'Mehul Khan', 'Astar', user2DP],
				[3, 'Gaurav Desai', 'danko', user3DP],
			],
		};
	}

	render()
	{
		return (
			<Mui muiTheme={muiTheme}>
				<TopBar profilePicture={this.state.profilePicture} redirectTo='/' initialSelected={0} userID={this.state.userID} name={this.state.name} />
				<div className='grid'>
					<div className='leftColumn'>
						<ProfileInfo 
							name={this.state.name} 
							userID={this.state.userID} 
							profilePicture={this.state.profilePicture}
							bannerPicture={this.state.bannerPicture}/>
						<FollowerRequests numberOfRequests={this.state.numberOfRequests}/>
						<Trends trends={this.state.trends} redirectTo='/'/>
					</div>
					<div className='centerColumn'>
						<NewTweet profilePicture={this.state.profilePicture}/>
						<Feed tweets={this.state.tweets} profilePicture={this.state.profilePicture} redirectTo="/"/>
					</div>
					<div className='rightColumn'>
						<Suggestions recommended={this.state.recommended} wrapperClassName='rightContentBoxWrapper' className="rightContentBox" redirectTo='/'/>
						<TwitterInfo redirectTo="/"/>
					</div>
				</div>
			</Mui>
		);
	}
}


class SearchPage extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			query: 'aadhaar',
			name: 'Harsh Seth',
			userID: 'qazwer',
			profilePicture: user1DP,
			numberOfRequests: 18,
			tweets: [
				[1, 'Harsh Seth', 'qazwer', user1DP, 'Time for some real solutions in the aadhaar discussion'],
				[2, 'Mudit Khanna', 'protostar', user2DP, 'Hah! I just got a aadhaar related whatsapp forward! What is the world coming to XD', tweetImage],
				[3, 'Yash Chandramani', 'nakku', user3DP, 'If they have access to a central database (aadhaar), why do they still need all my info. A simple UID should be more than enough data...', tweetImage2],
				[4, 'Harsh Seth', 'qazwer', user1DP, 'I think there has to be some middle ground for the aadhaar crisis'],
				[5, 'Yash Chandramani', 'nakku', user3DP, 'The aadhaar scheme has to go!'],
				[6, 'Harsh Seth', 'qazwer', user1DP, 'This aashar debate is really getting out of hand', tweetImage2],
				[7, 'Mudit Khanna', 'protostar', user2DP, "Aadhaar has it's benefits, don't write them off so easily"],
				[8, 'Yash Chandramani', 'nakku', user3DP, 'This is getting out of hand... Maybe the Aadhar scheme was a bad idea'],
				[9, 'Harsh Seth', 'qazwer', user1DP, 'Bleh... Another sms reminding me to link my aadhaar', tweetImage],
				[10, 'Yash Chandramani', 'nakku', user3DP, 'How do I link my aadhaar card to my bank account? Any clues??'],
			],
			suggestions: [
				[1, '#stopThatCar'],
				[2, 'Ed Edd and Eddy'],
				[3, 'Musique Fest 2k18'],
			],
			recommended: [
				[1, 'Albert E', 'equalsMC2', user2DP],
				[2, 'Qazwer Inc.', 'qazwerinc', user1DP],
				[3, 'Wario', 'not.that.bad', user3DP],
			],
			trends: [
				[1, 'NPequalsP', '20,424 Tweets'],
				[2, 'Italy', '@LeItalian is Tweeting about this'],
				[3, 'IndVsPak', ''],
			],
		};
	}

	render()
	{
		return (
			<Mui muiTheme={muiTheme}>
				<TopBar profilePicture={this.state.profilePicture} initialIndex={-1} query={this.state.query} redirectTo='/search' userID={this.state.userID} name={this.state.name}/>
				<QueryBar initialIndex={1} query={this.state.query}/>
				<div className='grid'>
					<div className='leftColumn'>
						<Filters redirectTo="/search"/>
						<Related suggestions={this.state.suggestions}/>
						<Suggestions recommended={this.state.recommended} wrapperClassName="leftContentBoxWrapper" className="leftContentBox" redirectTo='/search'/>
						<Trends trends={this.state.trends} redirectTo="/search"/>
						<SmallTwitterInfo redirectTo="/search"/>
					</div>
					<div className='centerColumn'>
						<Feed tweets={this.state.tweets} profilePicture={this.state.profilePicture} redirectTo="/search"/>
					</div>
					<div className='rightColumn'>
					</div>
				</div>
			</Mui>
		);
	}
}



const Redirect = () => (
	<Switch>
		<Route exact path="/" component={HomePage}/>
		<Route path="/search" component={SearchPage}/>
	</Switch>
);


export default Redirect;
