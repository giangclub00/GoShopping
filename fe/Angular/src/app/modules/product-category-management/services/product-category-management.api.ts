// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// import { getMonthTimeFormat, getDayFormat } from 'src/core/helpers/time.helper';
// import { map } from 'rxjs/operators';
// import { API_URL } from 'src/core/consts';

// @Injectable()
// export class ProductManagementApi {
//   constructor(private http: HttpClient) {}
//   loadData() {
//     return this.http.get<any>(`${API_URL}/landing-page`).pipe(
//       map(x => {
//         x.reportInMonth = getMonthTimeFormat(x.reportIn.month, x.reportIn.year);
//         x.dataUpdateStatus = x.dataUpdateStatus.map(t => ({...t, lastUpdate: getDayFormat(t.lastUpdate)}));
//         return x;
//       })
//     );
//   }

//   downloadFile(withAuthToken: string) {
//     return this.http.get<any>(`${API_URL}/landing-page/export-to-exel?authToken=${withAuthToken}`);
//   }
// }
