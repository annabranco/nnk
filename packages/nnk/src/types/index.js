import { arrayOf, bool, func, number, shape, string } from 'prop-types';

// --- Primary

const ActionRouterPropType = shape({
  init: func.isRequired,
  set: func.isRequired,
  beforeSSR: func.isRequired
});

const ActionSourcePropType = shape({
  fetch: func.isRequired,
  init: func.isRequired,
  afterSSR: func.isRequired
});

const ActionThemePropType = shape({
  toggleMobileMenu: func.isRequired,
  closeMobileMenu: func.isRequired,
  changeTheme: func.isRequired
});

const FeaturedPropType = shape({
  showOnList: bool.isRequired,
  showOnPost: bool.isRequired
});

const FrontityPropType = shape({
  url: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  name: string.isRequired,
  mode: string.isRequired,
  debug: bool.isRequired,
  platform: string.isRequired,
  rendering: string.isRequired,
  initialLink: string.isRequired,
  options: shape(),
  packages: arrayOf(string)
});

const ItemDetailsPropType = shape({
  rendered: string.isRequired,
  protected: bool
});

const ItemEmbeddedPropType = shape({
  author: arrayOf(number).isRequired,
  'wp:featuredmedia': arrayOf(number),
  'wp:term': arrayOf(arrayOf(number)).isRequired
});

const ItemLinksItemsPropType = shape({
  count: number,
  embeddable: bool,
  href: string.isRequired,
  id: number,
  name: string,
  taxonomy: string
});

const ItemLinksPropType = shape({
  self: arrayOf(ItemLinksItemsPropType),
  collection: arrayOf(ItemLinksItemsPropType),
  about: arrayOf(ItemLinksItemsPropType),
  author: arrayOf(ItemLinksItemsPropType),
  replies: arrayOf(ItemLinksItemsPropType),
  'version-history': arrayOf(ItemLinksItemsPropType),
  'predecessor-version': arrayOf(ItemLinksItemsPropType),
  'wp:featuredmedia': arrayOf(ItemLinksItemsPropType),
  'wp:attachment': arrayOf(ItemLinksItemsPropType),
  'wp:term': arrayOf(ItemLinksItemsPropType),
  curies: arrayOf(ItemLinksItemsPropType)
});

const ItemMetaPropType = shape({
  _coblocks_attr: string.isRequired,
  _coblocks_dimensions: string.isRequired,
  _coblocks_responsive_height: string.isRequired,
  _coblocks_accordion_ie_support: string.isRequired,
  advanced_seo_description: string.isRequired,
  amp_status: string.isRequired,
  spay_email: string.isRequired,
  jetpack_publicize_message: string.isRequired,
  jetpack_is_tweetstorm: bool.isRequired
});

const ItemMetaImgPropType = shape({
  alt_text: string.isRequired,
  src: string.isRequired,
  width: number.isRequired,
  height: number.isRequired
});

const ItemMetaUrlPropType = shape({
  origin: number.isRequired,
  position: number.isRequired
});

const ItemMetaJetPackRelatedPostsPropType = shape({
  id: number.isRequired,
  url: string.isRequired,
  url_meta: ItemMetaUrlPropType.ItemMetaUrlPropType,
  title: string.isRequired,
  date: string.isRequired,
  format: bool.isRequired,
  excerpt: string.isRequired,
  rel: string.isRequired,
  context: string.isRequired,
  img: ItemMetaImgPropType.isRequired,
  classes: arrayOf(number)
});

const LibraryHtml2ReactProcessorPropType = shape({
  priority: number,
  processor: func.isRequired,
  test: func.isRequired
});

const LibraryHtml2ReactPropType = shape({
  processors: arrayOf(LibraryHtml2ReactProcessorPropType).isRequired
});

const LibrarySourceApiPropType = shape({
  api: string.isRequired,
  isWpCom: bool.isRequired
});

const LibrarySourceHandlersPropType = shape({
  name: string.isRequired,
  priority: number.isRequired,
  pattern: string.isRequired,
  func: func.isRequired
});

const LibrarySourcePropType = shape({
  api: LibrarySourceApiPropType,
  handlers: arrayOf(LibrarySourceHandlersPropType),
  redirections: arrayOf(string),
  populate: func.isRequired,
  parse: func.isRequired,
  stringify: func.isRequired,
  normalize: func.isRequired,
  getTotal: func.isRequired,
  getTotalPages: func.isRequired
});

export const NavSubSectionPropType = shape({
  title: string.isRequired,
  link: string.isRequired
});

