/** api prefix for all endpoints */
export const API = 'api';

/** version prefix for all endpoints */
export const V1 = 'v1';
export const V2 = 'v2';

/** API base during authentication API */
export const KEYCLOAK_BASE = `${process.env.KEYCLOAK_API_URL}/realms/${process.env.KEYCLOAK_REALM}`;

/** General messages used throughout the app. */
export const enum MESSAGES {
  SUCCESS = 'Success',
  FAIL = 'Fail',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  UNAUTHORIZED = 'Unauthorized!',
  NOT_FOUND = 'Page not found!',
  INVALID_LICENSE = 'INVALID_LICENSE',
  DUPLICATED = 'Duplicated',
  DATASET_MULTIPLE_DATE_FORMATS = 'date format does not match date format of the first row',
  DUPLICATE_RECORDS = 'data has duplicate values',
  INSUFFICIENT_DATA = 'Dataset file does not have sufficient data for',
  MISSING_DATA = 'Dataset file is missing data for',
  FILE_EXIST = 'File already exist',
  FILE_HEADER_MISSING = 'File does not have a header',
  FILE_FORMAT_ERROR = 'Uploaded file does not satisfy minimum number columns (Product, Timeline, Response)',
  COLUMN_WITH_STRING = 'column has string values',
  COLUMN_WITH_EMPTY_CELLS = 'column has empty cells',
  BOOLEAN_DISTINCT_VIOLATION = 'data have more than 2 distinct values for',
  MISSING_VALUE = 'data is missing value(s) for',
  NOT_VALID = 'IDs are not vald',
  UNSUPPORTED_FILE_EXTENSION = 'Only CSV files are accepted',
  DATASET_SUCCESSFULLY_DELETED = 'Dataset has been successfully deleted',
  WRONG_UPLOADID = 'There is no data set associated with the given upload id',
  PROCESSING_FAILURE = 'Ooops..! Unable to process the request, Please try again later',
  INVALID_PAYLOAD = 'Invalid request',
  INVALID_DATASET_ID = 'Invalid Dataset ID',
  DATASET_DOES_NOT_BELONG_TO_GIVEN_ORG = "The given dataset doesn't belong to the given organization",
  DATASET_FREQUENCY_MISMATCH = 'The given dataset and the appending file are having different frequencies.',
  UPLOAD_ID_MISMATCH = 'Dataset not found for given upload ID',
  PRODUCT_CODE_DUPLICATED = 'Same product codes found',
  MULTIPLE_PRODUCT_CODE_FOUND = 'Multiple product codes found',
  INVALID_FREQUENCY = "The dataset doesn't contain the supported time series formats. App supports YYYY-MM format for monthly and YYYY-MM-DD format for daily datasets",
  ORG_NOT_WITHIN_BOUNDARY = 'Organization is not within the available organization boundary',
  ORG_CHECK_FAILED = 'Organization boundary check failed',
  INVALID_MODEL_NAME = 'Invalid model name',
  END_DATE_IS_NOT_A_PASSED_DATE = "end date isn't a passed date",
  BOOLEAN_MUST_HAVE_ZERO_OR_ONE = 'data should have either 0 or 1 for ',
  PRODUCT_DOES_NOT_EXIST_AT_THE_FORECAST = "Product name update has been failed at the forecast since the given product isn't available under the specified organization",
  PRODUCT_SUCCESSFULLY_UPDATED = 'Product details successfully updated',
  PRODUCT_UPDATE_FAILED = 'Product details update failed',
  NO_MODELS_TO_BUILD = 'No models were selected to be built',
  EMPTY_LINE_APPEARED_IN_DATASET = 'Dataset file contains empty lines at ',
  PERCENTAGE_REQUIRED = 'Percentage value is required if predictor type is percentage',
  INVALID_PREDICTOR_TYPE = 'Invalid Predictor type',
  DATASET_NOT_FOUND = 'Dataset was not found',
  MODEL_NOT_FOUND = 'Model was not found',
  LICENSE_VALIDATION_FOR_DATASET_UPLOAD = "Your organization doesn't have sufficient product quota to on-board the products in the given dataset file",
  DATE_FORMAT_MISMATCH = 'Date given does not match the frequency',
  LAPSE_BEYOND_ALLOWED = 'Maximum lapse exceeded',
  UNKNOWN_FREQUENCY_TYPE = 'Unknown frequency type',
  SAVING_FORECAST_ERROR = 'Error occurred while saving the forecast',
  GENERATING_FORECAST_ERROR = 'Error occurred while generating the forecast',
  FORECAST_NAME_ALREDY_EXIST_FOR_THE_GIVEN_DATASET = 'Forecast name already exist for the given dataset. Please provide another name',
  UNABLE_FIND_FORECAST_BY_MODELID = 'Failed to fetch the forecast belongs to the given model',
  EMPTY_PREDICTOR_LIST_RECEIVED = 'Scenario generation request is an empty array',
  BASELINE_PREDICTOR_HAS_BEEN_SET = 'New baseline forecast has been set for the selected models',
  LICENSE_CHECK_FAILED = 'License validation failed',
  PRODUCT_CODE_ASSOCIATION_FOUND = 'product code is already associated with product name',
  PRODUCT_NAME_ASSOCIATION_FOUND = 'product name is already associated with product code',
  FORECAST_DOES_NOT_EXIST = 'Selected forecast does not exist',
  QUOTA_EXCEEDED = 'Remaining number of models can be created with given license is',
  FAILED_TO_CREATE_NOTIFICATION = 'Failed to create notification',
  MODEL_STATUS_UPDATED = 'Model status was already updated for request_id:',
  NO_FORECASTS_BUIT_YET = 'No forecasts generated yet',
  SESSION_EXPIRED = 'Session Expired',
  TOKEN_VERIFICATION_FAILED = 'Token verification failed',
  JOB_NOT_FOUND = 'Sync job not found',
  SYNC_PARTNER_FAILED = 'Sync job failed due an issue with partner',
  SYNC_UPDATE_FAILED = 'Updating sync job failed',
  NO_INVENTORY_LICENCE = 'Organization do not have license to inventory module',
  INVALID_DATASET_NAME = 'Invalid Dataset Name',
  INVALID_DATASET_APPEND_STARTING_POINTS = "Last Data Point(s) doesn't match with starting point in appending data in models, ",
}

