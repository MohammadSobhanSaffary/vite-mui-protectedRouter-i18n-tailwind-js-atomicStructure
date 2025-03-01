import axios from "axios";

export class PLACE_HOLDER_SERVICES {
  static getExample(BASE_URL) {
    return axios.get(BASE_URL).then((res) => {
      res.data ? res.data : [];
    });
  }

  static postExample(BASE_URL, body) {
    return axios.post(BASE_URL, body).then((res) => {
      res.data ? res.data : [];
    });
  }

  static deleteExample(BASE_URL) {
    return axios.delete(BASE_URL).then((res) => {
      res.data ? res.data : [];
    });
  }

  static PutExample(BASE_URL,body) {
    return axios.put(BASE_URL,body).then((res) => {
      res.data ? res.data : [];
    });
  }
}
