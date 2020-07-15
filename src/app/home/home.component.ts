import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

import { FormBuilder } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  MusicArray = [];
  showUpdateForm = false;
  // showAddForm = false;
  currentClickedId;
  // inputForm;
  showAddForm = false;
  

  // @Input() newTitle: string;

  constructor(
    private restAPIService: DataService,
    private formBuilder: FormBuilder
    
    ) {
      // this.inputForm = this.formBuilder.group({
        // artist: "",
        // title: ""
      // });
     }

  ngOnInit(): void {
    // this.restAPIService.sendGetRequest().subscribe((res: any[])=> {
    //   this.MusicArray = res;
    //   // this.newTitle = "";
    // })

    this.showMusic();

    
  }

  showMusic(): void {
    this.restAPIService.sendGetRequest().subscribe((res: any[])=> {
      this.MusicArray = res;
      // this.newTitle = "";
    })
  }

  addMusic(newMusic) {
    this.restAPIService.sendPostRequest(newMusic).subscribe((res: any[])=> {
      // this.MusicArray = res;
      console.log(res)
      this.showMusic();
    })
    
  }

  deleteMusic(id : string) {
    this.restAPIService.sendDeleteRequest(id).subscribe((res: any[])=> {
      console.log(res)
      this.showMusic();
    })
  }

  updateMusic(id: string, updateObject: object) {
    this.restAPIService.sendUpdateRequest(id, updateObject).subscribe((res: any[])=> {
      console.log(res)
      this.showMusic();
      this.showUpdateForm = false;
    })
  }

//   template: `
//   <input (keyup)="onKey($event)">
//   <p>{{values}}</p>
// `

  add(title : string, artist: string, genre?: string, year? : string) {
    console.log(title + " " + artist)
    const music = {
      "title": title,
      "artist": artist,
      "genre": genre,
      "year": year
    };
    this.addMusic(music);
    this.showAddForm = false;
    // console.log(this.showAddForm);
  }

  delete(id: string) {
    console.log(id)
    this.deleteMusic(id)
  }

  update(title? : string, artist? : string, genre? : string, year? : number) {
    // console.log(id)

    let updatedItems = {
      "title": title,
      "artist": artist,
      "genre": genre,
      "year": year
    };

    

    // if(title) {
    //   updatedItems.title = title;
    // }
    // if(artist) {
    //   updatedItems.artist = artist;
    // }
    // if(genre) {
    //   updatedItems.genre = genre;
    // }
    // if(year) {
    //   updatedItems.year = year;
    // }

    this.updateMusic(this.currentClickedId, updatedItems);

  }

  showUpdate(id) {
    this.showUpdateForm = !this.showUpdateForm;
    this.showAddForm = false;
    this.currentClickedId = id;
  }

  closeUpdateForm() {
    this.showUpdateForm = false;
  }

  toggleAdd() {
    this.showAddForm = !this.showAddForm;
  }

  // onSubmit(musicData) {
  //   this.i
  // }

}
