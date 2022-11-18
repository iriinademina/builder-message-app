import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { SendMessageItemsComponent } from "src/app/components/sidebar/send-message-items/send-message-items/send-message-items.component";
import {
  SendMessageTextItem,
  SendMessageItem,
} from "src/app/shared/types/sendMessage.interface";

import { deleteSendMessageItemAction } from 'src/app/store/actions';

@Component({
  selector: "app-send-message-text",
  templateUrl: "./send-message-text.component.html",
  styleUrls: ["./send-message-text.component.scss"],
})
export class SendMessageTextComponent implements OnInit {
  
  @Input() dataTextItemProps: SendMessageItem;

  constructor( private store: Store ) {}

  ngOnInit(): void {}

  removeItem(): void {
    console.log(this.dataTextItemProps.uuid);
  }

  cloneItem(): void {}
}
