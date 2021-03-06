import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { DownloadService } from 'src/app/service/download.service';
import { Response, RequestOptions } from '@angular/http';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';

import { map, filter, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  constructor(  private http: Http,    private downloadService:DownloadService) { }

  ngOnInit() {
  }


 
  downloadFile(fileName):void
  {
    this.getFile("assets/files/"+fileName)
    .subscribe(fileData => 
      {
      let b:any = new Blob([fileData], { type: 'application/txt' });
      var url= window.URL.createObjectURL(b);

      var anchor = document.createElement("a");
anchor.download = fileName;
anchor.href = url;
anchor.click();

        // window.open(url);
      }
    );
  }
 
  public getFile(path: string):Observable<any>{
    let options = new RequestOptions({responseType: ResponseContentType.Blob});
    return this.http.get(path, options).pipe(map((response: Response) => <Blob>response.blob())) ;
  }

}
