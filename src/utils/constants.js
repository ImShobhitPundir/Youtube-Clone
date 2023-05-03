const API_KEY = 'AIzaSyBKh1Tq77VvCI-ZeWAr7tsyX-SCEk7RHi8';

export const VIDEO_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key="+API_KEY;

export const VIDEO_API_URL_RELATED = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&key="+API_KEY;

export const VIDEO_API_URL_SINGLE = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+API_KEY+"&id=";

export const VIDEO_API_URL_COMMENT = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&key="+API_KEY+"&videoId=";

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_API_URL_SEARCH_KEY = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="+API_KEY;