const RouterPropType = shape({
  link: string.isRequired,
  state: shape(),
  autoFetch: bool.isRequired
});

const SourcePropType = shape({
  get: func.isRequired,
  entity: func.isRequired,
  data: shape(),
  category: shape(),
  tag: shape(),
  post: shape(),
  page: shape(),
  author: shape(),
  attachment: shape(),
  type: shape(),
  taxonomy: shape(),
  api: string.isRequired,
  isWpCom: func.isRequired,
  subdirectory: string,
  homepage: string,
  postsPage: string,
  categoryBase: string,
  tagBase: string,
  authorBase: string,
  postEndpoint: string,
  params: shape(),
  postTypes: arrayOf(string),
  taxonomies: arrayOf(string)
});

const TextSubItemsPropType = shape({
  title: string.isRequired,
  link: string.isRequired,
  description: string.isRequired
});

// -- Secondary Types

export const ActionsPropType = shape({
  theme: ActionThemePropType.isRequired,
  source: ActionSourcePropType.isRequired,
  router: ActionRouterPropType.isRequired
});

export const ColorsPropType = shape({
  primary: string.isRequired,
  secondary: string.isRequired,
  terciary: string.isRequired,
  neutral: string.isRequired,
  purewWhite: string.isRequired,
  pureBlack: string.isRequired,
  highlights: string.isRequired
});

export const ConfigSocialLinksPropType = shape({
  type: string.isRequired,
  link: string.isRequired,
  hide: bool
});

export const ConfigPropType = shape({
  defaultLanguage: string.isRequired,
  theme: string.isRequired,
  mainPadding: string.isRequired,
  headerPadding: string.isRequired,
  buttonsBackground: string.isRequired,
  buttonsText: string.isRequired,
  buttonsHighlight: string.isRequired,
  socialLinks: arrayOf(ConfigSocialLinksPropType)
});

export const ItemPropType = shape({
  id: number.isRequired,
  date: string.isRequired,
  date_gmt: string.isRequired,
  guid: ItemDetailsPropType.isRequired,
  modified: string.isRequired,
  modified_gmt: string.isRequired,
  slug: string.isRequired,
  status: string.isRequired,
  type: string.isRequired,
  link: string.isRequired,
  title: ItemDetailsPropType.isRequired,
  content: ItemDetailsPropType.isRequired,
  excerpt: ItemDetailsPropType.isRequired,
  author: number.isRequired,
  featured_media: number.isRequired,
  comment_status: string.isRequired,
  ping_status: string.isRequired,
  sticky: bool.isRequired,
  template: string.isRequired,
  format: string.isRequired,
  meta: ItemMetaPropType.isRequired,
  categories: arrayOf(number).isRequired,
  tags: arrayOf(number).isRequired,
  'jetpack-related-posts': arrayOf(ItemMetaJetPackRelatedPostsPropType),
  jetpack_featured_media_url: string.isRequired,
  jetpack_publicize_connections: arrayOf(string),
  jetpack_shortlink: string.isRequired,
  jetpack_sharing_enabled: bool.isRequired,
  jetpack_likes_enabled: bool.isRequired,
  _links: ItemLinksPropType.isRequired,
  _embedded: ItemEmbeddedPropType.isRequired
});

export const LibrariesPropTypes = shape({
  html2react: LibraryHtml2ReactPropType.isRequired,
  source: LibrarySourcePropType.isRequired
});

export const NavSectionPropType = shape({
  title: string.isRequired,
  link: string,
  subItems: arrayOf(NavSubSectionPropType)
});

const ThemePropType = shape({
  language: string.isRequired,
  colors: ColorsPropType.isRequired,
  menu: arrayOf(string).isRequired,
  isMobileMenuOpen: bool,
  featured: FeaturedPropType.isRequired
});

export const StatePropType = shape({
  theme: ThemePropType.isRequired,
  source: SourcePropType.isRequired,
  router: RouterPropType.isRequired,
  frontity: FrontityPropType.isRequired
});

export const TextsHomePagePropType = shape({
  description: string.isRequired,
  subItems: arrayOf(TextSubItemsPropType)
});

export const TextsHomePageFullPropType = shape({
  en: TextsHomePagePropType
});

export const TextsVolunteerPropType = shape({
  question: string.isRequired,
  altMainImage: string.isRequired
});

export const TextsVolunteerFullPropType = shape({
  en: TextsVolunteerPropType
});

export const TextsWhyPropType = shape({
  intro: string.isRequired
});

export const TextsWhyFullPropType = shape({
  en: TextsWhyPropType
});
