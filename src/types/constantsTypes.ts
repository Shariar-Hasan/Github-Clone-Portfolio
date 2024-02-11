export type SocialIconType = {
  title: string;
  icon: JSX.Element;
  url: string;
  textClass: string;
  media: string;
};
export type RoutesType = {
  title: string;
  path: string;
  icon: JSX.Element;
};
export type SideNavRoutesType = RoutesType & {
  isExternal: boolean;
};

export type AboutMeType = {
  name: string;
  title: string;
  location?: string;
  email: string;
  aboutMeJsx: JSX.Element;
};
