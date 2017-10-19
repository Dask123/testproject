/**
 * Created by Пользователь on 17.10.2017.
 */
export function getUrl(baseUrl) {
  return baseUrl + "vacancies/";
}
export function api({ baseUrl, http }) {
  const url = getUrl(baseUrl);

  return {
    url,
    getMainData: date => {
      return http.get(
        url,
        { params: {
            date_from: date
          }
        }
      );
    }
  };
};