export const enum EPS_COMPONENTS {
  DATA_MANAGER = '[DATA MANAGER]',
  KEYCLOAK = 'Keycloak',
  ADMIN = '[ADMIN]',
  FORECAST = '[FORECAST]',
  USF = '[USF]',
}

/** Network status codes used throughout the app. */
export const enum ERROR_STATUS_CODES {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  INVALID_LICENSE = 'Invalid License',
}

/** Enum that is used to indicate the status(Active/Inactive) for organization,products,etc. */

export enum STATUS {
  NEW = 'NEW',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
  BUILT = 'BUILT',
  BUILDING = 'BUILDING',
  SUCCESS = 0,
  FAIL = -1,
  CONFIRMED = 'CONFIRMED',
  NOTEXIST = 1,
  FAILED = 'FAILED',
}

export enum DM_RESPONSE_STATUS {
  SUCCESS = 0,
  FAILURE = -1,
  DATA_SET_ERROR = -2,
}

export enum DATE_TYPE {
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  INVALID_FORMAT = 'INVALID_FORMAT',
  EMPTY_DATA = 'EMPTY_DATA',
}

export enum INDEXES {
  START_INDEX = 0,
  /** Enum that is used to indicate the status(Active/Inactive) for organization,products,etc. */
}

export enum COLUMNTYPE {
  PRODUCT_NAME = 'ProductName',
  PRODUCT_CODE = 'ProductCode',
  FREQUENCY = 'Frequency',
  RESPONSE = 'Response',
  SPLIT = 'Split',
  TAG = 'Tag',
  BOOLEAN = 'Boolean',
  PREDICTOR = 'Predictor',
}

