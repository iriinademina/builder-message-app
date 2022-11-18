import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, EmbeddedViewRef,SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-buttons-item',
    templateUrl: './buttons-item.component.html',
    styleUrls: ['./buttons-item.component.scss'],
})
export class ButtonsItemComponent implements OnInit {
    @ViewChild('content', { read: TemplateRef }) tpl: TemplateRef<any>;
    @ViewChild('vc', { read: ViewContainerRef, static: true }) public viewRef: ViewContainerRef;
    
    @Output() buttonsChanged = new EventEmitter<EmbeddedViewRef<any>[]>();

    public templateRefs: EmbeddedViewRef<any>[] = [];
    public maxCountButtons: number;
    public key: number;
    public textButton: string;

    constructor() {
        this.maxCountButtons = 2;
        this.key = 1;
        this.textButton = `New button #`
    }

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
      }

    addNewButton(): void {

        let view = this.viewRef.createEmbeddedView(this.tpl);
        view.context = {
            id: this.key++,
            number: this.templateRefs.length+1
        };
        
        this.templateRefs.push(view);
        console.log(this.templateRefs, this.key);

        this.buttonsChanged.emit( this.templateRefs );
        
    }

    removeNewButton(key: number): void {
        if (this.viewRef.length < 1) return;
        let ref = this.templateRefs.filter(x => x.context.id === key)[0];
        let vcrIndex: number = this.viewRef.indexOf(ref);
        console.log('deleted filter index', vcrIndex);
        this.viewRef.remove(vcrIndex);
        this.templateRefs = this.templateRefs.filter(x => x.context.id !== key);
    }

    changeNameButton ( text: string) {
        console.log(text);
    }
}
