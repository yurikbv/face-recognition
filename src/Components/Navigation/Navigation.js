import React from 'react';

const Navigation = ({onRouteChange, isSingedIn}) => {
  return (
       isSingedIn ?
            <div>
              <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f5 link dim black underline pointer" onClick={() => onRouteChange('signOut')}>Sign Out</p>
              </nav>
            </div>
           :
              <div>
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <p className="f5 link dim black underline pointer" onClick={() => onRouteChange('signIn')} style={{marginRight: '1rem'}}>Sign In</p>
                  <p className="f5 link dim black underline pointer" onClick={() => onRouteChange('register')}>Register</p>
                </nav>
              </div>
  );
};

export default Navigation;
