import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          class="avatar"
          width="200"
        />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>

        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <StatsItem label="Followers" quantity={stats.followers} />
        <StatsItem label="Views" quantity={stats.views} />
        <StatsItem label="Likes" quantity={stats.likes} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
