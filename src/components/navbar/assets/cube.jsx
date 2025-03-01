import React from 'react';

import './cube.css';

export default function Cube() {
  return (
    <div className="box">
        <div className="positioning">
            <div className="faces">
                <div className="face top"></div>
                <div className="face bottom"></div>
                <div className="face one"></div>
                <div className="face two"></div>
                <div className="face three"></div>
                <div className="face four"></div>
            </div>
        </div>
    </div>
  );
};