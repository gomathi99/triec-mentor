export class JobInfoModel {
    id: string;
    userId: string;
    currentProfession: string;
    currentJobTitle: string;
    financialBusinessUnit: string;
    industry: string;
    currentReponsibilities: string;
    currentSkills: string;
    currentJobDuration: number;
    previousProfession: string;
    previousJobTitle: string;
    previousJobReposibilities: string;
    previousJobSkills: string;
    previousJobDuration: number;

    constructor(response: any) {
        this.id = response.mentor_job_detail_id;
        this.userId = response.user_id;
        this.currentProfession = response.current_profession;
        this.currentJobTitle = response.current_job_title;
        this.financialBusinessUnit = response.financial_business_unit;
        this.industry = response.industry;
        this.currentReponsibilities = response.current_reponsibilities;
        this.currentSkills = response.current_skills;
        this.currentJobDuration = response.current_job_duration;
        this.previousProfession = response.previous_profession;
        this.previousJobTitle = response.previous_job_title;
        this.previousJobReposibilities = response.previous_job_reposibilities;
        this.previousJobSkills = response.previous_job_skills;
        this.previousJobDuration = response.previous_job_duration;
    }


}