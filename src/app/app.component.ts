import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  array:any[]=[]
  input: any;


  btnClick(input:string){
    this.array.push({
      id:this.array.length,
      pname:input
    });
  }

  deleteItem(id:number){
    this.array=this.array.filter(input=>input.id!==id);
  }
}
