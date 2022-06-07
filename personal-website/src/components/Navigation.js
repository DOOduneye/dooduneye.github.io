import React from 'react';

function Navigation() {
  return (
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <a href="#">Home</a>
                {/*<Link to="/">Home</Link>*/}
              </li>
              <li>
                <a href="#">About</a>
                {/*<Link to="/about">About</Link>*/}
                {/*<Link to="/projects">Projects</Link>*/}
              </li>
              <li>
                <a href="#">Projects</a>
                {/*<Link to="/projects">Projects</Link>*/}
                {/*<Link to="/blogs">Blogs</Link>*/}
              </li>
            </ul>
          </nav>
        </div>
  );
}

export default Navigation;