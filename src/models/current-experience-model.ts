export class CurrentExperienceModel {
    id: string;
    userId: string;
    company: string;
    position: string;
    employerName: string;
    hopesToAchieve: string;
    support: string;
    referenceFirstName1: string;
    referenceLastName1: string;
    referenceEmail1: string;
    referencePhone1: string;
    referenceFirstName2: string;
    referenceLastName2: string;
    referenceEmail2: string;
    referencePhone2: string;

    constructor(response: any) {
        this.id = response.mentor_current_experience_id;
        this.userId = response.user_id;
        this.company = response.current_company;
        this.position = response.current_position_level;
        this.employerName = response.employer_name;
        this.hopesToAchieve = response.hopes_to_achieve;
        this.support = response.how_would_you_support;
        this.referenceFirstName1 = response.reference_first_name_1;
        this.referenceLastName1 = response.reference_last_name_1;
        this.referenceEmail1 = response.reference_email_1;
        this.referencePhone1 = response.reference_phone_1;
        this.referenceFirstName2 = response.reference_first_name_2;
        this.referenceLastName2 = response.reference_last_name_2;
        this.referenceEmail2 = response.reference_email_2;
        this.referencePhone2 = response.reference_phone_2;
       
    }
}
