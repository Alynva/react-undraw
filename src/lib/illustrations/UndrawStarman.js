import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawStarman = _props => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign(
    {
      height: props.height || defaultProps.height,
      width: '100%'
    },
    props.style
  );
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return (
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 829 744.16" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={382.9} y1={692.59} x2={382.9} y2={45.25} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={577.21} y1={539.76} x2={577.21} y2={383.34} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={422.99} y1={586.26} x2={422.99} y2={284.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={809.48} y1={657.06} x2={809.48} y2={582.42} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={728.61}
          y1={677.75}
          x2={728.61}
          y2={553.95}
          gradientTransform="rotate(-62.55 694.585 659.015)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <circle cx={382.9} cy={368.92} r={323.67} fill="url(#prefix__a)" />
      <circle cx={382.9} cy={368.92} r={315.73} fill={primaryColor} />
      <circle cx={280.81} cy={186.43} r={39.22} opacity={0.05} />
      <circle cx={400.77} cy={606.43} r={39.22} opacity={0.05} />
      <circle cx={439.99} cy={324.03} r={80.19} opacity={0.05} />
      <path
        d="M694.73 539.76c-39.72 0-82-1.9-125.22-5.72-96.07-8.48-185.62-25.41-252.14-47.66-67-22.43-102.8-47.77-100.72-71.35 1.05-11.94 11.57-22.6 31.25-31.68l1 2.25c-18.82 8.68-28.85 18.65-29.82 29.65s7.35 22.84 24.75 34.82c17.1 11.77 42.09 23.19 74.29 34 66.35 22.2 155.69 39.08 251.58 47.54s186.81 7.49 256-2.74c33.58-5 60.19-11.84 79.09-20.43 19.24-8.74 29.49-18.82 30.47-29.95 1.12-12.67-10.33-26.56-33.1-40.16l1.27-2.13c24 14.33 35.53 28.63 34.3 42.51-2.08 23.59-41.74 42.27-111.66 52.6-38.07 5.61-82.84 8.44-131.34 8.45z"
        transform="translate(-185 -76.87)"
        fill="url(#prefix__b)"
      />
      <path
        d="M717.83 357.89c22.71 13.57 34.91 27.67 33.7 41.33-4.19 47.47-168.46 71.75-366.91 54.23S28.69 383.25 32.88 335.78c1-11.73 11.85-22 30.53-30.66"
        fill="none"
        stroke="#bdbdbd"
        strokeMiterlimit={10}
        strokeWidth={3}
        opacity={0.5}
      />
      <path
        d="M608.39 586.26c-28.62-12.34-57.83-26.11-86.81-40.94-85.87-43.92-162.52-93.21-215.83-138.81-53.72-45.94-77.36-82.85-66.58-103.94 5.46-10.68 19.21-16.61 40.85-17.64l.12 2.47c-20.7 1-33.74 6.46-38.77 16.29s-1.76 23.93 9.88 41.56c11.43 17.32 30.31 37.3 56.11 59.36 53.16 45.5 129.64 94.68 215.34 138.51 28.94 14.8 58.09 28.55 86.67 40.87z"
        transform="translate(-185 -76.87)"
        fill="url(#prefix__c)"
      />
      <path
        d="M428 508.25c-28.09-12.11-57.19-25.79-86.74-40.9C163.89 376.64 37.7 268.7 59.4 226.28c5.36-10.48 19.25-16 39.81-17"
        fill="none"
        stroke="#bdbdbd"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M840.73 657.06c-26 0-62.67-8.5-112.17-25.56l.81-2.34c94.46 32.54 141.19 33.86 156.25 4.41 5.79-11.32.39-28.49-15.61-49.65l2-1.49c16.86 22.28 22.19 39.87 15.84 52.27-7.65 14.89-22.73 22.35-47.12 22.36z"
        transform="translate(-185 -76.87)"
        fill="url(#prefix__d)"
      />
      <path
        d="M686 503.82c16 21.1 22 38.75 15.73 51-14.39 28.13-56.6 31-157.76-3.8"
        fill="none"
        stroke="#bdbdbd"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <g opacity={0.5} fill="#47e6b1">
        <path d="M94.38 661.7h3.22v18.23h-3.22z" />
        <path d="M105.1 669.21v3.22H86.87v-3.22z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M748.57 3.22h3.22v18.23h-3.22z" />
        <path d="M759.29 10.73v3.22h-18.23v-3.22z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M818.28 500.83h3.22v18.23h-3.22z" />
        <path d="M829 508.34v3.22h-18.23v-3.22z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M105.1 47.19h3.22v18.23h-3.22z" />
        <path d="M115.83 54.7v3.22H97.6V54.7z" />
      </g>
      <path
        d="M200.22 724.22a3.94 3.94 0 0 1-2.2-4.76 1.89 1.89 0 0 0 .09-.44 2 2 0 0 0-3.55-1.31 1.89 1.89 0 0 0-.22.39 3.94 3.94 0 0 1-4.76 2.2 1.89 1.89 0 0 0-.44-.09 2 2 0 0 0-1.31 3.55 1.89 1.89 0 0 0 .39.22 3.94 3.94 0 0 1 2.2 4.76 1.89 1.89 0 0 0-.09.44 2 2 0 0 0 3.55 1.31 1.89 1.89 0 0 0 .22-.39 3.94 3.94 0 0 1 4.76-2.2 1.89 1.89 0 0 0 .44.09 2 2 0 0 0 1.31-3.55 1.89 1.89 0 0 0-.39-.22zM396.47 737.13a3.94 3.94 0 0 1-2.2-4.76 1.89 1.89 0 0 0 .09-.44 2 2 0 0 0-3.55-1.31 1.89 1.89 0 0 0-.22.39 3.94 3.94 0 0 1-4.76 2.2 1.89 1.89 0 0 0-.44-.09 2 2 0 0 0-1.31 3.55 1.89 1.89 0 0 0 .39.22 3.94 3.94 0 0 1 2.2 4.76 1.89 1.89 0 0 0-.09.44 2 2 0 0 0 3.55 1.31 1.89 1.89 0 0 0 .22-.39 3.94 3.94 0 0 1 4.76-2.2 1.89 1.89 0 0 0 .44.09 2 2 0 0 0 1.31-3.55 1.89 1.89 0 0 0-.39-.22zM784.7 219.13a3.94 3.94 0 0 1-2.2-4.76 1.89 1.89 0 0 0 .09-.44 2 2 0 0 0-3.55-1.31 1.89 1.89 0 0 0-.22.39 3.94 3.94 0 0 1-4.76 2.2 1.89 1.89 0 0 0-.44-.09 2 2 0 0 0-1.31 3.55 1.89 1.89 0 0 0 .39.22 3.94 3.94 0 0 1 2.2 4.76 1.89 1.89 0 0 0-.09.44 2 2 0 0 0 3.55 1.31 1.89 1.89 0 0 0 .22-.39 3.94 3.94 0 0 1 4.76-2.2 1.89 1.89 0 0 0 .44.09 2 2 0 0 0 1.31-3.55 1.89 1.89 0 0 0-.39-.22zM20.26 502.93a3.94 3.94 0 0 1-2.2-4.76 1.89 1.89 0 0 0 .09-.44 2 2 0 0 0-3.55-1.31 1.89 1.89 0 0 0-.22.39 3.94 3.94 0 0 1-4.76 2.2 1.89 1.89 0 0 0-.44-.09 2 2 0 0 0-1.31 3.55 1.89 1.89 0 0 0 .39.22 3.94 3.94 0 0 1 2.2 4.76 1.89 1.89 0 0 0-.09.44 2 2 0 0 0 3.55 1.31 1.89 1.89 0 0 0 .22-.39 3.94 3.94 0 0 1 4.76-2.2 1.89 1.89 0 0 0 .44.09 2 2 0 0 0 1.31-3.55 1.89 1.89 0 0 0-.39-.22z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <circle cx={6.43} cy={238.08} r={6.43} fill="#f55f44" opacity={0.5} />
      <circle cx={530.86} cy={22.52} r={6.43} fill="#4d8af0" opacity={0.5} />
      <circle cx={176.95} cy={6.43} r={6.43} fill="#47e6b1" opacity={0.5} />
      <circle cx={653.12} cy={691.73} r={6.43} fill="#f55f44" opacity={0.5} />
      <path
        d="M686.59 566.15a7.62 7.62 0 0 0-10.27 3.25l-.78 1.5-1.78-.93-15.91-8.26-3.46-1.8a3 3 0 0 0-1.57-.33c-15.23-5-27.45 4.63-35.33 19.8a49.7 49.7 0 0 0-5.49 16.68l-.18-.09c-.88 6.25-.06 12.11 3 17.07l.26-.51a24.56 24.56 0 0 0 5.82 6.56 2.32 2.32 0 0 0 1.19 1.52l21.78 11.31-1.66 3.19a7.62 7.62 0 0 0 3.25 10.27l5.17-10 26.86 13.95 1.76-3.38 1.76-3.38 2.63-5.07h.09l-6.1 11.74 12.85 6.76c15.64 8.12 27.59-2.31 36.27-18.47v-.09l.53-1v-.09l.45-.89c8.3-16.45 10-32.21-5.72-40.36l-12.81-6.6-7.07 13.62h-.09l3.61-6.95 1.66-3.19 1.85-3.57-26.86-14 4.29-8.26zm-41 58.08l.08.07h-.09z"
        transform="translate(-185 -76.87)"
        fill="url(#prefix__e)"
      />
      <path fill="#4f617d" d="M468.372 553.8l26.423-50.867 25.433 13.212-26.423 50.866z" />
      <path
        d="M539 558.01v-.09c-8.21 15.8-19.62 26.25-34.67 18.44l-12.11-6.29L522 512.84l12.1 6.29c15.05 7.82 13.11 23.08 4.9 38.88z"
        fill="#ff656a"
      />
      <path
        d="M539 557.92zM529.65 571.43a55.65 55.65 0 0 0 9.35-13.46 59.11 59.11 0 0 0 5.17-13.29l-5.17-2.69-14 27zM497.931 559.061l17.342-33.384.932.484a4.32 4.32 0 0 1 1.842 5.825l-13.368 25.735a4.32 4.32 0 0 1-5.825 1.842l-.932-.484.009-.018z"
        fill="#4a5c81"
      />
      <path
        d="M440.76 537.01l.646-1.242 54.044 28.073-3.301 6.354-48.923-25.413a5.76 5.76 0 0 1-2.465-7.772zM464.622 491.068l.646-1.242a5.76 5.76 0 0 1 7.766-2.456l48.932 25.418-3.3 6.354-54.044-28.074z"
        fill="#ff6469"
      />
      <path
        d="M488.65 495.41l-29.72 57.23-15-7.77c-16.53-8.59-16.44-24.81-8.24-40.61 8.21-15.8 21.43-25.2 38-16.62z"
        fill="#ff656a"
      />
      <path
        d="M433.18 535.93l6-11.5-8.79-4.56c-.86 5.88-.08 11.39 2.79 16.06zM459.89 484.5l-6 11.5-8.79-4.56c4.37-4.07 9.32-6.61 14.79-6.94z"
        fill="#fff6d5"
      />
      <path
        d="M458.325 558.017l2.305-4.437 6.354 3.3-4.96 9.549-1.225-.636a5.76 5.76 0 0 1-2.474-7.776zM500.69 491.754l-4.956 9.54-6.354-3.3 2.305-4.438a5.76 5.76 0 0 1 7.766-2.456l1.243.645-.005.01z"
        fill="#ff6469"
      />
      <path
        d="M492.44 503.44l-24.86 47.87-21.58-19.3a10.15 10.15 0 0 1-2.24-12.24l9.24-17.78a10.15 10.15 0 0 1 11.35-5.2z"
        fill="#53678b"
      />
      <path d="M468.67 549.63c-10.54-5.47-14.09-19.51-7.93-31.37s19.69-17 30.22-11.55" fill="#658bc8" />
      <path fill="#ff656a" d="M494.16 504.45l-24.77 47.69-4.77-2.48 3.36-2.58 20.35-39.17 1.06-5.94 4.77 2.48z" />
      <path opacity={0.05} d="M494.16 504.45l-24.77 47.69-4.77-2.48 3.36-2.58 20.35-39.17 1.06-5.94 4.77 2.48z" />
      <path fill="#53678b" d="M478.41 534.685l3.3-6.354 6.354 3.3-3.3 6.354z" />
      <ellipse cx={671.4} cy={611.6} rx={7.16} ry={1.79} transform="rotate(-62.55 515.698 725.462)" fill="#53678b" />
      <path
        d="M503.86 568.03a12.27 12.27 0 0 0 17.47-3.9M526.16 525.13a12.27 12.27 0 0 1 6.84 16.52M448.89 525.34s-1.41-12.84 11.56-22.25M454.89 528.46s-1.41-12.84 11.56-22.25"
        opacity={0.05}
      />
      <circle cx={652.2} cy={609.7} r={5.37} transform="rotate(-62.55 496.497 723.569)" fill="#4a77be" />
      <circle cx={659.69} cy={591.39} r={3.58} transform="rotate(-62.55 503.991 705.257)" fill="#4a77be" />
      <path
        d="M486.327 527.925l-.21-1.029a2.16 2.16 0 0 1 1.685-2.548l11.515-2.35a2.21 2.21 0 0 1 2.608 1.723l.634 3.107-13.72 2.8a2.16 2.16 0 0 1-2.512-1.703z"
        fill="#cdefff"
      />
      <path
        d="M493.089 529.787l-1.066-5.263 6.282-1.273a4.32 4.32 0 0 1 5.092 3.377l.208 1.029-10.516 2.13z"
        opacity={0.05}
      />
      <path
        d="M483.434 552.25l4.329-8.332 9.868 5.126-4.329 8.333a4.45 4.45 0 0 1-6 1.898l-1.926-1a4.45 4.45 0 0 1-1.942-6.024z"
        fill="#cdefff"
      />
      <path d="M493.53 556.4l-1.79 3.83c-1.94 3.22-6.64 4.1-10.69 2l-4.7-2.44 2.55-4.92z" fill="#cdefff" />
      <path
        d="M467.563 552.773l.498-.958a2.23 2.23 0 0 1 3.007-.95l7.854 4.079-2.554 4.916-7.854-4.08a2.23 2.23 0 0 1-.95-3.007z"
        fill="#cdefff"
      />
      <path d="M491.92 549.13a8.27 8.27 0 0 0 5.3.8l.26-.51-9.6-5a8.28 8.28 0 0 0 4.04 4.71z" opacity={0.05} />
      <path
        d="M507.108 530.452l-4.324 8.324-9.832-5.108 4.328-8.332a4.45 4.45 0 0 1 6-1.898l1.926 1a4.45 4.45 0 0 1 1.898 6z"
        fill="#cdefff"
      />
      <path d="M499.72 534.13a8.27 8.27 0 0 1 3.71 3.88l-.26.51-9.6-5a8.28 8.28 0 0 1 6.15.61z" opacity={0.05} />
      <circle cx={680.82} cy={618.16} r={8.31} transform="rotate(-62.55 525.127 732.034)" fill="#cdefff" />
      <circle cx={680.41} cy={618.29} r={8.31} transform="rotate(-62.55 524.71 732.164)" fill="#cdefff" />
      <path d="M488 537.59a8.3 8.3 0 0 0 .37 8.3 8.31 8.31 0 0 0 6.63-12.76 8.3 8.3 0 0 0-7 4.46z" fill="#658bc8" />
    </svg>
  );
};

UndrawStarman.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawStarman;
