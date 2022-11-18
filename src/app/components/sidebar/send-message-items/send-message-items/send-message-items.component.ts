import {
  Component,
  OnInit,
  ComponentRef,
  ViewContainerRef,
  ViewChild,
} from "@angular/core";
import { SendMessageTextComponent } from "src/app/components/sidebar/send-message-items/send-message-text/send-message-text.component";
import { SendMessageImageComponent } from "src/app/components/sidebar/send-message-items/send-message-image/send-message-image.component";
import { SendMessageCardComponent } from "src/app/components/sidebar/send-message-items/send-message-card/send-message-card.component";
import { SendMessageItemsEnum } from "src/app/shared/types/sendMessageItemsTypes";
import { BuilderMessageService } from "src/app/shared/services/builder-message.service";
import { SendMessageItem } from "src/app/shared/types";
import { Store, select } from "@ngrx/store";
import { Observable, of, switchMap, map, Subject, tap } from "rxjs";
import {
  createBuilderMessageItemAction,
  createSendMessageItemAction,
} from "src/app/store/actions";
import { BuilderMessageItem } from "src/app/shared/models/builderMessageItem";
import {
  SendMessage,
  SendMessageText,
  SendMessageImage,
  SendMessageCard
} from "../../../../shared/models/sendMessage";
import { sendMessageItemByIdSelector } from "src/app/store/selectors";

@Component({
  selector: "app-send-message-items",
  templateUrl: "./send-message-items.component.html",
  styleUrls: ["./send-message-items.component.scss"],
})
export class SendMessageItemsComponent implements OnInit {
  @ViewChild("viewItems", { read: ViewContainerRef, static: true })
  public viewRef: ViewContainerRef;
  public componentRefs: ComponentRef<
    | SendMessageTextComponent
    | SendMessageImageComponent
    | SendMessageCardComponent
  >[] = [];

  sendMessageItemById$: Observable<BuilderMessageItem>;
  sendMessageItems$: Observable<SendMessageItem[]>;

  current_uuid: string;

  textItem: string = SendMessageItemsEnum.Text;
  imageItem: string = SendMessageItemsEnum.Image;
  cardItem: string = SendMessageItemsEnum.Card;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private builderMessageService: BuilderMessageService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initialValues();
  }

  initialValues(): void {
    this.sendMessageItems$ = this.store
      .pipe(select(sendMessageItemByIdSelector))
      .pipe(
        tap((data) => (this.current_uuid = data?.uuid)),
        map((data) => data?.widgetItems as SendMessageItem[])
      );
  }

  addSendMessageItem(type: string) {
    if (type === this.textItem) {
      this.store.dispatch(
        createSendMessageItemAction({
          dataItem: new SendMessage(),
          key_uuid: this.current_uuid,
        })
      );
    }

    if (type === this.imageItem) {
      this.store.dispatch(
        createSendMessageItemAction({
          dataItem: new SendMessage({
            type: this.imageItem,
            widgetContent: new SendMessageImage(),
          }),
          key_uuid: this.current_uuid,
        })
      );
    }

    if (type === this.cardItem) {
        this.store.dispatch(
          createSendMessageItemAction({
            dataItem: new SendMessage({
              type: this.cardItem,
              widgetContent: new SendMessageCard(),
            }),
            key_uuid: this.current_uuid,
          })
        );
      }
  }

  removeDynamicComponent(key: number) {}

  cloneDynamicComponent(key: number) {}
}
