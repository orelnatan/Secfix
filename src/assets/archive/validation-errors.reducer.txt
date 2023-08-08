import { ValidationErrors } from '@angular/forms';

export enum ValidationTypes {
    MIN_LENGTH = "MIN_LENGTH",
    MAX_LENGTH = "MAX_LENGTH",
    MIN_NUMBER = "MIN_NUMBER",
    MAX_NUMBER = "MAX_NUMBER",
    IS_NAN = "IS_NAN",
    MIN_ITEMS = "MIN_ITEMS",
    MAX_ITEMS = "MAX_ITEMS",
    REQUIRE_MATCH = "REQUIRE_MATCH",
    MAX_TOTAL_SIZE = "MAX_TOTAL_SIZE",
    CUSTOM = "CUSTOM"
}

export function ValidationErrorsReducer(type: ValidationTypes, expected: any, received: any): ValidationErrors {
    switch(type) {
        case ValidationTypes.MIN_LENGTH: {
            return {
                minLength: {
                    requiredLength: expected,
                    actualLength: received
                }
            }
        };
        case ValidationTypes.MAX_LENGTH: {
            return {
                maxLength: {
                    requiredLength: expected,
                    actualLength: received
                }
            }
        };
        case ValidationTypes.MIN_NUMBER: {
            return {
                minNumber: {
                    requiredNumber: expected,
                    actualNumber: received
                }
            }
        };
        case ValidationTypes.IS_NAN: {
            return {
                isNan: {
                    requiredType: expected,
                    actualType: received
                }
            }
        };
        case ValidationTypes.MAX_NUMBER: {
            return {
                maxNumber: {
                    requiredNumber: expected,
                    actualNumber: received
                }
            }
        };
        case ValidationTypes.MIN_ITEMS: {
            return {
                minItems: {
                    requiredItems: expected,
                    actualItems: received
                }
            }
        };
        case ValidationTypes.MAX_ITEMS: {
            return {
                maxItems: {
                    requiredItems: expected,
                    actualItems: received
                }
            }
        };
        case ValidationTypes.REQUIRE_MATCH: {
            return {
                requireMatch: {
                    requiredValue: expected,
                    actualValue: received
                }
            }
        };
        case ValidationTypes.MAX_TOTAL_SIZE: {
            return {
                maxTotalSize: {
                    requiredSize: expected,
                    actualSize: received
                }
            }
        };
        case ValidationTypes.CUSTOM: {
            return {
                custom: {
                    actualValue: received
                }
            }
        };
    }
}