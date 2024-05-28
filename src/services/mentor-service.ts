import { CurrentExperienceModel } from "../models/current-experience-model";
import { QUERY_CONSTANTS } from "../constants/query-constants";
import { ERROR_CONSTANTS } from "../helpers/error";
import { BackgroundInfoModel } from "../models/background-info-model";
import { DBRepository } from "../repository/db-repository";
import { RelevantExperienceModel} from "../models/relevant-experience-model";
import { JobInfoModel } from "../models/job-info-model";

export class MentorService {
    private dbRepository: DBRepository;
    constructor(dbRepository: DBRepository) {
        this.dbRepository = dbRepository;
    }
    
    public async getBackgroundInfo(userId: string): Promise<BackgroundInfoModel> {
        try {
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_BACKGROUND_INFO, [userId]);
            if(response.length > 0) {
                return new BackgroundInfoModel(response[0]);
            }
            return new BackgroundInfoModel({});
        } catch (error) {
            console.log('Error getting experience info', error);
            throw ERROR_CONSTANTS.MENTORBGx41();
        }
        
    }

    public async updateBackgroundInfo(backgroundInfo: BackgroundInfoModel): Promise<void> {
        try {
            const params = [backgroundInfo.userId, backgroundInfo.gender, backgroundInfo.lgbqtIdentity, backgroundInfo.languagesKnown, backgroundInfo.highestLevelEducation, backgroundInfo.memberCpaHrpa, backgroundInfo.formerMentee, backgroundInfo.reasonOfVolunteering, backgroundInfo.reasonOfVolunteeringOther, backgroundInfo.programSource];

            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_BACKGROUND_INFO, [backgroundInfo.userId]);
            if(response.length === 0) {
                console.log('Inserting background info');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.INSERT_BACKGROUND_INFO, params);
                return;
            } else {
                console.log('Updating background info');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.UPDATE_BACKGROUND_INFO, params);
            }
        
                
        } catch (error) {
            console.log('Error updating background info', error);
            throw ERROR_CONSTANTS.MENTORBGx42();
        }
        
    }

    public async getCurrentExperience(userId: string): Promise<CurrentExperienceModel> {
        try {
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_CURRENT_EXPERIENCE, [userId]);
            if(response.length > 0) {
                return new CurrentExperienceModel(response[0]);
            }
            return new CurrentExperienceModel({});
        } catch (error) {
            console.log('Error getting current experience', error);
            throw ERROR_CONSTANTS.MENTORCEXPx41();
        }
    }

    public async updateCurrentExperience(currentExperienceModel: CurrentExperienceModel): Promise<void> {
        try {
            const params = [currentExperienceModel.userId, currentExperienceModel.company, currentExperienceModel.position,
                currentExperienceModel.employerName, currentExperienceModel.hopesToAchieve, currentExperienceModel.support,
                currentExperienceModel.referenceFirstName1, currentExperienceModel.referenceLastName1, currentExperienceModel.referenceEmail1,currentExperienceModel.referencePhone1, currentExperienceModel.referenceFirstName2, 
                currentExperienceModel.referenceLastName2, currentExperienceModel.referenceEmail2, currentExperienceModel.referencePhone2];
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_CURRENT_EXPERIENCE, [currentExperienceModel.userId]);
            if(response.length === 0) {
                console.log('Inserting current experience');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.INSERT_CURRENT_EXPERIENCE, params);
            } else {
                console.log('Updating current experience');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.UPDATE_CURRENT_EXPERIENCE, params);
            }
        } catch (error) {
            console.log('Error updating current experience', error);
            throw ERROR_CONSTANTS.MENTORCEXPx42();
        }
    }

    public async getRelevantExperience(userId: string): Promise<RelevantExperienceModel> {

        try {
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_RELEVANT_EXPERIENCE, [userId]);
            if(response.length > 0) {
                return new RelevantExperienceModel(response[0]);
            }
            return new RelevantExperienceModel({});
        } catch (error) {
            console.log('Error getting eligibility', error);
            throw ERROR_CONSTANTS.MENTORREXPx41();
        }
    }

    public async updateRelevantExperience(relevantExperienceModel: RelevantExperienceModel): Promise<void> {
        const params = [relevantExperienceModel.userId, relevantExperienceModel.experience, relevantExperienceModel.coachingExperience, relevantExperienceModel.professionalNetwork, relevantExperienceModel.otherInfo];
        try {
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_RELEVANT_EXPERIENCE, [relevantExperienceModel.userId]);
            if(response.length === 0) {
                console.log('Inserting relevant experience');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.INSERT_RELEVANT_EXPERIENCE, params);
            } else {
                console.log('Updating relevant experience');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.UPDATE_RELEVANT_EXPERIENCE, params);
            }
        } catch (error) {
            console.log('Error updating relevant experience', error);
            throw ERROR_CONSTANTS.MENTORREXPx42();
        }
    }


    public async getJobInfo(userId: string): Promise<JobInfoModel> {
        try {
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_JOB_INFO, [userId]);
            if(response.length > 0) {
                return new JobInfoModel(response[0]);
            }

            return new JobInfoModel({});
        } catch (error) {
            console.log('Error getting jobInfo', error);
            throw ERROR_CONSTANTS.MENTORJOBx41();
        }
    }

    public async updateJobInfo(jobInfo: JobInfoModel): Promise<void> {
        const params = [jobInfo.userId, jobInfo.currentProfession, jobInfo.currentJobTitle, jobInfo.financialBusinessUnit, jobInfo.industry, jobInfo.currentReponsibilities, jobInfo.currentSkills, jobInfo.currentJobDuration, jobInfo.previousProfession, jobInfo.previousJobTitle, jobInfo.previousJobReposibilities, jobInfo.previousJobSkills, jobInfo.previousJobDuration];
        try {
            const response = await this.dbRepository.retrieveRecord(QUERY_CONSTANTS.GET_JOB_INFO, [jobInfo.userId]);
            if(response.length === 0) {
                console.log('Inserting job info');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.INSERT_JOB_INFO, params);
            } else {
                console.log('Updating job info');
                await this.dbRepository.persistRecord(QUERY_CONSTANTS.UPDATE_JOB_INFO, params);
            }
        } catch (error) {
            console.log('Error updating job info', error);
            throw ERROR_CONSTANTS.MENTORJOBx42();
        }
    }

    
    
}
