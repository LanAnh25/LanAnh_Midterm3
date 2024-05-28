import PropTypes from 'prop-types';

const Repos = ({ repos }) => (
  <div>
    <h2>Repositories</h2>
    {repos.map((repo) => (
      <div key={repo.id} className="card">
        <h3>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h3>
        <p>{repo.description}</p>
      </div>
    ))}
  </div>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
