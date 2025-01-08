export const IS_DEV_CV = import.meta.env.VITE_IS_DEV_CV === "true";
export const DEV_JOB_TITLE = "Junior Front End Developer";
export const CUSTOMER_SERVICE_JOB_TITLE = "Customer Service Assistant";
export const JOB_TITLE = IS_DEV_CV ? DEV_JOB_TITLE : CUSTOMER_SERVICE_JOB_TITLE;
