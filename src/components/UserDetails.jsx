import { useGlobalContext } from "../context";

const UserDetails = () => {
  const { selectedUser } = useGlobalContext();
  if (!selectedUser) {
    return <div className="user-details">Loading...</div>;
  }

  const {
    login,
    avatar_url,
    name,
    bio,
    location,
    public_repos,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
  } = selectedUser;

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <div>
        <img src={avatar_url} alt={`${login}'s avatar`} />
      </div>
      <div>
        <p>Login: {login}</p>
        {name && <p>Name: {name}</p>}
        {bio && <p>Bio: {bio}</p>}
        {location && <p>Location: {location}</p>}
        <p>Public Repositories: {public_repos}</p>
        <p>Type: {type}</p>
        <p>Site Admin: {site_admin ? "Yes" : "No"}</p>

        {/* Additional Details */}
        <p>Followers URL: {followers_url}</p>
        <p>Following URL: {following_url}</p>
        <p>Gists URL: {gists_url}</p>
        <p>Starred URL: {starred_url}</p>
        <p>Subscriptions URL: {subscriptions_url}</p>
        <p>Organizations URL: {organizations_url}</p>
        <p>Repos URL: {repos_url}</p>
        <p>Events URL: {events_url}</p>
        <p>Received Events URL: {received_events_url}</p>
      </div>
    </div>
  );
};

export default UserDetails;
