import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ReviewCommentService } from 'src/app/services/review-comment.service';
import { ReviewComment } from 'src/app/classes/review-comment';

@Component({
  selector: "app-review-comment-details",
  templateUrl: "./review-comment-details.component.html",
  styleUrls: ["./review-comment-details.component.scss"],
  providers: [ReviewCommentService]
})
export class ReviewCommentDetailsComponent implements OnInit, OnDestroy {

  public reviewComments: Array<ReviewComment>;
  private readonly subscriptions: Array<Subscription> = [];

  constructor(private readonly reviewCommentService: ReviewCommentService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.reviewCommentService.getAll$().subscribe(response => {
        if (response.errors && response.errors.length) {
          // this.errors = TokyoError.getErrors(response);
          console.error("response.errors", response.errors);
        } else if (response.data) {
          this.reviewComments = [...response.data];
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
