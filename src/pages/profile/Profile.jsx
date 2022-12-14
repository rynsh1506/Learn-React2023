import React from 'react';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';
import './profile.scss';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='images'>
                <img
                    src='https://images.unsplash.com/photo-1667938404108-da98af6ca60c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
                    alt=''
                    className='cover'
                />
                <img
                    src='https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/298244613_1505577929891578_3971570652708191335_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG5SnJP4ndLQlVgsN3q5Y2_uDkmlysBPQi4OSaXKwE9CP-VSo_TkdH8PXuMOkTLPOw7W6dRVXoZTDFqg2BWggtx&_nc_ohc=6_NdxhjcDUQAX-4Tldc&_nc_ht=scontent-sin6-3.xx&oh=00_AfDBuPET24MTo9T09twPDZ3Mj6Oc3__inRpmwt4nu9P4lw&oe=639D779A'
                    alt=''
                    className='profilePic'
                />
            </div>
            <div className='profileContainer'>
                <div className='uInfo'>
                    <div className='left'>
                        <a href='http://facebook.com'>
                            <FacebookTwoToneIcon fontSize='large' />
                        </a>
                        <a href='http://facebook.com'>
                            <InstagramIcon fontSize='large' />
                        </a>
                        <a href='http://facebook.com'>
                            <TwitterIcon fontSize='large' />
                        </a>
                        <a href='http://facebook.com'>
                            <LinkedInIcon fontSize='large' />
                        </a>
                        <a href='http://facebook.com'>
                            <PinterestIcon fontSize='large' />
                        </a>
                    </div>
                    <div className='center'>
                        <span>Bambang Ali Bandra</span>
                        <div className='info'>
                            <div className='item'>
                                <PlaceIcon />
                                <span>Indonesia</span>
                            </div>
                            <div className='item'>
                                <LanguageIcon />
                                <span>meet.dev</span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className='right'>
                        <EmailOutlinedIcon />
                        <MoreVertIcon />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;
