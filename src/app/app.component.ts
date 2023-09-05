import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title: 'Happy day with friends...',
    imageUrl: 'assets/image1.jpeg',
    userName: '@omer@batu',
    content: 'I and my friends today is very enjoy.'
  },
  {
    title: 'a good day to read a book...',
    imageUrl: 'assets/image2.jpeg',
    userName: '@my@book',
    content: 'An excellent book that deals with a fluent and local subject.'
  },
  {
    title: 'nice day for walking...',
    imageUrl: 'assets/image3.jpeg',
    userName: '@my@istanbul',
    content: 'unique and beautiful view of the Bosphorus in Istanbul'
  }
]
}
