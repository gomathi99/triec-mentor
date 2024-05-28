export class RelevantExperienceModel {
    id: string;
    userId: string;
    experience: number;
    coachingExperience: number;
    professionalNetwork: string;
    otherInfo: string;

    constructor(response: any) {
        this.id = response.mentor_relevant_experience_id;
        this.userId = response.user_id;
        this.experience = response.years_of_experience;
        this.coachingExperience = response.coaching_experience_desc;
        this.professionalNetwork = response.professional_network_list;
        this.otherInfo = response.other_info;
    }
}