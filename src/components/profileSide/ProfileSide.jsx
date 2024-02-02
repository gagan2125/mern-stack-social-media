import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import "./ProfileSide.css";
import FollwersCard from '../FollowersCard/FollwersCard';

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <FollwersCard/>
    </div>
  )
}

export default ProfileSide
