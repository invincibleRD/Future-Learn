import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor() { }

  ngOnInit(): void {
  }
  course = [
    { 'id': 1, 'name': 'Angular', 'description': 'Learn one way to build applications with Angular with more creativness and reuse your code and abilities to build web applications for any deployment target. For  mobile web, native mobile and native desktop.', 'image': '../../assets/angular.jpg' },
    { 'id': 2, 'name': 'Typescript', 'description': 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.It adds additional syntax to JavaScript to support a tighter integration with your editor.', 'image': '../../assets/typescript.jpg' },
    { 'id': 3, 'name': 'ReactJS', 'description': 'Build encapsulated components that manage their own state, then compose them to make complex UIs.React makes it painless to create interactive UIs. Design simple views for each state in your application.', 'image': '../../assets/reactjs.jpg' },
    { 'id': 4, 'name': 'NodeJS', 'description': 'Node.js® is an open-source, cross-platform JavaScript runtime environment. Node.js is designed to build network applications. HTTP is a first-class citizen in Node.js, designed with streaming and low latency.', 'image': '../../assets/nodejs.jpg' },
  ]

}
