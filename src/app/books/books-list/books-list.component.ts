import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {
  imageWidth: number = 100;
  showImage:boolean= true;
  booksInStock:number = 2;

  books: any[] = [{
    bookAuthor: "Tom Jones",
    bookTitle: "War Peace 2",
    bookPrice: "$29.95",
    bookDescription: "book historical fiction",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg"
  },{
    bookAuthor: "Nick Jones",
    bookTitle: "Just Peace 2",
    bookPrice: "$19.95",
    bookDescription: "historical fiction",
    bookReviews: 115,
    bookImageUrl: "app/assets/images/656.jpg"
  }
]




  toggleImage():void {
    this.showImage = !this.showImage;
  }
}
