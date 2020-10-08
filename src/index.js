import './wdyr';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Parent } from './components/ReactAnimationGroup/Parent';
import { AnimatedSlider } from './components/ReactSpringAnimation/AnimatedSlider.js';
import { ThreeDCard } from './components/ReactSpringAnimation/ThreeDCard';
import { FlipCard } from './components/ReactSpringAnimation/FlipCard';



ReactDOM.render(<FlipCard />, document.getElementById('root'));
