
export interface IValidation {
    /**
     * Provide an error message to show in case a string is too short.
    */
    minlength?: string;

    /**
     * Provide an error message show in case a string is too long.
    */
    maxlength?: string;

    /**
     * Provide an error message to show in case a number is too small.
    */
    minNumber?: string;

    /**
     * Provide an error message to show in case a number is too large.
    */
    maxNumber?: string;

    /**
     * Provide an error message to show in case a value is not a number.
    */
    isNan?: string;

    /**
     * Provide an error message to show in case there are less selected items than required.
    */
    minItems?: string;

    /**
     * Provide an error message to show in case there are more selected items than required.
    */
    maxItems?: string;

    /**
     * Provide an error message to show in case two fields are mismatched.
    */
    requireMatch?: string;

    /**
     * Provide an error message to show in case the total size of files is larger than required.
    */
    maxTotalSize?: string;

    /**
     * Provide an error message to show in case of an invalid email address.
    */
    email?: string;

    /**
     * Provide an error message to show in case of an invalid password format.
    */
    password?: string;

    /**
     * Provide an error message to show in case the pattern is incorrect.
    */
    pattern?: string;

    /**
     * Provide an error message to show in case of a missing required value.
    */
    required?: string;

    /**
     * Provide an error message to show in case a custom validation has been activated.
    */
    custom?: string;

    /**
     * Provide some default error message to show in case there is no specific validation scenario.
    */
    default?: string;
}