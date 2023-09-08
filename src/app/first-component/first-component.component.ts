import { Component } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})


export class FirstComponentComponent {
  fname: string = '';
  lname: string = '';
  email: string = '';
  gender: string = '';
  final_user:user_det = new user_det();
  langlist:language_s[]=[];
  // final_langlist:string='';
  ngOnInit()
  {
    this.get_lang()
  }

  get_lang()
  {
    this.langlist=[
      {langname:"Malayalam",isselected:false},
      {langname:"English",isselected:false},
      {langname:"Hindi",isselected:false}
    ]
  }

  onsubmit()
  {
      
      this.final_user.ufname =  this.fname;
      this.final_user.ulname = this.lname;
      this.final_user.uemail = this.email;
      this.final_user.ugender = this.gender;
      this.final_user.lang_n = this.langlist.filter(x=>x.isselected==true).map(x=>x.langname).join(",").toString();
      console.log(this.final_user)
  }
  
  
}

class language_s{
  langname: string = '';
  isselected: boolean = false;
}

class user_det{
  ufname: string = '';
  ulname: string = '';
  uemail: string = '';
  ugender: string = '';
  lang_n:string = '';
}

