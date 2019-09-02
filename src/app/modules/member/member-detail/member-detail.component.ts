import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from 'src/app/core/services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  id: number;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.member = this.memberService.getMember(this.id);
      }
    )
  }

  onEditMemberClick() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteMemberClick() {
    this.memberService.deleteMember(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
