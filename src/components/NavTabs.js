import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Portfolio', 'Resume', 'About'];
  return (
    <header className="portfolio-header">
      <div className="developer">
        Vicky Loebel
      </div>
      <ul className="nav">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              // Clicking a tab sets
              // page w handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link-active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      
    </header>

  );
}

export default NavTabs;
