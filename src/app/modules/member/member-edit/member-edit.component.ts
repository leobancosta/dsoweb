import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from 'src/app/core/services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  id: number;
  editMode = false;
  member: Member;
  memberForm: FormGroup;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;

        this.initializeForm();
      }
    )
  }


  onMemberSubmit() {

    if (this.editMode) {
      this.memberService.updateMember(this.id, this.memberForm.value);
    } else {
      this.memberService.addMember(this.memberForm.value);
    }

    this.onCancelClick();
  }

  onCancelClick() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initializeForm() {
    let i_id = Math.floor(Math.random() * Math.floor(1000));
    let s_firstname = '';
    let s_lastname = '';
    //let s_role = '';
    let s_email = '';

    if (this.editMode) {
      const member = this.memberService.getMember(this.id);
      i_id = member.i_id;
      s_firstname = member.s_firstname;
      s_lastname = member.s_lastname;
      s_email = member.s_email;
      //s_role = member.s_role;
    }

    this.memberForm = new FormGroup({
      'i_id': new FormControl(i_id),
      's_firstname': new FormControl(s_firstname, Validators.required),
      's_lastname': new FormControl(s_lastname, Validators.required),
      's_email': new FormControl(s_email, Validators.email)
      //'s_role': new FormControl(s_role, Validators.required),
    });
  }
}
