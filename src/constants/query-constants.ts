export const QUERY_CONSTANTS = {

    GET_BACKGROUND_INFO: 'SELECT * FROM MENTOR_BACKGROUND_INFO WHERE user_id = $1',
    UPDATE_BACKGROUND_INFO: 'UPDATE MENTOR_BACKGROUND_INFO WHERE gender = $2, lgbqt_identity = $3, languages_known = $4, highest_level_education = $5, member_cpa_hrpa = $6, former_mentee = $7, reason_of_volunteering = $8, reason_of_volunteering_other = $9, program_source = $10, updated_at = NOW() WHERE user_id = $1',
    INSERT_BACKGROUND_INFO: 'INSERT INTO MENTOR_BACKGROUND_INFO (user_id, gender, lgbqt_identity, languages_known, highest_level_education, member_cpa_hrpa, former_mentee, reason_of_volunteering, reason_of_volunteering_other, program_source, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())',
 
    GET_CURRENT_EXPERIENCE: 'SELECT * FROM MENTOR_CURRENT_EXPERIENCE WHERE user_id = $1',
    UPDATE_CURRENT_EXPERIENCE: 'UPDATE MENTOR_CURRENT_EXPERIENCE SET current_company = $2, current_position_level = $3, employer_name = $4, hopes_to_achieve = $5, how_would_you_support = $6, reference_first_name_1 = $7, reference_last_name_1 = $8, reference_email_1 = $9, reference_phone_1 = $10, reference_first_name_2 = $11, reference_last_name_2 = $12, reference_email_2 = $13, reference_phone_2 = $14, updated_at = NOW() WHERE user_id = $1',
    INSERT_CURRENT_EXPERIENCE: 'INSERT INTO MENTOR_CURRENT_EXPERIENCE (user_id, current_company, current_position_level, employer_name, hopes_to_achieve, how_would_you_support, reference_first_name_1, reference_last_name_1, reference_email_1, reference_phone_1, reference_first_name_2, reference_last_name_2, reference_email_2, reference_phone_2, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW(), NOW())',

    GET_RELEVANT_EXPERIENCE: 'SELECT * FROM MENTOR_RELEVANT_EXPERIENCE WHERE user_id = $1',
    UPDATE_RELEVANT_EXPERIENCE: 'UPDATE MENTOR_RELEVANT_EXPERIENCE SET years_of_experience = $2, coaching_experience_desc = $3, professional_network_list = $4, other_info = $5, updated_at = NOW() WHERE user_id = $1',
    INSERT_RELEVANT_EXPERIENCE: 'INSERT INTO MENTOR_RELEVANT_EXPERIENCE (user_id, years_of_experience, coaching_experience_desc, professional_network_list, other_info, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, NOW(), NOW())',

    GET_JOB_INFO: 'SELECT * FROM MENTOR_JOB_DETAILS WHERE user_id = $1',
    UPDATE_JOB_INFO: 'UPDATE MENTOR_JOB_DETAILS SET current_profession = $2, current_job_title = $3, financial_business_unit = $4, industry = $5, current_reponsibilities = $6, current_skills = $7, current_job_duration = $8, previous_profession = $9, previous_job_title = $10, previous_job_reposibilities = $11, previous_job_skills = $12, previous_job_duration = $13, updated_at = NOW() WHERE user_id = $1',
    INSERT_JOB_INFO: 'INSERT INTO MENTOR_JOB_DETAILS (user_id, current_profession, current_job_title, financial_business_unit, industry, current_reponsibilities, current_skills, current_job_duration, previous_profession, previous_job_title, previous_job_reposibilities, previous_job_skills, previous_job_duration, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), NOW())',

    };
