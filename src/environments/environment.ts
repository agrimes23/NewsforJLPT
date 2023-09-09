export const environment = {
    production: false,
    newsApiUrl: `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env['NEW_API_KEY']}`,
  };