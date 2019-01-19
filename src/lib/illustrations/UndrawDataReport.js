import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawDataReport = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 971.7 764.21" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={897.38} y1={799.91} x2={897.38} y2={380.48} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={303.98} y1={804.79} x2={303.98} y2={375.83} xlinkHref="#prefix__a" />
      </defs>
      <g opacity={0.5}>
        <path
          d="M693.99.1c-3.81-.06-8.62 1-11.56 6.27-5.76 10.36 3.51 20.55-1.27 31.59a18.38 18.38 0 0 1-6.2 7.48c-4.62 3.33-9.33 4.32-14 6.31a25.66 25.66 0 0 0-13.11 11.7 30.62 30.62 0 0 0-2.76 18.57c.92 5.52 3.09 9.9 4.88 14.62a91.71 91.71 0 0 1 4.69 18.06 33.36 33.36 0 0 1 .46 8.72 54.91 54.91 0 0 1-2.69 10.89l-10.28 32.19a75.18 75.18 0 0 0-3.3 12.9 54.21 54.21 0 0 0 .4 13.75c1.12 9.42 2.37 19.22 6.83 25.11s13.21 6.27 19.61-2.08c6.09-8 7.66-20.1 13.24-28.8 8.79-13.72 22.85-12.53 32.27-25.38 9-12.32 8.86-30.1 14.51-45.26 4-10.86 11-20 15.72-30.55 6.81-15.21 8.37-32.29 6-45.77a67.93 67.93 0 0 0-15.15-32.09c-2.92-3.54-6.1-6.83-10.15-8-4.31-1.28-8.61 2-13.05 2.3-5.13.26-9.92-2.45-15.09-2.53z"
          fill={primaryColor}
        />
        <path
          d="M718.15.2s-24.8 143.65-66 222.08M682.15 7.03s30.26 31 18.68 73.84M646.48 66.62s53.25 21.22 46.21 45.34M747.59 40.1s-23.74 9.67-48.34 47.11M710.85 162.15s-16.07 5.58-24.28-29M644 165.44s30.92 4.12 35.52-10"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
      <g opacity={0.5}>
        <path
          d="M101.22 177.9c-2.14 3.16-3.9 7.75-1.1 13.1 5.5 10.5 19.1 8.34 25.71 18.39a18.38 18.38 0 0 1 2.85 9.29c.25 5.69-1.51 10.17-2.42 15.18a25.66 25.66 0 0 0 2.59 17.35 30.62 30.62 0 0 0 14 12.49c5.12 2.26 10 2.84 14.9 3.94a91.71 91.71 0 0 1 17.67 6 33.36 33.36 0 0 1 7.54 4.4 54.91 54.91 0 0 1 7.63 8.22l21.27 26.26a75.18 75.18 0 0 0 9 9.84 54.21 54.21 0 0 0 11.72 7.21c8.49 4.23 17.37 8.56 24.74 8.07s12.49-7.6 9-17.54c-3.3-9.46-12.6-17.43-16.82-26.87-6.65-14.88 2.06-26-3.51-40.9-5.34-14.32-20.31-23.92-29.87-37-6.86-9.34-10.68-20.16-16.91-29.91-9-14-22.4-24.71-35-30.13a67.93 67.93 0 0 0-35.15-4.94c-4.56.5-9.05 1.35-12.29 4.08-3.44 2.9-3 8.32-5.24 12.17-2.5 4.5-7.4 7.02-10.31 11.3z"
          fill={primaryColor}
        />
        <path
          d="M114.57 157.76s106.48 99.55 149.42 177.06M100.53 191.6s42.55-8.27 72 24.9M130.77 254.1s47-32.87 63.26-13.75M164.09 155.1s-4.95 25.16 12.86 66.26M245.96 252.71s-4.16 16.5-37.6 4.37M212.02 310.42s20.41-23.59 11.13-35.17"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
      <path
        d="M81.21 62.43c-5 5.91-9.68 14.09-6 22.16 7.14 15.81 33.33 8.1 42.68 22.84 2.8 4.41 3.18 9.8 2.53 14.61-1.26 9.41-5.92 17.4-9.14 26s-4.89 19-.35 28.08c4.37 8.79 13.58 14.34 22.5 16.55s17.86 1.71 26.77 2a148.2 148.2 0 0 1 31.35 4.62 43.31 43.31 0 0 1 12.82 5c4.55 2.91 8.23 7.18 11.83 11.38l32 37.29c4.25 5 8.59 10 13.86 13.67 6.08 4.23 13 6.38 19.81 8.45 14.65 4.48 30 9 44 5.93s25.75-16.45 22.25-31.94c-3.33-14.75-18.35-25.21-23.41-39.66-8-22.77 11.75-43.89 5.82-67.06-5.68-22.22-30.86-33.68-44.86-52.49-10-13.48-13.94-30.34-22.68-44.68-12.59-20.66-34.55-34.37-56.5-39.57s-44.02-2.69-64.56 2.49c-8.7 2.21-17.4 5-24.3 10.52-7.33 5.87-8.18 14.77-13.52 21.86-6.19 8.26-16.16 13.94-22.9 21.95z"
        fill={primaryColor}
      />
      <path
        d="M112.36 24.83s169.67 133.5 226.76 249.56M75.75 85.46s82.37-26.68 127.55 19.64M113.55 180.4s98.11-69 122.91-42.09M206.14 5.31s-16.91 43.39 4 106.46M330.19 143.1s-12.81 28.73-71.9 18.68M248.98 249.53s45.47-45.48 31.57-62"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <ellipse cx={485.85} cy={723.13} rx={485.85} ry={41.08} fill={primaryColor} opacity={0.1} />
      <path
        d="M977.18 467.14c-2.07-6.06-5.06-13.74-7.42-15.55a2.21 2.21 0 0 0-.47-.29H969v-7.49l-5.58.89a53.35 53.35 0 0 1-2-8.29 3.85 3.85 0 0 0 4.19.84c-.09-.15-.17-.31-.25-.47l.25-.11a10.37 10.37 0 0 1-1.35-5.08 18.51 18.51 0 0 1 .77-4.8c1-3.45 2.69-6.67 3.63-10.14a24.64 24.64 0 0 0 .84-6.85 25 25 0 0 0-2.6-11.3 6.6 6.6 0 0 0-2-2.58 25.49 25.49 0 0 0-2.42-1.18 13.07 13.07 0 0 1-3.52-3.51 31.56 31.56 0 0 0-15.25-10.18 8.93 8.93 0 0 0-4.88-.39c-3.75 1-5.11 5.65-8.15 8.09-2.68 2.15-6.36 2.37-9.73 3.09s-6.76 2.15-9.06 4.75a9.83 9.83 0 0 0-2.43 6.55 6.59 6.59 0 0 0 2.68 5.86 8.42 8.42 0 0 0 7.11 1 24.18 24.18 0 0 0 18.31 30.4l.65 1.17a50.08 50.08 0 0 1 4.54 11.85c-5.14 2.91-10.75 5.64-14.14 5.9a23.82 23.82 0 0 1-.74 3.92 21.62 21.62 0 0 1-4.45 8.75c-4.61 5.18-25.34 44.34-25.34 44.34s-.65 1.56-1.72 4.22c-12.87 1.58-33.88 3.86-39.74 2.69l-23-21.88s-7.44 5.68-6.79 12.58l-4.09-3.94s-21.88 16.7 12.67 27.64l52.57 6.1c-5 15.11-9.68 32.7-8.23 42.27h.43a19.88 19.88 0 0 0 3-.23l-.09 1.7-5.09 90.69s-1.15 16.7 14.4 24.18c0 0 19 55.85 11.52 62.19 0 0 .89.47 2.39 1.12l-15.63 13.85s-11.52 2.88-17.85 2.3a4.57 4.57 0 0 0-5.05 3.4c0 .12 0 .24-.06.36V786.68c0 .04 0 .25.07.37v.14q.05.2.13.4l.05.12c.05.13.11.26.18.39v.09c.07.13.15.25.23.38l.07.11q.14.2.31.4l.09.1c.12.14.25.27.38.4l.06.05.43.37.09.07c.16.13.34.25.52.37l.12.08c.19.12.39.24.6.35h.09l.65.32h.09l.76.3.16.06.83.27h.14l.91.24h.07l1 .2h.2l1.08.16h.21l1.22.12c2.37.18 5.56.25 9.25.23s0 .09 0 .14v.45c0 .12 0 .25.07.37v.14q.05.2.13.4l.05.12c.05.13.11.26.18.39v.09c.07.13.15.25.23.38l.07.11q.14.2.31.4l.09.1c.12.14.25.27.38.4l.06.05.43.37.09.07c.16.13.34.25.52.37l.13.08c.19.12.39.24.6.35h.09l.65.32h.09l.76.3.16.06.83.27h.14l.91.24h.07l1 .2h.2l1.08.16h.21l1.22.12c15 1.15 62.76-2.3 62.76-2.3V796.62c.47-2.23 2.77-15.19-5.39-24.77.24-.25.48-.52.7-.8 0 0-6.33-10.94-2.88-14.4s-17.27-63.34-17.27-63.34-10.94-17.27-4.61-36.85-.58-40.88-.58-40.88 15.1-4.49 15.41-23.08v-1.73a6.11 6.11 0 0 0 1 .06 4.47 4.47 0 0 0 .64 0s-2.88-10.36.58-17.85 10.94-.58 17.85-31.09c5-22.08 9.4-47.48 11.45-59.84a31.51 31.51 0 0 0-.94-14.91zm-131.41 64.78l-5.25-5c1.74.72 3.67 1.43 5.83 2.11l19.8 2.3c-8.84.8-17.05 1.25-20.38.59z"
        transform="translate(-114.15 -67.9)"
        fill="url(#prefix__a)"
      />
      <path d="M781.74 461.1s-40.73 5.66-49.22 4l-22.67-21.56s-21.5 16.41 12.45 27.15l63.4 7.41z" fill="#fdc2cc" />
      <path d="M781.74 461.1s-40.73 5.66-49.22 4l-22.67-21.56s-21.5 16.41 12.45 27.15l63.4 7.41z" opacity={0.05} />
      <path
        d="M796.45 690.75l-19.8 17.54s-11.31 2.83-17.54 2.26-9.05 9.62 5.66 10.75 61.66-2.26 61.66-2.26 4.53-18.1-9.05-28.29z"
        fill="#47465a"
      />
      <path
        d="M796.45 690.75l-19.8 17.54s-11.31 2.83-17.54 2.26-9.05 9.62 5.66 10.75 61.66-2.26 61.66-2.26 4.53-18.1-9.05-28.29z"
        opacity={0.05}
      />
      <path
        d="M827.14 711.21a31.2 31.2 0 0 1-.71 6.13s-47 3.39-61.66 2.26c-7.07-.54-10.08-3.18-10.62-5.71-.64 2.9 1.92 6.74 10.62 7.41 14.71 1.13 61.66-2.26 61.66-2.26a32.69 32.69 0 0 0 .71-7.83z"
        fill="#fff"
        opacity={0.3}
      />
      <path d="M819.64 370s12.45 17.54 7.92 29.42 23.76-12.45 23.76-12.45-9.05-15.84-4.53-32.81z" fill="#fdc2cc" />
      <path
        d="M816.25 697.54l-19.8 17.56s-11.31 2.83-17.54 2.26-9.06 9.6 5.66 10.74 61.66-2.26 61.66-2.26 4.53-18.1-9.05-28.29z"
        fill="#47465a"
      />
      <path
        d="M821.91 693.58c-2.95 3.64-7.11 5-11.46 5.25-9.89.47-20.78-5.25-20.78-5.25 7.35-6.22-11.31-61.1-11.31-61.1-15.27-7.35-14.14-23.76-14.14-23.76l5-89.07 1.25-22.37 15.84-9.62 12.49 9.58 11.84 9.09a47.6 47.6 0 0 1 1.48 8.83c1.37 20.79-15.06 25.68-15.06 25.68s6.79 20.93.57 40.16 4.53 36.2 4.53 36.2 20.37 58.83 17 62.23 2.75 14.15 2.75 14.15z"
        fill="#565171"
      />
      <path
        d="M821.91 693.58c-2.95 3.64-7.11 5-11.46 5.25-9.89.47-20.78-5.25-20.78-5.25 7.35-6.22-11.31-61.1-11.31-61.1-15.27-7.35-14.14-23.76-14.14-23.76l5-89.07 1.25-22.37 15.84-9.62 12.49 9.58 11.84 9.09a47.6 47.6 0 0 1 1.48 8.83c1.37 20.79-15.06 25.68-15.06 25.68s6.79 20.93.57 40.16 4.53 36.2 4.53 36.2 20.37 58.83 17 62.23 2.75 14.15 2.75 14.15z"
        opacity={0.05}
      />
      <path
        d="M841.71 700.37c-9.62 11.88-32.24 0-32.24 0a3.6 3.6 0 0 0 1-1.54c4.15-11.28-14-65.21-14-65.21-15.27-7.35-17-24.89-17-24.89l-4-90.65-.52-11.74 23.8-9.09 7.31-2.79 24.33 18.64a44.12 44.12 0 0 1 1.56 11.83c-.3 18.29-15.1 22.7-15.1 22.7s6.79 20.93.57 40.16 4.53 36.2 4.53 36.2 20.37 58.83 17 62.23 2.76 14.15 2.76 14.15z"
        fill="#565171"
      />
      <path
        d="M831.95 524.95c-4.89-.7-14.79-6.59-19.88-9.79l-3.18-2s-5.09-14.14-18.67-3.39a50.82 50.82 0 0 1-14.75 8.33 34.51 34.51 0 0 1-6.3 1.58l1.25-22.37 15.84-9.62 12.49 9.58 7.31-2.79 24.33 18.62a44.12 44.12 0 0 1 1.56 11.85z"
        opacity={0.1}
      />
      <path
        d="M862.57 416.43c-2 12.14-6.34 37.09-11.25 58.79-6.79 30-14.14 23.19-17.54 30.55s-.57 17.54-.57 17.54c-5.66.57-24.33-11.88-24.33-11.88s-5.09-14.14-18.67-3.39-24.33 10.18-24.33 10.18c-2.83-18.67 18.1-68.45 18.1-68.45s20.39-38.47 24.87-43.56a21.24 21.24 0 0 0 4.37-8.6 23.4 23.4 0 0 0 .72-3.85c7.35-.57 25.46-13 25.46-13l14.14-2.26v7.35a2.17 2.17 0 0 1 .46.28c2.33 1.78 5.26 9.33 7.29 15.28a31 31 0 0 1 1.28 15.02z"
        fill="#f68080"
      />
      <path
        d="M851.32 393.2s-14.71-11.88-36.77 26.59-27.15 32.24-27.15 32.24 4.53 17 2.26 20.37c0 0 15.27-1.13 20.93 0s40.73-43 40.73-43 18.11-24.89 0-36.2z"
        opacity={0.1}
      />
      <path
        d="M850.76 390.93s-14.71-11.83-36.77 26.59-27.14 32.25-27.14 32.25 17.52 19.23 23.18 20.33 40.73-43 40.73-43 18.09-24.85 0-36.17z"
        opacity={0.1}
      />
      <path
        d="M789.14 468.72c.23-4.19-1.35-11.56-2.26-15.38 3.44-.45 5.61-.75 5.61-.75l4 17zM847.36 355.29l-27.15 15.81a58 58 0 0 1 3.16 5.18 23.87 23.87 0 0 0 4.76.48c7.25 0 10.63-7.61 15-12.73-.28-4.08 3.02-4.18 4.23-8.74z"
        opacity={0.1}
      />
      <circle cx={827.57} cy={351.9} r={23.76} fill="#fdc2cc" />
      <path
        d="M797.51 332.68a16.24 16.24 0 0 1 8.9-4.67c3.3-.71 6.92-.93 9.56-3 3-2.39 4.32-6.93 8-7.94a8.77 8.77 0 0 1 4.79.38 31 31 0 0 1 15 10 12.84 12.84 0 0 0 3.45 3.45 25 25 0 0 1 2.38 1.16 6.48 6.48 0 0 1 1.94 2.53 24.59 24.59 0 0 1 1.72 17.27c-.92 3.41-2.58 6.57-3.56 10s-1.23 7.24.57 10.27c-1.74.89-3.94-.23-5-1.85s-1.42-3.62-2-5.49a21 21 0 0 0-6.13-9.53c-1.78-1.58-5-2.64-6.21-.6-.48.79-.45 1.79-.86 2.61-.81 1.6-3.15 1.92-4.7 1a7.21 7.21 0 0 1-2.94-4.36c-2.33-7.88-6.3-12.84-14.73-9.47-3.14 1.26-6.84 2.11-9.86-.05-3.98-2.85-3.17-8.49-.32-11.71z"
        opacity={0.1}
      />
      <path
        d="M797.51 332.1a16.24 16.24 0 0 1 8.9-4.67c3.3-.71 6.92-.93 9.56-3 3-2.39 4.32-6.93 8-7.94a8.77 8.77 0 0 1 4.79.38 31 31 0 0 1 15 10 12.84 12.84 0 0 0 3.45 3.45 25 25 0 0 1 2.38 1.16 6.48 6.48 0 0 1 1.94 2.53 24.59 24.59 0 0 1 1.72 17.27c-.92 3.41-2.58 6.57-3.56 10s-1.23 7.24.57 10.27c-1.74.89-3.94-.23-5-1.85s-1.42-3.62-2-5.49a21 21 0 0 0-6.13-9.53c-1.78-1.58-5-2.64-6.21-.6-.48.79-.45 1.79-.86 2.61-.81 1.6-3.15 1.92-4.7 1a7.21 7.21 0 0 1-2.94-4.36c-2.33-7.88-6.3-12.84-14.73-9.47-3.14 1.26-6.84 2.11-9.86-.05-3.98-2.84-3.17-8.47-.32-11.71z"
        fill="#b96b6b"
      />
      <path
        d="M854.05 386.1h-11.5s-22.63 11.31-23.19 10.75c-.38-.38-3.88.27-6.1.74a23.4 23.4 0 0 0 .72-3.85c7.35-.57 25.46-13 25.46-13l14.14-2.26v7.35a2.17 2.17 0 0 1 .47.27z"
        opacity={0.05}
      />
      <path
        d="M846.94 718a31.2 31.2 0 0 1-.71 6.13s-47 3.39-61.66 2.26c-7.07-.54-10.08-3.18-10.62-5.71-.64 2.9 1.92 6.74 10.62 7.41 14.71 1.13 61.66-2.26 61.66-2.26a32.69 32.69 0 0 0 .71-7.83z"
        fill="#fff"
        opacity={0.3}
      />
      <g opacity={0.05}>
        <path d="M784.85 507.47c-7.63 6-14.38 8.51-18.81 9.51 0 .42.08.84.14 1.24 0 0 10.75.57 24.33-10.18a18.23 18.23 0 0 1 7.27-3.8c-2.93-1.41-7.19-1.32-12.93 3.23zM861.62 401.4c-2-6-5-13.5-7.29-15.28a2.17 2.17 0 0 0-.46-.28s-4.68.16-4.53.28c2.33 1.78 4.59 8.76 6.62 14.71a31 31 0 0 1 1.23 15c-2 12.14-6.34 37.09-11.25 58.79-6.79 30-14.14 23.19-17.54 30.55-2.78 6-1.39 13.94-.79 16.61 2.42 1 4.52 1.63 5.88 1.49 0 0-2.83-10.18.57-17.54s10.75-.57 17.54-30.55c4.91-21.69 9.23-46.65 11.25-58.79a31 31 0 0 0-1.23-14.99z" />
      </g>
      <path
        d="M398.36 783.8s-13 .9-21.1-13a46.72 46.72 0 0 0-5.54-7.87 26.6 26.6 0 0 1-3.89-14.13c.45-10.32-10.32-66.88-10.32-66.88s1.35-21.55-9.43-35c-7.09-8.86-17.29-34.26-23.44-50.58a3.39 3.39 0 0 0 1.45.76l-.25-1.41.25.06-3.14-17.51a79.68 79.68 0 0 1-11.6-17.59l.72-.15 9.53-2s15.49-22 16.44-32.84l1.26.06h1.78c19.71-.43 42.91 2.25 42.91 2.25 0-.07-.11-.35-.23-.79a53.85 53.85 0 0 1-1.39-6.63l.89-.06 8.82-.59s30.52-34.11 19.3-40.4-22.89 28.28-22.89 28.28l-3.77.69-1 .19c.1-.15.2-.29.32-.43s-49.83-2.24-57.46-14.36c0 0-22-17.51-22.89-29.18-.48-6.19-4.36-9.48-7.91-11.2a17.26 17.26 0 0 0-8.72-1.63l-10.3.71.73 1.3h-.29a34.65 34.65 0 0 1-1.62-4.56h.21c-.07-.32-.14-.64-.2-1a24.24 24.24 0 0 0 17.85-29.85 9.7 9.7 0 0 0 3-.08c3.78-.78 6.47-4.62 6.57-8.48v-.75-.15a13 13 0 0 0-5-10c-2.06-1.71-4.51-2.93-6.38-4.83-2.22-2.27-3.43-5.31-5.16-8a23.69 23.69 0 0 0-12.16-9.47c-3.72-1.26-8.27-1.4-11.12 1.3-1.47 1.39-2.32 3.38-4 4.55-2.37 1.69-5.59 1.19-8.49 1.53-5.26.62-9.88 4.37-12.2 9.14a21 21 0 0 0-2 9.65 25.79 25.79 0 0 0 .81 6.78c.56 2.21 1.39 4.34 2 6.53 1.26 4.56 1.55 9.36 3 13.87a17.45 17.45 0 0 0 5.62 8.52l-.43 1.86c-.28.06-7.27 1.56-12.11 12.12-3.82 8.32-16.74 16.92-22.42 20.39a9.35 9.35 0 0 0-4.23 5.87 30.53 30.53 0 0 0-.72 7.46c-.1 5.41 1 12.89 5.38 22.38 9.88 21.55 17.06 31 17.06 31s.55 6.6.58 13.56c0 5.18-.38 10.34-1.48 12.92-.93 2.18-1.22 7.75-1.2 14.1 0 12.19 1.2 28.1 1.2 28.1s3.43.65 8.75 1.43l3.31 58.19a28 28 0 0 1-6.33 19.44 43 43 0 0 1-8 7.58c-9.43 6.73-29.63 77.66-29.63 77.66s1 .06 2.62.19l-6.21 17.32s24.8 19 39.9 13.81a14.62 14.62 0 0 1 5-.71c3 0 9.35-2.35 5.8-5.46-6.45-5.64-14.18-14.18-19.35-20.12a10.29 10.29 0 0 1 1.4.82v-.14l.21.14s.05-.7.16-1.83l-.22-.07c.46-4.67 1.9-16.41 4.77-17.85 3.59-1.8 30.07-54.31 30.07-54.31l26.48-68.23s21.1 36.36 39.05 42.64V694s9.88 44.89 13.47 49.83 0 24.69 0 24.69a12.3 12.3 0 0 0 2.42 2.13l-2.87 16.27s20.65-.9 55.66 9.88c.09.02 13.56-5.8 2.34-13zM315.76 549l-4.37 1.09-.86.22c-.09-.54-.15-.86-.15-.86a8.92 8.92 0 0 1-3.17.77 58.47 58.47 0 0 1-2.66-15.14s-2.54-10.37-2.68-18.75c.05-3.27.54-6.12 1.78-7.73l1.46.12 1 1 .07.07.52.47.54.49.09.08.59.51.1.09.6.51.06.05.67.55.15.12.71.57h.06l.7.55.16.12.77.59.16.12.74.54.13.09.84.6.2.14.88.61.08.05.86.57.21.14.93.59.2.12.87.53.16.1 1 .58.24.14 1 .58h.08l1 .53.25.13 1.06.53.22.1 1 .46.19.09 1.11.48.27.11 1.16.46c-7.3 7.79-10.98 26.12-10.98 26.12z"
        transform="translate(-114.15 -67.9)"
        fill="url(#prefix__b)"
      />
      <path
        d="M90.9 694.22l-8.33 23.23s22.81 17.49 37.63 13.87a41.42 41.42 0 0 1 6.8-1.1c3.07-.23 8.35-2.46 5.09-5.31-10.52-9.2-24.54-26.29-24.54-26.29zM229.38 692.02l-3.94 22.35s20.16-.88 54.34 9.64c0 0 13.15-5.7 2.19-12.71 0 0-12.71.88-20.6-12.71s-12.71-11.83-12.71-11.83z"
        fill="#4f4d59"
      />
      <path
        d="M125.08 529.88l3.86 68a28.13 28.13 0 0 1-6.71 19.89 41.23 41.23 0 0 1-7.24 6.75c-9.2 6.57-28.92 75.81-28.92 75.81s22.35 1.31 28.48 5.7c0 0 1.31-17.53 4.82-19.28s29.36-53 29.36-53l25.87-66.65s20.6 35.5 38.13 41.63v14.9s9.64 43.82 13.15 48.64 0 24.1 0 24.1 10.08 12.71 33.3-.88c0 0-7.45-8.33-7-18.41s-10.08-65.29-10.08-65.29 1.31-21-9.2-34.18-28.05-63.51-28.05-63.51l-12.06-25.95z"
        fill="#787c9c"
      />
      <g opacity={0.1}>
        <path d="M90.24 700.35s19.72-69.24 28.92-75.81a41.75 41.75 0 0 0 7.61-7.19 27.81 27.81 0 0 0 6.33-19.44l-3.86-68 64.61-39.86-.88-1.89-67.69 41.72 3.86 68a27.81 27.81 0 0 1-6.29 19.46 41.75 41.75 0 0 1-7.61 7.19c-9.2 6.57-28.92 75.81-28.92 75.81s22.35 1.31 28.48 5.7c0 0 .05-.68.16-1.79-8.64-2.95-24.72-3.9-24.72-3.9zM230.04 696.41s3.51-19.28 0-24.1-13.19-48.65-13.19-48.65v-14.9c-17.49-6.13-38.09-41.66-38.09-41.66l-1.53 4c5.94 9.42 21.79 32.81 35.71 37.68v14.9s9.64 43.82 13.15 48.64 0 24.1 0 24.1 4.89 6.15 15.69 5.32c-8.05-.64-11.74-5.33-11.74-5.33z" />
      </g>
      <path
        d="M275.85 453.63l-8.61.57-4.54.3v-11l6-1.08 3.69-.67s11.39-33.74 22.35-27.61-18.89 39.49-18.89 39.49zM137.79 363.36s-5.7 21.91-7.45 35.5 40.75 2.63 40.75 2.63-16.21-19.72-7-30.24z"
        fill="#714b4f"
      />
      <path
        d="M183.85 454.51l.88 8.33-13.58-.88-13.64-11.86-13.58-38.1-8.76-13.58-6.58-8.32 2.63-10.08s1.2 1 3.23 2.6c6.67 5.11 22.33 15.72 33.77 12.79a13.64 13.64 0 0 0 1.56-.49l17.07 29.35z"
        fill="#e6e6f0"
      />
      <path
        d="M134.72 377.38s-7 1.31-11.83 11.83c-3.71 8.09-16.22 16.43-21.81 19.86a9.35 9.35 0 0 0-4.24 5.91c-1.13 5-1.56 14.3 4.58 27.7 9.64 21 16.65 30.24 16.65 30.24s1.75 21-.88 27.17 0 39.88 0 39.88 46 8.76 61.35 0 13.15-42.51 13.15-42.51 14.46 30.64 19.72 31.55l-3.07-17.09s-17.09-18.41-18-42.07c0 0-5.26-21.47-.88-27.17 0 0 74.06 6.14 78.44.88 0 0-48.64-2.19-56.09-14 0 0-21.47-17.09-22.35-28.48a12.6 12.6 0 0 0-6.57-10.32 17.16 17.16 0 0 0-9.82-2.19l-9.9.68s17.09 30.24 16.21 34.18.88 35.93.88 35.93-19.68-42.54-28.41-47.36-18.84-24.61-18.84-24.61l1.75-10"
        opacity={0.1}
      />
      <path
        d="M183.85 454.51l.88 8.33-13.58-.88-13.64-11.86-13.58-38.1-8.76-13.58-6.58-8.32 2.63-10.08s1.2 1 3.23 2.6l-.6 3.48s10.08 19.79 18.84 24.61 28.48 47.33 28.48 47.33-1.75-32-.88-35.93c.6-2.68-7.08-17.45-12.07-26.68a13.64 13.64 0 0 0 1.56-.49l17.07 29.33zM267.22 454.21l-4.54.3v-11l6-1.08c-2.11 2.79-2.04 7.67-1.46 11.78z"
        opacity={0.1}
      />
      <path
        d="M134.72 376.1s-7 1.31-11.83 11.83c-3.71 8.09-16.22 16.43-21.81 19.86a9.35 9.35 0 0 0-4.24 5.91c-1.13 5-1.56 14.3 4.58 27.7 9.64 21 16.65 30.24 16.65 30.24s1.75 21-.88 27.17 0 39.88 0 39.88 46 8.76 61.35 0 13.15-42.59 13.15-42.59 14.46 30.68 19.72 31.55l-3.07-17.09s-17.09-18.41-18-42.07c0 0-5.26-21.47-.88-27.17 0 0 17.09 18.41 36.37 18s42.07 2.19 42.07 2.19-4.38-14 0-19.28c0 0-48.64-2.19-56.09-14 0 0-21.47-17.09-22.35-28.48a12.6 12.6 0 0 0-6.57-10.32 17.16 17.16 0 0 0-9.82-2.19l-9.9.68s17.13 30.18 16.25 34.18.88 35.93.88 35.93-19.72-42.52-28.45-47.34-18.88-24.59-18.88-24.59l1.75-10"
        fill="#787c9c"
      />
      <path
        d="M125.08 422.1s10.52 35.5 16.65 39.88 43.38 26.73 54.34 21.47c0 0 2.63 13.15-1.31 16.21 0 0-40.86-1.6-41.19-1.75 0 0-26.73-3.51-31.11-16.65s-9.64-35.5-9.64-35.5z"
        opacity={0.1}
      />
      <ellipse cx={181.18} cy={459.99} rx={1.53} ry={2.19} fill="#ba7855" />
      <ellipse cx={185.56} cy={475.33} rx={1.53} ry={2.19} fill="#ba7855" />
      <g opacity={0.1}>
        <path d="M120.26 538.21s-2.63-33.74 0-39.88.88-27.17.88-27.17-7-9.2-16.65-30.24c-6.14-13.4-5.7-22.7-4.58-27.7a9.35 9.35 0 0 1 4.25-5.91c5.59-3.43 18.1-11.77 21.8-19.86 2.72-5.93 6.13-8.94 8.6-10.43l.17-1s-7 1.31-11.83 11.83c-3.71 8.09-16.22 16.43-21.8 19.86a9.35 9.35 0 0 0-4.25 5.91c-1.13 5-1.56 14.3 4.58 27.7 9.64 21 16.65 30.24 16.65 30.24s1.75 21-.88 27.17 0 39.88 0 39.88 32.87 6.26 52.31 2.91c-19.66 2.33-49.25-3.31-49.25-3.31zM179.42 422.1c-.6 2.7 0 18.58.49 28.3 2.12 4.33 3.45 7.19 3.45 7.19s-1.75-32-.88-35.93c.83-3.75-14.56-31.25-16.09-34l-3.19.22s17.1 30.22 16.22 34.22zM228.94 458.89c-19.28.44-36.37-18-36.37-18a7 7 0 0 0-1.11 2.38c5 4.71 19 16.38 34.41 16 19.28-.44 42.07 2.19 42.07 2.19s-.09-.29-.23-.79a348.85 348.85 0 0 0-38.77-1.78zM194.76 495.7s.18 2.74.08 6.85c4.56 9 12.86 24.52 16.57 25.14l-.65-3.6c-6.4-7.99-16-28.39-16-28.39z" />
      </g>
      <path
        d="M207.03 491.32l-9.31 2-7.34 1.55 3.94-11 2.74-.69 4.27-1.06s6.14-30.68 18.41-28.48-12.71 37.68-12.71 37.68z"
        fill="#714b4f"
      />
      <path d="M197.72 493.28l-7.34 1.55 3.94-11 2.74-.69a43.77 43.77 0 0 1 .66 10.14z" opacity={0.1} />
      <path
        d="M125.08 421.2s10.52 35.5 16.65 39.88 43.38 26.73 54.34 21.47c0 0 2.63 13.15-1.31 16.21 0 0-40.86-1.6-41.19-1.75 0 0-26.73-3.51-31.11-16.65s-9.64-35.5-9.64-35.5z"
        fill="#787c9c"
      />
      <path
        d="M138.23 364.24s-.89 3.43-2.08 8.42a23.65 23.65 0 0 0 26.12 12c-1.05-4.5-.82-9 2.26-12.57z"
        opacity={0.1}
      />
      <circle cx={156.64} cy={360.73} r={23.66} fill="#714b4f" />
      <path
        d="M177.18 354.22a12.67 12.67 0 0 0 5.28.32c3.69-.76 6.32-4.51 6.41-8.28a12.72 12.72 0 0 0-4.88-9.77c-2-1.67-4.4-2.86-6.23-4.72-2.17-2.21-3.35-5.19-5-7.79a23.13 23.13 0 0 0-11.91-9.24c-3.63-1.23-8.07-1.37-10.86 1.27-1.43 1.35-2.27 3.3-3.87 4.44-2.32 1.65-5.46 1.16-8.29 1.49a15.8 15.8 0 0 0-11.91 8.92 22.32 22.32 0 0 0-1.16 15.16c.55 2.15 1.35 4.24 1.94 6.38 1.23 4.46 1.52 9.14 2.94 13.54s4.35 8.7 8.78 10a27.76 27.76 0 0 1 2.82-14.3 4.1 4.1 0 0 1 2-2.22 4.85 4.85 0 0 1 2.41 0 24 24 0 0 0 16-3.24c1.68-1 4.3-4.51 6.1-4.86 2.3-.41 7.03 2.36 9.43 2.9z"
        opacity={0.1}
      />
      <path
        d="M177.18 353.34a12.67 12.67 0 0 0 5.28.32c3.69-.76 6.32-4.51 6.41-8.28a12.72 12.72 0 0 0-4.88-9.77c-2-1.67-4.4-2.86-6.23-4.72-2.17-2.21-3.35-5.19-5-7.79a23.13 23.13 0 0 0-11.91-9.24c-3.63-1.23-8.07-1.37-10.86 1.27-1.43 1.35-2.27 3.3-3.87 4.44-2.32 1.65-5.46 1.16-8.29 1.49a15.8 15.8 0 0 0-11.91 8.92 22.32 22.32 0 0 0-1.16 15.12c.55 2.15 1.35 4.24 1.94 6.38 1.23 4.46 1.52 9.14 2.94 13.54s4.35 8.7 8.78 10a27.76 27.76 0 0 1 2.82-14.3 4.1 4.1 0 0 1 2-2.22 4.85 4.85 0 0 1 2.41 0 24 24 0 0 0 16-3.24c1.68-1 4.3-4.51 6.1-4.86 2.3-.37 7.03 2.41 9.43 2.94z"
        fill="#503f43"
      />
      <path fill="#fafbfc" d="M226.33 107.84h516.75v618H226.33z" />
      <path fill="#7983a6" d="M226.33 107.84h516.75v20.95H226.33z" />
      <path fill="none" stroke="#7983a6" strokeMiterlimit={10} d="M296.16 359.67h377.09" />
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 318.64h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 318.64h347.42" />
        <path d="M667.25 318.64h6" />
      </g>
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 277.62h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 277.62h347.42" />
        <path d="M667.25 277.62h6" />
      </g>
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 236.59h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 236.59h347.42" />
        <path d="M667.25 236.59h6" />
      </g>
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 195.57h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 195.57h347.42" />
        <path d="M667.25 195.57h6" />
      </g>
      <path fill={primaryColor} d="M314.93 277.62h27.06v82.05h-27.06z" opacity={0.3} />
      <path fill={primaryColor} d="M390.43 236.15h27.06V360.1h-27.06z" />
      <path fill={primaryColor} d="M465.94 318.2H493v42.33h-27.06z" opacity={0.3} />
      <path fill={primaryColor} d="M541.44 194.26h27.06v165.85h-27.06z" />
      <path fill={primaryColor} d="M616.94 234.41H644v125.26h-27.06z" opacity={0.3} />
      <circle cx={328.46} cy={378.43} r={6.98} fill={primaryColor} />
      <circle cx={404.4} cy={378.43} r={6.98} fill={primaryColor} />
      <circle cx={480.34} cy={378.43} r={6.98} fill={primaryColor} />
      <circle cx={556.28} cy={378.43} r={6.98} fill={primaryColor} />
      <circle cx={632.22} cy={378.43} r={6.98} fill={primaryColor} />
      <path fill="none" stroke="#7983a6" strokeMiterlimit={10} d="M296.16 623.28h377.09" />
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 582.25h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 582.25h347.42" />
        <path d="M667.25 582.25h6" />
      </g>
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 541.23h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 541.23h347.42" />
        <path d="M667.25 541.23h6" />
      </g>
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 500.2h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 500.2h347.42" />
        <path d="M667.25 500.2h6" />
      </g>
      <g opacity={0.5} fill="none" stroke="#7983a6" strokeMiterlimit={10}>
        <path d="M296.16 459.18h6" />
        <path strokeDasharray="11.78 11.78" d="M313.94 459.18h347.42" />
        <path d="M667.25 459.18h6" />
      </g>
      <path
        fill={primaryColor}
        d="M314.93 541.23h27.06v82.05h-27.06zM390.43 540.79h27.06v82.92h-27.06zM465.94 581.82H493v42.33h-27.06zM541.44 457.87h27.06v165.85h-27.06zM719.94 360.02H747v125.26h-27.06z"
      />
      <circle cx={328.46} cy={642.04} r={6.98} fill={primaryColor} opacity={0.7} />
      <circle cx={404.4} cy={642.04} r={6.98} fill={primaryColor} opacity={0.7} />
      <circle cx={480.34} cy={642.04} r={6.98} fill={primaryColor} opacity={0.7} />
      <circle cx={556.28} cy={642.04} r={6.98} fill={primaryColor} opacity={0.7} />
      <circle cx={632.22} cy={642.04} r={6.98} fill={primaryColor} opacity={0.7} />
      <path
        d="M188.05 723.58a11.67 11.67 0 0 0 3.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 0 0 3.24-9.81 4.1 4.1 0 0 0-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 0 0-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 0 1 4.84 4.61 4.57 4.57 0 0 1 .36.82h14.65a40.83 40.83 0 0 0 9.04-6.27zM900.05 711.58a11.67 11.67 0 0 0 3.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 0 0 3.24-9.81 4.1 4.1 0 0 0-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 0 0-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 0 1 4.84 4.61 4.57 4.57 0 0 1 .36.82h14.65a40.83 40.83 0 0 0 9.04-6.27z"
        fill={primaryColor}
      />
      <path
        d="M796.45 469.56l-7.31-.85-56-6.51c-33.99-10.74-12.49-27.1-12.49-27.1l22.63 21.5c6.53 1.31 32.13-1.74 43.6-3.21 3.44-.45 5.61-.75 5.61-.75z"
        fill="#fdc2cc"
      />
      <path
        d="M851.32 392.1s-14.71-11.88-36.77 26.59-27.15 32.24-27.15 32.24 4.53 17 2.26 20.37c0 0 15.27-1.13 20.93 0s40.73-43 40.73-43 18.11-24.92 0-36.2z"
        fill="#f68080"
      />
    </svg>
  );
};

UndrawDataReport.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDataReport;
