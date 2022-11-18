import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers } from './store/reducers';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SendMessageComponent } from './components/send-message-item-type/send-message/send-message.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { SendMessageChildComponent } from './components/send-message-item-type/send-message/send-message-child/send-message-child.component';
import { BuilderMessageComponent } from './components/builder-message/builder-message.component';
import { BuilderZoomDirective } from './directives/builder-zoom.directive';
import { CreateBuilderItemComponent } from './components/create-builder-item/create-builder-item.component';
import { RandomizerComponent } from './components/randomizer/randomizer.component';
import { RandomizerChildComponent } from './components/randomizer/randomizer-child/randomizer-child.component';
import { SendMessageItemsComponent } from './components/sidebar/send-message-items/send-message-items/send-message-items.component';
import { SendMessageTextComponent } from './components/sidebar/send-message-items/send-message-text/send-message-text.component';
import { ButtonsItemComponent } from './components/buttons-item/buttons-item.component';
import { SendMessageChildTextComponent } from './components/send-message-item-type/send-message-child-text/send-message-child-text.component';
import { SendMessageImageComponent } from './components/sidebar/send-message-items/send-message-image/send-message-image.component';
import { SendMessageCardComponent } from './components/sidebar/send-message-items/send-message-card/send-message-card.component';
import { DynamicItemsDirective } from './directives/dynamic-items.directive';
import { DynamicChildSendMessageDirective } from './directives/dynamic-child-send-message.directive';


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        SendMessageComponent,
        DragDropDirective,
        SendMessageChildComponent,
        BuilderMessageComponent,
        BuilderZoomDirective,
        CreateBuilderItemComponent,
        RandomizerComponent,
        RandomizerChildComponent,
        SendMessageItemsComponent,
        SendMessageTextComponent,
        ButtonsItemComponent,
        SendMessageChildTextComponent,
        SendMessageImageComponent,
        SendMessageCardComponent,
        DynamicItemsDirective,
        DynamicChildSendMessageDirective,
    ],
    imports: [BrowserModule, FormsModule,
        
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
