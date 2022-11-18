import { Directive, Input, ComponentRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { SendMessageItemsEnum, SendMessageItem } from 'src/app/shared/types';
import { BuilderMessageService } from 'src/app/shared/services/builder-message.service';


@Directive({
  selector: '[appDynamicChildSendMessage]'
})
export class DynamicChildSendMessageDirective {

  @Input() dataItem: SendMessageItem;

  private component: ComponentRef<any>;

  constructor(
    private readonly viewRef: ViewContainerRef,
    private readonly renderer: Renderer2,
    private builderMessageService: BuilderMessageService
  ) { }

}
