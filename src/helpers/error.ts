export class ApplicationError extends Error {
    code: string;
    statusCode: number;
    detail: string;

    constructor(message: string, code: string, statusCode: number) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.detail = message;

    }

}

export const ERROR_CONSTANTS = {

    MENTORx41: () => { return new ApplicationError('Invalid mentor Id', 'MENTORPx41', 400) },
    MENTORx42: () => { return new ApplicationError('Invalid user type', 'MENTORPx42', 400) },

    MENTORBGx41: () => { return new ApplicationError('Error while fetching mentor background details', 'MENTORBGx41', 400) },
    MENTORBGx42: () => { return new ApplicationError('Error while updating mentor background details', 'MENTORBGx42', 400) },
    MENTORBGx43: () => { return new ApplicationError('Invalid Background Id', 'MENTORBGx43', 400) },
    MENTORBGx45: () => { return new ApplicationError('Invalid request body', 'MENTORBGx45', 400) },

    MENTORCEXPx41: () => { return new ApplicationError('Error while fetching mentor current experience details', 'MENTORCEXPx41', 400) },
    MENTORCEXPx42: () => { return new ApplicationError('Error while updating mentor current experience details', 'MENTORCEXPx42', 400) },
    MENTORCEXPx43: () => { return new ApplicationError('Invalid Current Experience Id', 'MENTORCEXPx43', 400) },
    MENTORCEXPx45: () => { return new ApplicationError('Invalid request body', 'MENTORCEXPx45', 400) },


    MENTORREXPx41: () => { return new ApplicationError('Error while fetching mentor relevant experience details', 'MENTORREXPx41', 400) },
    MENTORREXPx42: () => { return new ApplicationError('Error while updating mentor relevant experience details', 'MENTORREXPx42', 400) },
    MENTORREXPx43: () => { return new ApplicationError('Invalid Relevant Experience Id', 'MENTORREXPx43', 400) },
    MENTORREXPx45: () => { return new ApplicationError('Invalid request body', 'MENTORREXPx45', 400) },

    
    MENTORJOBx41: () => { return new ApplicationError('Error while fetching mentor job details', 'MENTORJOBx41', 400) },
    MENTORJOBx42: () => { return new ApplicationError('Error while updating mentor job details', 'MENTORJOBx42', 400) },
    MENTORJOBx43: () => { return new ApplicationError('Invalid Job Id', 'MENTORJOBx43', 400) },
    MENTORJOBx45: () => { return new ApplicationError('Invalid request body', 'MENTORJOBx45', 400) }

}