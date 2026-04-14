const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function getApiKey() {
  const key = process.env.TMDB_API_KEY;
  if (!key) {
    throw new Error(
      "Missing TMDB_API_KEY. Create .env.local in the project root (see .env.example), add your key, then restart npm run dev."
    );
  }
  return key;
}

/**
 * @param {string} endpointPath - e.g. "/trending/movie/week" or "/search/movie?query=batman"
 */
export async function fetchFromTMDB(endpointPath) {
  const path = endpointPath.startsWith("/") ? endpointPath : `/${endpointPath}`;
  const sep = path.includes("?") ? "&" : "?";
  const url = `${BASE_URL}${path}${sep}api_key=${encodeURIComponent(getApiKey())}`;

  let res;
  try {
    res = await fetch(url);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(`Network error while contacting TMDB: ${msg}`);
  }

  let body;
  try {
    body = await res.json();
  } catch {
    body = null;
  }

  if (!res.ok) {
    const tmdbMsg =
      body?.status_message ||
      (Array.isArray(body?.errors) ? body.errors.join("; ") : null);
    const detail = tmdbMsg || (typeof body === "object" && body !== null ? JSON.stringify(body) : null);
    throw new Error(
      detail ? `TMDB error (${res.status}): ${detail}` : `Failed to fetch from TMDB (HTTP ${res.status})`
    );
  }

  return body;
}

export function posterUrl(posterPath) {
  if (!posterPath) return null;
  return `${IMAGE_BASE}${posterPath}`;
}

export { BASE_URL, IMAGE_BASE };
