const URL_BASE = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';

const PATH_BASE = '/';

const CACHE_TIME = 24 * 60 * 60 * 1000; //equals to 24 hours

const COLOR_PRIMARY = '#20b4d6';
const COLOR_SECONDARY = '#d8d8d8';

const DEBOUNCE_DELAY_FILTER_LIST = 500;

const LITERAL_DETAIL_ERROR_MESSAGE = 'Ther was an error getting';
const LITERAL_DETAIL_LOADING = 'Loading';

const LITERAL_FILTER_LIST_EMPTY_RESULTS =
  "Sorry, none of our oompas' matches your search! Try typing again";
const LITERAL_FILTER_LIST_LABEL = 'Filter by name or profession';
const LITERAL_FILTER_LIST_PLACEHOLDER = 'Search';
const LITERAL_FILTER_LIST_IMG_ALT = 'Search';
const LITERAL_FILTER_LIST_IMG_TITLE = 'Search';

const LITERAL_LIST_ERROR_MESSAGE = 'Ther was an error getting the Ooompa Loompa List';
const LITERAL_LIST_HEADING = 'Find your Oompa Loompa';
const LITERAL_LIST_LOADING = 'Loading Ooompa Loompa List';
const LITERAL_LIST_SUBHEADING = 'There are more than 100k';

const LITERAL_NAVIGATION_MAIN_FAKE_HEADING = "Oompa Loompa's Crew";
const LITERAL_NAVIGATION_MAIN_IMG_ALT = 'Link to home page';
const LITERAL_NAVIGATION_MAIN_IMG_TITLE = 'Link to home page';
const LITERAL_NAVIGATION_MAIN_LABEL = 'Link to home page';

const RESOURCE_URL_FILTER_LIST_ICON =
  'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

const RESOURCE_URL_NAVIGATION_MAIN_ICON =
  'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png';

const QUERY_KEY_DETAIL = 'oompaDetail';
const QUERY_KEY_LIST = 'oompaList';

const STORED_STATE_LIST = '__oompaList__state__';
const STORED_STATE_LIST_NEW = '__oompaList__state__NEW__';

export {
  URL_BASE,
  PATH_BASE,
  CACHE_TIME,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  DEBOUNCE_DELAY_FILTER_LIST,
  LITERAL_DETAIL_ERROR_MESSAGE,
  LITERAL_DETAIL_LOADING,
  LITERAL_FILTER_LIST_EMPTY_RESULTS,
  LITERAL_FILTER_LIST_LABEL,
  LITERAL_FILTER_LIST_PLACEHOLDER,
  LITERAL_FILTER_LIST_IMG_ALT,
  LITERAL_FILTER_LIST_IMG_TITLE,
  LITERAL_LIST_ERROR_MESSAGE,
  LITERAL_LIST_HEADING,
  LITERAL_LIST_LOADING,
  LITERAL_LIST_SUBHEADING,
  LITERAL_NAVIGATION_MAIN_FAKE_HEADING,
  LITERAL_NAVIGATION_MAIN_IMG_ALT,
  LITERAL_NAVIGATION_MAIN_IMG_TITLE,
  LITERAL_NAVIGATION_MAIN_LABEL,
  QUERY_KEY_DETAIL,
  QUERY_KEY_LIST,
  RESOURCE_URL_FILTER_LIST_ICON,
  RESOURCE_URL_NAVIGATION_MAIN_ICON,
  STORED_STATE_LIST,
  STORED_STATE_LIST_NEW,
};
