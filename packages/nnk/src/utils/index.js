import config from '../setup/config';

export const getSocialLinks = linksToDisplay => {
  const { socialLinks } = config;
  return socialLinks.filter(link => linksToDisplay.includes(link.type));
};