/** Network status codes used throughout the app. */
export const enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum MODEL_TYPES {
  UNIVARIATE = 'UNIVARIATE',
  MULTI_VARIATE = 'MULTI-VARIATE',
}

export const VALUE_LENGTH = 2;

export const MIN_DATE_VALUE = '0001-01-02';

export const MAX_DATE_VALUE = '9999-12-30';

export const FILE_UPLOAD_KEY = 'file';

export const NUM_OF_CHAR_TO_STRIP_FOR_DISPLAY_NAME = 43;

export enum DM_PATHS {
  COMPARE_ACTUALS = 'api/v1/model_data/',
  MANUAL_INPUT = 'api/v1/predictors/manual_input_points',
  HISTORIC_BATCH = 'api/v1/model_data/batch_data',
  INTEGRATION_UPLOAD_PATH = 'api/v1/fs-data-set/integration-upload',
  CONTEXT_PATH = 'api/v1/data_set/',
  DATA_SET_NAMESPACE = 'api/v1/fs-data-set/',
  META_DATA_NAMESPACE = 'api/v1/fs-meta-data/',
  BATCH_DATA_END_POINT = '/model-batch-data',
  N_STEPS_END_POINT = '/n-steps',
}

export enum USF_PATHS {
  POST_FORECAST = 'api/forecasts',
  GET_PRED_TREND = 'api/models',
  POST_MODEL = 'api/models',
  COMPARE_FORECAST = 'api/forecasts/validation',
  WHAT_IF_FORECAST = '/api/forecasts/what-if',
}

export const NUMBER_OF_PRODUCT_CODES = 1;

/** Enum that is used to indicate the direction of the predictor */
export enum DIRECTION {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  UNDEFINED = 'UNDEFINED',
}

export enum USF_CONFIG_TYPE {
  HISTORICAL = 'HISTORICAL_VALUES',
  TREND = 'FORECAST_TREND',
  LAST_VALUE = 'CONTINUE_LAST_VALUE',
  PERCENTAGE = 'PERCENTAGE_CHANGE',
  MANUAL_INPUTS = 'MANUAL_INPUTS',
}

/** Enum that is used to indicate the direction of the predictor */
export enum CONFIG_TYPE {
  TREND = 'TREND',
  HISTORICAL = 'HISTORICAL',
  LAST_VALUE = 'LAST VALUE',
  PERCENTAGE = 'PERCENTAGE',
  MANUAL = 'MANUAL',
  FORECASTED = 'FORECASTED',
  NA = 'NA', // no predictor behavior set during what-if analysis
}
export const FORECASTING_ALGO_NAME = 'forecasting';
export const FORECASTING_CONTEXT_NAME = 'EPS';
export const YYYY_MM_DD = 'YYYY-MM-DD';
export const NUMERIC_ONLY_REGEX = /^[+-]?\d+(\.\d+)?$/;
export const DAILY_DATE_FORMAT = 'YYYY-M-D';
export const MONTHLY_DATE_FORMAT = 'YYYY-M';
export const DISPLAY_DAILY_DATE_FORMAT = 'DD MMMM YYYY';
export const DISPLAY_MONTHLY_DATE_FORMAT = 'MMMM YYYY';

export enum REQUEST_TYPE {
  BUILD = 'BUILD',
  FORECAST = 'FORECAST',
  BASELINE = 'BASELINE',
  APPEND = 'APPEND',
  SETBASELINE = 'SETBASELINE',
  DM_UPLOAD = 'DM_UPLOAD',
  DATASET_INTEGRATION = 'DATASET_INTEGRATION',
}

export enum INTEGRATION_EVENT_TYPE {
  MODEL_DATA = 'MODEL_DATA',
  ADVANCE_OPTIONS = 'ADVANCE_OPTIONS',
  PREDICTOR_CONFIGS = 'PREDICTOR_CONFIGS',
}

