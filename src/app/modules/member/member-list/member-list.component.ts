import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from 'src/app/shared/models/member.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/core/services/member.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit, OnDestroy {
  members: Member[];
  memberSubscription: Subscription;

  constructor(
    private memberService: MemberService,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.memberSubscription = this.memberService.memberChanged.subscribe(
      (members: Member[]) => {
        this.members = members;
      }
    );

    this.members = this.memberService.getMembers();
  }

  ngOnDestroy(){
    this.memberSubscription.unsubscribe();
  }
  
  onNewMemberClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
