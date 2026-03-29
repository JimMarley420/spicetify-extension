import type { FC } from "react";

export interface IconProps {
  size?: number;
  fill?: string;
}

export type ReactIconComponent = FC<IconProps> & {
  defaultProps?: Partial<IconProps>;
};

const iconData = {
  search: {
    path: "M10.5335 2.1123c2.9465.0001 5.3352 2.3888 5.3353 5.3353 0 1.4264-.5625 2.7723-1.5361 3.6799l3.1602 3.1602c.3904.3904.3904 1.0237 0 1.4142-.3904.3904-1.0237.3904-1.4142 0l-3.1602-3.1602C12.3079 13.4707 11.4288 14 10.5335 14 7.587 13.9999 5.1983 11.6112 5.1982 8.6647c0-2.9465 2.3887-5.3352 5.3353-5.3353 1.4264 0 2.7723.5625 3.6799 1.5361l2.5352 2.5352a.9994.9994 90 011.4142-1.4142l-2.5352-2.5352C13.3058 2.6747 11.9599 2.1123 10.5335 2.1123Zm-4.1982 5.3353c0-2.3094 1.876-4.1982 4.1982-4.1982 2.3094 0 4.1982 1.8888 4.1982 4.1982 0 2.3094-1.8888 4.1982-4.1982 4.1982-2.3094 0-4.1982-1.8888-4.1982-4.1982Z",
    size: 24,
  },
  play: {
    path: "M8 5v14l11-7z",
    size: 24,
  },
  pause: {
    path: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
    size: 24,
  },
  editButton: {
    path: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
    size: 24,
  },
  settings: {
    path: "M7.96 5.33a2.67 2.67 0 115.34 2.67 2.67 2.67 0 01-5.34-2.67ZM6.67 8A1.33 1.33 0 109.33 8 1.33 1.33 0 006.67 8Zm4.82-4.81a.95.94 0 01-1.1-.75L10.05.55A.47.47 0 009.68.17 8.1 8.1 0 006.32.17.47.47 0 005.96.55L5.61 2.44a.95.95 0 01-1.25.71L2.55 2.51a.47.47 0 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 0 00.14.51L1.97 7.28a.94.94 0 010 1.43L.5 9.95a.47.47 0 00-.14.51 7.98 7.98 0 001.68 2.9.47.47 0 00.51.13l1.81-.65a.94.94 0 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 0 003.36 0 .47.47 0 00.37-.37l.34-1.89a.95.95 0 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 0 00-.14-.5L14.03 8.72a.94.94 0 010-1.44L15.5 6.04a.47.47 0 00.14-.5 7.98 7.98 0 00-1.68-2.9.47.47 0 00-.51-.13l-1.81.65a.95.95 0 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 0 003-1.73l.24-1.3a6.81 6.81 0 011.68 0l.24 1.3a2.28 2.28 0 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 0 000 3.48l1 .85a6.65 6.65 0 01-.84 1.44l-1.24-.44A2.28 2.28 0 009.08 13.32l-.24 1.29a6.8 6.8 0 01-1.69 0l-.23-1.29A2.28 2.28 0 003.91 11.59l-1.24.44a6.65 6.65 0 01-.84-1.44l1-.86a2.27 2.27 0 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
    size: 16,
  },
  close: {
    path: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
    size: 32,
  },
  duplicate: {
    path: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z",
    size: 16,
  },
} as const;
export type IconName = keyof typeof iconData;

const createReactComponent = (name: IconName): ReactIconComponent => {
  const { path, size: defaultSize } = iconData[name];
  const Component: ReactIconComponent = ({ size = defaultSize, fill = "currentColor" }) => (
    <svg
      fill={fill}
      height={size}
      role="img"
      viewBox={`0 0 ${defaultSize} ${defaultSize}`}
      width={size}
    >
      <path d={path} />
    </svg>
  );
  Component.defaultProps = {
    size: defaultSize,
    fill: "currentColor",
  };
  return Component;
};

interface IconCollection {
  raw: Record<IconName, string>;
  react: Record<IconName, ReactIconComponent>;
  html: Record<IconName, string>;
}

const { raw, react, html } = (Object.keys(iconData) as IconName[]).reduce<IconCollection>(
  (acc, name) => {
    acc.raw[name] = iconData[name].path;
    acc.react[name] = createReactComponent(name);
    acc.html[name] = `<path d="${iconData[name].path}"/>`;
    return acc;
  },
  {
    raw: {} as Record<IconName, string>,
    react: {} as Record<IconName, ReactIconComponent>,
    html: {} as Record<IconName, string>,
  },
);

export const Icons = {
  React: react,
  HTML: html,
  RAW: raw,
};
