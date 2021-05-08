import {
  arrayOf,
  bool,
  func,
  number,
  oneOfType,
  shape,
  string
} from 'prop-types';

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
  changeTheme: func.isRequired,
  updateRead: func.isRequired
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
  _coblocks_attr: string,
  _coblocks_dimensions: string,
  _coblocks_responsive_height: string,
  _coblocks_accordion_ie_support: string,
  advanced_seo_description: string,
  amp_status: string,
  spay_email: string,
  jetpack_publicize_message: string,
  jetpack_is_tweetstorm: bool
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
  id: number,
  date: string,
  date_gmt: string,
  guid: ItemDetailsPropType,
  modified: string,
  modified_gmt: string,
  slug: string,
  status: string,
  type: string,
  link: string,
  title: ItemDetailsPropType,
  content: ItemDetailsPropType,
  excerpt: ItemDetailsPropType,
  author: number,
  featured_media: number,
  comment_status: string,
  ping_status: string,
  sticky: bool,
  template: string,
  format: string,
  meta: oneOfType([ItemMetaPropType, arrayOf(ItemMetaPropType)]),
  categories: arrayOf(number),
  tags: arrayOf(number),
  'jetpack-related-posts': arrayOf(ItemMetaJetPackRelatedPostsPropType),
  jetpack_featured_media_url: string,
  jetpack_publicize_connections: arrayOf(string),
  jetpack_shortlink: string,
  jetpack_sharing_enabled: bool,
  jetpack_likes_enabled: bool,
  _links: ItemLinksPropType,
  _embedded: ItemEmbeddedPropType
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

export const TestimonialPropType = shape({
  imageId: string.isRequired,
  text: string.isRequired,
  victim: string.isRequired
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

export const TextsNewsPropType = shape({
  publishedOn: string.isRequired
});

export const TextsNewsFullPropType = shape({
  en: TextsNewsPropType
});
