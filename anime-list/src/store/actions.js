export function requestAnimes() {
  return {
    type: 'REQUEST_ANIMES',
  }
}

export function requestAnimesFromUrl(url) {
  return {
    type: 'REQUEST_ANIMES_FROM_URL',
    url: url
  }
}

export function requestAnime(anime_id) {
  return {
    type: 'REQUEST_ANIME',
    anime_id: anime_id
  }
}
