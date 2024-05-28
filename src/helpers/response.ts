import { RelevantExperienceModel } from "../models/relevant-experience-model";
import { BackgroundInfoModel } from "../models/background-info-model";
import { CurrentExperienceModel } from "../models/current-experience-model";
import { JobInfoModel } from "../models/job-info-model";

export class Response {

    public static errorResponse(error: any, awsRequestId: string) {
        return {
            statusCode: error.statusCode || 500,
            headers: this.getHeaders(),
            body: JSON.stringify({
                errors: [{
                    id:  awsRequestId,
                    status: error.statusCode || 500,
                    code:  error.code,
                    detail: error.detail
                  }]
            })
        }
    }

    private static getHeaders() {
        return {
            'Access-Control-Allow-Origin': '*'
        }
    }

    public static successResponse(data: any) {
        return {
            headers: this.getHeaders(),
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }
    public static frameBackgroundResponse(backgroundInfo?: BackgroundInfoModel) {
        return {
            "jsonapi": {
                "version": "1.0"
            },
            "data": {
                "id": backgroundInfo.id,
                "type": "background-info",
                "attributes": {
                    "gender": backgroundInfo.gender ?? '',
                    "lgbqt-identity": backgroundInfo.lgbqtIdentity ?? '',
                    "languages-known": backgroundInfo.languagesKnown ?? [],
                    "highest-level-education": backgroundInfo.highestLevelEducation ?? '',
                    "member-cpa-hrpa": backgroundInfo.memberCpaHrpa ?? '',
                    "former-mentee": backgroundInfo.formerMentee ?? '',
                    "reason-of-volunteering": backgroundInfo.reasonOfVolunteering ?? '',
                    "reason-of-volunteering-other": backgroundInfo.reasonOfVolunteeringOther ?? '',
                    "program-source": backgroundInfo.programSource ?? ''
                }
            }
        }
    }
    public static frameCurrentExperienceResponse(currentExperience: CurrentExperienceModel) {
        return {
            "jsonapi": {
                "version": "1.0"
            },
            "data": {
                "id": currentExperience.id,
                "type": "current-experience",
                "attributes": {
                    "company": currentExperience.company ?? '',
                    "position": currentExperience.position ?? '',
                    "employer-name": currentExperience.employerName ?? '',
                    "hopes-to-achieve": currentExperience.hopesToAchieve ?? '',
                    "support": currentExperience.support ?? '',
                    "reference-first-name-1": currentExperience.referenceFirstName1 ?? '',
                    "reference-last-name-1": currentExperience.referenceLastName1 ?? '',
                    "reference-email-1": currentExperience.referenceEmail1 ?? '',
                    "reference-phone-1": currentExperience.referencePhone1 ?? '',
                    "reference-first-name-2": currentExperience.referenceFirstName2 ?? '',
                    "reference-last-name-2": currentExperience.referenceLastName2 ?? '',
                    "reference-email-2": currentExperience.referenceEmail2 ?? '',
                    "reference-phone-2": currentExperience.referencePhone2 ?? ''
                }
            }
        }
    }

    public static frameRelevantExperienceResponse(relevantExperienceModel: RelevantExperienceModel) {
        return {
            "jsonapi": {
                "version": "1.0"
            },
            "data": {
                "id": relevantExperienceModel.id,
                "type": "relevant-experience",
                "attributes": {
                    "experience": relevantExperienceModel.experience ?? 0,
                    "coaching-experience": relevantExperienceModel.coachingExperience ?? 0,
                    "professional-network": relevantExperienceModel.professionalNetwork ? 
                            JSON.parse(relevantExperienceModel.professionalNetwork) : {},
                    "other-info": relevantExperienceModel.otherInfo ?? ''
                }
            }
        }
    }

    public static frameJobInfoResponse(jobInfo: JobInfoModel) {
        return {
            "jsonapi": {
                "version": "1.0"
            },
            "data": {
                "id": jobInfo.id,
                "type": "job-info",
                "attributes": {
                    "current-profession": jobInfo.currentProfession ?? '',
                    "current-job-title": jobInfo.currentJobTitle ?? '',
                    "financial-business-unit": jobInfo.financialBusinessUnit ?? '',
                    "industry": jobInfo.industry ?? '',
                    "current-reponsibilities": jobInfo.currentReponsibilities ?? '',
                    "current-skills": jobInfo.currentSkills ?? '',
                    "current-job-duration": jobInfo.currentJobDuration ?? 0,
                    "previous-profession": jobInfo.previousProfession ?? '',
                    "previous-job-title": jobInfo.previousJobTitle ?? '',
                    "previous-job-reposibilities": jobInfo.previousJobReposibilities ?? '',
                    "previous-job-skills": jobInfo.previousJobSkills ?? '',
                    "previous-job-duration": jobInfo.previousJobDuration ?? 0
                }
            }
        }
    }
}