export enum INTEGRATION_STATUS {
  DATA_RECEIVED = 'DATA_RECEIVED',
  DATA_VALIDATED = 'DATA_VALIDATED',
  SENT_TO_DATA_MANAGER = 'SENT_TO_DATA_MANAGER',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export enum DATASET_OPERATION_TYPE {
  UPLOAD = 'UPLOAD',
  APPEND = 'APPEND',
}

export const DATA_SET = 'DATA_SET';
export const PRODUCT = 'PRODUCT';
export const MODEL = 'MODEL';

export enum VALUE_TYPE {
  ACTUAL = 'ACTUAL',
  FORECAST = 'FORECAST',
}

export enum AGGREGATION_TYPE {
  NA = 'NA',
  ALL = 'ALL',
  PROD = 'PRODUCT',
  TAG = 'TAG',
}

export enum SNAPSHOT_MODEL_TYPE {
  AGGREGATE = 'AGGREGATE',
  FORECAST = 'FORECAST',
  PREDICTOR = 'PREDICTOR',
}

export enum MODEL_STATUS {
  REJECTED = 'REJECTED',
  INPROGRESS = 'INPROGRESS',
  BUILT = 'BUILT',
  FAILED = 'FAILED',
}

export enum MODEL_AS_OF_MESSAGE {
  REJECTED = 'REJECTED',
  INPROGRESS = 'INPROGRESS',
  BUILT = 'BUILT',
  FAILED = 'FAILED',
  NO_MODELS = 'No models trained yet',
  INSUFFICIENT_DATA = 'Insufficient data',
}

export enum DATASET_STATUS {
  NOT_READY = 'NOT READY',
  READY = 'READY',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export enum CONFIG_LEVEL {
  // eslint-disable-next-line no-shadow
  MODEL = 'MODEL',
  // eslint-disable-next-line no-shadow
  PRODUCT = 'PRODUCT',
  DATASET = 'DATASET',
}

export enum ENTITY_TYPE {
  // eslint-disable-next-line no-shadow
  MODEL = 'MODEL',
  // eslint-disable-next-line no-shadow
  PRODUCT = 'PRODUCT',
  // eslint-disable-next-line no-shadow
  DATA_SET = 'DATA_SET',
}

export enum PREDICTOR_PARENT_ENTITY_TYPE {
  // eslint-disable-next-line no-shadow
  MODEL = 'MODEL',
  // eslint-disable-next-line no-shadow
  PRODUCT = 'PRODUCT',
  // eslint-disable-next-line no-shadow
  DATA_SET = 'DATA_SET',
  // eslint-disable-next-line no-shadow
  FORECAST = 'FORECAST',
}

export enum FORECAST_STATUS {
  REJECTED = 'REJECTED',
  INPROGRESS = 'INPROGRESS',
  GENERATED = 'GENERATED',
  FAILED = 'FAILED',
}

/** Enum that is used to indicate locking/ unlocking */
export enum LOCKING_ACTION {
  LOCK = 'LOCK',
  UNLOCK = 'UNLOCK',
}

export enum SYNC_EVENT_TYPE {
  FORECAST_CREATED = 'FORECAST_CREATED',
}

export enum SYNC_STATUS {
  NOT_SYNCED = 'NOT_SYNCED',
  SYNCED = 'SYNCED',
}

export enum SYNC_TRANSMISSTION {
  OUTBOUND = 'OUTBOUND',
  INBOUND = 'INBOUND',
}

export enum SYNC_PARTNERS {
  INVENTORY = 'INVENTORY',
  FORECAST = 'FORECAST',
}

export enum ADMIN_SUBSCRIPTION_MODULES {
  INVENTORY = 'Inventory',
  FORECAST = 'Forecast',
}

export const INTEGRATION_USER = 'System Integrator';

export enum INTEGRATION_FILE_TYPE {
  DataSet = 'DataSet',
}
