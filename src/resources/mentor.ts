import { Handler } from "aws-lambda";
import { DBRepository } from "../repository/db-repository";
import { MentorService } from "../services/mentor-service";
import { SSMService } from "../services/ssm-service";
import { MentorController } from "./mentor-controller";

const dbRepository: DBRepository = new DBRepository();
const mentorService: MentorService = new MentorService(dbRepository);
const ssmService: SSMService = new SSMService();

export const getBackgroundInfo:Handler = new MentorController(ssmService, mentorService).getBackgroundInfo;
export const updateBackgroundInfo:Handler = new MentorController(ssmService, mentorService).updateBackgroundInfo;


export const getCurrentExperience:Handler = new MentorController(ssmService, mentorService).getCurrentExperience;
export const updateCurrentExperience:Handler = new MentorController(ssmService, mentorService).updateCurrentExperience;


export const getRelevantExperience:Handler = new MentorController(ssmService, mentorService).getRelevantExperience;
export const updateRelevantExperience:Handler = new MentorController(ssmService, mentorService).updateRelevantExperience;

export const getJobInfo:Handler = new MentorController(ssmService, mentorService).getJobInfo;
export const updateJobInfo:Handler = new MentorController(ssmService, mentorService).updateJobInfo;


