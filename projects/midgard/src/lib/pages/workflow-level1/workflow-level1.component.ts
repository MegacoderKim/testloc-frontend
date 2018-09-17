import { Component, OnInit } from '@angular/core';
import { StoreService } from '@libs/midgard/src/lib/modules/store-module/store.service';
import { loadWorkflowLevel1Data } from '@libs/midgard/src/lib/state/midgard.actions';
import { Store } from '@libs/midgard/src/lib/modules/store-module/types/store';
import { HttpService } from '@libs/midgard/src/lib/modules/http-module/http.service';

@Component({
  selector: 'mg-workflow-level1',
  templateUrl: './workflow-level1.component.html',
  styleUrls: ['./workflow-level1.component.css']
})
export class WorkflowLevel1Component implements OnInit {

  private store: Store<any>;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.store = this.storeService.getInstance(); // get the store instance
    this.store.dispatch(loadWorkflowLevel1Data());
  }
}