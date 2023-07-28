import { Directive, HostBinding, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { fileHandle } from '../models/asset';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective implements OnInit {

  @Output() filesDropped: EventEmitter<fileHandle[]> = new EventEmitter<fileHandle[]>();

  @HostBinding('class.dropZoneAsset') fileOver: boolean = false;
  @HostBinding("style.background") background : string = "#eee";

  constructor(private sanitizer : DomSanitizer) { console.log("TEST"); }

  ngOnInit() : void{
    console.log('--------------------------------------------------');
  }

   @HostListener("mouseover",["$event"]) public onMouseEvent(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("TEST");
   }


  @HostListener("dragover", ["$event"]) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
    this.fileOver = true;
  }

  @HostListener("dragleave", ["$event"]) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.fileOver = false;

    let files: fileHandle[] = [];
    console.log("DROP");
    if (evt.dataTransfer?.files?.length)
    {
      for (let i = 0; i < evt.dataTransfer?.files?.length; i++) {
        const file = evt.dataTransfer?.files[i];
        console.log(file.name);
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        files.push({ file , url});
      }
      if (files.length > 0) {
        this.filesDropped.emit(files);
      }
    }
  }

}
