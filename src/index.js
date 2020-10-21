import './wdyr';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Parent } from './components/ReactAnimationGroup/Parent';
import { AnimatedSlider } from './components/ReactSpringAnimation/AnimatedSlider.js';
import { ThreeDCard } from './components/ReactSpringAnimation/ThreeDCard';
import { FlipCard } from './components/ReactSpringAnimation/FlipCard';
import { App } from './components/Interview questions/TodolistWithProps';
import {AnimBetnComp} from './components/ReactAnimationGroup/AnimBetnComp'
const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];
ReactDOM.render(<AnimBetnComp/>
  , document.getElementById('root'));