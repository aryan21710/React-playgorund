import './wdyr';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Parent } from './components/ReactAnimationGroup/Parent';
import { AnimatedSlider } from './components/ReactSpringAnimation/AnimatedSlider.js';

ReactDOM.render(<AnimatedSlider />, document.getElementById('root'));
