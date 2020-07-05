import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from "@angular/core";
import { PullRequestService } from "src/app/services/pull-request.service";
import { PullRequest } from "src/app/classes/pull-request";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pull-request-details",
  templateUrl: "./pull-request-details.component.html",
  styleUrls: ["./pull-request-details.component.scss"],
  providers: [PullRequestService]
})
export class PullRequestDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('editTmpl', { static: true }) editTmpl: TemplateRef<any>;
  @ViewChild('combinedColumn', { static : true}) combinedColumn: TemplateRef<any>;

  columns = [
    { prop: 'semesterName', name: 'סמסטר', resizeable: false },
    { prop: 'eventName', name: 'מפגש', resizeable: false },
    { prop: 'when', name: 'מועד מפגש', resizeable: false },
    { cellTemplate: this.combinedColumn, name: "Combined Column"},
    { prop: 'lecturerName', name: 'מרצה', resizeable: false },
    { prop: 'hugName', name: 'חוג', resizeable: false },
    {
      prop: 'hugName',
      cellTemplate: this.editTmpl,
      name: 'Gender'
    }
  ];

  public pullRequests: Array<PullRequest>;
  private readonly subscriptions: Array<Subscription> = [];

  constructor(private readonly pullRequestService: PullRequestService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.pullRequestService.getAll$().subscribe(response => {
        if (response.errors && response.errors.length) {
          // this.errors = TokyoError.getErrors(response);
          console.error("response.errors", response.errors);
        } else if (response.data) {
          this.pullRequests = [...response.data];
          console.error("response.data", response.data);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
