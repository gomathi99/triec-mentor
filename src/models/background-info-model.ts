export class BackgroundInfoModel {
    id: string;
    userId: string;
    gender: string;
    lgbqtIdentity: string;
    languagesKnown: string[];
    highestLevelEducation: string;
    memberCpaHrpa: string;
    formerMentee: string;
    reasonOfVolunteering: string;
    reasonOfVolunteeringOther: string;
    programSource: string;


    constructor(response: any) {
        this.id = response.mentor_background_info_id;
        this.userId = response.user_id;
        this.gender = response.gender;
        this.lgbqtIdentity = response.lgbqt_identity;
        this.languagesKnown = response.languages_known;
        this.highestLevelEducation = response.highest_level_education;
        this.memberCpaHrpa = response.member_cpa_hrpa;
        this.formerMentee = response.former_mentee;
        this.reasonOfVolunteering = response.reason_of_volunteering;
        this.reasonOfVolunteeringOther = response.reason_of_volunteering_other;
        this.programSource = response.program_source;
       
    }
}