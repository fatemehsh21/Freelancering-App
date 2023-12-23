import http from "./httpService";

export function changeProppsalStatusApi({ id, data }) {
  return http.patch(`proposal/${id}`, data).then(({ data }) => data.data);
}
