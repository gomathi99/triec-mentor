import { BackgroundInfoModel } from '../models/background-info-model';
import { ERROR_CONSTANTS } from '../helpers/error';
import { APIGatewayEvent } from 'aws-lambda';
import { CurrentExperienceModel } from '../models/current-experience-model';
import { RelevantExperienceModel } from '../models/relevant-experience-model';
import { JobInfoModel } from '../models/job-info-model';

export class Validator {
    
    public static validateBackgroundInfo(event: APIGatewayEvent): BackgroundInfoModel {
        if(!event.body) {
            throw ERROR_CONSTANTS.MENTORBGx45();
        }
        const requestBody = JSON.parse(event.body);

         const id = requestBody?.data?.id;
         const userId = event?.pathParameters?.mentorId;
        if(!userId || userId !== event.requestContext.authorizer.userId) {
            throw ERROR_CONSTANTS.MENTORBGx41();
        }
         return {
            id: id,
            userId: userId,
            gender: requestBody?.data?.attributes?.gender,
            lgbqtIdentity: requestBody?.data?.attributes?.['lgbqt-identity'],
            languagesKnown: requestBody?.data?.attributes?.['languages-known'],
            highestLevelEducation: requestBody?.data?.attributes?.['highest-level-education'],
            memberCpaHrpa: requestBody?.data?.attributes?.['member-cpa-hrpa'],
            formerMentee: requestBody?.data?.attributes?.['former-mentee'],
            reasonOfVolunteering: requestBody?.data?.attributes?.['reason-of-volunteering'],
            reasonOfVolunteeringOther: requestBody?.data?.attributes?.['reason-of-volunteering-other'],
            programSource: requestBody?.data?.attributes?.['program-source']
            } as BackgroundInfoModel;
    }

    public static validateRequest(event: APIGatewayEvent): string{
        const mentorId = event?.pathParameters?.mentorId;
        if(!mentorId || mentorId !== event.requestContext.authorizer.userId) {
            throw ERROR_CONSTANTS.MENTORx41();
        } else if(!event.requestContext.authorizer.userType || event.requestContext.authorizer.userType !== 'mentor') {
            throw ERROR_CONSTANTS.MENTORx42();
        }
        return mentorId;
    }

    public static validateCurrentExperience(event: APIGatewayEvent): any {
        if(!event.body) {
            throw ERROR_CONSTANTS.MENTORCEXPx45();
        }
        const requestBody = JSON.parse(event.body);
        const id = requestBody?.data?.id;
        const userId = event?.pathParameters?.mentorId;
        if(!userId || userId !== event.requestContext.authorizer.userId) {
            throw ERROR_CONSTANTS.MENTORx41;
        }
        return {
            id: id,
            userId: userId,
            company: requestBody?.data?.attributes?.company ?? '',
            position: requestBody?.data?.attributes?.position ?? '',
            employerName: requestBody?.data?.attributes?.['employer-name'] ?? '',
            hopesToAchieve: requestBody?.data?.attributes?.['hopes-to-achieve'] ?? '',
            support: requestBody?.data?.attributes?.support ?? '',
            referenceFirstName1: requestBody?.data?.attributes?.['reference-first-name-1'] ?? '',
            referenceLastName1: requestBody?.data?.attributes?.['reference-last-name-1'] ?? '',
            referenceEmail1: requestBody?.data?.attributes?.['reference-email-1'] ?? '',
            referencePhone1: requestBody?.data?.attributes?.['reference-phone-1'] ?? '',
            referenceFirstName2: requestBody?.data?.attributes?.['reference-first-name-2'] ?? '',
            referenceLastName2: requestBody?.data?.attributes?.['reference-last-name-2'] ?? '',
            referenceEmail2: requestBody?.data?.attributes?.['reference-email-2'] ?? '',
            referencePhone2: requestBody?.data?.attributes?.['reference-phone-2'] ?? ''
        } as CurrentExperienceModel;


    }

    public static validateRelevantExperience(event: APIGatewayEvent): RelevantExperienceModel {
        if(!event.body) {
            throw ERROR_CONSTANTS.MENTORREXPx45();
        }
        const requestBody = JSON.parse(event.body);
        const id = requestBody?.data?.id;
        const userId = event?.pathParameters?.mentorId;
        if(!userId || userId !== event.requestContext.authorizer.userId) {
            throw ERROR_CONSTANTS.MENTORx41();
        }
        return {
            id: id,
            userId: userId,
            experience: requestBody?.data?.attributes?.experience ?? 0,
            coachingExperience: requestBody?.data?.attributes?.['coaching-experience'] ?? '',
            professionalNetwork: requestBody?.data?.attributes?.['professional-network'] ? 
                JSON.stringify(requestBody?.data?.attributes?.['professional-network']) : JSON.stringify({}),
            otherInfo: requestBody?.data?.attributes?.['other-info'] ?? ''
        } as RelevantExperienceModel;

    }

    public static validateJobInfo(event: APIGatewayEvent): JobInfoModel {
        if(!event.body) {
            throw ERROR_CONSTANTS.MENTORJOBx45();
        }
        const requestBody = JSON.parse(event.body);
        const id = requestBody?.data?.id;
        const userId = event?.pathParameters?.mentorId;
        if(!userId || userId !== event.requestContext.authorizer.userId) {
            throw ERROR_CONSTANTS.MENTORx41();
        }
        return {
            id: id,
            userId: userId,
            currentProfession: requestBody?.data?.attributes?.['current-profession'] ?? '',
            currentJobTitle: requestBody?.data?.attributes?.['current-job-title'] ?? '',
            financialBusinessUnit: requestBody?.data?.attributes?.['financial-business-unit'] ?? '',
            industry: requestBody?.data?.attributes?.industry ?? '',
            currentReponsibilities: requestBody?.data?.attributes?.['current-reponsibilities'] ?? '',
            currentSkills: requestBody?.data?.attributes?.['current-skills'] ?? '',
            currentJobDuration: requestBody?.data?.attributes?.['current-job-duration'] ?? 0,
            previousProfession: requestBody?.data?.attributes?.['previous-profession'] ?? '',
            previousJobTitle: requestBody?.data?.attributes?.['previous-job-title'] ?? '',
            previousJobReposibilities: requestBody?.data?.attributes?.['previous-job-reposibilities'] ?? '',
            previousJobSkills: requestBody?.data?.attributes?.['previous-job-skills'] ?? '',
            previousJobDuration: requestBody?.data?.attributes?.['previous-job-duration'] ?? 0
        } as JobInfoModel;
            
    }
    
}