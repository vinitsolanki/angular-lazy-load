import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReviewCommentService } from 'src/app/services/review-comment.service';
import { ReviewComment } from 'src/app/classes/review-comment';
import { GridOptions, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-review-comment-details',
  templateUrl: './review-comment-details.component.html',
  styleUrls: ['./review-comment-details.component.scss'],
  providers: [ReviewCommentService],
})
export class ReviewCommentDetailsComponent implements OnInit, OnDestroy {
  private gridOptions: GridOptions;
  public reviewComments: Array<ReviewComment>;
  private readonly subscriptions: Array<Subscription> = [];

  constructor(private readonly reviewCommentService: ReviewCommentService) {}

  ngOnInit() {
    this.buildGridOptions();

    this.subscriptions.push(
      this.reviewCommentService.getAll$().subscribe((response) => {
        if (response.errors && response.errors.length) {
          // this.errors = TokyoError.getErrors(response);
          console.error('response.errors', response.errors);
        } else if (response.data) {
          this.reviewComments = [...response.data];
          console.error('response.data', response.data);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  private buildGridOptions() {
    const columns: ColDef[] = [
      { field: 'externalId', headerName: 'Pull Request ID',sortable: true,
      filter: true,},
      { field: 'pullRequest.jiraTickets', headerName: 'Jira Tickets',sortable: true,
      filter: true, },
      {
        field: 'pullRequest.repositoryCode',
        headerName: 'Repository',
        cellRenderer: (params) => {
          return `<a href="https://stash.adconion.com/projects/SOC/repos/${params.value}/browse" >${params.value}</a>`;
        }
      },
      {
        field: 'pullRequest.author.username',
        headerName: 'Author',
      },
      { field: 'commentedBy.username', headerName: 'Reviewed By' },
      { field: 'commentedBy.type', headerName: 'Tag' },
      { field: 'createdDate', headerName: 'Created Date' },
      { field: 'updatedDate', headerName: 'Updated Date' },
      {
        headerName: 'Reviewers',
        minWidth: 500,
        valueGetter(params) {
          return params.data.pullRequest.reviewers
            ? params.data.pullRequest.reviewers.map(
                (element) => element.username
              )
            : undefined;
        },
      },
      { field: 'reviewDate', headerName: 'Review Date' },
      { field: 'commentBody', headerName: 'Review Comment' },
      { field: 'severity', headerName: 'Severity' },
    ];

    this.gridOptions = {
      defaultColDef: {
        width: 150,
        headerComponentParams: {
          sortable: true,
          filter: true,
          menuIcon: 'fa-bars',
          template:
              '<div class="ag-cell-label-container" role="presentation">' +
              '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
              '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
              '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
              '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
              '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
              '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
              '    ** <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
              '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
              '  </div>' +
              '</div>'
      }
      },
      columnDefs: columns,
    } as GridOptions;
  }
}
