import React, { FC } from 'react';
import { SVGIconContainer, SVGIconContainerProps } from './SVGIconContainer';

export const CloseIcon: FC<SVGIconContainerProps> = function CloseIcon(props) {
  return (
    <SVGIconContainer
      height={24}
      width={24}
      {...props}
    >
      <title>
        Close
      </title>
      <g transform="translate(3.255, 3.255)">
        <path d="M10.3473845,8.74516245 L17.1576645,1.93453362 C17.6008659,1.49153044 17.6008659,0.77525555 17.1576645,0.332252378 C16.7146705,-0.110750793 15.9984105,-0.110750793 15.5554165,0.332252378 L8.74492902,7.14288127 L1.93464906,0.332252378 C1.49144761,-0.110750793 0.775395063,-0.110750793 0.332401089,0.332252378 C-0.110800363,0.77525555 -0.110800363,1.49153044 0.332401089,1.93453362 L7.1426811,8.74516245 L0.332401089,15.5557913 C-0.110800363,15.9987945 -0.110800363,16.7150694 0.332401089,17.1580726 C0.55317185,17.3790554 0.843452215,17.4900656 1.1335251,17.4900656 C1.42359794,17.4900656 1.71367082,17.3790554 1.93464906,17.1580726 L8.74492902,10.3474437 L15.5554165,17.1580726 C15.7763948,17.3790554 16.0664676,17.4900656 16.3565405,17.4900656 C16.6466134,17.4900656 16.9366862,17.3790554 17.1576645,17.1580726 C17.6008659,16.7150694 17.6008659,15.9987945 17.1576645,15.5557913 L10.3473845,8.74516245 Z" />
      </g>
    </SVGIconContainer>
  );
};
