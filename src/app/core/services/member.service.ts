import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Member } from 'src/app/shared/models/member.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberChanged = new Subject<Member[]>();

  private members: Member[] = [
    new Member(
      1,
      'Jan Benedict',
      'Mago',
      //'DevOps',
      'jmago@dxc.com'
    ),
    new Member(
      2,
      'Leo',
      'Bancosta',
      //'DevOps Lead',
      'lbancosta@dxc.com'
    ),
    new Member(
      3,
      'David',
      'Magsipoc',
      //'Ace Player',
      'dmagsipoc@dxc.com'
    ),
    new Member(
      4,
      'Joveth',
      'Flores',
      //'Network Master',
      'jflores@dxc.com'
    ),
    new Member(
      5,
      'Kenneth',
      'Quitalig',
      //'Security Master',
      'kquitalig@dxc.com'
    ),
    new Member(
      6,
      'Pao',
      'Ambion',
      //'Muai Thai Master',
      'pambion@dxc.com'
    ),
    new Member(
      7,
      'Richelle',
      'Puraso',
     // 'SQL Master',
      'rpuraso@dxc.com'
    ),
    new Member(
      8,
      'Jonathan',
      'Bautista',
      //'UI/UX Master',
      'jbautista@dxc.com'
    )
  ];

  constructor(private http: HttpClient) { }

  //#region Local Data Manipulation
  getMembers() {
    return this.members.slice();
  }

  getMember(index: number) {
    return this.members[index];
  }

  addMember(member: Member) {
    this.members.push(member);
    this.memberChanged.next(this.members.slice());
  }

  updateMember(index: number, member: Member) {
    this.members[index] = member;
    this.memberChanged.next(this.members.slice());
  }

  deleteMember(index: number) {
    this.members.splice(index, 1);
    this.memberChanged.next(this.members.slice());
  }
  //#endregion

  //#region API Communication
  // getMembersAPI(){
  //   this.http.get('')
  // }

  addMemberAPI(member: Member) {
    let requestBody = {
      empEmail: member.s_email,
      empFirstName: member.s_firstname,
      empLastname: member.s_lastname,
      deptId: 0,
      roleId: 0
    }

    return this.http.post('/dso/gateway/v1/empRegistration', requestBody);
  }

  // updateMemberAPI(index: number, member: Member){

  // }

  // deleteMemberAPI(index: number){

  // }

  //#endregion

}
