import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawInvesting = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 893.617 736.75" style={style} {...props}>
      <path d="M168.5 570.5s332.5-277.5 524 0" fill="#f2f2f2" />
      <ellipse cx={714.117} cy={712.75} rx={154} ry={24} fill="#f2f2f2" />
      <ellipse cx={739.117} cy={703.75} rx={154} ry={24} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path
        d="M804.605 455.45a15.529 15.529 0 1 0 2.068-29.782l.39 7.993-3.782-6.85a15.47 15.47 0 0 0-7.972 8.747 15.227 15.227 0 0 0-.893 4.2 15.526 15.526 0 0 0 10.19 15.692z"
        fill="#57b894"
      />
      <path
        d="M823.316 548.152c-1.335-6.798 4.45-12.824 10.163-16.741s12.39-7.766 14.34-14.413c2.8-9.553-5.545-18.302-12.04-25.847a93.49 93.49 0 0 1-12.329-18.323 25.222 25.222 0 0 1-2.949-8.331c-.512-4.235.849-8.449 2.22-12.488q6.848-20.184 14.645-40.03"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M805.245 453.392a15.529 15.529 0 1 0 2.068-29.782l.389 7.993-3.782-6.85a15.47 15.47 0 0 0-7.971 8.747 15.227 15.227 0 0 0-.893 4.2 15.526 15.526 0 0 0 10.189 15.692z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M821.418 409.219a15.51 15.51 0 0 1 11.177-9.847l1.279 7.598 2.37-7.98a15.527 15.527 0 1 1-14.826 10.229z"
        fill="#57b894"
      />
      <path
        d="M822.271 406.475a15.51 15.51 0 0 1 11.177-9.847l1.279 7.598 2.37-7.98a15.527 15.527 0 1 1-14.826 10.23z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M833.053 491.305a15.527 15.527 0 0 0 13.743-27.624l-1.821 6.133-1.292-7.688a.271.271 0 0 0-.04-.015 15.528 15.528 0 1 0-10.59 29.194z"
        fill="#57b894"
      />
      <path
        d="M833.792 488.526a15.527 15.527 0 0 0 13.743-27.624l-1.822 6.133-1.291-7.688a.27.27 0 0 0-.04-.015 15.528 15.528 0 1 0-10.59 29.194z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M816.887 517.093a15.52 15.52 0 1 0 2.992-12.16l6.919 10.414-9.454-5.527a15.383 15.383 0 0 0-.457 7.273z"
        fill="#57b894"
      />
      <path
        d="M817.526 515.035a15.52 15.52 0 1 0 2.993-12.16l6.918 10.414-9.453-5.527a15.383 15.383 0 0 0-.458 7.273z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M801.757 557.359s13.703-5.37 17.832-8.311 21.079-6.452 22.103-1.736 20.593 23.457 5.123 23.582-35.947 2.538-40.069.027-4.99-13.562-4.99-13.562z"
        fill="#656380"
      />
      <path
        d="M847.091 569.252c-15.47.125-35.947 2.538-40.069.027-3.139-1.912-4.39-8.773-4.808-11.938l-.457.018s.868 11.051 4.99 13.562 24.597.097 40.068-.027c4.466-.036 6.008-1.625 5.924-3.979-.62 1.422-2.324 2.31-5.648 2.337z"
        opacity={0.2}
      />
      <rect x={159} y={413} width={60} height={158} rx={11.851} fill={primaryColor} />
      <rect x={273} y={318} width={60} height={253} rx={11.851} fill={primaryColor} />
      <rect x={387} y={252} width={60} height={319} rx={11.851} fill={primaryColor} />
      <rect x={501} y={189} width={60} height={382} rx={11.851} fill={primaryColor} />
      <rect x={615} y={79} width={60} height={492} rx={11.851} fill={primaryColor} />
      <rect x={167} y={405} width={60} height={158} rx={11.851} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <rect x={281} y={310} width={60} height={253} rx={11.851} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <rect x={395} y={244} width={60} height={319} rx={11.851} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <rect x={509} y={181} width={60} height={382} rx={11.851} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <rect x={623} y={71} width={60} height={492} rx={11.851} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M861 571.5H0" />
      <path d="M806.703 475.576s9.411 33.88-2.51 38.898-8.155-37.643-8.155-37.643z" fill="#a0616a" />
      <path
        d="M721.378 692.653s-8.783-.627-11.92 1.255a7.57 7.57 0 0 1-6.274.627s-13.803-1.255-8.784 5.647 10.039 9.41 10.039 12.547 20.703 3.137 21.33 0 1.256-19.449 0-20.076-4.39 0-4.39 0zM744.592 692.653s8.783-.627 11.92 1.255a7.57 7.57 0 0 0 6.274.627s13.802-1.255 8.783 5.647-10.038 9.41-10.038 12.547-20.704 3.137-21.331 0-1.255-19.449 0-20.076 4.392 0 4.392 0z"
        fill="#575a89"
      />
      <path
        d="M695.655 468.675s-4.392 99.127-1.882 104.146 11.293 89.717 10.038 94.736-7.529 25.723 0 28.86 23.841 0 23.841 0 4.392-25.095 2.51-38.27-2.51-68.386-2.51-68.386l12.548-57.72 4.392 54.583s1.254 74.66-7.53 89.717 3.138 21.331 3.138 21.331 23.84 3.137 26.35 2.51-1.882-25.096 0-35.762 6.274-70.267 10.038-84.697 25.096-94.736 9.411-111.048-90.344 0-90.344 0z"
        fill="#3f3d56"
      />
      <circle cx={741.455} cy={246.579} r={21.959} fill="#a0616a" />
      <path d="M725.142 256.617s3.765 30.115 1.883 30.742 33.251 0 33.251 0-6.901-18.194 0-32.624z" fill="#a0616a" />
      <path d="M725.142 281.085s15.292-15.057 33.369 0l1.17 4.488-9.443-.096h-25.096z" fill="#f2f2f2" />
      <path
        d="M799.802 473.694c-1.45.288-5 .878-9.63 1.58-15.416 2.328-42.732 5.854-43.698 3.439-1.255-3.137-5.647-14.43-8.784-9.41s-1.255 9.41-14.43 10.037c-8.965.427-21.996-.89-29.211-2.961-3.388-.972-5.496-2.108-5.295-3.313.627-3.764 7.528-75.286 7.528-82.188s2.51-40.153 2.51-40.153l-18.031-35.479-1.418-2.791s1.882-6.902 7.529-8.157 32.624-16.939 32.624-16.939 5.646-8.783 16.312-8.156 13.175-3.764 27.605 8.156c0 0 17.567 7.529 23.841 11.293s13.175 3.764 13.803 10.038c.125 1.261-.559 3.69-1.732 6.757-4.297 11.243-15.158 31.138-16.858 34.237-.15.27-.232.414-.232.414s-.326 11.28.019 24.487v.031c.339 12.667 1.292 27.104 3.745 35.084 5.02 16.312 20.077 62.739 13.803 63.994z"
        fill="#575a89"
      />
      <path
        d="M769.961 237.565a14.958 14.958 0 0 0-2.482-5.546 29.963 29.963 0 0 0-4.473-12.905A13.54 13.54 0 0 0 759 214.49a11.83 11.83 0 0 0-6.305-1.572c-.4-.007-1.12.115-1.769.144a26.608 26.608 0 0 0-1.252-.35c-.245-.545-.73-2.133-.866-2.026l-1.83 1.454a35.65 35.65 0 0 0-2.331-.322l-.853-2.432a16.66 16.66 0 0 0-1.208 2.272q-1.166-.057-2.332-.04l-1.555-1.494a2.193 2.193 0 0 1-1.716 1.68c-.715.074-1.428.17-2.138.284l-.173-.001c-3.83-.096-7.95-.267-11.153 1.835a10.99 10.99 0 0 0-3.55 4.03c-.392.266-.785.53-1.166.813a12.748 12.748 0 0 0-3.285 3.256 13.809 13.809 0 0 0-1.453 3.522 33.76 33.76 0 0 0-1.673 11.534 17.117 17.117 0 0 0 4.208 10.682c1.642 1.765 3.73 3.068 5.374 4.83 3.387 3.63 4.021 8.691 6.918 12.531 3.063 4.062 8.655 6.735 13.565 7.5a22.66 22.66 0 0 0 16.88-4.21 10.443 10.443 0 0 0 2.875-3.013c1.704-2.948.982-6.653 1.614-9.999 1.187-6.271 7.172-11.534 6.136-17.832z"
        fill="#3f3d56"
      />
      <path d="M686.244 477.458s9.411 33.88-2.51 38.898-8.155-37.643-8.155-37.643z" fill="#a0616a" />
      <path
        d="M697.531 400.578s-4.116 61.082-3.482 75.801c-3.388-.972-5.496-2.108-5.295-3.313.627-3.764 7.528-75.286 7.528-82.188s2.51-40.153 2.51-40.153l-18.031-35.479c.288-1.756.464-2.791.464-2.791l9.097 19.135 12.862 3.45z"
        opacity={0.1}
      />
      <path
        d="M683.735 308.69l-4.392 3.765s-5.647 33.251-5.02 41.407-13.174 131.752-2.509 131.752 22.586-1.882 20.704-6.274 3.133-78.762 3.133-78.762l5.65-65.537z"
        fill="#575a89"
      />
      <path
        d="M799.325 315.447c-4.298 11.243-15.158 31.138-16.858 34.237.05-8.024.082-13.702.082-13.702l13.175-26.978 2.823-2.196s.301 3.319.778 8.64zM799.802 473.694c-1.45.288-5 .878-9.63 1.58-2.403-17.767-8.828-68.861-8.42-73.674.2-2.371.37-14.09.502-26.984.339 12.667 1.292 27.104 3.745 35.084 5.02 16.312 20.077 62.739 13.803 63.994z"
        opacity={0.1}
      />
      <path
        d="M791.646 304.298l9.41 2.51s6.275 69.64 6.902 81.56 8.156 85.326 6.901 88.463-20.704 7.528-21.331 4.392-9.748-73.922-9.266-79.624-2.654-64.676-2.654-64.676z"
        fill="#575a89"
      />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M196.5 344.5l114-95 115-65 114-63 114-110" />
      <circle cx={193.5} cy={349.5} r={11} fill="#f2f2f2" />
      <circle cx={307.5} cy={254.5} r={11} fill="#f2f2f2" />
      <circle cx={422.5} cy={189.5} r={11} fill="#f2f2f2" />
      <circle cx={536.5} cy={126.5} r={11} fill="#f2f2f2" />
      <circle cx={650.5} cy={16.5} r={11} fill="#f2f2f2" />
      <circle cx={196.5} cy={344.5} r={11} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={310.5} cy={249.5} r={11} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={425.5} cy={184.5} r={11} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={539.5} cy={121.5} r={11} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={653.5} cy={11.5} r={11} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
    </svg>
  );
};

UndrawInvesting.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawInvesting;