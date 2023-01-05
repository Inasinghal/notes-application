import { Component, OnInit } from '@angular/core';
import { Note } from 'src/shared/note.model';
import { NotesService } from 'src/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  searchInput: string = "";
  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notesService.getAll().subscribe(notes => {
      this.notes = notes;
    }, err => console.log(err));
  }

  deleteNote(id: any) {
    this.notesService.deleteNote(id).subscribe(res => {
      this.getAllNotes();
    }, err => console.log(err));
  }
}