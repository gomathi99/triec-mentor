import { APIGatewayEvent, Context } from "aws-lambda";
import { Response } from "../helpers/response";
import { Validator } from "../helpers/validator";
import { MentorService } from "../services/mentor-service";
import { SSMService } from "../services/ssm-service";

export class MentorController {
    private ssmService: SSMService;
    private mentorService: MentorService;

    constructor(ssmService: SSMService,
        mentorService: MentorService
    ) {
        this.ssmService = ssmService;
        this.mentorService = mentorService;
     }


    public getBackgroundInfo = async (event: APIGatewayEvent, context: Context) => {

        try {
            
            await this.ssmService.fetchSSMParameters();
            const userId = Validator.validateRequest(event);
            const backgroundInfo = await this.mentorService.getBackgroundInfo(userId);
            return Response.successResponse(Response.frameBackgroundResponse(backgroundInfo));
        } catch (error) {
            console.log("Error while retrieving background info:", error);
            return Response.errorResponse(error, context.awsRequestId);
            
        }
   
    }


    public updateBackgroundInfo = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const backgroundInfo = Validator.validateBackgroundInfo(event);
            await this.mentorService.updateBackgroundInfo(backgroundInfo);
            return Response.successResponse(Response.frameBackgroundResponse(backgroundInfo));

        } catch (error) {
            console.log("Error while updating background info:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }

    public getCurrentExperience = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const userId = Validator.validateRequest(event);
            const demographics = await this.mentorService.getCurrentExperience(userId);
            return Response.successResponse(Response.frameCurrentExperienceResponse(demographics));
        } catch (error) {
            console.log("Error while retrieving current experience:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }

    public updateCurrentExperience = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const currentExperience = Validator.validateCurrentExperience(event);
            await this.mentorService.updateCurrentExperience(currentExperience);
            return Response.successResponse(Response.frameCurrentExperienceResponse(currentExperience));

        } catch (error) {
            console.log("Error while updating current experience:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }

    public getRelevantExperience = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const userId = Validator.validateRequest(event);
            const relevantExperience = await this.mentorService.getRelevantExperience(userId);
            return Response.successResponse(Response.frameRelevantExperienceResponse(relevantExperience));
        } catch (error) {
            console.log("Error while retrieving relevant experience:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }

    public updateRelevantExperience = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const relevantExperience = Validator.validateRelevantExperience(event);
            await this.mentorService.updateRelevantExperience(relevantExperience);
            return Response.successResponse(Response.frameRelevantExperienceResponse(relevantExperience));

        } catch (error) {
            console.log("Error while updating relevant experience:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }

    public getJobInfo = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const userId = Validator.validateRequest(event);
            const jobInfo = await this.mentorService.getJobInfo(userId);
            return Response.successResponse(Response.frameJobInfoResponse(jobInfo));
        } catch (error) {
            console.log("Error while retrieving job info:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }

    public updateJobInfo = async (event: APIGatewayEvent, context: Context) => {
        try {
            await this.ssmService.fetchSSMParameters();
            const jobInfo = Validator.validateJobInfo(event);
            await this.mentorService.updateJobInfo(jobInfo);
            return Response.successResponse(Response.frameJobInfoResponse(jobInfo));

        } catch (error) {
            console.log("Error while updating job info:", error);
            return Response.errorResponse(error, context.awsRequestId);
        }
    }
    


}
