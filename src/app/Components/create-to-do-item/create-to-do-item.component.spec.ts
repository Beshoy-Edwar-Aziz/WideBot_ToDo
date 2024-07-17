import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateToDoItemComponent } from './create-to-do-item.component';
import { StorageService } from '../../Services/storage.service';
import { Component } from '@angular/core';
import { Expression } from '@angular/compiler';

describe('createTodoListComponent', () => {
    let component:CreateToDoItemComponent;
    let fixture: ComponentFixture<CreateToDoItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateToDoItemComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreateToDoItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render the storageservice`, () => {
    const fixture = TestBed.createComponent(CreateToDoItemComponent);
    const storageService = fixture.debugElement.injector.get(StorageService);
    fixture.detectChanges();
    let data ={
        "Title":'Good',
        "check":false
    }
    expect(storageService.addToLocalStorage(data)).toEqual(component?.toDoData)
});
it('should test creating todo item',()=>{
    const fixture = TestBed.createComponent(CreateToDoItemComponent);
    const storageService = fixture.debugElement.injector.get(StorageService);
     let data ={
        "Title":'Good',
        "check":false
    }
    storageService.addToLocalStorage(data);
    component?.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    
})

 
});
