import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFeaturesOverview = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1086.08 611.71" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={836.86} y1={752.57} x2={836.86} y2={526.52} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={102.69} y1={723.72} x2={102.69} y2={581.57} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M604.67 83.43c-62.66-.36-122.72-16.37-180.14-34.1S310.2 11.85 248.83 3.17c-39.47-5.56-84.45-5.39-115.68 13.58-30.05 18.26-39.17 48.74-43.78 76.93-3.48 21.21-5.28 43.49 6.12 63 7.91 13.54 21.64 24.75 31.27 37.67 33.49 44.95 12 101.9-22 147.41-16 21.35-34.56 41.8-46.72 64.4s-17.41 48.31-5.75 70.78c11.56 22.28 38.22 38.58 66.94 49.81 58.34 22.79 126.56 28.06 193 30.37 147.11 5.12 294.7-2.22 441.89-9.55 54.48-2.72 109.19-5.46 162.63-14 29.68-4.76 60.27-11.93 81.51-27.94 27-20.34 33-53.8 14-78-31.84-40.61-117.38-48.82-140-92.68-12.46-24.15-.94-51.66 15.76-74.74 35.82-49.51 96.79-93.67 98.71-149.31 1.32-38.22-29.42-75.72-75.95-92.66C861.94.42 795.04 4.42 760.12 36.62 724.2 69.77 660.04 83.75 604.67 83.43z"
        fill={primaryColor}
        opacity={0.1}
      />
      <g data-name="flowers">
        <path
          d="M569.04 243.94s-27.48-48.69-68.88-62.72a84.75 84.75 0 0 1-42.91-32.1 142.27 142.27 0 0 1-12.66-22.77"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          d="M418.57 117.35c4.71 4.58 26.68 9.31 26.68 9.31s-5.39-21.81-10.1-26.39a11.902 11.902 0 0 0-16.58 17.08zM431.04 156.85c6.45 1.28 27.47-6.69 27.47-6.69s-16.47-15.4-22.88-16.68a11.908 11.908 0 0 0-4.59 23.37zM476.24 199.54c6.21-2.15 20.33-19.63 20.33-19.63s-21.9-5-28.11-2.86a11.9 11.9 0 1 0 7.78 22.49zM517.76 224.16c6.48-1.07 23.35-15.92 23.35-15.92s-20.74-8.64-27.23-7.57a11.904 11.904 0 0 0 3.88 23.49zM476.77 133.09c0 6.58-11.89 25.64-11.89 25.64s-11.91-19.05-11.91-25.63a11.9 11.9 0 0 1 23.8 0zM524.96 162.49c-2 6.28-19 20.91-19 20.91s-5.66-21.75-3.7-28a11.903 11.903 0 0 1 22.72 7.11zM567.87 197.49c-.87 6.52-15.21 23.83-15.21 23.83s-9.25-20.48-8.38-27a11.901 11.901 0 1 1 23.59 3.17z"
          fill={primaryColor}
        />
        <path
          d="M418.57 117.35c4.71 4.58 26.68 9.31 26.68 9.31s-5.39-21.81-10.1-26.39a11.902 11.902 0 0 0-16.58 17.08zM431.04 156.85c6.45 1.28 27.47-6.69 27.47-6.69s-16.47-15.4-22.88-16.68a11.908 11.908 0 0 0-4.59 23.37zM476.24 199.54c6.21-2.15 20.33-19.63 20.33-19.63s-21.9-5-28.11-2.86a11.9 11.9 0 1 0 7.78 22.49zM517.76 224.16c6.48-1.07 23.35-15.92 23.35-15.92s-20.74-8.64-27.23-7.57a11.904 11.904 0 0 0 3.88 23.49zM476.77 133.09c0 6.58-11.89 25.64-11.89 25.64s-11.91-19.05-11.91-25.63a11.9 11.9 0 0 1 23.8 0zM524.96 162.49c-2 6.28-19 20.91-19 20.91s-5.66-21.75-3.7-28a11.903 11.903 0 0 1 22.72 7.11zM567.87 197.49c-.87 6.52-15.21 23.83-15.21 23.83s-9.25-20.48-8.38-27a11.901 11.901 0 1 1 23.59 3.17z"
          opacity={0.25}
        />
        <path
          d="M567.47 242.98s-5.4-55.66-37.55-85.26a84.72 84.72 0 0 1-26.23-46.73 142.25 142.25 0 0 1-2.34-25.95"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          d="M481.2 66.26c2.45 6.1 20.62 19.33 20.62 19.33s3.91-22.13 1.45-28.23a11.9 11.9 0 1 0-22.07 8.9zM476.56 107.39c5.38 3.78 27.81 5 27.81 5s-8.74-20.7-14.11-24.48a11.903 11.903 0 1 0-13.7 19.47zM500.62 164.78c6.55.55 26.54-9.72 26.54-9.72s-18-13.45-24.55-14a11.902 11.902 0 1 0-2 23.72zM528.6 204.1c6.36 1.65 27.8-5.09 27.8-5.09s-15.47-16.3-21.83-18a11.9 11.9 0 1 0-6 23zM528.04 104.24c-2.66 6-21.26 18.62-21.26 18.62s-3.17-22.24-.51-28.25a11.902 11.902 0 0 1 21.77 9.63zM560.17 150.65c-4.34 4.93-25.86 11.4-25.86 11.4s3.63-22.17 8-27.11a11.904 11.904 0 1 1 17.89 15.71zM585.22 200.03c-3.44 5.6-23.56 15.62-23.56 15.62s-.17-22.47 3.27-28.08a11.91 11.91 0 0 1 20.29 12.46z"
          fill={primaryColor}
        />
      </g>
      <path
        d="M826.51 596.9c2.95 6-17.92 12.45-43.77 14.31-23.16 1.67-42.2-1.05-44.61-5.93s12.34-10.8 35-13.47c25.29-2.96 50.43-.85 53.38 5.09z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path fill="#fff" d="M218.75 279.55l318.58-112.83v389.79l-318.58-6.64V279.55z" />
      <path fill={primaryColor} opacity={0.2} d="M218.75 279.55l318.58-112.83v389.79l-318.58-6.64V279.55z" />
      <path fill="#fff" d="M0 343.92l181.75-64.37v270.32H0V343.92z" />
      <path fill={primaryColor} opacity={0.2} d="M0 343.92l181.75-64.37v270.32H0V343.92z" />
      <path fill="#fff" d="M537.33 166.72L855.9 279.55v270.32l-318.57 6.64V166.72z" />
      <path fill={primaryColor} opacity={0.5} d="M537.33 166.72L855.9 279.55v270.32l-318.57 6.64V166.72z" />
      <path fill="#fff" d="M1077.94 344.73L893.9 279.55v270.32h184.04V344.73z" />
      <path fill={primaryColor} opacity={0.5} d="M1077.94 344.73L893.9 279.55v270.32h184.04V344.73z" />
      <path
        d="M105.91 390.85c-1.29 0-2.34 1.76-2.34 3.93v48.92a29 29 0 0 1-3.31 13.87c-2.09 3.67-5.29 6-8.35 6h-2c-3 0-5.94-2.24-8.24-6.19a28.28 28.28 0 0 1-3.63-13.97v-63.12a19 19 0 0 1 2.6-9.94c1.67-2.64 3.86-4.1 6.16-4.1s4.41 1.46 6 4.08a19.83 19.83 0 0 1 2.46 10v58.94c0 4.3-2 8.1-4.36 8.1-2 0-4.24-3.24-4.24-8.1v-33.66c0-2.16-1.05-3.93-2.34-3.93s-2.35 1.77-2.35 3.93v33.62c0 8.94 3.84 15.68 8.93 15.68 2.48 0 4.77-1.54 6.42-4.35a22.71 22.71 0 0 0 2.63-11.33v-58.94a30.58 30.58 0 0 0-3.91-15.55c-2.48-4.15-5.79-6.42-9.32-6.42s-6.84 2.27-9.35 6.42a30.47 30.47 0 0 0-3.9 15.58v63.11c0 7.23 1.84 14.57 4.9 19.63s7.2 8 11.44 8h2.05c4.15 0 8.31-2.94 11.41-8.08a33.1 33.1 0 0 0 3.59-8.7 42 42 0 0 0 1.34-10.6v-49c0-2.17-1-3.93-2.33-3.93z"
        fill="#fff"
      />
      <path
        d="M553.61 499.77s5.93 7.76-2.74 19.47-15.83 21.61-12.93 28.89c0 0 13.08-21.75 23.72-22s3.65-13.28-8.05-26.36z"
        fill={primaryColor}
      />
      <path
        d="M553.61 499.77a9.81 9.81 0 0 1 1.21 2.44c10.38 12.2 15.91 23.58 5.93 23.87-9.3.27-20.45 16.89-23.12 21.09a8.25 8.25 0 0 0 .31 1s13.08-21.75 23.72-22 3.65-13.32-8.05-26.4z"
        opacity={0.1}
      />
      <path
        d="M564.63 509.66c0 2.73-.31 4.94-.69 4.94s-.68-2.21-.68-4.94.38-1.45.76-1.45.61-1.28.61 1.45z"
        fill="#ffd037"
      />
      <path
        d="M568.41 512.92c-2.39 1.3-4.48 2.09-4.66 1.76s1.61-1.66 4-3 1.45-.35 1.63 0 1.43-.07-.97 1.24z"
        fill="#ffd037"
      />
      <path
        d="M522.28 499.77s-5.93 7.76 2.74 19.47 15.81 21.61 12.92 28.89c0 0-13.07-21.75-23.72-22s-3.65-13.28 8.06-26.36z"
        fill={primaryColor}
      />
      <path
        d="M522.28 499.77a9.81 9.81 0 0 0-1.21 2.44c-10.39 12.2-15.92 23.58-5.93 23.87 9.29.27 20.45 16.89 23.12 21.09a8.31 8.31 0 0 1-.32 1s-13.07-21.75-23.72-22-3.65-13.32 8.06-26.4z"
        opacity={0.1}
      />
      <path
        d="M511.26 509.66c0 2.73.3 4.94.68 4.94s.69-2.21.69-4.94-.39-1.45-.76-1.45-.61-1.28-.61 1.45z"
        fill="#ffd037"
      />
      <path
        d="M507.47 512.92c2.4 1.3 4.49 2.09 4.67 1.76s-1.61-1.66-4-3-1.45-.35-1.63 0-1.47-.07.96 1.24z"
        fill="#ffd037"
      />
      <ellipse cx={537.94} cy={597.94} rx={62} ry={9.51} fill={primaryColor} opacity={0.1} />
      <path
        d="M569.86 537.68l-.3 2.42-.42 3.42-.17 1.42-.42 3.43-.18 1.42-.41 3.42-4.75 38.9c-.42 3.47-6.09 6.18-12.94 6.18h-24.65c-6.85 0-12.51-2.71-12.94-6.18l-4.75-38.9-.42-3.42-.17-1.42-.42-3.43-.18-1.42-.41-3.42-.3-2.42c-.24-2 2.83-3.63 6.71-3.63h50.42c3.88 0 6.94 1.66 6.7 3.63z"
        fill="#444053"
      />
      <path
        fill="#9d9cb5"
        d="M569.56 540.1l-.42 3.42h-62.4l-.41-3.42h63.23zM568.97 544.95l-.42 3.42h-61.21l-.42-3.42h62.05zM568.37 549.8l-.41 3.42h-60.03l-.42-3.42h60.86z"
      />
      <path
        d="M417.4 326.45l-9.55 12.69a.73.73 0 0 1-.74.31l-9.87-2.36a1.06 1.06 0 0 1-.68-.9l-1.76-13.07a1.4 1.4 0 0 1 .23-1l9.53-12.67a2.73 2.73 0 0 0-.22-3.41 10.31 10.31 0 0 0-6.76-3 1.89 1.89 0 0 0-.42 0c-2.66.2-8.36 2.17-12.76 8.36-4.27 6-8.74 17.06-4.78 29.42.47 1.49 1 3.46-.58 5.55s-42.45 53-42.45 53c-3.83 4.37-3.55 12.45 0 17.15a8.49 8.49 0 0 0 6.65 3.6 7.44 7.44 0 0 0 6.29-3.69s38.14-53.8 40-56.25a3 3 0 0 1 2.36-1.43 3.27 3.27 0 0 1 1.82.67 12 12 0 0 0 6.89 2.09c5.7 0 11.69-3.5 15.35-8.34a30.18 30.18 0 0 0 6.29-16.92 18.6 18.6 0 0 0-2.27-9.63 1.47 1.47 0 0 0-2.57-.22zm-72 83.95a2.53 2.53 0 0 1-4.23 0 5 5 0 0 1 0-5.6 2.53 2.53 0 0 1 4.23 0 5 5 0 0 1 .01 5.6zM755.51 350.98c-2.64-30.52-23.33-54.3-48.5-54.3-16.66 0-31.33 10.39-40.14 26.26a19.15 19.15 0 0 0-8.75-2.15c-12.72 0-23 14-23.23 29.78-13 5.16-21.56 21-21.56 37.62 0 20.37 13.24 38.35 29.56 38.35h107.44c16.33 0 29.57-18 29.57-38.35 0-18.14-10.54-34.13-24.39-37.21zm-24.27-7l-43.49 54.5c-.56.69-2 2.23-3.78 2.23a5.33 5.33 0 0 1-3.8-2.31l-18.25-22.75a1.91 1.91 0 0 1 0-2.31l5.79-7.22a1.17 1.17 0 0 1 .91-.49 1.16 1.16 0 0 1 .91.49l14.45 18 39.68-49.87a1.2 1.2 0 0 1 .91-.49 1.1 1.1 0 0 1 .91.49l5.69 7.35a1.87 1.87 0 0 1 .07 2.35z"
        fill="#fff"
      />
      <ellipse cx={1018.88} cy={386.12} rx={9.89} ry={13.19} fill="#fff" />
      <path
        d="M1018.88 404.4a10.47 10.47 0 0 1-3.21-.52l-9.76 13.27a.65.65 0 0 0 0 .77l15.51 22a4.46 4.46 0 0 1 0 5.06 2.44 2.44 0 0 1-1.9 1 2.41 2.41 0 0 1-1.89-1l-15.45-22a.36.36 0 0 0-.6 0l-3.77 5.12c-3.15 4.26-7.33 3.62-11.83 3.65s-8.87-2.53-12.07-6.85l-3.62-4.92a.36.36 0 0 0-.6 0l-15.45 22a2.44 2.44 0 0 1-1.9 1 2.41 2.41 0 0 1-1.89-1 4.46 4.46 0 0 1 0-5.06l15.51-22a.76.76 0 0 0 0-.77l-22.19-30.12c-.27-.36-.7-.11-.7.38v60.28c0 4.84 3 8.8 6.59 8.8l72.52 3c3.63 0 6.59-4 6.59-8.8v-48.93c-2.49 3.47-5.99 5.64-9.89 5.64z"
        fill="#fff"
      />
      <path
        d="M1005.18 386.12a23.27 23.27 0 0 1 1.69-8.8l-57.23-3a5.57 5.57 0 0 0-4.08 1.93l32.33 43.9a10 10 0 0 0 8.05 4.5c3 0 5.92 1.41 8.06-1.5l16.58-22.52c-3.29-3.35-5.4-8.6-5.4-14.51z"
        fill="#fff"
      />
      <path
        d="M1085.86 544.23s-11.69-.7-10.31 7.48a2 2 0 0 0 1 2.11s0-.61 1.2-.4a5.63 5.63 0 0 0 1.27.06 2.71 2.71 0 0 0 1.55-.64s3.28-1.36 4.56-6.73c0 0 .95-1.17.91-1.47l-2 .84a3.55 3.55 0 0 1 .14 2.61s-.06-2.56-.44-2.5c-.08 0-1 .5-1 .5s1.16 2.47.29 4.27c0 0 .33-3-.65-4.09l-1.39.81s1.36 2.55.44 4.64c0 0 .24-3.2-.73-4.45l-1.26 1s1.28 2.53.5 4.26c0 0-.1-3.73-.77-4a7.72 7.72 0 0 0-1.27 1.37s.87 1.83.33 2.79c0 0-.33-2.48-.6-2.49a8.12 8.12 0 0 0-1.21 2.77 6 6 0 0 1 .95-2.93 3.29 3.29 0 0 0-1.68.87s.17-1.16 2-1.27a7.8 7.8 0 0 1 1.14-1.32 7.14 7.14 0 0 0-2.84.33s1-1.1 3.17-.6l1.24-1a10.3 10.3 0 0 0-3.32 0s1.14-1 3.65-.26l1.36-.81a12.39 12.39 0 0 0-3.17-.28 4.86 4.86 0 0 1 3.56.06l1-.43s-1.46-.29-1.88-.33-.45-.17-.45-.17a5.06 5.06 0 0 1 2.73.31 12.47 12.47 0 0 0 1.98-.91z"
        fill={primaryColor}
      />
      <ellipse cx={1077.81} cy={554.53} rx={8.27} ry={1.4} fill={primaryColor} opacity={0.1} />
      <path
        d="M905.82 544.57s-14.1-.85-12.44 9a2.41 2.41 0 0 0 1.25 2.54s0-.73 1.45-.48a6.27 6.27 0 0 0 1.53.07 3.18 3.18 0 0 0 1.88-.77s4-1.64 5.5-8.12c0 0 1.15-1.41 1.1-1.78l-2.38 1a4.27 4.27 0 0 1 .17 3.14s-.07-3.08-.53-3c-.09 0-1.24.59-1.24.59s1.4 3 .35 5.17c0 0 .4-3.69-.79-5l-1.67 1s1.63 3.09.53 5.62c0 0 .28-3.87-.88-5.38l-1.52 1.19s1.54 3 .6 5.13c0 0-.12-4.5-.93-4.84a9.18 9.18 0 0 0-1.53 1.65s1 2.21.4 3.38c0 0-.4-3-.73-3a10 10 0 0 0-1.46 3.35 7.26 7.26 0 0 1 1.14-3.54 4 4 0 0 0-2 1s.21-1.41 2.36-1.53a9.21 9.21 0 0 1 1.38-1.6 8.62 8.62 0 0 0-3.43.4s1.14-1.33 3.82-.73l1.5-1.22a12.5 12.5 0 0 0-4 0s1.37-1.17 4.41-.32l1.63-1a14.66 14.66 0 0 0-3.83-.33s1.51-.82 4.31.06l1.16-.52s-1.75-.34-2.27-.4-.54-.2-.54-.2a6.12 6.12 0 0 1 3.3.37 14.19 14.19 0 0 0 2.4-.9z"
        fill={primaryColor}
      />
      <ellipse cx={896.11} cy={557.01} rx={9.98} ry={1.69} fill={primaryColor} opacity={0.1} />
      <path
        d="M874.32 590.14s1.15-1.11.77-1.86a1.73 1.73 0 0 1 0-1.49s-2.58-10.14-3.54-11.16a7.78 7.78 0 0 1-1.43-2.52 1.31 1.31 0 0 0 .14-.64 5.11 5.11 0 0 0-1-2.83 6.94 6.94 0 0 1-1.19-3.75 4.16 4.16 0 0 1 0-.5 5 5 0 0 0-3.46-3.07c.33-2.15.78-4.3.92-6.46.45-6.77-2.07-13.34-4.55-19.68a20.75 20.75 0 0 0-2.17-4.47 13 13 0 0 0-9.34-5.1 9.13 9.13 0 0 0-4 .39 12.42 12.42 0 0 0-3.45 2.31c-1.07.9-2.14 1.82-3.13 2.8l-.12.12-.35.37-.14.14-.33.37-.12.13c-.14.17-.29.34-.43.52-.13.17-.26.33-.38.5l-.12.17-.26.37-.12.19c-.09.13-.16.26-.24.39l-.11.18c-.1.19-.21.38-.31.58l-.36.8v.11l-.21.53c-.27.64-.53 1.28-.86 1.89l-.06.1-.72.87a6.76 6.76 0 0 0-.82 1.4l-.07.16c0 .07-.05.15-.08.22l-.07.18a2 2 0 0 1-.07.23v.19l-.06.22v.2c0 .07 0 .15-.05.22v1.44a2.44 2.44 0 0 0 0 .27 1.1 1.1 0 0 0 0 .18 2.11 2.11 0 0 0 0 .25v.43a1.16 1.16 0 0 0 0 .18l.06.26v.16l.09.28s0 .09.05.13.1.28.16.41a10.76 10.76 0 0 0 1.12 1.9c.29.4.59.79.89 1.19l.43.6a10.93 10.93 0 0 1 .79 1.25 8.7 8.7 0 0 1-.31 8.62l-.36.55a2.93 2.93 0 0 0-.41 1 2.14 2.14 0 0 0 .57 1.71l-.89.23c-.73.2-1.23.36-1.23.36a10.37 10.37 0 0 0-1.82 0 5 5 0 0 0-2.19 1.4s-3.82.46-5.07-.65-5.63-1.49-5.63-1.49-1.24-2.42-2.58-3.17-4.58-2.14-4.68-2.88a6.79 6.79 0 0 0-1.24-2.14 11 11 0 0 0-2-.24l-.21-.36-2.67-4.61s-3.35-3.91-5.16-4.28 2.55 4.15 2.76 4.36a2.87 2.87 0 0 0-4 .66c-1.42 1.58 2.35 5.29 4.69 7.34l.38.33a4.74 4.74 0 0 0 .09.61c1.05 5.49 6.87 10.24 6.87 10.24s.67 3.07 2.87 3.82c1.75.59 11.15 4.85 16.05 5.7-.41 1.06-.89 3.52 1.14 7.14 0 0 .48 6.42-.57 7.26s-1 10.14-1 10.14-4 16.19 0 19.63a3.12 3.12 0 0 0 .85.52c0 .25.07.51.1.78.18 1.62.24 3.3-.19 4-1 1.58.33 5.86.33 5.86s-3.86 21.87-2.14 29.59a88.48 88.48 0 0 1 1.52 17.5s-.57 6.79 2.39 10.89a11.26 11.26 0 0 1 .57 3 17.89 17.89 0 0 0 1.53 5.67c.67 1.3 2 6.8.86 8.28s1.24 17.69 1.24 17.69-1.91 5 0 7.63l.06.07a13 13 0 0 1-3.35-.48c-2.14-.72-.54 2 2 3.86-1.11 2.52-2.63 5.9-3.14 7-2.21.38-6.59 1-9.16.39-3.53-.83 1.53 4.84 6.3 5.87a45.69 45.69 0 0 0 10.22.74l3.08-3.4a39.12 39.12 0 0 0 7.51.28l-.27 3.16h1.81v-3.28c1.14-.11 2.32-.26 3.54-.48 0 0 .07-3.46-.15-6.73l1.11.1.17-1.81 3.93.71 3.53-29s.39-10.79 1.25-16.84-1.82-26.34-1.82-26.34-.19-1-.38-2.88 0-12.85 0-12.85 1.43-6 1.15-6.51.09-3.07.09-3.07c6-12.23-1.38-23.28-3.95-26.56a.79.79 0 0 0 .25-.53.5.5 0 0 0 0-.21 22.4 22.4 0 0 0-1.44-3l1.5-1.91c.52.75.89 1.31.89 1.31s1.62-3.63 3.25-5 9.45-14.42 9.45-14.42 1.82-1.22.86-2.24-.45-.89-.45-.89zm-24.06 102.92a2.58 2.58 0 0 0-.68-1.11s-.28-2-.38-4.57c.57 2 1.15 3.45 1.15 3.45zm4.5 47.57v-.53h.14zm1.18-132.38v-.12a1.48 1.48 0 0 1 .62-1.33.7.7 0 0 0 .33-.65 2.36 2.36 0 0 0-.46-1.16c.19.14.78.46 1.18-.7a1.77 1.77 0 0 0 .09-.56 4.69 4.69 0 0 0-1.13-2.62l4.32-9.1a11.57 11.57 0 0 0 1.44.33c-1.13 3.5-2.06 7.67-2.06 7.67l-3.34 7.35a1.41 1.41 0 0 1 .58.42z"
        transform="translate(-56.96 -144.15)"
        fill="url(#prefix__a)"
      />
      <path
        d="M784.61 590.77s-5.61.69-8.34-.25.84 4 4.53 5.21a34.77 34.77 0 0 0 8 1.36l4.33-4.08 4.6.36-.8 4.51 1.43.13.55-5.9z"
        fill="#444053"
      />
      <path
        d="M784.61 590.77s-5.61.69-8.34-.25.84 4 4.53 5.21a34.77 34.77 0 0 0 8 1.36l4.33-4.08 4.6.36-.8 4.51 1.43.13.55-5.9z"
        opacity={0.1}
      />
      <path
        d="M776.51 601.08s-6.74 1.47-10.15.64 1.48 4.8 6.09 5.81a42.63 42.63 0 0 0 9.87.74l4.8-5.44 5.62-.09-.46 5.57h1.76v-7.23z"
        fill="#444053"
      />
      <path
        d="M776.51 601.08s-6.74 1.47-10.15.64 1.48 4.8 6.09 5.81a42.63 42.63 0 0 0 9.87.74l4.8-5.44 5.62-.09-.46 5.57h1.76v-7.23z"
        opacity={0.1}
      />
      <path
        d="M801.41 472.95s11.53 12.82 4.62 27.3c0 0-.37 2.59-.1 3.05s-1.1 6.46-1.1 6.46-.19 10.88 0 12.73.37 2.85.37 2.85 2.58 20.11 1.75 26.11-1.2 16.7-1.2 16.7l-3.41 28.78-17.71-3.32 8-39.49.28-7s-3.32-8.57-1.85-12.91-.37-59.59-.37-59.59z"
        fill="#444053"
      />
      <path
        d="M801.41 472.95s11.53 12.82 4.62 27.3c0 0-.37 2.59-.1 3.05s-1.1 6.46-1.1 6.46-.19 10.88 0 12.73.37 2.85.37 2.85 2.58 20.11 1.75 26.11-1.2 16.7-1.2 16.7l-3.41 28.78-17.71-3.32 8-39.49.28-7s-3.32-8.57-1.85-12.91-.37-59.59-.37-59.59z"
        opacity={0.02}
      />
      <path
        d="M792.93 534.94c-2 3.87-.74 13.28-.74 13.28 2.67 2.31 1.2 22.42 1.2 22.42s1.84 19.83 3 22.14 1 11.8 1 11.8c-13.56 2.49-22.42-2.86-22.42-2.86s4.34-9.87 4.43-10.33c.05-.26.63.44.8.65l-.8-1.11c-1.85-2.58 0-7.56 0-7.56s-2.31-16-1.2-17.53-.18-6.92-.83-8.21a18.08 18.08 0 0 1-1.48-5.63 11.47 11.47 0 0 0-.55-2.95c-2.86-4.06-2.31-10.79-2.31-10.79a89.18 89.18 0 0 0-1.47-17.34c-1.66-7.66 2.07-29.34 2.07-29.34s-1.24-4.24-.32-5.81c.42-.7.36-2.36.18-4-.22-2-.64-3.86-.64-3.86l25.19-4.44c.53.88 1 1.73 1.46 2.55 8.33 15.39 2.71 21.1 2.71 21.1l-5.35 16.42s-1.9 17.52-3.93 21.4z"
        fill="#444053"
      />
      <path
        d="M753.04 414.56l-3.6 3s-.71-.56-1.65-1.41c-2.26-2-5.9-5.71-4.53-7.27a2.72 2.72 0 0 1 3.86-.65c-.2-.22-4.38-4.69-2.66-4.33s5 4.24 5 4.24l2.58 4.57zM801.23 464.38l-4.24 1.29 3.22 5.62 3.69-4.79-2.67-2.12z"
        fill="#efb7b9"
      />
      <circle cx={791.27} cy={399.44} r={12.08} fill="#efb7b9" />
      <path
        d="M784.16 403.85s11 17.43.56 18.91 14 12.08 14 12.08l9.13-9.22s-9.5-16.42-8-22.69-15.69.92-15.69.92z"
        fill="#efb7b9"
      />
      <path
        d="M799.53 476.02a56.54 56.54 0 0 1-7.43 1.73s-13.6 6-18.55 4c-.22-2-.64-3.86-.64-3.86l25.13-4.42c.56.88 1.05 1.73 1.49 2.55z"
        opacity={0.1}
      />
      <path
        d="M812.04 430.42l-2.46 5.09-2.77 5.72-.4.82-3.29 7.11-4.18 9s1.48 1.75 1 3.14-1.11.73-1.19.65c.07.11 1 1.31.17 1.84a1.75 1.75 0 0 0-.55 1.75s3.41 5.63 4.06 7.66-10.33 3.78-10.33 3.78-15.59 6.92-19.47 3.5 0-19.46 0-19.46 0-9.22 1-10.05.55-7.2.55-7.2c-2.67-4.89-.83-7.66-.83-7.66l-.74-12.54s1.2-1.29 2.12-1.38a8.73 8.73 0 0 1 1.76 0s.48-.17 1.19-.36c1.48-.42 3.93-1 4.8-.57 1.29.65 9.6-1 9.6-1a102.19 102.19 0 0 1 10.79-1 11 11 0 0 1 3.66.4 4.9 4.9 0 0 1 3.53 3.11 6.43 6.43 0 0 0 1.11 4.24c1.5 2.4.87 3.41.87 3.41z"
        fill="#ff6484"
      />
      <path d="M753.04 414.56l-3.6 3s-.71-.56-1.65-1.41c-.29-3.11 2.36-3.52 4.23-3.44z" opacity={0.1} />
      <path
        d="M774.2 423.51l-1.57.09s-3.69.46-4.89-.65-5.44-1.47-5.44-1.47-1.2-2.4-2.49-3.14-4.43-2.12-4.52-2.86a6.66 6.66 0 0 0-1.2-2.12s-6.92-1.66-5.9 3.78 6.64 10.15 6.64 10.15.65 3 2.77 3.78 15.86 7.2 18.08 5.54-1.48-13.1-1.48-13.1z"
        fill="#ff6484"
      />
      <path
        d="M811.19 426.98a6.43 6.43 0 0 1-1.11-4.24 4.9 4.9 0 0 0-3.53-3.11 9.46 9.46 0 0 0-1.79-.35 4.9 4.9 0 0 1 3.48 3.09 6.35 6.35 0 0 0 1.11 4.24c1.47 2.4.83 3.42.83 3.42l-2.46 5.08-2.78 5.74-.39.82-3.29 7.11-4.18 9s1.47 1.75 1 3.14-1.1.73-1.19.65c.08.11 1 1.31.18 1.84a1.77 1.77 0 0 0-.56 1.75s3.42 5.63 4.06 7.66-10.33 3.78-10.33 3.78-10.83 4.8-16.68 4.43c5 1.95 18.53-4.06 18.53-4.06s11-1.75 10.33-3.78-4.06-7.66-4.06-7.66a1.75 1.75 0 0 1 .55-1.75c.8-.53-.1-1.73-.17-1.84.08.08.76.64 1.19-.65s-1-3.14-1-3.14l4.18-9 3.29-7.11.4-.82 2.77-5.72 2.46-5.09s.64-1.03-.84-3.43z"
        opacity={0.1}
      />
      <path
        d="M810.36 429.04l1.66 1.38a7.61 7.61 0 0 0 1.39 2.5c.92 1 3.41 11.06 3.41 11.06a1.79 1.79 0 0 0 0 1.48c.37.74-.74 1.85-.74 1.85s-.55-.19.37.83-.83 2.21-.83 2.21-7.56 12.91-9.13 14.3-3.14 5-3.14 5-3.28-5.16-4.06-5.26l3.23-7.29s2.21-10.14 3.87-12-.83-8.21-.83-8.21z"
        fill="#ff6484"
      />
      <path
        d="M811.42 447.85c-1.38 1.66-3.82 2-6 1.77-.32 0-.63-.08-.95-.14-.47-.09-.94-.2-1.4-.33a14.59 14.59 0 0 1-4.58-2.25 2.88 2.88 0 0 0-1-.59 2.16 2.16 0 0 0-2.18 1.17c-.47.75-.69 1.63-1.17 2.38a5.49 5.49 0 0 1-4.53 2.22 16 16 0 0 1-5.14-1 15.28 15.28 0 0 0 3.3-5.47 13.24 13.24 0 0 0 .26-4.12c-.4-6.53-2.67-13.41-8-17.21-.92-.66-2-1.44-2.34-2.43 1.48-.42 3.93-1 4.8-.57 1.29.65 9.6-1 9.6-1a102.19 102.19 0 0 1 10.79-1 11 11 0 0 1 3.66.4 23 23 0 0 0-.3 8.26 18.8 18.8 0 0 0 1.82 4.86c.48.91 1 1.82 1.49 2.73 1.41 2.52 2.75 5.05 3 7.89a6.09 6.09 0 0 1-1.13 4.43zM793.18 460.85a6.36 6.36 0 0 1 2.16-.19 4 4 0 0 1 1.62.94h-4.74c-1.22 0-3.06.07-4-.79.82-.83 3.76.18 4.96.04z"
        opacity={0.1}
      />
      <path
        d="M776.75 398.02a7.14 7.14 0 0 0-.82 6.94c.76 1.79 2.22 3.18 3.12 4.9a8.85 8.85 0 0 1-.3 8.55 4.1 4.1 0 0 0-.74 1.53c-.22 1.41 1.24 2.42 2.4 3.24 5.32 3.8 7.59 10.68 8 17.21a12.94 12.94 0 0 1-.25 4.12 15.19 15.19 0 0 1-3.3 5.47 16.24 16.24 0 0 0 5.14 1 5.53 5.53 0 0 0 4.53-2.23c.48-.74.7-1.62 1.17-2.38a2.15 2.15 0 0 1 2.18-1.17 3 3 0 0 1 1 .59 14.48 14.48 0 0 0 6.93 2.72c2.15.25 4.59-.11 6-1.77a6.14 6.14 0 0 0 1.13-4.46c-.48-5.59-5.21-10-6.3-15.48-.89-4.45.71-9 1-13.52.44-6.7-2-13.23-4.39-19.5a21.74 21.74 0 0 0-2.1-4.44 12.44 12.44 0 0 0-9-5 8.53 8.53 0 0 0-3.89.39 11.94 11.94 0 0 0-3.34 2.28c-2.28 2-4.63 4-6 6.78-.54 1.12-.89 2.32-1.49 3.4"
        fill="#925978"
      />
      <g opacity={0.1}>
        <path d="M778.93 395.58c.59-1.09 1-2.29 1.48-3.4a14 14 0 0 1 1.92-2.89 16.27 16.27 0 0 0-3.39 4.46c-.52 1.09-.87 2.25-1.44 3.31l.73-.62a7.68 7.68 0 0 0-.51.8 8.61 8.61 0 0 0 1.21-1.66zM807.3 446.95a14.55 14.55 0 0 1-6.93-2.73 3.37 3.37 0 0 0-1-.59 2.19 2.19 0 0 0-2.18 1.18 4.59 4.59 0 0 0-.26.49 1.53 1.53 0 0 1 1-.09 3 3 0 0 1 1 .59 14.48 14.48 0 0 0 6.93 2.72c2.15.25 4.59-.11 6-1.77a4 4 0 0 0 .46-.69 7.71 7.71 0 0 1-5.02.89zM791.45 449.41a16.22 16.22 0 0 1-5.13-1 15.35 15.35 0 0 0 3.29-5.48 12.88 12.88 0 0 0 .26-4.11c-.4-6.53-2.66-13.42-8-17.21-1.16-.83-2.61-1.84-2.4-3.25a4.45 4.45 0 0 1 .75-1.53 8.83 8.83 0 0 0 .3-8.54c-.9-1.72-2.36-3.12-3.13-4.9a7.21 7.21 0 0 1 .32-6.15 9.71 9.71 0 0 1-.81.76 8.86 8.86 0 0 1-.67.82 7.15 7.15 0 0 0-.31 6.14c.76 1.79 2.22 3.18 3.12 4.9a8.85 8.85 0 0 1-.3 8.55 4.1 4.1 0 0 0-.74 1.53c-.22 1.41 1.24 2.42 2.4 3.24 5.32 3.8 7.59 10.68 8 17.21a12.94 12.94 0 0 1-.25 4.12 15.19 15.19 0 0 1-3.3 5.47 16.24 16.24 0 0 0 5.14 1 5.53 5.53 0 0 0 4.53-2.23c.06-.1.12-.2.17-.3a6.28 6.28 0 0 1-3.24.96z" />
      </g>
      <path
        d="M128 712.72a14.11 14.11 0 0 1-5.82-2.13l-.18-.13a1.93 1.93 0 0 0 .3-.69 3.38 3.38 0 0 1-.38-1.54 3.54 3.54 0 0 0-.3-1.48v-2.5a4.6 4.6 0 0 1-.84-2.87c-.07-2.07-.15-12.23-.15-12.23a4.76 4.76 0 0 1-.07-1.62c.07-1.18.07-1.62.07-1.62a4.46 4.46 0 0 1-.22-2.14 2.75 2.75 0 0 0-.54-1.91l1.14-5.6s.63-19.32-1.21-25.15 0 0 0-.07c.15-3.75-2.13-10-.84-14.36s1.45-5.3 1.45-5.3-5.7-14.29-7.14-17.68a43.88 43.88 0 0 0-3-6.36q-.14-.19-.27-.36l-.15-.18a3.87 3.87 0 0 0 .55-1.7c.08-1-.07-2.26.7-3a6.17 6.17 0 0 1 .94-.63 3.74 3.74 0 0 0 1.66-3.6 6.07 6.07 0 0 0-1.51-2.93 9 9 0 0 0 .13-1.48 8.24 8.24 0 0 0-2.61-6V587a4.72 4.72 0 0 0-.91-2.84l.21.15-.36-.31a2.67 2.67 0 0 0-.59-.46 11.16 11.16 0 0 0-11.6-.6 6.36 6.36 0 0 0-2.26 2c-1.19 1.84-.89 4.21-1.51 6.3s-2 3.63-3.17 5.37-2.14 3.8-1.7 5.83c.32 1.48 1.36 2.8 1.34 4.3a3.39 3.39 0 0 1-3 3.16h-.45a11 11 0 0 0 4.9 1.56c0 .14-.08.27-.11.41-1.36 5.28-2.61 12-2.61 12s.84 6.78-.91 12.08-1.52 16.21-1.52 16.21 4.86-2.51 5.17-.89 0 2.06 0 2.06a22.93 22.93 0 0 0 2.16 1v.65l-.22 2.9a3.21 3.21 0 0 0 .27 1.76c.42.81 0 3 0 3s-.36.22 0 1.26a4.27 4.27 0 0 1-.28 2.5s-.43 5.52-.51 6.7a23.28 23.28 0 0 1-1.52 4.49s1.3 1.62 0 1.85-1.44 2.2-1.44 2.2-1.52 1.26-1.52 1.7A34.87 34.87 0 0 0 79 701.6s-1.6 1.47-1.37 2.87c.13.79-.13 1.06-.38 1.15.28 0 .59.22.45.91-.22 1.18-.83 3.68-.83 3.68h.11c-1.25 1.44-3.06 3.85-3.34 6v.26l-.7 1.53 6 2.65.53-.81s2.66 3 5.7 3.68a7.75 7.75 0 0 0 1.59.18 14.2 14.2 0 0 0 4.94-1s2.2-2.72-3.5-3.24c0 0-3.34-3.83-3-5.45a19.14 19.14 0 0 0 .21-2.06v-.44l.39.06.07-1.24a1 1 0 0 0 .23-.74c0-.51-.46-.59 0-.88s.45 0 .45-.73-.3-.52.38-1.26-.07-2.06-.07-2.06a3.75 3.75 0 0 0 1.49-2.66c-.07-1.54 5.09-11.34 6.15-11.71s1.14-2.29 1.14-2.29 1.45.3 1.9 0a17 17 0 0 0 1.9-2.58s5.77-14.58 5.85-20.1l.38-1.25s2.2 2.87 1.89 4.93 1.69 3.54 1.69 3.54v6.26a18.38 18.38 0 0 1 .36 3.31c-.07 1 .9 2.06.53 2.95a5 5 0 0 0 0 2.43s-.08 2.06 0 2.65-.3 7.36 1.68 10.31c0 0 .83 2.13 0 3.53s.75 2.8.75 2.8-1 1.62 0 2.8a3.57 3.57 0 0 1 .71 2.61c-.4 1.5-.69 3.46 0 4.83l.18 2.11 5.82-.45v-1.17a21.67 21.67 0 0 0 7.67.48 7.27 7.27 0 0 0 5.08-2.77s2.34-4.05-4.03-2.5z"
        transform="translate(-56.96 -144.15)"
        fill="url(#prefix__b)"
      />
      <path
        d="M73.98 571.11a7 7 0 0 1-4.94 2.74 20.12 20.12 0 0 1-7.41-.49v1.18l-5.62.44-.17-2.1c-.65-1.38-.35-3.38.05-4.88a15.74 15.74 0 0 1 .69-2.08s4.84-4.11 6.45-1a5 5 0 0 0 1.42 1.62 13.43 13.43 0 0 0 5.62 2.12c6.18-1.58 3.91 2.45 3.91 2.45z"
        fill="#ff6484"
      />
      <path d="M59.04 567.08s0 3.81 2.78 3.74 3.16-1.52 2.28-2.5a11.78 11.78 0 0 1-1.54-2.27z" opacity={0.1} />
      <path
        d="M35.04 578.59a13.36 13.36 0 0 1-4.76 1 7.9 7.9 0 0 1-1.54-.17c-2.93-.66-5.5-3.67-5.5-3.67l-.51.81-5.8-2.64.66-1.54v-.27c.27-2.1 2-4.51 3.22-5.94.69-.8 1.23-1.32 1.23-1.32l7 1v2a16.92 16.92 0 0 1-.2 2.06c-.29 1.61 2.93 5.42 2.93 5.42 5.4.52 3.27 3.26 3.27 3.26z"
        fill="#ff6484"
      />
      <path d="M21.11 561.55a.69.69 0 0 1-.36 0 1 1 0 0 1 .36 0z" fill="#444053" />
      <path
        d="M28.96 565.91v2l-8.19-1.31s0-.16.09-.42c.64-.81 1.18-1.33 1.18-1.33zM64.47 566.5c-1.24 2.87-8.61 2.19-8.61 2.19a3.3 3.3 0 0 0 .05-.7 15.74 15.74 0 0 1 .69-2.08s4.84-4.11 6.45-1a5 5 0 0 0 1.42 1.59z"
        opacity={0.1}
      />
      <path
        d="M64.59 565.69c-.73 3.29-8.73 2.56-8.73 2.56a3.74 3.74 0 0 0-.66-2.78c-1-1.18 0-2.79 0-2.79s-1.54-1.39-.73-2.79 0-3.52 0-3.52c-1.9-2.93-1.54-9.68-1.62-10.26s0-2.64 0-2.64a5.1 5.1 0 0 1 0-2.42c.36-.88-.58-1.91-.5-2.93a19.23 19.23 0 0 0-.31-3.27v-6.23a4.19 4.19 0 0 1-1.62-3.52c.29-2.06-1.84-4.91-1.84-4.91l-.36 1.24c-.08 5.5-5.65 20-5.65 20a17.23 17.23 0 0 1-1.83 2.56c-.44.3-1.83 0-1.83 0s-.08 1.91-1.1 2.27-6 10.12-5.94 11.66a3.78 3.78 0 0 1-1.47 2.72s.73 1.32.07 2.05-.36.51-.36 1.25 0 .44-.44.73 0 .37 0 .88a1.06 1.06 0 0 1-.22.73l-.07 1.23-8.58-1.37s.58-2.5.8-3.67c.13-.69-.17-.87-.44-.91.24-.09.49-.36.37-1.14-.22-1.4 1.32-2.86 1.32-2.86a35.13 35.13 0 0 1 8.14-18.26c0-.44 1.46-1.69 1.46-1.69s.15-2 1.4-2.2 0-1.83 0-1.83a24.09 24.09 0 0 0 1.46-4.47c.08-1.17.49-6.67.49-6.67a4.37 4.37 0 0 0 .27-2.49c-.34-1 0-1.25 0-1.25s.42-2.2 0-3a3.31 3.31 0 0 1-.25-1.76l.2-2.88.31-4.3s22.8-3.89 25.29-.74a3.8 3.8 0 0 1 .59 1.29c1.78 5.8 1.17 25 1.17 25l-1.1 5.57a2.75 2.75 0 0 1 .52 1.9 4.57 4.57 0 0 0 .22 2.13s0 .44-.08 1.61a4.87 4.87 0 0 0 .08 1.62s.07 10.11.14 12.17a4.72 4.72 0 0 0 .81 2.86v2.49a3.62 3.62 0 0 1 .29 1.47 3.45 3.45 0 0 0 .33 1.56z"
        fill="#444053"
      />
      <path
        d="M30.28 579.57a7.9 7.9 0 0 1-1.54-.17c-2.93-.66-5.5-3.67-5.5-3.67l-.51.81-5.8-2.64.66-1.54v-.27l6 3s4.8 2.33 6.69 4.48zM69.04 573.85a20.12 20.12 0 0 1-7.41-.49v1.18l-5.62.44-.17-2.1c1.78 0 4.65.07 5.89 0a27.32 27.32 0 0 1 7.31.97zM23.98 559.66a2.27 2.27 0 0 1 .86.11 6.81 6.81 0 0 1 .82.59 4 4 0 0 1 .55.36c.21.21.3.52.51.73.4.39 1 .31 1.56.49.06 0 .12 0 .13.11a.15.15 0 0 1-.09.14.88.88 0 0 1-.85 0 3.28 3.28 0 0 1-.7-.54 4.68 4.68 0 0 0-1.38-.85c-.69-.28-1.89-.35-2.33-1a2 2 0 0 1 .92-.14zM23.39 561.2a2.14 2.14 0 0 1 .44.18l.75.38a2.77 2.77 0 0 1-1.53-.34 3.17 3.17 0 0 1-.49-.23 2.31 2.31 0 0 1 .83.01zM24.39 562.49a1.91 1.91 0 0 1 .48 0 2.39 2.39 0 0 1 .78.47 3.07 3.07 0 0 0 1.94.67.85.85 0 0 1-.42.07h-1.58a1.82 1.82 0 0 1-.52 0 2.54 2.54 0 0 1-.65-.24c-.27-.12-1.38-.44-1.39-.81s1.09-.16 1.36-.16zM60.25 564.36a8.79 8.79 0 0 0 1.45 0 2.82 2.82 0 0 0 1.44-.46c.42-.32.33-.66-.2-.68a3.81 3.81 0 0 0-1.45.35 4.83 4.83 0 0 0-.68.35c-.1.1-.46.45-.56.44zM62.04 565.16c0 .18-.23.28-.4.34a4.39 4.39 0 0 1-1.29.29c-.11 0-.42 0-.38-.17s.5-.12.61-.14a10.57 10.57 0 0 0 1.46-.32zM57.62 564.85a3 3 0 0 1 1.76.35.61.61 0 0 1-.6.32 2.51 2.51 0 0 1-.69-.18 4.05 4.05 0 0 0-1.15-.17 3 3 0 0 1-.52 0c-.52-.09-.35-.29 0-.34a10.38 10.38 0 0 1 1.2.02zM37.47 536.06a4.55 4.55 0 0 0-2.5-.82 3.57 3.57 0 0 1 2.5.82zM36.79 533.1a3.66 3.66 0 0 1 1.87.53l-.62-.18a6.14 6.14 0 0 0-1.26-.26h-.73c-.24 0-.56-.07-.84-.08.49 0 1.04-.03 1.58-.01zM39.04 534.51c.21 0 .46.13.5.34a9.3 9.3 0 0 0-1.63-.6c-.31-.1-1.26-.52-1.48-.23.79.23 1.7.31 2.61.49zM41.04 528a6.16 6.16 0 0 0 2.52-1.62 2 2 0 0 1-.93 1.64 5 5 0 0 1-1.84.69 8.25 8.25 0 0 0-1.89.57c-.29.14-1.19 1-1.48 1s.22-.63.35-.73a12.47 12.47 0 0 1 3.27-1.55zM59.04 537.51c-.31-.11-4.1.62-3.87-.11.15-.45 1.38-.28 1.68-.27a7.74 7.74 0 0 1 2.19.38z"
        opacity={0.1}
      />
      <path d="M54.91 449.85a8.48 8.48 0 0 1-.2 1.83 8.38 8.38 0 1 1 .2-1.83z" fill="#fbbebe" />
      <path
        d="M50.88 453.29s-2.71 7.92-1.17 9.53-11.07 2.57-11.07 2.57 5.27-9.46 4.76-11.81 7.48-.29 7.48-.29z"
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
      />
      <path
        d="M62.17 507.29a5 5 0 0 1 0 .55c-.15 3.74-6.82 11.29-8.36 10s-12-3.74-12-3.74-1.54-2.42-3.15-2.42A8.27 8.27 0 0 1 36 511l.31-4.3s22.8-3.89 25.29-.74a3.8 3.8 0 0 1 .57 1.33z"
        opacity={0.1}
      />
      <path
        d="M62.17 507.18c-.07 1.87-1.78 4.7-3.67 6.9s-3.92 3.76-4.69 3.14a7.41 7.41 0 0 0-1.82-.86c-3.47-1.27-10.2-2.88-10.2-2.88s-1.54-2.42-3.15-2.42-4.7-1.61-4.7-1.61.3-.44 0-2.05-5 .88-5 .88-.22-10.85 1.46-16.13.88-12 .88-12 1.21-6.64 2.52-11.9c.79-3.15 1.62-5.8 2.25-6.21 1.69-1.1 10.48 0 10.48 0a34.57 34.57 0 0 1 5.06.44 2.29 2.29 0 0 1 1.06.86l.26.37a41.54 41.54 0 0 1 2.93 6.33c1.4 3.37 6.9 17.59 6.9 17.59s-.15 1-1.4 5.28.98 10.53.83 14.27z"
        fill="#65617d"
      />
      <path d="M55.87 511.5l2.63 2.58s2.42 8.35-.73 7.61-5.78-5.33-5.78-5.33z" fill="#fbbebe" />
      <path
        d="M62.54 488.26c-6.24-.07-7.85-8.8-7.85-8.8s-.44-8.65-1.25-10.26a16.66 16.66 0 0 1-.73-4.86 41.54 41.54 0 0 1 2.93 6.33c1.4 3.37 6.9 17.59 6.9 17.59z"
        opacity={0.1}
      />
      <path
        d="M62.76 487.6c-6.24-.07-7.85-8.8-7.85-8.8s-.44-8.65-1.25-10.26a16.66 16.66 0 0 1-.73-4.86 41.54 41.54 0 0 1 2.93 6.33c1.4 3.37 6.9 17.59 6.9 17.59z"
        fill="#65617d"
      />
      <path
        d="M51.59 466.08s-1.83-5-4.83 0a25.35 25.35 0 0 0-3.08 11.29l-.52 13.78a8.17 8.17 0 0 1 .92 2.86c0 1 1.8 4 1.8 4s.44 5.79 2.12 6.75l1.62 4.76s.07 3.15 1.17 4.4a3.68 3.68 0 0 1 .52 3.17l6.52-2.28s-.74.27 0-1.7-.44-4.54-.44-4.54-4.18-9.09-4.7-10.41-1.24-2.86-1-4.4.06-17.89.44-20.38-.54-7.3-.54-7.3z"
        opacity={0.1}
      />
      <path
        d="M52.27 465.39s-1.83-5-4.84 0a25.51 25.51 0 0 0-3.08 11.29l-.51 13.78a8.31 8.31 0 0 1 .92 2.86c0 1 1.79 4 1.79 4s.44 5.79 2.13 6.74l1.61 4.77s.08 3.15 1.18 4.4a3.68 3.68 0 0 1 .52 3.17l6.51-2.28s-.73.27 0-1.71-.46-4.56-.46-4.56-4.17-9.09-4.69-10.41-1.24-2.86-1-4.4.06-17.89.43-20.39-.51-7.26-.51-7.26z"
        fill="#ff6484"
      />
      <path
        d="M52.4 508.5a2.55 2.55 0 0 1 .8.24c.2.1.37.26.57.37a1.5 1.5 0 0 0 .75.2 8.64 8.64 0 0 1-.88 0 1.39 1.39 0 0 1-.54-.07 2.22 2.22 0 0 1-.46-.29 2.79 2.79 0 0 0-.58-.33c-.16-.06-.33-.08-.39-.24a4.53 4.53 0 0 1 .73.12zM54.88 510.47c.28 0 .55-.06.83-.08a7 7 0 0 1 1.21.06 3.32 3.32 0 0 1-1.91.34 1.1 1.1 0 0 0-.57 0c-.2.08-.8.76-.85.16s.95-.47 1.29-.48zM51.51 441.05l-1.07-.78a1.66 1.66 0 0 1 .33.15 2.27 2.27 0 0 1 .6.47l.34.31zM52.67 463.31a2.62 2.62 0 0 1-.9 1.09 1.81 1.81 0 0 1-.79.3 3 3 0 0 1-1.18-.12 14.24 14.24 0 0 1-1.44-.47 26.18 26.18 0 0 0-2.83-1 4.52 4.52 0 0 0-4.22.86c-.93.94-1.15 2.4-2.07 3.34-1.24 1.26-3.26 1.18-5 .93l-.41-.06c.79-3.15 1.62-5.8 2.25-6.21 1.69-1.1 10.48 0 10.48 0a34.57 34.57 0 0 1 5.06.44 2.29 2.29 0 0 1 1.05.9zM38.2 449.85a8.35 8.35 0 0 1 14.19-6c0 1.45-.29 3 .12 4.35a10.72 10.72 0 0 0 2.2 3.44 8.36 8.36 0 0 1-16.51-1.79z"
        opacity={0.1}
      />
      <path
        d="M51.71 440.76a10.42 10.42 0 0 0-12.12-1.36 6.22 6.22 0 0 0-2.18 2c-1.15 1.83-.86 4.2-1.46 6.27s-1.93 3.62-3.06 5.35-2.07 3.78-1.64 5.8c.31 1.47 1.32 2.79 1.3 4.29a3.32 3.32 0 0 1-3.22 3.16 10.83 10.83 0 0 0 4.9 1.58c1.75.25 3.77.33 5-.93.92-.94 1.14-2.4 2.07-3.34a4.52 4.52 0 0 1 4.22-.86c1.46.34 2.81 1 4.27 1.43a3 3 0 0 0 1.18.12c1.25-.17 2-1.56 2.08-2.82.08-1-.07-2.25.67-3a5.88 5.88 0 0 1 .91-.63 3.78 3.78 0 0 0 1.61-3.59c-.35-2.48-3-4-3.74-6.44-.41-1.4-.1-2.9-.12-4.35s-.58-3.12-1.95-3.61"
        fill="#444053"
      />
      <path
        d="M56.11 454.23c-.34-2.48-3-4-3.74-6.44-.41-1.4-.09-2.9-.12-4.35a4.71 4.71 0 0 0-.88-2.83l.21.15c-.11-.11-.23-.21-.35-.31a2.8 2.8 0 0 0-.57-.46l-.38-.26.2.19-.21-.15a4.69 4.69 0 0 1 .88 2.83c0 1.45-.29 3 .12 4.34.71 2.41 3.4 4 3.74 6.45a3.79 3.79 0 0 1-1.61 3.59 5.88 5.88 0 0 0-.91.63c-.74.74-.59 2-.67 3-.1 1.26-.82 2.65-2.07 2.82a3.2 3.2 0 0 1-1.19-.12c-1.45-.38-2.81-1.09-4.27-1.43a4.5 4.5 0 0 0-4.22.86c-.92.93-1.15 2.4-2.07 3.34-1.24 1.25-3.26 1.18-5 .93a15.32 15.32 0 0 1-3.36-.77 2.17 2.17 0 0 1-.44 0 10.9 10.9 0 0 0 4.9 1.58c1.75.25 3.77.33 5-.93.92-.94 1.15-2.4 2.07-3.34a4.52 4.52 0 0 1 4.22-.86c1.46.34 2.82 1 4.27 1.43a3 3 0 0 0 1.19.12c1.25-.17 2-1.56 2.07-2.82.08-1-.07-2.25.67-3a5.88 5.88 0 0 1 .91-.63 3.78 3.78 0 0 0 1.61-3.56z"
        opacity={0.1}
      />
      <path
        d="M88.29 573.66c1.6 5.33-19.91 8.78-45.24 7.8-22.71-.87-40.52-5.05-41.83-9.42s14.17-7.93 36.61-8c25.03 0 48.86 4.29 50.46 9.62z"
        fill={primaryColor}
        opacity={0.1}
      />
    </svg>
  );
};

UndrawFeaturesOverview.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFeaturesOverview;
