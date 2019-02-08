let _csrfParam: string;
let _csrfToken: string;
let _userId: number;
let _daysUnbummed: number;
let _lastUnbummedAt: Date;

const getMeta = (name: string): string => document.querySelector(`meta[name="${name}"]`)!.getAttribute('content')!;

const config = {
  get csrfParam(): string {
    _csrfParam = _csrfParam || getMeta('csrf-param');
    return _csrfParam;
  },

  get csrfToken(): string {
    _csrfToken = _csrfToken || getMeta('csrf-token');
    return _csrfToken;
  },

  get userId(): number {
    _userId = _userId || parseInt(getMeta('user-id'), 10);
    return _userId;
  },

  get daysUnbummed(): number {
    _daysUnbummed = _daysUnbummed || parseInt(getMeta('days-unbummed'), 10);
    return _daysUnbummed;
  },

  get lastUnbummedAt(): Date {
    _lastUnbummedAt = (!_lastUnbummedAt || isNaN(_lastUnbummedAt.getTime())) ? new Date(getMeta('last-unbummed-at')) : _lastUnbummedAt;
    return _lastUnbummedAt;
  },
};

export default config;
