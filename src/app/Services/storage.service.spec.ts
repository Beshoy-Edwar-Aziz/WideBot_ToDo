import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";
describe('storageService',()=>{
    let service: StorageService
    beforeEach(async()=>{
        await TestBed.configureTestingModule({
            providers:[StorageService]
        }).compileComponents();
        service = new StorageService()
    })
    beforeEach(()=>{
       service= TestBed.inject(StorageService);
    })
    it('should add an object to the array inside localstorage',()=>{
        let data = {
            "Title":'Good',
            "check":false
        }
        service.addToLocalStorage(data);
        expect(service.ToDoArray.length).toBeGreaterThanOrEqual(1);
    })
    
})