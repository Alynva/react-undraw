import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPowerful = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1004.9 850" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={643.26} y1={857.32} x2={643.26} y2={279.85} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M341.69 32.59C373.79 4 424.15-1.83 470 .45c144 7.15 274 76.67 386.4 155.3 40.71 28.46 80.78 59.14 107.2 98.34 53.78 79.8 37.83 190.35-37 256.09-25.44 22.36-56.29 39.51-88 54.71-56.31 27-117.06 48.72-181 54.9-45.57 4.4-91.7.82-137-5.32-126.58-17.17-250.83-55.13-355-120.07-45.68-28.49-88.73-63.9-107.55-110S51.43 280 98.07 252.67c19.29-11.28 42.35-16.38 64.93-21.16 33.23-7 67-14 97-28.3 31-14.78 67.66-43.38 61.53-76.11-6.59-35.1-11.84-65.95 20.16-94.51z"
        fill={primaryColor}
        opacity={0.1}
      />
      <ellipse cx={529.55} cy={776.95} rx={475.35} ry={73.05} fill={primaryColor} />
      <path
        d="M881.65 557.5s-6.1-1.85-14.21-4.18A28.36 28.36 0 0 0 856 550.1c-9.57-2.63-19.4-5.13-24.72-5.91-12.59-1.85-34.82-8.87-34.82-8.87-8.52.74-17.41-5.55-17.41-5.55s-9.19-16.64-14.53-20.3a4 4 0 0 0-.67-.41 12.65 12.65 0 0 1-2.1-1.53c-5.49-17.9-17.48-19-18.1-19.06-2.32-2.63-4.42-5.05-6-6.93 6.18-33.42 24.67-70.73 67.16-102.27 0 0 25.24-29.54 10.57-63.72s-18.78-34.75-44-28.38l-57.01 27.23s-16.08 3.82-47.3 5.58c-2.6-5.21-6.64-9.52-12.19-10.86-11.7-2.82-21.9 9.43-33.13 6.06-8.57-2.57-18.92-12.68-27.34-2.89-1.19 1.38-2 3.07-3.12 4.49a12.61 12.61 0 0 1-2.76 2.51c-19.14-1.26-40.39-3.36-63.7-6.63l-50.46-30.12s-31.1-14.48-32.27 23.75-4.11 56.18 9.38 66.61c9.78 7.55 41.72 59.18 53.68 103.57-1.76 2.52-2.85 4.11-2.85 4.11s-34.09 46.23-36.68 47.34c-.17.07-.24.32-.23.7-.5 1.08-2 3.15-6.81 4.48-6.67 1.85-36.3 10.72-40.38 10.72s-22.59 1.11-24.45 8.51a25.59 25.59 0 0 1 3.51.07l-.89 1.13c-5.06 6.5-13.58 18.61-14.1 26.9-.75 11.83 2.59 48.44 21.86 48.07s10.37-54.72 10.37-54.72l2.26-6.64.06-.16 1.56 10.93c.34-.19.67-.38 1-.54 1.75 5.32 8.1 10.53 26.06 10.89 0 0 27.78 2.59 48.53 44 18.83 37.6 81.33 72.45 127.06 72.19v60.93l-6.29 1.85-81.67 1.4a5.34 5.34 0 0 0-5.26 5.09l-.5 10.52 23.68 2.23-73.7 17.75s-13-1.11-10.75 17.38h18.16l.37-3.7 147.44-10.35 8.53 2.12c-1.19 6.23-2.39 11.31-2.7 12.64l-.09.34s0 .24-.12.68c-.87-.3-1.36-.5-1.36-.5-2 2.28-3.15 26.07-3.33 28.48s9.26 5.31 9.26 5.31c4.28 1.57 20.89 0 20.89 0 5.49-.32 20.22-5.48 20.22-5.48l-1.3-26.07c-.64.21-1.28.4-1.92.58q.06-.55.12-1.14c.13-1.53.24-3.17.34-4.86L747 836h1.85v3.33h20.38s1.85-14.05-5.56-18.49-46.31-19.6-46.31-19.6l9.32-.88 37.15-3.53v1h5.55l-.12-1.55 10.31-1 12.22.37s-.37-15.53-9.63-16.64c-1.6-.2-6.86-.73-14.44-1.49l-2.41-29.27c5.91-10 21.12 20.33 21.12 20.33s.06.23.15.61c.73 3.11 4.14 17 6.45 18.59h.07a32 32 0 0 0 4 1.83 80.14 80.14 0 0 0 18.56 4.45c11.86 1.49 37.79-6.28 42.67-8.87a6.14 6.14 0 0 0 2.08-1.72c1.65-2.34-.29-4.87-.29-4.87l-5.21-.53c4.58-2.07 5.46-9.76-3.09-11.22-.33-.06-.67-.1-1-.14a13.59 13.59 0 0 1 1.54-2.13c-4.45.85-16.31-4.53-16.31-4.53a27.41 27.41 0 0 0-5.32-1.68l-.13-.23c-.18-.33-.35-.67-.51-1-2.56-5.37-3.53-12-4.41-17-1.85-10.73-23.52-52.14-23.52-52.14s-7.55-17.24-14-35.54c7.67-6.55 13.59-13.87 17-22l6.36-9.78a119 119 0 0 0 11.25-17.29l6.47-9.94c12.06-.88 31.89-2.26 42.08-2.59 2.92 15.83 6.46 34.17 8.06 39.15 3 9.25 18.16-1.48 24.08-25.14s-21.81-47.37-21.81-47.37zM653.26 752.59v-52c3.17-.5 6.66-1.09 10.41-1.76-2.24 13.27-5 25.41-5 25.41.24 6.49-3.4 20.93-5.41 28.35zm118.67-16.37l1.92.64a21 21 0 0 1 8.16 5.25 65.8 65.8 0 0 0-10.08-5.89zm-11.79-47.81s4.45 8.51-4.44 22.56c-6.67 10.54-2.71 16.72 6.89 21.49a76.29 76.29 0 0 0-9.66-2.63l.47.27c-7.82-1.71-4 5.27-4 5.27 7.77 7.54 11.37 26.59 13 41.7-20.4-2-52.46-5.13-78.37-7.63a68.33 68.33 0 0 0 .88-7.81c0-4.44 4.82-21.82 4.82-21.82s13.85-32.25 21.49-51.67a315.57 315.57 0 0 0 42.35-14.86c3.57 7.83 6.57 15.13 6.57 15.13z"
        transform="translate(-97.31 -25)"
        fill="url(#prefix__a)"
      />
      <path fill={primaryColor} d="M524.59 666.63h31.85v91.17h-31.85z" />
      <path opacity={0.3} d="M524.59 666.63h31.85v91.17h-31.85z" />
      <path
        d="M432.45 747.38l-.5 10.42 23.44 2.2-72.87 17.58s-12.81-1.1-10.61 17.21h17.94l.36-3.66 145.73-10.26 113.14 28.2h1.83v3.29h20.14s1.83-13.91-5.5-18.3-45.76-19.41-45.76-19.41l61.51-5.86 12.08.37s-.36-15.38-9.52-16.48-138.46-13.55-138.46-13.55h-20.81l-6.23 1.87-80.67 1.33a5.3 5.3 0 0 0-5.24 5.05z"
        fill={primaryColor}
      />
      <path
        d="M556.44 666.63v10.57c-11.47 1.83-18.67 2.61-18.67 2.61a73.76 73.76 0 0 1-13.18 1.19v-14.37z"
        opacity={0.1}
      />
      <path
        d="M803.78 580.16c-5.86 23.43-20.87 34.05-23.81 24.89-2.66-8.35-10.84-54.55-12.23-62.53-.13-.76-.21-1.18-.21-1.18l-1.46-9.51 12.4 1.12 3.7.34s27.46 23.43 21.61 46.87z"
        fill="#c37098"
      />
      <path
        d="M326.87 541.41s-12.81 21.6 24.17 22.33c0 0 27.46 2.56 48 43.57s93.37 78.72 138.77 70.3c0 0 152-16.4 170.17-75.78l12.54-32.23s52-4 57.48-3.3 1.83-15 1.83-15l-13.55-9.88-32.22 5.49-36.61 33.68-114.28 53.82-110.21-15.75s-87.14-56-87.87-58.58-35.15-26-35.15-26z"
        fill={primaryColor}
      />
      <path
        d="M325.6 528.89v5.5l-2.91 8.44-2.24 6.57s8.78 53.83-10.25 54.19-22.32-35.89-21.59-47.59c.52-8.21 8.94-20.2 13.94-26.63 2.13-2.76 3.64-4.5 3.64-4.5z"
        fill="#c37098"
      />
      <path
        d="M432.45 747.38l-.5 10.42 23.44 2.2-72.87 17.58s-12.81-1.1-10.61 17.21h17.94l.36-3.66 145.73-10.26 113.14 28.2h1.83v3.29h20.14s1.83-13.91-5.5-18.3-45.76-19.41-45.76-19.41l61.51-5.86 12.08.37s-.36-15.38-9.52-16.48-138.46-13.55-138.46-13.55h-20.81l-6.23 1.87-80.67 1.33a5.3 5.3 0 0 0-5.24 5.05z"
        opacity={0.3}
      />
      <path
        d="M326.87 541.41s-12.81 21.6 24.17 22.33c0 0 27.46 2.56 48 43.57s93.37 78.72 138.77 70.3c0 0 152-16.4 170.17-75.78l12.54-32.23s52-4 57.48-3.3 1.83-15 1.83-15l-13.55-9.88-32.22 5.49-36.61 33.68-114.28 53.82-110.21-15.75s-87.14-56-87.87-58.58-35.15-26-35.15-26z"
        opacity={0.4}
      />
      <path
        d="M745.01 535.76l-31.32 35c-74.82 86.6-215.75 54.48-265 47.6s-74.44-82-74.44-82a18.93 18.93 0 0 0 5.6-.23c8.29-1.42 23.83-8.28 32.88-38.77 12.76-43-42.34-136.5-55.68-146.82s-10.44-28.1-9.28-66S379.63 261 379.63 261l49.88 29.82c122.37 17.21 187.33 1.72 187.33 1.72l56.25-26.95c24.94-6.31 29-5.74 43.5 28.1s-10.44 63.09-10.44 63.09c-84.09 62.51-73.07 148-59.74 179.51 9 21.25 50.58 13.62 76.79 6.37 12.71-3.47 21.81-6.9 21.81-6.9z"
        fill={primaryColor}
      />
      <path
        d="M745.01 535.76l-31.32 35c-74.82 86.6-215.75 54.48-265 47.6s-74.44-82-74.44-82a18.93 18.93 0 0 0 5.6-.23c8.29-1.42 23.83-8.28 32.88-38.77 12.76-43-42.34-136.5-55.68-146.82s-10.44-28.1-9.28-66S379.63 261 379.63 261l49.88 29.82c122.37 17.21 187.33 1.72 187.33 1.72l56.25-26.95c24.94-6.31 29-5.74 43.5 28.1s-10.44 63.09-10.44 63.09c-84.09 62.51-73.07 148-59.74 179.51 9 21.25 50.58 13.62 76.79 6.37 12.71-3.47 21.81-6.9 21.81-6.9z"
        opacity={0.1}
      />
      <path
        d="M734.02 533.53L704.37 567c-70.85 82.93-204.31 52.17-251 45.58s-70.48-78.54-70.48-78.54a17.85 17.85 0 0 0 5.29-.22c7.86-1.36 22.57-7.93 31.14-37.12 12.08-41.2-40.09-130.72-52.72-140.6s-9.91-26.88-8.79-63.1 30.21-22.52 30.21-22.52L435.25 299c115.88 16.47 177.4 1.65 177.4 1.65l53.27-25.82c23.62-6 27.46-5.49 41.19 26.91s-9.88 60.42-9.88 60.42c-79.64 59.84-69.21 141.72-56.54 171.92 8.5 20.35 47.89 13 72.71 6.1 12.01-3.36 20.62-6.65 20.62-6.65z"
        fill={primaryColor}
      />
      <path
        d="M782.17 533.29s-13.18-1.1-14.64 8.05L676.36 549l-22.67 1.86-24-84.25-4.57-16.07 11.35 3.66s4.2 5 9.45 10.92c7.38 8.36 16.85 18.71 19.84 20.2a4.41 4.41 0 0 1 .66.41c5.27 3.62 14.35 20.1 14.35 20.1s8.79 6.23 17.22 5.49c0 0 22 6.95 34.41 8.79s49.77 13.18 49.77 13.18z"
        fill="#3f3d56"
      />
      <path
        d="M734.02 533.53L704.37 567c-70.85 82.93-204.31 52.17-251 45.58s-70.48-78.54-70.48-78.54a17.85 17.85 0 0 0 5.29-.22 136 136 0 0 1 17.77 17.8c51.63 61.15 130 57.12 130 57.12s113.5 13.54 155.24-50.17a179.93 179.93 0 0 1 22.19-18.43c12.03-3.32 20.64-6.61 20.64-6.61z"
        opacity={0.1}
      />
      <path
        d="M782.17 533.29s-13.18-1.1-14.64 8.05L676.36 549l-22.67 1.86-24-84.25-4.57-16.07 11.35 3.66s4.2 5 9.45 10.92c7.38 8.36 16.85 18.71 19.84 20.2a4.41 4.41 0 0 1 .66.41c5.27 3.62 14.35 20.1 14.35 20.1s8.79 6.23 17.22 5.49c0 0 22 6.95 34.41 8.79s49.77 13.18 49.77 13.18z"
        opacity={0.1}
      />
      <path
        d="M783.27 534.39s-13.18-1.1-14.64 8.05l-.89.08c-.13-.76-.21-1.18-.21-1.18l-1.46-9.51 12.4 1.12z"
        opacity={0.1}
      />
      <path
        d="M706.62 605.5c-22 24.26-63.9 52.3-139.56 49.77 0 0-136.2 17.22-186.37-86.4 0 0-19.42-35.6-55.4-15.92l-1 .54-2.2-15.38s32.22-43.21 83.84 17.94 130 57.12 130 57.12S649.44 626.71 691.18 563c0 0 59-59.67 86.78-23.06l1.51 11.11.33 2.44s-28.94-9.53-49.38 15.37z"
        opacity={0.1}
      />
      <path
        d="M322.11 535.91s32.22-43.2 83.85 17.94a151.45 151.45 0 0 0 19.42 19.21C475.15 614.1 535.94 611 535.94 611s113.5 13.55 155.24-50.16c0 0 59-59.68 86.78-23.07l1.83 13.55s-31.1-10.32-51.62 18.28c0 0-29.66 87.87-161.11 83.48 0 0-136.2 17.21-186.37-86.41 0 0-19.77-36.25-56.38-15.38z"
        fill={primaryColor}
      />
      <path
        d="M618.88 353.61l-2.64.21c-2.81-5.54-3.52-30-2.5-53.11l-2.19-.09c-.48 10.87-1.51 43.18 2.57 53.36-25.86 1.92-140.72 9.73-181.7-.06 14.18-29.94 3.95-55.07 3.84-55.33l-2 .85c.1.25 9.85 24.15-3.51 53-6.67-10.44-41.92-62.81-73.3-56l.47 2.15c29-6.32 63.05 42.89 70.53 54.32l-1.34-.34 2.9 2.8 1 1.57.19-.38c5.28 5.68 28.81 33.39 27.53 74.6-.36 11.65 7.34 22.1 22.27 30.24 16.76 9.14 39.57 13.9 60.08 13.9 16.45 0 31.43-3.06 40.6-9.38 7.39-5.09 10.7-12.1 9.59-20.29-6.07-44.69 28.48-89.53 29.06-90.27 47.3-56.61 86.31-52.55 86.7-52.51l.27-2.18c-1.68-.2-40.4-4.33-88.42 52.94zm-29.84 92.31c1 7.42-1.9 13.54-8.65 18.19-19.68 13.55-69.33 11.21-98.39-4.63-9.87-5.39-21.54-14.65-21.12-28.25 1.21-39.12-19.5-66.35-26.78-74.67 43.66 9.22 157.8 1.29 181.19-.47a2.82 2.82 0 0 0 1.1.87c-7.65 10.87-32.7 49.89-27.35 88.96zM582.81 760.36l46.19 13.4-9.21.88-36.98-14.28zM455.39 759.99l33.32-8.05-42.5 7.19 9.18.86zM325.6 528.89v5.5l-2.91 8.44c-3.88-10.64-14.49-13-20.16-13.47 2.13-2.76 3.64-4.5 3.64-4.5z"
        opacity={0.1}
      />
      <path
        d="M379.05 505.83L371 504s-.37 3.29-7 5.12-35.88 10.62-39.91 10.62-22.34 1.1-24.17 8.42c0 0 21.61-1.46 24.9 17.58l62.61-2.93z"
        fill="#3f3d56"
      />
      <path
        d="M379.05 505.83L371 504s-.37 3.29-7 5.12-35.88 10.62-39.91 10.62-22.34 1.1-24.17 8.42c0 0 21.61-1.46 24.9 17.58l62.61-2.93z"
        opacity={0.1}
      />
      <path
        d="M654.95 703.91s18.39 10.5 25.4 20.66a194.69 194.69 0 0 1 13 22.83s13.73 6 3.71-15.82-42.11-27.67-42.11-27.67z"
        fill="#3f3d56"
      />
      <path
        d="M654.95 703.91s18.39 10.5 25.4 20.66a194.69 194.69 0 0 1 13 22.83s13.73 6 3.71-15.82-42.11-27.67-42.11-27.67z"
        fill="#3f3d56"
      />
      <path
        d="M654.95 703.91s18.39 10.5 25.4 20.66a194.69 194.69 0 0 1 13 22.83s13.73 6 3.71-15.82-42.11-27.67-42.11-27.67z"
        opacity={0.1}
      />
      <path
        d="M498.27 290.5c-1.17 1.37-2 3-3.07 4.44-4.66 5.79-13.44 5.54-20.12 8.79-9.14 4.45-13.56 15.45-13.3 25.62s4.29 19.8 8.07 29.25 7.42 19.31 6.88 29.46c-.32 6-2.1 11.84-3.87 17.59-1.15 3.72-2.54 7.77-5.88 9.77a187.76 187.76 0 0 0 30.3 2.92c29.16.45 58.33-5.85 87.35-2.95a27.1 27.1 0 0 1-8.33-25.58c.81-3.64 2.36-7.06 3.57-10.59a57.52 57.52 0 0 0 .11-36.6c-1.18-3.51-2.7-6.91-3.7-10.47-2.3-8.28-1.69-17.09-3.33-25.52s-6.56-17.25-14.91-19.27c-11.56-2.79-21.64 9.33-32.75 6-8.47-2.54-18.69-12.56-27.02-2.86z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M580.16 379.35a57.5 57.5 0 0 0 3-19.55 57.56 57.56 0 0 1-3 17.35c-1.21 3.53-2.77 7-3.57 10.59a25.49 25.49 0 0 0-.55 6.63 25.43 25.43 0 0 1 .55-4.43c.8-3.64 2.36-7.06 3.57-10.59zM477.05 385c.27-9.81-3.26-19.35-6.92-28.49-3.75-9.38-7.74-18.95-8.05-29v2c.26 10.16 4.29 19.8 8.06 29.24 3.38 8.43 6.65 17.25 6.91 26.25zM582.57 413.13c-28.25-2.35-56.63 3.58-85 3.15a189.68 189.68 0 0 1-28.15-2.56 8.84 8.84 0 0 1-2.15 1.83 187.76 187.76 0 0 0 30.3 2.92c29.16.45 58.32-5.86 87.34-3a25.16 25.16 0 0 1-2.34-2.34z" />
      </g>
      <path
        d="M544.21 822.12l24.14 4.45-1.66 2.88s-16.42 1.56-20.65 0-1.83-7.33-1.83-7.33zM569.08 617.27s100.1-31.56 96.44-51.7-92.55-25-96.44-19.83 0 71.53 0 71.53z"
        fill="#3f3d56"
      />
      <path d="M569.08 617.27s100.1-31.56 96.44-51.7-92.55-25-96.44-19.83 0 71.53 0 71.53z" opacity={0.2} />
      <path
        d="M569.08 421.61l-19 16.85-24.17 4.39-43.57-5.49-24.53-16.85s4.33-.95 16.48-3.66l9.88-2.19c19.78-4.4 11.72-37 11.72-37s54.19-28.92 47.24 7.69c-3.79 19.95 4.26 28.92 12.38 33a33.17 33.17 0 0 0 13.57 3.26z"
        fill="#c37098"
      />
      <circle cx={522.54} cy={357.73} r={42.12} opacity={0.1} />
      <circle cx={522.54} cy={356.63} r={42.12} fill="#c37098" />
      <path
        d="M569.08 421.61l-19 16.85-24.17 4.39-43.57-5.49-24.53-16.85s4.33-.95 16.48-3.66l2.56 1.47h78.66a33.17 33.17 0 0 0 13.57 3.29z"
        opacity={0.1}
      />
      <path
        d="M514.89 419.42h43.1s14.75-5.5 19.51-2.2 18.31 3.66 20.14 2.2 28.92 13.58 38.81 34.78L601.3 482l-152.68 60.81s-7-12.09-4.4-16.11-4.76-11.7-4.76-11.7-2.56-13.55 0-17.57l-32.22-40.28s22.34-32.59 27.47-35.88c0 0 1.83-5.4 3.66-5.08s34.48 1 34.48 1l4 2.26z"
        fill="#3f3d56"
      />
      <path
        d="M514.89 419.42h43.1s14.75-5.5 19.51-2.2 18.31 3.66 20.14 2.2 28.92 13.58 38.81 34.78l-3.65 2.89L601.3 482l-152.68 60.81s-7-12.09-4.4-16.11-4.76-11.7-4.76-11.7-2.56-13.55 0-17.57l-32.22-40.28s22.34-32.59 27.47-35.88c0 0 1.83-5.4 3.66-5.08s34.48 1 34.48 1l4 2.26z"
        opacity={0.1}
      />
      <path
        d="M420.79 453.1l-13.55 4S373.56 502.9 371 504s16.47 38.81 16.47 38.81 6.59-5.13 9.89-8.42 42.1-37 42.1-37z"
        fill="#3f3d56"
      />
      <path
        d="M420.79 453.1l-13.55 4S373.56 502.9 371 504s16.47 38.81 16.47 38.81 6.59-5.13 9.89-8.42 42.1-37 42.1-37zM676.36 549l-22.67 1.86-24-84.25 16.23-1.49c7.38 8.36 16.85 18.71 19.84 20.2a4.41 4.41 0 0 1 .66.41 66.25 66.25 0 0 1 1.89 12.27c2.2 32 5.12 38.27 5.12 38.27s1.26 5.16 2.93 12.73z"
        opacity={0.1}
      />
      <path
        d="M752.51 752.24c-.62-.09-1.48-.18-2.53-.28l-1-.09c-13.33-1.16-49.87-2.93-49.87-2.93a92.64 92.64 0 0 0-2.63-9.56c-.14-.45-.3-.92-.46-1.39-3.44-10-9.93-23.72-20.35-27.12-16.84-5.49-26.72-11.72-17.93-25.64s4.39-22.33 4.39-22.33-12.17-29.65-16.33-33.31c-2.46-2.17-8.55-14.34-13.21-25.71-.45-1.1-.9-2.21-1.31-3.3-2.62-6.69-4.54-12.69-4.66-15.67-.34-7.71-14.17-71.81-16.52-82.65-.21-1-.33-1.56-.33-1.56s0-.18-.09-.51c-.64-3.92-4.14-29.79 13.64-33.19l22.48-2.07c.75.06 18.19 1.67 20.34 33 2.2 32 5.12 38.27 5.12 38.27s9.16 37 9.89 56.75 22.51 69.57 22.51 69.57 21.42 41 23.26 51.63c.87 5 1.82 11.56 4.35 16.88.16.34.33.67.5 1 2.85 5.35 7.51 9.2 15.66 8.48a23.71 23.71 0 0 1 3.74 0 14.75 14.75 0 0 1 1.59.19c10.2 1.73 6.8 12.51-.25 11.54z"
        fill="#c37098"
      />
      <path
        d="M638.69 530.31c-.37 30.8-1.83 57.54-1.83 57.54s-1.84 6.85-4.28 16c-3.26-8-5.83-15.51-6-19-.39-8.36-16.89-84.15-16.89-84.15s0-.18-.09-.51l2.28.51s27.13-1.19 26.81 29.61z"
        opacity={0.1}
      />
      <path
        d="M636.45 530.31c-.37 30.8-1.83 57.54-1.83 57.54s-1.41 5.26-3.39 12.73c-4.34 16.33-11.46 43.24-12.72 48.78-1.83 8-26 64.43-26 64.43s-4.77 17.22-4.77 21.61-3.3 22-3.3 22v15.74s0 14.71-.86 24.53c-.08.79-.16 1.55-.23 2.26-.37 3.12-.84 5.45-1.47 6.16-2.55 2.94-13.54 20.51-13.54 20.51s-1.42 0-3.6-.05c-5-.15-14.08-.75-19.35-3.15a7.33 7.33 0 0 1-3.74-3c-2.68-5.35-1-18.18-.28-22.81.16-1.08.28-1.72.28-1.72s0-.12.09-.34c.85-3.57 8.11-34.5 4.31-41.4-4-7.32 9.16-23.06 9.16-23.06s6.95-23.81 6.59-32.59c0 0 9.89-43.21 7.32-55.29-.77-3.65-.15-13.17 1.09-24.71 1.61-14.71 4.22-32.7 6.25-45.9 1.65-10.77 2.92-18.36 2.92-18.36s-.61-.19-1.58-.41c-2.54-.58-7.59-1.35-10.51.77-4 2.93-2.57-31.12-2.57-31.12L597.27 498l12.42 2.7a19.74 19.74 0 0 1 2.52.09c6.75.6 24.54 4.53 24.24 29.52z"
        fill="#c37098"
      />
      <path
        d="M761.23 757.13a5.91 5.91 0 0 1-2.06 1.7c-4.82 2.57-30.45 10.26-42.17 8.79a79.15 79.15 0 0 1-18.31-4.41 31.36 31.36 0 0 1-4-1.81h-.06c-2.29-1.53-5.66-15.33-6.39-18.4-.08-.39-.14-.61-.14-.61s-15-30-20.87-20.13l4 49.07h-5.49s-.73-48.71-14.28-61.89c0 0-3.92-7.18 4.39-5.12s28.2 15.38 30.4 23.07a72.63 72.63 0 0 0 6 13.51c1.56 2.84 2.76 4.79 2.76 4.79l53.84 5.44 12.07 1.21s1.94 2.47.31 4.79z"
        fill="#3f3d56"
      />
      <path
        d="M761.23 757.13a5.91 5.91 0 0 1-2.06 1.7c-4.82 2.57-30.45 10.26-42.17 8.79a79.15 79.15 0 0 1-18.31-4.41 31.36 31.36 0 0 1-4-1.81h-.06c11.77-2.1 37.77-6.34 54.49-6 5.13.04 9.4.6 12.11 1.73zM748.87 750c0 .6 0 1.23.06 1.88-13.33-1.16-49.87-2.93-49.87-2.93a95.38 95.38 0 0 0-3.09-11c9.62-4.41 23.4-9.16 35.27-6.94 2.79 5.87 7.51 10.25 16.16 9.48a23.71 23.71 0 0 1 3.74 0 20.74 20.74 0 0 0-2.27 9.51z"
        opacity={0.1}
      />
      <path
        d="M749.97 751.09v.87l-1-.09c-13.33-1.16-49.87-2.93-49.87-2.93a92.64 92.64 0 0 0-2.63-9.56c9.48-4.42 23.32-9.34 35.31-7.33 2.85 5.35 7.51 9.2 15.66 8.48a23.71 23.71 0 0 1 3.74 0 14.75 14.75 0 0 1 1.59.19 20.58 20.58 0 0 0-2.8 10.37z"
        opacity={0.1}
      />
      <path
        d="M748.87 751.09a24.87 24.87 0 0 0 .35 4.24h-.12l-50.41 7.88a31.36 31.36 0 0 1-4-1.81h-.06c-2.29-1.53-5.66-15.33-6.39-18.4 1.16-.63 2.52-1.34 4.05-2.1 10.94-5.47 30.43-13.23 44.87-6.92 0 0 11.72 5.33 16.11 4.49-.02-.04-4.36 4.45-4.4 12.62z"
        fill="#3f3d56"
      />
      <path
        d="M583.36 799.9c-.37 3.12-.84 5.45-1.47 6.16-2.55 2.94-13.54 20.51-13.54 20.51s-1.44 0-3.65-.05c-.29-4.73-2.09-12.53-10.63-12.7-6.75-.13-8.51 4.95-8.72 9.55a7.33 7.33 0 0 1-3.74-3c-2.68-5.35-1-18.18-.28-22.81 4.81 1.67 23.6 7.49 42.03 2.34z"
        opacity={0.1}
      />
      <path
        d="M583.59 797.64c-.08.79-.16 1.55-.23 2.26-.37 3.12-.84 5.45-1.47 6.16-2.55 2.94-13.54 20.51-13.54 20.51s-1.42 0-3.6-.05c.07-3.86-.61-14.69-10.68-14.9-7.86-.15-9 6.77-8.72 11.75a7.33 7.33 0 0 1-3.74-3c-2.68-5.35-1-18.18-.28-22.81.16-1.08.28-1.72.28-1.72s0-.12.09-.34c5.36 1.81 23.84 7.28 41.89 2.14z"
        opacity={0.1}
      />
      <path
        d="M540.15 796s23.25 9.33 45.22 2.19l1.32 25.81s-21.1 7.4-22 5c0 0 1.64-16-10.62-16.23s-8.06 16.73-8.06 16.73-9.33-2.88-9.15-5.26 1.34-25.99 3.29-28.24z"
        fill="#3f3d56"
      />
      <path
        d="M647.94 466c-20.82-6.22-33.54 28.36-35.7 34.76-.22.64-.33 1-.33 1-.63.14-1.26.29-1.86.46-35.88 9.41-33.72 42-32.29 51.49-2.54-.58-7.59-1.35-10.51.77-4 2.93-2.57-31.12-2.57-31.12L597.27 498l12.42 2.7s0-.18-.09-.51c-.64-3.92-4.14-29.79 13.64-33.19l22.48-2.07z"
        opacity={0.1}
      />
      <path
        d="M455.94 524.87l-7.32 17.94s-30.39 42.11-2.56 60.78 123 13.68 123 13.68l7-62S565.42 511 609.69 500.7c0 0 13.09-42.61 36-35.76l-43.71-22.09-60 22.34-50.9 27.46z"
        fill="#3f3d56"
      />
      <path
        d="M455.94 524.87l-7.32 17.94s-30.39 42.11-2.56 60.78 123 13.68 123 13.68l7-62S565.42 511 609.69 500.7c0 0 13.09-42.61 36-35.76l-43.71-22.09-60 22.34-50.9 27.46z"
        opacity={0.1}
      />
      <path
        d="M457.77 558.19s9.16-21.69 20.51-27.88-20.51 27.88-20.51 27.88zM496.95 519s81.65-53.09 111.31-52zM522.88 332.88c15.16 1.5 26.13 16.4 41.16 18.83a6.78 6.78 0 0 0 3.82-.21c3.84-1.69 2.57-7.4.68-11.14q-4.26-8.42-8.53-16.83c-2.1-4.14-4.3-8.4-7.85-11.4-3-2.5-6.65-4-10.33-5.15-14.46-4.69-30.76-5.87-44.49.64-7.72 3.67-28.52 22.48-17.63 31.53 9.76 8.12 31.72-7.41 43.17-6.27z"
        opacity={0.1}
      />
      <path
        d="M522.88 331.78c15.16 1.5 26.13 16.41 41.16 18.83a6.78 6.78 0 0 0 3.82-.21c3.84-1.69 2.57-7.4.68-11.14q-4.26-8.42-8.53-16.83c-2.1-4.14-4.3-8.4-7.85-11.4-3-2.5-6.65-4-10.33-5.15-14.46-4.68-30.76-5.87-44.49.64-7.72 3.67-28.52 22.48-17.63 31.53 9.76 8.12 31.72-7.41 43.17-6.27z"
        fill="#3f3d56"
      />
      <path
        d="M452.07 520a63.15 63.15 0 0 0 27.48-3M365.28 513.21s7 1 7 5.8-7-5.8-7-5.8zM368.76 531.82s1.28-2.23 3.48 2-3.48-2-3.48-2zM567.86 348.2a6.88 6.88 0 0 1-3.82.22c-15-2.43-26-17.33-41.16-18.84-11.46-1.14-33.41 14.39-43.18 6.27a8 8 0 0 1-3-5.34 8.11 8.11 0 0 0 3 7.54c9.77 8.12 31.72-7.41 43.18-6.27 15.15 1.5 26.13 16.41 41.16 18.83a6.79 6.79 0 0 0 3.82-.21c2.17-1 2.7-3.21 2.41-5.66a4.12 4.12 0 0 1-2.41 3.46zM552.86 509.82s44.74-11.7 56.86-9.12z"
        opacity={0.1}
      />
      <path
        d="M325.31 792.06l2.14-26.56 21.13-24.41s-23.06 6.2-51.27-1.54l22.19 26 .85 26.51c-6.75.75-11.87 4.37-11.87 8.73 0 4.9 6.48 8.88 14.46 8.88s14.47-4 14.47-8.88c0-4.39-5.24-8.04-12.1-8.73z"
        fill="#d4dfec"
        opacity={0.5}
      />
      <path
        d="M299.89 740.38l17.8 19.69a8 8 0 0 0 6 2.65 8 8 0 0 0 6-2.7l16.9-19s-21.01 6.21-46.7-.64z"
        fill={primaryColor}
        opacity={0.5}
      />
      <ellipse cx={323.73} cy={735.15} rx={29.28} ry={11.24} fill="#d4dfec" opacity={0.5} />
      <ellipse cx={323.3} cy={735.99} rx={25.99} ry={8.93} fill={primaryColor} />
      <path fill={primaryColor} opacity={0.5} d="M330.74 746.07l-4.44 11.65 4.08-11.62" />
      <path
        d="M330.93 744.53l11.62-33.06a.66.66 0 0 1 .86-.39.65.65 0 0 1 .36.83l-12.43 32.58"
        fill="#3f3d56"
        opacity={0.5}
      />
      <path d="M335.85 730.54l6.7-19.07a.66.66 0 0 1 .86-.39.65.65 0 0 1 .36.83l-7.15 18.75" fill="#3f3d56" />
      <path fill="#3f3d56" opacity={0.5} d="M330.93 744.53l4.92-13.99" />
      <circle cx={337.81} cy={726.65} r={5.69} fill={primaryColor} />
      <circle cx={337.81} cy={726.65} r={5.69} fill="#fff" opacity={0.5} />
      <circle cx={338.43} cy={725.92} r={2.4} fill={primaryColor} />
      <circle cx={338.43} cy={725.92} r={2.4} opacity={0.25} />
      <path
        d="M332.25 727.78a5.69 5.69 0 0 0 10.25 2.36 46.36 46.36 0 0 0-10.25-2.36z"
        fill={primaryColor}
        opacity={0.3}
      />
      <path fill="#535461" d="M117.46 521.25h5.68v127.9h-5.68z" />
      <path
        d="M158.84 648.76l-.36 5.76-.5 8.13-.21 3.39-.5 8.14-.22 3.39-.5 8.13-5.74 92.48a15.66 15.66 0 0 1-15.63 14.69h-29.77a15.66 15.66 0 0 1-15.63-14.69l-5.74-92.48-.5-8.13-.21-3.39-.51-8.14-.21-3.39-.5-8.13-.36-5.76a8.11 8.11 0 0 1 8.1-8.61h60.9a8.11 8.11 0 0 1 8.09 8.61z"
        fill="#3f3d56"
      />
      <path
        fill="#9d9cb5"
        d="M158.48 654.52l-.5 8.13H82.61l-.5-8.13h76.37zM157.77 666.04l-.5 8.14H83.33l-.51-8.14h74.95zM157.05 677.57l-.5 8.13h-72.5l-.51-8.13h73.51z"
      />
      <path
        d="M73.43 569.19c33.09 23.94 46.86 61.37 46.86 61.37s-39.86-1.37-72.95-25.3S.48 543.89.48 543.89s39.87 1.37 72.95 25.3z"
        fill={primaryColor}
      />
      <path
        d="M.48 543.89s41.38 23 54.66 42 65.15 44.68 65.15 44.68"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M94.79 521c18 13 25.5 33.4 25.5 33.4s-21.69-.74-39.7-13.77-25.51-33.4-25.51-33.4 21.7.77 39.71 13.77z"
        fill={primaryColor}
      />
      <path
        d="M55.08 507.2s22.52 12.5 29.75 22.85 35.46 24.32 35.46 24.32"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M146.46 553.34c-20.68 22.73-25.06 52.44-25.06 52.44s29.16-7.16 49.85-29.89 25.06-52.44 25.06-52.44-29.16 7.15-49.85 29.89z"
        fill={primaryColor}
      />
      <path
        d="M196.31 523.45s-26.95 23.3-33.79 39.36-41.12 43-41.12 43"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M866 642.11s5.78 7.55-2.67 19-15.41 21-12.59 28.15c0 0 12.74-21.18 23.11-21.48s3.56-12.93-7.85-25.67z"
        opacity={0.1}
      />
      <path
        d="M866 642.11a9.15 9.15 0 0 1 1.18 2.37c10.12 11.89 15.51 23 5.78 23.26-9.06.26-19.93 16.46-22.53 20.55a7.24 7.24 0 0 0 .31.93s12.74-21.18 23.11-21.48 3.56-12.89-7.85-25.63z"
        opacity={0.1}
      />
      <path
        d="M876.74 651.74c0 2.66-.3 4.81-.67 4.81s-.66-2.15-.66-4.81.37-1.41.74-1.41.59-1.25.59 1.41z"
        fill="#3f3d56"
      />
      <path
        d="M880.43 654.91c-2.34 1.28-4.37 2.05-4.55 1.72s1.57-1.62 3.91-2.89 1.41-.34 1.59 0 1.38-.1-.95 1.17zM835.48 642.11s-5.78 7.55 2.66 19 15.41 21 12.6 28.15c0 0-12.74-21.18-23.12-21.48s-3.55-12.93 7.86-25.67z"
        fill="#3f3d56"
      />
      <path
        d="M866 642.11s5.78 7.55-2.67 19-15.41 21-12.59 28.15c0 0 12.74-21.18 23.11-21.48s3.56-12.93-7.85-25.67z"
        fill="#d4dfec"
      />
      <path
        d="M835.48 642.11s-5.78 7.55 2.66 19 15.41 21 12.6 28.15c0 0-12.74-21.18-23.12-21.48s-3.55-12.93 7.86-25.67z"
        opacity={0.1}
      />
      <path
        d="M835.48 642.11a9.15 9.15 0 0 0-1.18 2.37c-10.12 11.89-15.51 23-5.79 23.26 9.06.26 19.93 16.46 22.54 20.55a9.21 9.21 0 0 1-.31.93S838 668 827.62 667.74s-3.55-12.89 7.86-25.63z"
        opacity={0.1}
      />
      <path
        d="M824.69 651.74c0 2.66.3 4.81.67 4.81s.67-2.15.67-4.81-.37-1.41-.74-1.41-.6-1.25-.6 1.41z"
        fill="#d4dfec"
      />
      <path
        d="M821.05 654.91c2.33 1.28 4.37 2.05 4.55 1.72s-1.58-1.62-3.91-2.89-1.42-.34-1.59 0-1.41-.1.95 1.17z"
        fill="#d4dfec"
      />
      <path
        d="M881.83 679l-.29 2.36-.4 3.33-.17 1.39-.41 3.34-.17 1.39-.41 3.33-4.62 37.9c-.41 3.38-5.94 6-12.61 6h-24.06c-6.68 0-12.2-2.64-12.61-6l-4.63-37.9-.4-3.33-.17-1.39-.42-3.34-.16-1.39-.41-3.33-.2-2.36c-.23-1.91 2.76-3.53 6.54-3.53h49.13c3.71.04 6.71 1.66 6.47 3.53z"
        fill="#3f3d56"
      />
      <path
        fill="#9d9cb5"
        d="M881.55 681.4l-.41 3.33h-60.8l-.41-3.33h61.62zM880.97 686.12l-.4 3.34h-59.65l-.41-3.34h60.46zM880.39 690.85l-.4 3.33h-58.5l-.4-3.33h59.3z"
      />
    </svg>
  );
};

UndrawPowerful.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPowerful;
