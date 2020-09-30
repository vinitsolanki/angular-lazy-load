import { Component, OnInit, OnDestroy } from '@angular/core';
import { PullRequestService } from 'src/app/services/pull-request.service';
import { PullRequest } from 'src/app/classes/pull-request';
import { Subscription } from 'rxjs';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-pull-request-details',
  templateUrl: './pull-request-details.component.html',
  styleUrls: ['./pull-request-details.component.scss'],
  providers: [PullRequestService],
})
export class PullRequestDetailsComponent implements OnInit, OnDestroy {
  private gridOptions: GridOptions;
  private pullRequests: Array<PullRequest>;
  private readonly subscriptions: Array<Subscription> = [];

  constructor(private readonly pullRequestService: PullRequestService) { }

  ngOnInit() {
    this.buildGridOptions();

    this.subscriptions.push(
      this.pullRequestService.getAll$().subscribe((response) => {
        if (response.errors && response.errors.length) {
          // this.errors = TokyoError.getErrors(response);
          console.error('response.errors', response.errors);
        } else if (response.data) {
          this.pullRequests = [...response.data];
          console.error('response.data', response.data);
        }
      })
    );
  }

  private buildGridOptions() {
    const columns: ColDef[] = [
      { field: 'externalId', headerName: 'Pull Request ID' },
      { field: 'title', headerName: 'Title', minWidth: 250, },
      { field: 'jiraTickets', headerName: 'Jira Tickets' },
      {
        field: 'author.username',
        headerName: 'Author',
      },
      { field: 'createdDate', headerName: 'Created Date' },
      { field: 'updatedDate', headerName: 'Updated Date' },
      {
        headerName: 'Reviewers',
        minWidth: 500,
        valueGetter(params) {
          return params.data.reviewers ? params.data.reviewers.map((element) => element.username) : undefined;
        },
      },
      { field: 'status', headerName: 'Status' },
      { field: 'repositoryCode', headerName: 'Repository Name' },
      { field: 'fromBranch', headerName: 'From Branch' },
      { field: 'toBranch', headerName: 'To Branch' },
      { headerName: 'NO OF COMMENTS' },
      { headerName: 'COMMENTS BY ONSHORE-TEAM' },
      { headerName: 'COMMENTS BY OFFSHORE-TEAM' },
      { headerName: 'COMMENTS BY OSC' },
      { headerName: 'COMMENTS BY AUTHOR' },
    ];

    this.gridOptions = {
      defaultColDef: {
        width: 150,
      },
      columnDefs: columns,
    } as GridOptions;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
