import React from 'react';

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Dashboard
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;