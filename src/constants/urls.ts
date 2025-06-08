const BASE_URL = import.meta.env.PUBLIC_POSTS_URL;

export const POSTS_ALL_URL = `${BASE_URL}posts?per_page=100/`;
export const POSTS_URL = `${BASE_URL}posts/`;
export const TAGS_URL = `${BASE_URL}tags/`;
export const MEDIA_URL = `${BASE_URL}media/`;
export const EMBED = "?_embed/";
