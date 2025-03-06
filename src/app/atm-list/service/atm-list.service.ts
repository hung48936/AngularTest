import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Để service có thể được sử dụng ở bất kỳ đâu
})
export class AtmListService {
  private apiUrl = 'https://api.example.com/atms'; // Thay API URL thực tế của bạn

  constructor(private http: HttpClient) {}

  // Lấy danh sách ATM
  getATMs(): Observable<any> {
    return this.http.get<any>("https://67c9a7da102d684575c2faab.mockapi.io/api/ATM");
  }

//   // Lấy thông tin ATM theo ID
//   getATMById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   // Thêm ATM mới
//   addATM(atmData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, atmData);
//   }

//   // Cập nhật ATM
//   updateATM(id: number, atmData: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/${id}`, atmData);
//   }

//   // Xóa ATM
//   deleteATM(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/${id}`);
//   }
}
