import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from 'src/app/core/services/member.service';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  member: Member;
  @Input() index: number;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.member = this.memberService.getMember(this.index);
  }

}
