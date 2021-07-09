export const JWT_CANNOT_BE_DECODED = "impossible to decode jwt";
export const JWT_MALFORMED_HEADERS = "malformed jwt headers";
export const JWT_NON_SUPPORTED_ALGORITHM = "invalid algorithm";
export const JWT_NON_IMPLEMENTED_ALGORITHM = "non implemented algorithm";
export const JWT_MISSING_VALIDATION_CREDENTIALS = "missing credential";

import * as enums from "./enums";

export const JWT_SUPPORTED_ALGS = Object.values(enums.JwtAlgorithmsEnum);
export const JWT_PUBLIC_KEY_USES = Object.values(enums.JwtPublicKeyUse);

export const REGEX_BEARER_HEADERS = /^Bearer$/i;

export const AUTHDOG_ID_ISSUER = "https://id.authdog.com";
export const CODE_NOT_RUNNING_IN_BROWSER =
    "code is not executed in the browser";
