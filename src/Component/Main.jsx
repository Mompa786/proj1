import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Card = ({ title, body }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setAllPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredPosts(allPosts);
    } else {
      const filtered = allPosts.filter(post =>
        post.title.includes(searchText)
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="App">
      <div className="centered">
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Enter search text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="posts">
        {filteredPosts.map(post => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default App;
