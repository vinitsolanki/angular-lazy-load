import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin.component';
import { AddProductComponent } from '../pages/product/add-product/add-product.component';
import { ManageProductComponent } from '../pages/product/manage-product/manage-product.component';
import { LoginComponent } from '../pages/login/login.component';
import { PullRequestDetailsComponent } from '../pages/pull-request/pull-request-details/pull-request-details.component';
import { ReviewCommentDetailsComponent } from '../pages/review-comment/review-comment-details/review-comment-details.component';

const AdminRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AdminComponent, children: [
      { path: 'addProduct', component: AddProductComponent },
      { path: 'manageProduct', component: ManageProductComponent },
      { path: 'pull-requests', component: PullRequestDetailsComponent },
      { path: 'review-comments', component: ReviewCommentDetailsComponent },
    ]
  }
];

export const AdminDeclarations = [
  LoginComponent,
  AdminComponent,
  AddProductComponent,
  ManageProductComponent,
  PullRequestDetailsComponent,
  ReviewCommentDetailsComponent
];

@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
